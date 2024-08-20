-- PART 1
--      1. Create 2 tables : Customer and Customer profile. They have a One to One relationship.
--          A customer can have only one profile, and a profile belongs to only one customer

--          The Customer table should have the columns : id, first_name, last_name NOT NULL
CREATE TABLE customer (
customer_id SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(100) NOT NULL
)

--          The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE customer_profile (
customer_profile_id SERIAL PRIMARY KEY,
isLoggedIn BOOLEAN DEFAULT false,
customer_id SMALLINT,
FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
)

--      2. Insert those customers
INSERT INTO customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

--      3. Insert those customer profiles, use subqueries
INSERT INTO customer_profile (isLoggedIn, customer_id) VALUES
(TRUE, (SELECT customer_id FROM customer WHERE first_name = 'John')),
(FALSE, (SELECT customer_id FROM customer WHERE first_name = 'Jerome'))

--      4. Use the relevant types of Joins to display:
--          The first_name of the LoggedIn customers
SELECT cu.first_name
FROM customer cu
INNER JOIN customer_profile cp
ON cu.customer_id = cp.customer_id
WHERE cp.isLoggedIn = true;

--          All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT cu.first_name, cp.isLoggedIn
FROM customer cu
LEFT JOIN customer_profile cp
ON cu.customer_id = cp.customer_id;

--          The number of customers that are not LoggedIn
SELECT count(*)
FROM customer cu
INNER JOIN customer_profile cp
ON cu.customer_id = cp.customer_id
WHERE cp.isLoggedIn = false;
-- returns result only for customers with profile

SELECT count(*)
FROM customer cu
LEFT JOIN customer_profile cp
ON cu.customer_id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;
-- returns result for all not logged in customers, incl. those without profile

-- PART 2
--  1. Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE book(
book_id SERIAL PRIMARY KEY,
title VARCHAR (150) NOT NULL,
author VARCHAR (100) NOT NULL
)

--  2. Insert books:
INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

--  3. Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE student (
student_id SERIAL PRIMARY KEY,
name VARCHAR(150) NOT NULL UNIQUE,
age SMALLINT CHECK (age <= 15)
)

--  4. Insert students
INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)

-- 5. Create a table named Library
CREATE TABLE library(
book_fk_id SMALLINT,
student_fk_id SMALLINT,
borrowed_date DATE,
PRIMARY KEY (book_fk_id, student_fk_id),
FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
)

-- 6. Add 4 records in the junction table, use subqueries.
--      the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
--      the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
--      the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
--      the student named Bob, borrowed the book Harry Potter the on 12/08/2021

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM student WHERE name = 'John'), '02/15/2022'),
((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM student WHERE name = 'Bob'), '03/03/2021'),
((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM student WHERE name = 'Lera'), '05/23/2021'),
((SELECT book_id FROM book WHERE title = 'Harry Potter'), (SELECT student_id FROM student WHERE name = 'Bob'), '08/12/2021')

--  7. Display the data
--      Select all the columns from the junction table
SELECT * FROM library;

--      Select the name of the student and the title of the borrowed books
SELECT student.name, book.title
FROM student
INNER JOIN library
ON student.student_id = library.student_fk_id
INNER JOIN book
ON library.book_fk_id = book.book_id

--      Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(student.age) AS average_children
FROM student
INNER JOIN library
ON student.student_id = library.student_fk_id
INNER JOIN book
ON library.book_fk_id = book.book_id
WHERE book.title = 'Alice In Wonderland'


--      Delete a student from the Student table, what happened in the junction table ?
DELETE FROM student
WHERE name = 'Bob';
-- the entries of Bob got deleted
