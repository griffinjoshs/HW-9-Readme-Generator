// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}
  
## Table of Contents
    * [email](#email)
    * [username](#username)
    * [description](#Description)
    * [instructions](#instructions)
    * [Usage](#usage)
    * [guidelines](#guidelines)
    * [installation](#installation)
    * [questions](#questions)
    * [license](#license)

## Instructions
  ${data.instructions}

## Usage
  ${data.usage}

## Guidelines
  ${data.guidelines}

## Questions
If you have any Questions reach out to me at ${data.email}
My github username is ${data.username}

## License
  ${data.license}

## Additional
  ${data.additional}
`;
}

module.exports = generateMarkdown;


