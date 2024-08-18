-- 1. Count how many actors are in the table.
SELECT COUNT (*) FROM actors;


-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- Expected outcome: since all the fields have restrictions, we cannot add the data with empty values, the outcome will be error
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Ben','Affleck');