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
    const issues = await getIssuesForGroup(wg);
    const members = await getMembersForGroup(wg);

    workingGroups.push(
        {
          'url': wg.html_url,
          'name': wg.name,
          'description': wg.description,
          'issues': issues,
          'members': members,
        }
    );
  }

  return workingGroups;
}

async function getIssuesForGroup(wg) {
  const issues = [];
  const client = new GitHubImporter();
  const issuesData = await client._github.repo(`ampproject/${wg.name}`).issuesAsync();

  for (const issue of issuesData[0]) {
    issues.push(
        {
          'title': issue.title,
          'created_at': issue.created_at,
          'facilitator': issue.user.login,
          'labels': issue.labels,
        }
    );
  }

  return issues;
}

async function getMembersForGroup(wg) {
  const members = [];

  const client = new GitHubImporter();
  const data = await client._github.repo(`ampproject/${wg.name}`).contributorsAsync();

  for (const member of data[0]) {
    members.push(
        {
          'login': member.login,
          'url': member.html_url,
        }
    );
  }

  return members;
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
