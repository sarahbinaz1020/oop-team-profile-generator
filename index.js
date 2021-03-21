// inquirer info/questions
const fs = require("fs");
const inquirer = require("inquirer");

// what is your role?
const questions = [
    {
        type: 'list',
        message:'What is your role?',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"],
    }
]
// then sub questions

// new - to make a real Manager
