// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.github = github;
  }

  getGithub() {
    return `${this.github}`;
  };

}
const engineer = new Engineer("Cranston", 789, "cranston@work.org", "Engineer", "@cranston")

engineer.getGithub();

console.log(engineer);