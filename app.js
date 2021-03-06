const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

const promptUser = async () => {
  console.log("Hello. Please answer the following questions to add a new Employee.");
  const answers = await inquirer.prompt(
    [{
      type: "list",
      name: "role",
      message: "What is the Employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the Manager's name?",
      when: (answers) => answers.role === "Manager",
    },
    {
      type: "input",
      name: "name",
      message: "What is the Engineer's name?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      type: "input",
      name: "name",
      message: "What is the Intern's name?",
      when: (answers) => answers.role === "Intern",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Manager's email?",
      when: (answers) => answers.role === "Manager",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Engineer's email?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern's email?",
      when: (answers) => answers.role === "Intern",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Manager's id?",
      when: (answers) => answers.role === "Manager",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Engineer's id?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Intern's id?",
      when: (answers) => answers.role === "Intern",
    },
    {
      type: "input",
      name: "office",
      message: "What is the Manager's office number?",
      when: (answers) => answers.role === "Manager",
    },
    {
      type: "input",
      name: "github",
      message: "What is the Engineer's Github username?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "What is the Intern's school?",
      when: (answers) => answers.role === "Intern",
    },
    {
      type: "confirm",
      name: "new",
      message: "Would you like to enter another new Employee?",
    }],

  );

  function chooseEmployee() {
    if (answers.role === "Engineer") {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      employees.push(engineer);
    }
    else if (answers.role === "Manager") {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
      employees.push(manager);
    }
    else if (answers.role === "Intern") {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      employees.push(intern);
    }
    else {
      throw new Error(`Role type ${answers.role} is not supported.`);
    }
    if (answers.new) {
      return promptUser();
    }
  }

  return chooseEmployee();
};


const init = async () => {
  try {
    await promptUser();

    const html = await render(employees);

    console.log("Your team.html file has been created in the output folder.")

    fs.writeFileSync(outputPath, html)

  } catch (err) {
    console.log(err);
  }
};

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
