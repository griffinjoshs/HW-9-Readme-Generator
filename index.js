const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "Input",
        name: "title",
        message: "What is your title of your project?",
    },
    {
        type: "Input",
        name: "description",
        message: "What is your description of your project?",
    },
    {
        type: "Input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "Input",
        name: "username",
        message: "What is your github username?",
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using?",
        choices: [
            "Apache",
            "MIT",
            "GPL",
            "none",
        ]
    },
    {
        type: "Input",
        name: "instructions",
        message: "Explain how you use this application!",
    },
    {
        type: "Input",
        name: "usage",
        message: "How do I use this application?",
    },
    {
        type: "Input",
        name: "guidelines",
        message: "What does this application do?",
    },
    {
        type: "Input",
        name: "additional",
        message: "Any other Additional information needed?",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log(err)
        }
        console.log("write file was successful!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("readme.md", answers)
    })
}

// function call to initialize program
init();
