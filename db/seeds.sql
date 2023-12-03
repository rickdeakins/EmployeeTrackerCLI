INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("Management");

INSERT INTO role (title, salary, department_id) VALUES ("Sales Associate", 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("System Administrator", 82500, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Operations Manager", 101000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Smith", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("David", "James", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Melissa", "Jones", 3, NULL);
