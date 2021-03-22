// link to Employee class
const Employee = require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    // will need getRole() overridden to return "Manager"
    getRole(){
        return "Manager";
    }
}


new Manager("Naomi", 1, "ngarcia@2u", 101);

module.exports = Manager;