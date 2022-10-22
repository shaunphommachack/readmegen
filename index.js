
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },

        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 
 
  async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        console.log('✔️  Successfully generate README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  