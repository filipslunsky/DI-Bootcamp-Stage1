-- Exercise 1
--      1. Get a list of all the languages, from the language table.
SELECT name FROM language;

--      2. Get a list of all films joined with their languages – select the following details : film title, description, and language name
SELECT film.title, film.description, language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

--      3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id;

--      4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
new_film_id SERIAL PRIMARY KEY,
new_film_name VARCHAR(100) NOT NULL
);

INSERT INTO new_film(new_film_name) VALUES
('Harry Potter and the Sorcerers Stone'),
('Harry Potter and the Chamber of Secrets'),
('Harry Potter and the Prisoner of Azkaban'),
('Harry Potter and the Goblet of Fire'),
('Harry Potter and Order of Phoenix'),
('Harry Potter and the Half Blood Prince'),
('Harry Potter and the Deathly Hallows 1'),
('Harry Potter and the Deathly Hallows 2'),
('Harry Potter and the Cursed Child');

--      5. Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY,
film_id SMALLINT REFERENCES new_film(new_film_id) ON DELETE CASCADE,
language_id SMALLINT REFERENCES language(language_id),
title VARCHAR (50),
score SMALLINT,
review_text VARCHAR (500),
last_update DATE
);

--      6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update) VALUES
((SELECT new_film_id FROM new_film WHERE new_film_name = 'Harry Potter and the Prisoner of Azkaban'),
(SELECT language_id FROM language WHERE name = 'English'),
'A Cinematic Marvel', 10, 'Alfonso Cuaron made an absolutely amazing transition from paper to the screen. No words to describe, must watch.',
'08/20/2024'),
((SELECT new_film_id FROM new_film WHERE new_film_name = 'Harry Potter and the Cursed Child'),
(SELECT language_id FROM language WHERE name = 'English'),
'Please Just Do Not', 1, 'I cannot help but wonder who in their right mind let this happen.',
'08/20/2024');

--      7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE new_film_name = 'Harry Potter and the Cursed Child';

-- SELECT * FROM customer_review; returns only the review for the undeleted movie, i.e. HP and the Cursed Child vanished from there as it positively should

-- Exercise 2
--      1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title = 'Ace Goldfinger';

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title = 'Agent Truman';

--      2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- there is one foreign key, i.e. address_id which means we need to get the address_id from address table like so:
-- INSERT INTO customer (..., address_id...) VALUES (..., (SELECT address_id FROM address WHERE address = '' AND postal_code = ''), ...)

--      3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
-- just checked if there are other tables dependent on it, since there are not and it is only dependent on new_film and language, it is no problem, table dropped

--      4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(*)
FROM rental
WHERE return_date IS NULL;

--      5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.film_id, film.title, film.rental_rate, inventory.inventory_id, rental.return_date
FROM rental
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON film.film_id = inventory.film_id
WHERE rental.return_date IS NULL
ORDER BY rental_rate DESC
LIMIT 30;

--      6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--              1. The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT DISTINCT film.title, film.description, actor.first_name, actor.last_name
FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo wrestler%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

--              2. The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT film.title, film.description, film.length, film.rating, category.name
FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id
INNER JOIN category
ON film_category.category_id = category.category_id
WHERE film.rating = 'R' AND film.length < 60 AND category.name = 'Documentary';


--              3. The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title, rental.return_date, film.rental_rate, customer.first_name, customer.last_name
FROM rental
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
INNER JOIN payment
ON rental.rental_id = payment.rental_id
INNER JOIN customer
ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND film.rental_rate > 4 AND rental.return_date > '07/28/2005' AND rental.return_date < '08/01/2005';

--              4. The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT film.title, film.description, film.replacement_cost, customer.first_name, customer.last_name
FROM rental
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
INNER JOIN customer
ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND (film.description ILIKE '%boat%' OR film.title ILIKE '%boat%')
ORDER BY replacement_cost DESC;



    