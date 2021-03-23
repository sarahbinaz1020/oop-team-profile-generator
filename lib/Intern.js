// link to Employee class
const Employee = require("./Employee");

class Intern extends Employee {
    // will also need getSchool()
    constructor (name, id, email) {
        super(this.name, this.id, this.email);
        this.school = school;
    }
    // will also need getRole() overridden to return "Intern"
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;