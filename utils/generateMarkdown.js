//function that returns the license link
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return `![badmath](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return `- [License](#license)`;
  }
}
// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return `## License
    info:The License ${license} Is Used For This Application.`;
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  let license = data.projectlicense;
  return `# ${data.projectTitle}
  ${renderLicenseBadge(license)}

## Table Of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
${renderLicenseLink(license)}
- [Test](#test)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installationinstructions}

## Usage
${data.usageinstructions}

## Contribution
${data.contributionInstructions}

## Test
${data.testInstructions}

## Questions
If you have additional questions reach out to me at:
  * [${data.emailInstructions}](${data.emailInstructions})
  * [github.com/${data.githubInstructions}](https://github.com/${
    data.githubInstructions
  })

  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
