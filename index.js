const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What Is The Title Of Your Project?: ",
    },
    {
      type: "input",
      name: "description",
      message: "What Is The Description Of Your Project?: ",
    },
    {
      type: "input",
      name: "installationinstructions",
      message: "Describe Your Project.: ",
    },
    {
      type: "input",
      name: "usageinstructions",
      message: "What Are The Instructions To Your Application?: ",
    },
    {
      type: "list",
      name: "projectlicense",
      message: "Which License Applies?: ",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "contributionInstructions",
      message: "How Can Contributers Contribute To Your Project?: ",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "What Are Your Testing Instruction?: ",
    },
    {
      type: "input",
      name: "githubInstructions",
      message: "What Is Your Github Username?: ",
    },
    {
      type: "input",
      name: "emailInstructions",
      message: "What Is Your Email?: ",
    },
  ]);
};

//Write content
promptUser().then((data) => {
  let content = generateMarkdown(data);

  writeToFile(content);
});
// function writting README file
function writeToFile(content) {
  fs.writeFile("./temp/README.md", content, (err2) => {
    if (err2) {
      console.log(err2);
      return;
    }
  });
}
// user input => direct to places on readme => write as markdown file.
