const inquirer = require("inquirer");
const connection = require('./server')


//MySQL User Data
require("dotenv").config();
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// Connect to database
const db = mysql.createConnection(
  {host: "127.0.0.1", user: user, password: password, database: "employeetracker_db",},
  console.log(`Connected to the employeetracker_db database.`));



// Prompt the user for action
  // Handle user actions based on answers
  //add inquire statement
  switch (answers.action) {
    case "Add Department":
      connection.query(addNewDept, (err, results) => {
        if (err) {
          console.error("Error executing SQL query:", err);
        } else {
          console.log("Column added successfully");
        }
      });
      break;
    case "Add User":
      connection.query(addNewUser, (err, results) => {
        if (err) {
          console.error("Error executing SQL query:", err);
        } else {
          console.log("Column added successfully");
        }
      });
      break;
    case "Add Title":
      connection.query(addNewTitle, (err, results) => {
        if (err) {
          console.error("Error executing SQL query:", err);
        } else {
          console.log("Column added successfully");
        }
      });
      break;
    case "Add Salary":
      connection.query(addNewSalary, (err, results) => {
        if (err) {
          console.error("Error executing SQL query:", err);
        } else {
          console.log("Column added successfully");
        }
      });
      break;
    case "Update Department":
        connection.query(updDepartment, (err, results) => {
            if (err) {console.error("Error executing SQL query:", err);
            } else {console.log("Column added successfully");}});     
      break;
    case "Update User":
        connection.query(updUser, (err, results) => {
            if (err) {console.error("Error executing SQL query:", err);
            } else {console.log("Column added successfully");}});
    break
    case "Update Title":
        connection.query(updTitle, (err, results) => {
            if (err) {
    console.error("Error executing SQL query:", err);
            } else {
              console.log("Column added successfully");
            }
          });
    break;
    case "Update Salary":
        connection.query(updSalary, (err, results) => {
            if (err) {
              console.error("Error executing SQL query:", err);
            } else {
              console.log("Column added successfully");
}});      break;
    case "Remove Employee Record":
        connection.query(removeRecord, (err, results) => {
            if (err) {
              console.error("Error executing SQL query:", err);
            } else {
              console.log("Column added successfully");      
              break;
  }
  // Close the MySQL connection
  connection.end();
});

// Establish the database connection
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
})});
