-- creating the students table
CREATE TABLE students (
id SERIAL PRIMARY KEY,
last_name VARCHAR (100) NOT NULL,
first_name VARCHAR (50) NOT NULL,
birth_date DATE NOT NULL
)

-- inserting data into the table
INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Benichou', 'Marc', '11/02/1998');

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Cohen', 'Yoan', '12/03/2010');

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Benichou', 'Lea', '07/27/1987');

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Dux', 'Amelia', '04/07/1996');

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Grez', 'David', '06/14/2003');

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Simpson', 'Omer', '10/03/1980');

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Slunsky', 'Filip', '04/30/1986'); -- ID# 7

-- Fetch all of the data from the table.
SELECT * FROM students;

-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;

-- For the following questions, only fetch the first_names and last_names of the students.
--      Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students WHERE id = 2;

--      Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

--      Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

--      Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

--      Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';

--      Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a';

--      Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a_';

--      Fetch the students whose id’s are equal to 1 AND 3. (expected result - since the ID is unique, the query will be empty)
SELECT first_name, last_name FROM students WHERE id = 1 AND id = 3;
--              Note: to get unepty result, the operator can be changed to 'OR'
SELECT first_name, last_name FROM students WHERE id = 1 OR id = 3;

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE birth_date > '01/01/2000';

-- CONTINUING THE GOLD PART FROM HERE
--      Fetch the first four students. You have to order the four students alphabetically by last_name.
SELECT * FROM students WHERE id <= 4 ORDER BY last_name ASC;

--      Fetch the details of the youngest student.
SELECT * FROM students WHERE birth_date = (SELECT MAX(birth_date) FROM students);

--      Fetch three students skipping the first two students.
SELECT * FROM students WHERE id >=3;
