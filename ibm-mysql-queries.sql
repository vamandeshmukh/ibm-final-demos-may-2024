
-- Learning SQL with PostGRE 
-- IBM | BLR | 21 May 2024 


-- SQL Assignment

-- 1. Create the table programmer
CREATE TABLE programmer (
    emp_no NUMERIC(5) PRIMARY KEY,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30),
    hire_date DATE,
    proj_id VARCHAR(3),
    language VARCHAR(15),
    privilege VARCHAR(25)
);

SELECT * FROM programmer; 

-- 2. Insert the following data into the programmer table

ALTER TABLE programmer ALTER COLUMN proj_id TYPE VARCHAR(5);
SELECT * FROM programmer; 


INSERT INTO programmer (emp_no, last_name, first_name, hire_date, proj_id, language, privilege) VALUES
(201, 'Gupta', 'Saurav', '1995-01-01', 'NPR', 'VB', 'Secret'),
(390, 'Ghosh', 'Pinky', '1993-05-01', 'KCW', 'JAVA', 'TopSecret'),
(789, 'Agarwal', 'Praveen', '1998-03-08', 'RNC', 'VB', 'Secret'),
(134, 'Chaudhury', 'Supriyo', '1995-07-15', 'TIPPS', 'C++', 'Secret'),
(896, 'Jha', 'Ranjit', '1997-06-15', 'KCW', 'JAVA', 'TopSecret'),
(345, 'John', 'Peter', '1999-11-15', 'TIPPS', 'JAVA', NULL),
(563, 'Anderson', 'Andy', '1994-08-15', 'NITTS', 'C++', 'Confidential');

SELECT * FROM programmer; 

-- 3. Saurav Gupta is assigned a different project with id NITTS and he would work with C++ now. Update this change in the programmer table.
UPDATE programmer SET proj_id = 'NITTS', language = 'C++' WHERE last_name = 'Gupta' AND first_name = 'Saurav';

-- 4. Supriyo Chaudhury has resigned his job. Incorporate this in the table programmer.
DELETE FROM programmer WHERE last_name = 'Chaudhury' AND first_name = 'Supriyo';

-- 5. The column TaskNo in the programmer table is no longer needed. Delete the column.
ALTER TABLE programmer DROP COLUMN task_no;

-- 6. Create table department
CREATE TABLE department (
    dept_no NUMERIC PRIMARY KEY,
    dname VARCHAR(50) NOT NULL,
    loc VARCHAR(50) NOT NULL
);

-- 7. Insert the following data into the department table
INSERT INTO department (dept_no, dname, loc) VALUES
(10, 'ACCOUNTS', 'NEWYORK'),
(20, 'MARKETING', 'CHICAGO'),
(30, 'SALES', 'ATLANTA'),
(40, 'RESEARCH', 'OHIO');

-- 8. Create table employee
CREATE TABLE employee (
    emp_no NUMERIC PRIMARY KEY,
    ename VARCHAR(30) NOT NULL,
    job VARCHAR(10) NOT NULL CHECK (job IN ('MANAGER', 'CLERK', 'PRESIDENT')),
    sal NUMERIC NOT NULL,
    hiredate DATE NOT NULL,
    dept_no NUMERIC REFERENCES department(dept_no),
    mgr CHAR(4)
);

-- 9. Insert the following DATA into the employee table
INSERT INTO employee (emp_no, ename, job, sal, hiredate, dept_no) VALUES
(7001, 'JAMES', 'CLERK', 3000, '2005-06-05', 10),
(7002, 'MASON', 'PRESIDENT', 10000, '2005-06-06', 20),
(7003, 'CLARK', 'MANAGER', 5000, '2004-06-05', 20),
(7004, 'JOHN', 'MANAGER', 6000, '2005-06-08', 10),
(7005, 'BLAKE', 'CLERK', 3500, '2005-06-09', 30);

-- 10. Create table grade
CREATE TABLE grade (
    grade_no NUMERIC PRIMARY KEY,
    hi_sal NUMERIC NOT NULL,
    low_sal NUMERIC NOT NULL
);

-- 11. Drop the column lo_sal from grade table
ALTER TABLE grade DROP COLUMN lo_sal;

-- 12. Add column low_sal in grade table
ALTER TABLE grade ADD COLUMN low_sal NUMERIC NOT NULL;

-- 13. Insert the following data into the grade table
INSERT INTO grade (grade_no, hi_sal, low_sal) VALUES
(1, 2000, 500),
(2, 3500, 2100),
(3, 6000, 3600),
(4, 15000, 6100);

-- 14. Create table employee_back from employee table
CREATE TABLE employee_back AS TABLE employee;

-- 15. Increase the salary of JAMES from 3000 to 3500
UPDATE employee SET sal = 3500 WHERE ename = 'JAMES';

-- 16. Increase the salary of all MANAGER by 1000
UPDATE employee SET sal = sal + 1000 WHERE job = 'MANAGER';

-- 17. Decrease the salary of dept_no 10 by 100
UPDATE employee SET sal = sal - 100 WHERE dept_no = 10;

-- 18. Add a new field comm in employee table
ALTER TABLE employee ADD COLUMN comm NUMERIC;

-- 19. Initialize the value of comm to zero in employee table.
UPDATE employee SET comm = 0;

-- 20. Remove the employees who have joined before 6-Jun-2005
DELETE FROM employee WHERE hiredate < '2005-06-06';

-- 21. Remove employees whose salary is less than 3000
DELETE FROM employee WHERE sal < 3000;

-- 22. List all employees who are working in department 10.
SELECT * FROM employee WHERE dept_no = 10;

-- 23. List all employees of department 10 and are MANAGER
SELECT * FROM employee WHERE dept_no = 10 AND job = 'MANAGER';

-- 24. List all employees whose salary is between 3000 and 5000
SELECT * FROM employee WHERE sal BETWEEN 3000 AND 5000;

-- 25. List all employees who have joined after 10th July 2005
SELECT * FROM employee WHERE hiredate > '2005-07-10';

-- 26. List all employees who are MANAGER or PRESIDENT
SELECT * FROM employee WHERE job IN ('MANAGER', 'PRESIDENT');

-- 27. List all employees who are in dept_no 10 or 20 and who are MANAGERS
SELECT * FROM employee WHERE dept_no IN (10, 20) AND job = 'MANAGER';

-- 28. Update the commission of employees in dept_no 10 to 500.
UPDATE employee SET comm = 500 WHERE dept_no = 10;

-- 29. List all employees whose commission is null.
SELECT * FROM employee WHERE comm IS NULL;

-- 30. List the employees who are not a PRESIDENT or MANAGER
SELECT * FROM employee WHERE job NOT IN ('PRESIDENT', 'MANAGER');

-- 31. List all employees whose name begin with J
SELECT * FROM employee WHERE ename LIKE 'J%';

-- 32. List all employees whose name consists of A
SELECT * FROM employee WHERE ename LIKE '%A%';

-- 33. List the employee sal comm. and bonus (Bonus is sal+comm.)
SELECT ename, sal, comm, (sal + comm) AS bonus FROM employee;

-- 34. Display the salary of employees of MANAGER increased by 10%. The output should display salary and increased salary.
SELECT ename, sal, (sal * 1.10) AS increased_sal FROM employee WHERE job = 'MANAGER';

-- 35. Update the salary of MANAGER by 10%.
UPDATE employee SET sal = sal * 1.10 WHERE job = 'MANAGER';

-- 36. Display the employees in the descending order of names
SELECT * FROM employee ORDER BY ename DESC;

-- 37. Display the employees in the ascending order of dept_no, job
SELECT * FROM employee ORDER BY dept_no ASC, job ASC;

-- 38. Display all the employee names with the first letter in capitals and all the other characters in lower case
SELECT INITCAP(ename) FROM employee;

-- 39. Display all the employee names in lower case
SELECT LOWER(ename) FROM employee;

-- 40. Display the employee name and the position of letter A in each name
SELECT ename, POSITION('A' IN ename) AS position_a FROM employee;

-- 41. Extract the last 3 characters in employee name and display them.
SELECT ename, RIGHT(ename, 3) AS last_3_chars FROM employee;

-- 42. Display the employee name and the length of the name
SELECT ename, LENGTH(ename) AS name_length FROM employee;

-- 43. Display the current system date and time
SELECT NOW() AS current_date_time;

-- 44. Display the employee name and the date when each employee completes 5 years in the company.
SELECT ename, (hiredate + INTERVAL '5 years') AS completion_5_years FROM employee;

-- 45. Display the last day of the month for the current system date
SELECT DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month - 1 day' AS last_day_of_month;

-- 46. Display the last day of the month for all the hire dates in employee table
SELECT ename, hiredate, DATE_TRUNC('month', hiredate) + INTERVAL '1 month - 1 day' AS last_day_of_hire_month FROM employee;

-- 47. Display the employee name, hiredate and the total months of experience as on 8th June 2008
SELECT ename, hiredate, EXTRACT(YEAR FROM AGE('2008-06-08', hiredate)) * 12 + EXTRACT(MONTH FROM AGE('2008-06-08', hiredate)) AS months_of_experience FROM employee;

-- 48. Display the employee name, sal and comm. for all employees. Employees having commission as null should be displayed as 99
SELECT ename, sal, COALESCE(comm, 99) AS comm FROM employee;

-- 49. Drop table employee_back
DROP TABLE employee_back;

-- 50. Display the number of employees in department 10
SELECT COUNT(*) AS dept_10_employees FROM employee WHERE dept_no = 10;

-- 51. Display the number of employees in each department
SELECT dept_no, COUNT(*) AS num_employees FROM employee GROUP BY dept_no;

-- 52. Display the number of employees in each department job wise
SELECT dept_no, job, COUNT(*) AS num_employees FROM employee GROUP BY dept_no, job;

-- 53. Display the total number of employees in the table
SELECT COUNT(*) AS total_employees FROM employee;

-- 54. Display the employee earning the highest salary
SELECT * FROM employee WHERE sal = (SELECT MAX(sal) FROM employee);

-- 55. Display the employee earning the highest commission
SELECT * FROM employee WHERE comm = (SELECT MAX(comm) FROM employee);

-- 56. Display the employee earning the lowest salary
SELECT * FROM employee WHERE sal = (SELECT MIN(sal) FROM employee);

-- 57. Display the average salary for each department
SELECT dept_no, AVG(sal) AS avg_salary FROM employee GROUP BY dept_no;

-- 58. Display distinct jobs in the table
SELECT DISTINCT job FROM employee;

-- 59. Display the dept_no where the number of employees is greater than 3.
SELECT dept_no FROM employee GROUP BY dept_no HAVING COUNT(*) > 3;

-- 60. Display the total salary department wise
SELECT dept_no, SUM(sal) AS total_salary FROM employee GROUP BY dept_no;

-- 61. Display the employee name, job and rank. If the job is PRESIDENT then rank is 1. If the job is MANAGER then rank is 2. If the job is CLERK then the rank is 3.
SELECT ename, job, 
CASE job 
    WHEN 'PRESIDENT' THEN 1 
    WHEN 'MANAGER' THEN 2 
    WHEN 'CLERK' THEN 3 
END AS rank 
FROM employee;

-- 62. Display the job and total salary for each job having number of employees greater than 5
SELECT job, SUM(sal) AS total_salary FROM employee GROUP BY job HAVING COUNT(*) > 5;

-- 63. There is a proposed deduction of 5000 from every employee’s salary. Check for the balance salary and display the appropriate message. If the deduction causes value to be less than zero display “Insufficient for Deduction” if greater than zero “Can be Deducted”
SELECT ename, sal, 
CASE 
    WHEN sal - 5000 < 0 THEN 'Insufficient for Deduction' 
    ELSE 'Can be Deducted' 
END AS deduction_status 
FROM employee;

-- 64. Create a table employee_dup from employee. The new table should only have the structure and should not have any data values.
CREATE TABLE employee_dup AS TABLE employee WITH NO DATA;

-- 65. List the employees who are in the same department as that of CLARK
SELECT * FROM employee WHERE dept_no = (SELECT dept_no FROM employee WHERE ename = 'CLARK');

-- 66. List the employees who drawing the same salary as that of BLAKE
SELECT * FROM employee WHERE sal = (SELECT sal FROM employee WHERE ename = 'BLAKE');

-- 67. List the employees whose salary is greater than the average salary
SELECT * FROM employee WHERE sal > (SELECT AVG(sal) FROM employee);

-- 68. List the employees who are located in NEWYORK or CHICAGO
SELECT * FROM employee WHERE dept_no IN (SELECT dept_no FROM department WHERE loc IN ('NEWYORK', 'CHICAGO'));

-- 69. List the employees whose salary is greater than the salary of BLAKE or CLARK.
SELECT * FROM employee WHERE sal > (SELECT sal FROM employee WHERE ename = 'BLAKE') OR sal > (SELECT sal FROM employee WHERE ename = 'CLARK');

-- 70. Increase the salary of employees by 10% who are located in CHICAGO
UPDATE employee SET sal = sal * 1.10 WHERE dept_no = (SELECT dept_no FROM department WHERE loc = 'CHICAGO');

-- 71. Delete the employees whose ctid is greater than the ctid of CLARK
DELETE FROM employee WHERE ctid > (SELECT ctid FROM employee WHERE ename = 'CLARK');

-- 72. List the employees whose salary is greater than the average salary of his own department.
SELECT * FROM employee WHERE sal > (SELECT AVG(sal) FROM employee e2 WHERE e2.dept_no = employee.dept_no);

-- 73. List the employees who are not in the same department as that of BLAKE or CLARK
SELECT * FROM employee WHERE dept_no NOT IN (SELECT dept_no FROM employee WHERE ename IN ('BLAKE', 'CLARK'));

-- 74. Display the department number, name and location for the department for which there exists employees
SELECT DISTINCT d.dept_no, d.dname, d.loc FROM department d JOIN employee e ON d.dept_no = e.dept_no;

-- 75. Create a view emp_vw consisting of ename, sal, job of employees in department 10
CREATE VIEW emp_vw AS SELECT ename, sal, job FROM employee WHERE dept_no = 10;

-- 76. Create a view emp_vw1 consisting of employee names, sal and job of employees located in CHICAGO
CREATE VIEW emp_vw1 AS 
SELECT e.ename, e.sal, e.job 
FROM employee e 
JOIN department d ON e.dept_no = d.dept_no 
WHERE d.loc = 'CHICAGO';

-- 77. Create a view emp_dept consisting of employee names, job, sal, department name and location
CREATE VIEW emp_dept AS 
SELECT e.ename, e.job, e.sal, d.dname, d.loc 
FROM employee e 
JOIN department d ON e.dept_no = d.dept_no;

-- 78. Create a sequence emp_seq.
CREATE SEQUENCE emp_seq;

-- 79. Create a sequence emp_seq1 starting with 1 and increment it by 1
CREATE SEQUENCE emp_seq1 START WITH 1 INCREMENT BY 1;

-- 80. Implement the sequence in a table.
-- Adding new column using sequence for primary key demonstration
ALTER TABLE employee ADD COLUMN new_emp_id NUMERIC DEFAULT nextval('emp_seq1');

-- End of SQL Assignment

