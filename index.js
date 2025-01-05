const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('name');
  const outputValue = `Hello ${name}`;
  core.setOutput('greeting', outputValue);
} catch (error) {
  core.setFailed(error.message);
}