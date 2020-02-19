/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
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
 * limitations under the License.
 */

require('module-alias/register');
const {sh} = require('@lib/utils/sh.js');

module.exports.version = git('log -1 --pretty=format:%h');
module.exports.message = git('log -1 --pretty=%B --no-merges');
module.exports.user = git('config user.name');
module.exports.committerDate = path => {
  return git(`log --format=%ai ${path} | tail -1`)
};

async function git(args) {
  let result;
  try {
    result = await sh(`git ${args}`, {
      quiet: true
    }).trim();
  } catch (e) {
    console.log(e);
  }
  return result;
}
