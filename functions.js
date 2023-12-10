const connection = require("./server");

//Function to display all employees  
function viewEmployees() {
  const sqlQuery = `USE employeetracker_db; SELECT e.id AS employee_id, e.first_name, e.last_name, r.title AS role_title, r.salary, d.department_name, e.manager_id FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON r.department_id = d.id;`;
  connection.query(sqlQuery, (err, res) => {if (err) {console.error("Error viewing employees:", err);throw err;}
    console.log("Employees:"); console.table(res);})}

// Prompt user for all fields of data
function addEmployee() {
    const sqlQuery = `INSERT INTO employee (first_name, last_name, role_title, salary, department_name, manager_id) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.query(sqlQuery,[firstName, lastName, roleTitle, salary, department_name, managerId],(err, res) => {
        if (err) throw err;console.log("Employee added successfully!");});}

function editEmployee(employeeId, revisedDetails) {
    const sqlQuery = `UPDATE employee SET first_name = ?, last_name = ?, role_title = ?, salary = ?, department_name = ?, manager_id = ? WHERE id = ?`;
    connection.query(sqlQuery, [revisedDetails.editFirstName, revisedDetails.editLastName, revisedDetails.editRoleTitle, revisedDetails.editSalary, revisedDetails.editDepartmentName, revisedDetails.editManagerId, employeeId]),(err, res) => {
      if (err) throw err;console.log("Employee added successfully!");}};

function removeEmployee(employeeId) {
  const sqlQuery = `DELETE FROM employee WHERE id = ?`;
  connection.query(sqlQuery, [employeeId], (err, res) => {
    if (err) throw err; console.log("Employee removed successfully!");});}

module.exports = { viewEmployees, addEmployee, editEmployee, removeEmployee };