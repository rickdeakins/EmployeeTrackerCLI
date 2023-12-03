//Global Dependencies
const mysql = require("mysql2");
// const index = require("/Users/rickdeakins/bootcamp/Homework/EmployeeTracker/index.js")

//MySQL User Data
require("dotenv").config();
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// Connect to database
const connection = mysql.createConnection(
  {host: "127.0.0.1", user: user, password: password, database: "employeetracker_db",},
  console.log(`Connected to the employeetracker_db database.`));

// Default response for any other request (Not Found)
connection.connect((err) => {
  if (err) {console.error('Error connecting to database: ', err);
      return;}
    console.log('Connected to database');});

module.exports = connection;