// build out classes - this is parent
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // will need .getName()
  getName(){
      return this.name;
  }

  getId(){
      return this.email;
  }

  getEmail() {
      return this.email;
  }
  getRole() {
      return "Employee";
  }
}

module.exports = Employee;