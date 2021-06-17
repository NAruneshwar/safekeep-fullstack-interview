CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);
CREATE TABLE no_of_hours(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    no_of_hours INTEGER
);