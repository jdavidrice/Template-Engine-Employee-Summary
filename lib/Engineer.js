const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  };
  getGithub() {
    return this.github;
  };
  getRole() {
    return "Engineer";
  };
}
const engineer = new Engineer();
// console.log(engineer)

module.exports = Engineer;