-- Exercise 1
-- creating itams table
CREATE TABLE items (
item_id SERIAL PRIMARY KEY,
item_name VARCHAR (100) NOT NULL,
price SMALLINT NOT NULL
)

-- creating customers table
CREATE TABLE customers (
customer_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL
)

-- adding items to the items table
INSERT INTO items (item_name, price)
VALUES ('Small Desk', 100);

INSERT INTO items (item_name, price)
VALUES ('Large Desk', 300);

INSERT INTO items (item_name, price)
VALUES ('Fan', 80);

-- adding customers to the customer table
INSERT INTO customers (first_name, last_name)
VALUES ('Greg', 'Jones');

INSERT INTO customers (first_name, last_name)
VALUES ('Sandra', 'Jones');

INSERT INTO customers (first_name, last_name)
VALUES ('Scott', 'Scott');

INSERT INTO customers (first_name, last_name)
VALUES ('Trevor', 'Green');

INSERT INTO customers (first_name, last_name)
VALUES ('Melanie', 'Johnson');

-- using SQLto fetch:
-- all items
SELECT * FROM items;
SELECT * FROM customers;

-- All the items with a price above 80 (80 not included)
SELECT * FROM items WHERE price > 80;

-- All the items with a price below 300. (300 included)
SELECT * FROM items WHERE price <= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome? - expected outcome -> empty)
SELECT * FROM customers WHERE last_name = 'Smith';

-- All customers whose last name is ‘Jones’
SELECT * FROM customers WHERE last_name = 'Jones';

-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE last_name != 'Scott';

