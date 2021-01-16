// Code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }

  getOffice() {
    return `${this.officeNumber}`;
  };

}
const manager = new Manager("Doug", 456, "doug@work.org", "Manager", 987)

manager.getOffice();

console.log(manager);