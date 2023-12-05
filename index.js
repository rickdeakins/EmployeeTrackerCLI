const inquirer = require('inquirer')
//const connection = require('./server')
const { addEmployee, addDepartment, addTitle, addSalary, updEmployeeName, updDepartment, updTitle, updSalary, removeRecord } = require ('./functions')
const userOptions = ['Add new employee','Add Department','Add Title','Add Salary','Update Employee Name','Update Department','Update Title','Update Salary', 'Remove Record']

//User Prompts
inquirer.prompt({type: 'list', name: 'action', messsage: 'Choose an Action', choices: userOptions})
    .then(((answer) => {switch (answer.action) {
      case 'Add new employee': addEmployee(); break;
      case 'Update Employee Name': updEmployeeName(); break;
      case 'Update Department': updDepartment(); break;
      case 'Update title': updTitle(); break;
      case 'Update salary': updSalary(); break;
      case 'Remove Record': removeRecord(); break;
      case 'View Employees': viewEmployees(); break;
    }}));

