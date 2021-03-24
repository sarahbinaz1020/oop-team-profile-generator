const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const employees = [];

function managerPrompt() {
  const questions = [
    {
      type: "input",
      message: "Hi there, what is your manager name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your manager id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your manager email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your manager office phone number?",
      name: "phone",
    },
    {
      type: "list",
      message: "Who would you like to add next?",
      name: "add",
      choices: ["Engineer", "Intern", "End, I'm done."],
    },
    
  ];
  inquirer
    .prompt(questions)

    .then(function ({name, id, email, phone, add}) {
        console.log(phone);
        const manager = new Manager (name, id, email, phone);
        employees.push(manager);
        switch (add) {
          case "Engineer":
            engineerPrompt();
            break;
          case "Intern":
            internPrompt();
            break;
          case "End, I'm done":
            generateHTML();
            break;
      }
    });
}
// how do you loop in the prompts?

    // need to push newly generated employees into array to generate cards

    // need end and generate cards

// need Engineer prompts - name, id, email, github
function engineerPrompt() {
  const questions = [
    {
      type: "input",
      message: "Hi there, what is your engineer name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your engineer id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your engineer email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your engineer github username?",
      name: "username",
    },
    {
      type: "list",
      message: "Who would you like to add next?",
      name: "add",
      choices: ["Engineer", "Intern", "End, I'm done."],
    },
  ];


  inquirer
    .prompt(questions)

    .then(function ({name, id, email, username, add}) {
      console.log(username);
      const engineer = new Engineer (name, id, email, username);
      employees.push(engineer);
      switch (add) {
        case "Engineer":
          engineerPrompt();
          break;
        case "Intern":
          internPrompt();
          break;
        case "End, I'm done":
          generateHTML();
          break;
      }
    });
}

// need Intern prompts - name, id, email, school
function internPrompt() {
    const questions = [
      {
        type: "input",
        message: "Hi there, what is your intern name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your intern id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your intern email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your school?",
        name: "school",
      },
      {
        type: "list",
        message: "Who would you like to add next?",
        name: "add",
        choices: ["Engineer", "Intern", "End, I'm done."],
      },
    ];
  
    inquirer
      .prompt(questions)
  
      .then(function ({name, id, email, school, add}) {
        console.log(school);
        const intern = new Intern (name, id, email, school);
        employees.push(intern);
        switch (add) {
          case "Engineer":
            engineerPrompt();
            break;
          case "Intern":
            internPrompt();
            break;
          case "End, I'm done":
            generateHTML();
            break;
        }
      });
  }

function generateHTML(){
// fswrite - just the top html - run once
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
</head>
<body>
    <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 text-center" id="titlenav">Team Profile</span>
        </div>
      </nav>
    <div class="container">
        <div class="row">`;
fs.writeFile("../output.html", html, (err)=> err ? console.log(err) : console.log("Yay, you sucessfully wrote a generateHTML file!" ));
// fs.appendFile each item in the employees array


// fs append file with scripts


}