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

const gulp = require('gulp');
const fs = require('fs');
const yaml = require('js-yaml');
const writeFile = require('write');
const { GitHubImporter } = require('@lib/pipeline/gitHubImporter');

const WG_DIRECTORY_PATH = 'pages/content/amp-dev/community/working-groups';



async function importWorkingGroups() {
  console.log('Importing... ');

  const data = await loadData();
  const workingGroups = await getWorkingGroups(data);

  writeYamlFiles(workingGroups);
}

async function loadData() {
  const client = new GitHubImporter();
  const wgRepos = await client._github.org('ampproject').reposAsync();

  return wgRepos;
}

async function getWorkingGroups(data) {
  let wgRepos = data[0].filter(item => item.name.includes('wg-'));
  let workingGroups = [];

  wgRepos.forEach(async (wg) => {
    const issues = await getIssuesForGroup(wg);

    workingGroups.push(
      {
          'name': wg.name,
          'description': wg.description,
          'issues': issues,
      }
    )
  });

  return workingGroups;
}


async function getIssuesForGroup(group) {
  const client = new GitHubImporter();
  const test = await client._github.org('ampproject').reposAsync();


  const issues = [{'issue': 'name 1'}, {'issue': 'name 2'}];
  return issues;
}

function writeYamlFiles(workingGroups) {
  console.log('Writing files..');

  workingGroups.forEach((group) => {
    const fileName = `${group.name}.yaml`
    const dir = `${WG_DIRECTORY_PATH}/${fileName}`;

    fs.writeFile(dir, yaml.safeDump(group), () => {
      console.log('- ', fileName);
    });
  });
}












exports.importWorkingGroups = importWorkingGroups
