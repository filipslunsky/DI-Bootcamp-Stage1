-- Exercise 1
-- 1. Use SQL to get the following from the database:
--      1. All items, ordered by price (lowest to highest).
SELECT *
FROM items
ORDER BY price ASC;

--      2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

--      3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

--      4. All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY first_name DESC;


-- Exercise 2
-- 1. In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT *
FROM customer;

-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT(first_name, ' ', last_name)
AS full_name
FROM customer;

-- 3. Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date
FROM customer;

-- 4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.

SELECT *
FROM customer
ORDER BY first_name ASC;

-- 5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_ID, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT customer.first_name, customer.last_name, address.address, address.phone
FROM customer
INNER JOIN address
ON customer.address_id = address.address_id
WHERE address.district = 'Texas';

-- 7. Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8. Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT DISTINCT film.film_id, film.title, film.description, film.length, film.rental_rate
FROM inventory
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE title = 'Batman Begins';

-- 9. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT DISTINCT film.film_id, film.title, film.description, film.length, film.rental_rate
FROM inventory
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE title LIKE 'Ba%';

-- 10. Write a query which will find the 10 cheapest movies.
SELECT *
FROM film
ORDER BY replacement_cost ASC
LIMIT 10;

-- 11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
SELECT *
FROM film
ORDER BY replacement_cost ASC
LIMIT 10
OFFSET 10;

-- Bonus: Try to not use LIMIT.
WITH ranked_films AS (
    SELECT title, replacement_cost, 
           ROW_NUMBER() OVER (ORDER BY replacement_cost ASC) AS row_num
    FROM film
)
SELECT title, replacement_cost
FROM ranked_films
WHERE row_num BETWEEN 11 AND 20;

-- 12. Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM payment
INNER JOIN customer
ON customer.customer_id = payment.customer_id
ORDER BY payment.payment_id;

-- 13. You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT film.film_id, film.title
FROM film
LEFT JOIN inventory
ON film.film_id = inventory.film_id
WHERE inventory.film_id IS NULL;

-- 14. Write a query to find which city is in which country.
SELECT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;

-- 15. Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id ASC;
