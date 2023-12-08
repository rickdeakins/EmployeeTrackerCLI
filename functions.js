const connection = require("./server");

// Prompt user for all fields of data
function addEmployee() {
    const sqlQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    connection.query(sqlQuery,[firstName, lastName, roleId, managerId],(err, res) => {
        if (err) throw err;console.log("Employee added successfully!");}
    );}

function updEmployeeName() {
    const sqlQuery = `UPDATE employee SET first_name = '${newFirstName}', last_name = '${newLastName}'`;
    connection.query(sqlQuery, [newFirstName, newLastName], (err, res) => {
      if (err) throw err;
      console.log("Employee added successfully!");}
    );}

//email = '${newEmail}' WHERE id = ${userId}`;

function updDepartment() {}

function updTitle() {}

function removeRecord() {
  // Prompt user for employee ID then SQL DELETE command to remove the employee from the database
}

function viewEmployees() {
  // Prompt user for employee ID then SQL DELETE command to remove the employee from the database
}

module.exports = {
  addEmployee,
  addDepartment,
  addTitle,
  addSalary,
  updEmployeeName,
  updDepartment,
  updTitle,
  removeRecord,
  viewEmployees,
};
