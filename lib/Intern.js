// link to Employee class
const Employee = require("./Employee");

class Intern {
    constructor (school) {
        this.school = school;
    }
}

// will also need getSchool()
// will also need getRole() overridden to return "Intern"