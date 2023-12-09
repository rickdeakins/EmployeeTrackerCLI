const inquirer = require('inquirer')
const connection = require('./server')
const { viewEmployees, addEmployee, editEmployee, removeEmployee } = require ('./functions')

async function main() {
  while (true) {
    const action = await showMainMenu();
    switch (action) {
      case 'View Employees': await viewEmployees(); break;
      case 'Add Employee': await addEmployee(); break;
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

main();