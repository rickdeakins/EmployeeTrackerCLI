-- View Employees 
SELECT e.id, e.first_name, e.last_name, r.title, d.name, e.manager_id
FROM employee AS e
LEFT JOIN role AS r ON e.role_id = r.id
LEFT JOIN department AS d ON r.department_id = d.id;

-- Modify Department Name
USE employeetracker_db;
UPDATE department SET name = ${departmentName} WHERE id = (?);

-- Add Employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);

--Update Employee Name
UPDATE users SET first_name = '${newFirstName}', last_name = '${newLastName}';

--Update title
--Update salary
--Remove record