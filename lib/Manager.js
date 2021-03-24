// link to Employee class
const Employee = require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        // inherited from parent
        super(this.name, this.id, this.email);
        this.officeNumber = officeNumber;
    }

    // will need getRole() overridden to return "Manager"
    getRole(){
        return "Manager";
    }
}



// new Manager("Naomi", 1, "ngarcia@2u", 101);

module.exports = Manager;