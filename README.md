# EmployeeTrackerCLI
A Command Line Interface program used to store employee data securely. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Testing](#testing)
- [Future Development](#futuredevelopment)
- [Reference](#reference)

## Installation
As a user the application requires node.js and mysql to be installed in order for the application to run. Additional dependencies required via Node Package Manager (NPM) are console.table, inquirer, mysql2 and dotenv (for securely storing the mysql login and password).

## Usage
As a user I want to maintain a list of employees for which I am able to access references contained within three seperate tables. The user should be able to add new employees to the employees table while utilizing primary keys from the secondary tables as reference.

## License
<title>license: GPL</title>licenselicenseGPLGPL


## Testing
The application was tested extensively on the command line. The functionality of adding a new employee, role and department functioned prior to simply displaying the joined tables. After trial and error and naming consistencies revisited the application bugs were resolved.

## FutureDevelopment
The application currently allows the user to add new employees, however in the future this application will include the means of deleting existing records so the user does not need to go directly into mysql with the command. Additional functionality such as viewing the additional tables individually like the joined table of employee data will allow further benefit to the user. 


## Reference
https://github.com/rickdeakins/EmployeeTrackerCLI/

<img width="728" alt="image" src="https://github.com/rickdeakins/EmployeeTrackerCLI/assets/141289243/1d6ddfca-21ce-4e16-b708-7b6d19d509e9">
