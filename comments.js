const jsyaml = require('js-yaml');
const fs = require('fs');


function addyml(issue) {
  let start = issue.body.indexOf("```")+3
  let end = issue.body.lastIndexOf("```")
  var newtask = jsyaml.load(issue.body.substring(start, end));
  let yamlStr = jsyaml.safeDump(newtask)
  var taskname = newtask.taskname
  fs.writeFileSync('data/'+taskname+'-task.yml',yamlStr,'utf8');
}

async function getIssueBody(octokit, repo, issue_number) {
  const { data: issue } = await octokit.issues.get({
    ...repo,
    issue_number
  });
  return issue;
}


module.exports = {
	addyml,
	getIssueBody
}
