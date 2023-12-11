  const inquirer = require("inquirer");
  const connection = require("./server");
  const {
    viewEmployees,
    addEmployee,
  } = require("./functions");
  require("console.table");

  async function main() {
    const action = await showMainMenu();
    switch (action) {
      case "View Current Employees":
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
        "Remove Employee",
        "Exit",
      ],
    });
    return action;
  }

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

  async function handleEditEmployee() {
    const employeeDetails = await editEmployeeDetails();
    await editEmployee(
      employeeDetails.editFirstName,
      employeeDetails.editLastName,
      employeeDetails.editRoleTitle,
      employeeDetails.editSalary,
      employeeDetails.editDepartmentName,
      employeeDetails.editManagerId
    );
  }

  async function editEmployeeDetails() {
    const questions = [
      {
        type: "input",
        name: "firstName",
        message: "Enter the revised first name:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the revised last name:",
      },
    
      {
        type: "input",
        name: "departmentName",
        message: "Enter the revised department name:",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter the revised manager ID:",
      },
    ];
    return inquirer.prompt(questions);
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
