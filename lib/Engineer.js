// link to Employee class
const Employee = require("./Employee");

// build out class here
class Engineer extends Employee {
    constructor(name, id, email) {
        // inherited from parent
        super(this.name, this.id, this.email);
        // will need getGithub()
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;