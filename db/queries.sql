-- View Employees 
SELECT e.id, e.first_name, e.last_name, r.title, d.name, e.manager_id
FROM employee e
LEFT JOIN role r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id;

-- Modify Department Name
USE employeetracker_db;
ALTER TABLE department ADD ${departmentName} VARCHAR(30);

-- Add Employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);

--Update Employee Name
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)

