-- IMPORTING FROM CSV
CREATE TABLE friends(
id SERIAL PRIMARY KEY,
f_name VARCHAR (50),
l_name VARCHAR (100)
)

COPY friends
FROM '/Users/filipslunsky/Public/friends_import.csv' 
-- on Windows it should be in Public, on Mac it should be in Tmp
DELIMITER ',' CSV HEADER;

-- EXPORTING TO CSV
COPY friends (id, f_name, l_name)
TO '/Users/filipslunsky/Public/friends_export.csv'
DELIMITER ',' CSV HEADER;