function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [License](#license)

## License
<br />
This application is covered by the ${answers.license} license. 

<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

    `;
  }
  
  module.exports = generateReadme;