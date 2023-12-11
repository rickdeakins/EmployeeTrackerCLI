-- View Employees 
USE employeetracker_db;

SELECT
    e.id AS employee_id,
    e.first_name,
    e.last_name,
    r.title AS role_title,
    r.salary,
    d.department_name,
    e.manager_id
FROM
    employee e
JOIN
    role r ON e.role_id = r.id
JOIN
    department d ON r.department_id = d.id;


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
USE employeetracker_db;

DECLARE 3 INT = 3; 
DELETE FROM role WHERE id IN (SELECT role_id FROM employee WHERE id = 3);
DELETE FROM department WHERE id IN (SELECT department_id FROM role WHERE id IN (SELECT role_id FROM employee WHERE id = 3));
DELETE FROM employee WHERE id = 3;








CREATE TABLE new_department (
id INT PRIMARY KEY AUTO_INCREMENT,
department_name VARCHAR(60));

INSERT INTO new_department (id, department_name)
SELECT id, name FROM department;

RENAME TABLE new_department TO department;

DROP TABLE department;
