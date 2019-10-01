/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.ä
 */

'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const {GitHubImporter} = require('@lib/pipeline/gitHubImporter');

const WG_DIRECTORY_PATH = 'pages/content/amp-dev/community/working-groups';


async function importWorkingGroups() {
  console.log('Importing... ');

  const data = await loadData();
  const workingGroups = await getWorkingGroups(data);

  writeYamlFiles(workingGroups);
}

async function loadData() {
  const client = new GitHubImporter();
  const repos = await client._github.org('ampproject').reposAsync();

  return repos;
}

async function getWorkingGroups(data) {
  const repos = data[0].filter((item) => item.name.includes('wg-'));
  const workingGroups = [];

  for (const wg of repos) {
    const meta = await getGroupMetadata(wg);
    const issues = await getGroupIssues(wg);
    const members = await getGroupMembers(wg);

    workingGroups.push(
        {
          '$title': `Working Group: ${meta.title}`,
          'html_url': wg.html_url,
          'name': wg.name,
          'full_name': meta.title,
          'facilitator': meta.facilitator,
          'description': meta.description,
          'issues': issues,
          'members': meta.members,
          'communication': meta.communication,
        }
    );
  }

  return workingGroups;
}

async function getGroupMetadata(wg) {
  const client = new GitHubImporter();
  const rawData = await client._github.repo(`robinvanopstal/${wg.name}`).contentsAsync('METADATA.yaml');
  const data = yaml.safeLoad(Buffer.from(rawData[0].content, 'base64').toString());

  return data;
}

async function getGroupMembers(wg) {
  const members = [];

  const client = new GitHubImporter();
  const data = await client._github.repo(`ampproject/${wg.name}`).contributorsAsync();

  for (const member of data[0]) {
    members.push(
        {
          'login': member.login,
          'html_url': member.html_url,
          'img_url': `https://github.com/${member.login}.png?size=60`,
        }
    );
  }

  return members;
}

async function getGroupIssues(wg) {
  const issues = [];
  const client = new GitHubImporter();
  const issuesData = await client._github.repo(`ampproject/${wg.name}`).issuesAsync();

  for (const issue of issuesData[0]) {
    const date = new Date(issue.created_at).toDateString();
    const labels = getIssueLabels(issue.labels);

    issues.push(
        {
          'title': issue.title,
          'html_url': issue.html_url,
          'created_at': date,
          'facilitator': issue.user.login,
          'number': issue.number,
          'labels': labels,
        }
    );
  }

  return issues;
}

function getIssueLabels(labels) {
  const issueLabels = [];

  for (const label of labels) {
    const hexVal = parseInt(`0x${label.color}`);
    const txtColor = ((hexVal < 7500000) ? 'fff' : '000');

    issueLabels.push(
        {
          'name': label.name,
          'background_color': label.color,
          'txt_color': txtColor,
        }
    );
  }
  return issueLabels;
}

function writeYamlFiles(workingGroups) {
  console.log('Writing files..');

  workingGroups.forEach((group) => {
    const fileName = `${group.name}.yaml`;
    const dir = `${WG_DIRECTORY_PATH}/${fileName}`;

    fs.writeFile(dir, yaml.safeDump(group), () => {
      console.log('- ', fileName);
    });
  });
}


exports.importWorkingGroups = importWorkingGroups;
