const inquirer = require('inquirer')
const connection = require('./server')
const { viewEmployees, addEmployee, editEmployee, removeEmployee } = require ('./functions')

async function main() {
  while (true) {
    const action = await showMainMenu();
    switch (action) {
      case 'View Employees': await viewEmployees(); break;
      case 'Add Employee': await handleAddEmployee(); break;
      case 'Edit Employee': await editEmployee(); break;
      case 'Remove Employee': await removeEmployee(); break;
      case 'Exit':console.log('Exiting application. Goodbye!'); 
      process.exit(0); default: console.log('Invalid choice. Please try again.');break;
    }}}

async function showMainMenu() {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'Choose an action:',
    choices: ['View Employees','Add New Employee','Edit Existing Employee', 'Remove Employee', 'Exit'],
  });return action;}

async function handleAddEmployee() {
  const employeeDetails = await addEmployeeDetails();
  await addEmployee(employeeDetails.addFirstName, employeeDetails.addLastName, employeeDetails.addRoleTitle, employeeDetails.addSalary, employeeDetails.addDepartmentName, employeeDetails.addManagerId);}
  
  async function addEmployeeDetails() {
    const questions = [
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name:',
      },
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Enter the role ID:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary amount:',
      },
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the department name:',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager ID:',
      },
    ];
  
    return inquirer.prompt(questions);
  }

async function handleEditEmployee() {
  const employeeDetails = await editEmployeeDetails();
  await editEmployee(employeeDetails.editFirstName, employeeDetails.editLastName, employeeDetails.editRoleTitle, employeeDetails.editSalary, employeeDetails.editDepartmentName, employeeDetails.editManagerId);}

  async function editEmployeeDetails() {
    const questions = [
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the revised first name:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the revised last name:',
      },
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Enter the revised role ID:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the revised salary amount:',
      },
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the revised department name:',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the revised manager ID:',
      },
    ];
  
    return inquirer.prompt(questions);
  }  






  
main();