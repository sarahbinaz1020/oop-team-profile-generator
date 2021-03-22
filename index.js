// inquirer info/questions
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const employees = [];

inquirer.prompt([{
    name: "newEmployee",
    message: "What employee would you like to add?",
    type: "list",
    choices: ["Engineer", "Intern", "I'm done],"]
}])

.then(function ({ employee}) {

    console.log(response);
    switch (employee) {
        case "Engineer":
        // run engineer prompt
        break;
        case "Intern":
            // Run intern prompt
        case "I'm done":
            // generate the html file
            break;
    }
}
)

inquirer.prompt (questions)
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
// function getSubQuestions (data){
//     const roleChoice = data.role;
//     let role;
//     switch (roleChoice) {
//         case "Manager":
//             role = 
//     }
// }

// new - to make a real Manager

// function askMenu(){
//     prompt(menu)
//     .then(data => {

//     })
// }
