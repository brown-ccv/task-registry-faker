const core = require('@actions/core');
const { context, GitHub } = require('@actions/github');
const { getIssueBody, getChangeTypes } = require("./comments");

async function run() {
  try {
    const repo = context.repo;
    const number = context.issue.number;
    const githubToken = core.getInput("GITHUB_TOKEN", {required: true});

    if (!number) {
      core.setFailed("This action only works for pull_request");
      return;
    }

    const octokit = new GitHub(githubToken);

    const pr = await getIssueBody(octokit, repo, number)
    const changeTypes = getChangeTypes(pr)
    core.setOutput('change_types', changeTypes)

  } catch ({ message }) {
    core.setFailed(message);
  }
}

run();
