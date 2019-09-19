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
const yaml = require('js-yaml');
const writeFile = require('write');
const { GitHubImporter } = require('@lib/pipeline/gitHubImporter');


async function importWorkingGroups() {
  const data = await loadData();
  let workingGroups = [];

  data[0].forEach((group) => {
    if (group.name.includes("wg-")) {
      console.log(group.name);
      workingGroups.push(group);
    }
  });

  console.log(workingGroups.length);

}


async function loadData() {
  const client = new GitHubImporter();
  const wgGroups = await client._github.org('ampproject').reposAsync();

  return wgGroups;
}

exports.importWorkingGroups = importWorkingGroups
