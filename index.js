  const inquirer = require("inquirer");
  const connection = require("./server");
  // const { addEmployee } = require("./functions");
  require("console.table");

  async function main() {
    const action = await showMainMenu();
    switch (action) {
      case "View Employees":
        await viewEmployees();
        break;
      case "Add New Employee":
        await handleAddEmployee();
        break;
      case "Add New Role":
        await addRole();
        break;
      case "Add Department Name":
        await addDepartment();
        break;
      case "Exit":
        console.log("Exiting application. Goodbye!");
        process.exit(0);
      default:
        console.log("Invalid submission. Please try again.");
        break;
    }
  }

  async function showMainMenu() {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "Select an option from the following menu:",
      choices: [
        "View Employees",
        "Add New Employee",
        "Add Department Name",
        "Add New Role",
        "Exit",
      ],
    });
    return action;
  }

  async function viewEmployees() {
    connection.query(
      `SELECT e.id AS employee_id, e.first_name, e.last_name, r.title AS role_title, r.salary, d.department_name, e.manager_id FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON r.department_id = d.id;`,
      function (err, data) {
       console.log("enter callback")
        if (err) {
        console.error(err)
          throw err;}
        console.table(data);
        main();
      }
    )};

  async function handleAddEmployee() {
    const employeeDetails = await addEmployeeDetails();
    await addEmployee(
      employeeDetails.firstName,
      employeeDetails.lastName,
      employeeDetails.roleTitle,
      employeeDetails.managerId,
      main
    );
  }

  async function addEmployeeDetails() {
    const questions = [
      {
        type: "input",
        name: "firstName",
        message: "Enter the employee first name:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the employee last name:",
      },
      {
        type: "input",
        name: "roleTitle",
        message: "Enter the employee role ID:",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter the manager ID:",
      },
    ];
    return inquirer.prompt(questions);
  }
  // Prompt user for all fields of data
function addEmployee(firstName, lastName, roleId, managerId, main) {
  const sqlQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
  connection.query(
    sqlQuery,
    [firstName, lastName, roleId, managerId],
    (err, res) => {
      if (err) throw err;
      console.log("Employee added successfully!");
      main()
    }
  );
}


  async function addDepartment() {
    const questions = [
      {
        type: "input",
        name: "departmentName",
        message: "Enter the new department name:",
      },
    ];
    inquirer.prompt(questions).then((response) => {
      connection.query(
        "INSERT INTO department (department_name) VALUES (?);",
        response.departmentName,
        function (err, data) {
          if (err) throw err;
          console.table(data);
          main();
        }
      );
    });
  }

  async function addRole() {
    const questions = [
      {
        type: "input",
        name: "roleTitle",
        message: "Enter the  role Title:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the salary amount:",
      },
      {
        type: "input",
        name: "departmentId",
        message: "Enter the department ID:",
      },
    ];
    inquirer.prompt(questions).then((response) => {
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);",
        [response.roleTitle,response.salary,response.departmentId],
        function (err, data) {

          if (err) {
            console.log(err)
            throw err;
          }
          console.table(data);
          main();
        }
      );
    });
  }

  main();