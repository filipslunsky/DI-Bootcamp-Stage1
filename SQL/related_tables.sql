-- PARENT TABLE

CREATE TABLE colors(
color_id SERIAL PRIMARY KEY,
color_name VARCHAR (50)
)

INSERT INTO colors (color_name) VALUES
('Red'), ('Blue'), ('Green'), ('Yellow')

SELECT * FROM colors

-- CHILD TABLE: OPTIONS FOR DELETE/UPDATE
-- OPTION 1.: RESTRICT
CREATE TABLE cars_restrict (
car_id SERIAL PRIMARY KEY,
car_name VARCHAR (50),
car_color_id INTEGER REFERENCES colors (color_id) ON DELETE RESTRICT
)

INSERT INTO cars_restrict (car_name, car_color_id) VALUES
('Toyota', 1),
('Ford', 2),
('Honda', 3),
('Mazda', 2)

DELETE FROM colors
WHERE color_id = 2
-- returns error because of the restriction

INSERT INTO colors (color_name) VALUES ('Purple')

DELETE FROM colors
WHERE color_id = 5
-- no error because this is not related to any child entry

UPDATE colors
SET color_name = 'Bordo'
WHERE color_id = 1;
 -- no error because the entry is still in the parent table, just modified

-- OPTION 2.: CASCADE
-- the record will be deleted but it will also remove the record in the parent table
CREATE TABLE cars_cascade(
car_id SERIAL PRIMARY KEY,
car_name VARCHAR (50),
car_color_id INTEGER REFERENCES colors(color_id) ON DELETE CASCADE
)
-- deleted the cars with the same color

-- Exercise
CREATE TABLE cars_set_default(
car_id SERIAL PRIMARY KEY,
car_name VARCHAR(50),
car_color_id INTEGER DEFAULT 1 REFERENCES colors (color_id) ON DELETE SET DEFAULT ON UPDATE SET DEFAULT
)

INSERT INTO cars_set_default (car_name, car_color_id) VALUES
('Toyota',1),
('Ford', 4),
('Honda', 3),
('Mazda', 1)

DELETE FROM colors
WHERE color_id = 4;
-- doesn't return error, just sets cars of deleted color to the default value

