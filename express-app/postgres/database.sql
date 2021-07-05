create TABLE users
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR,
    email    VARCHAR,
    password VARCHAR,
    role     VARCHAR
);

create TABLE post
(
    id      SERIAL PRIMARY KEY,
    title   VARCHAR,
    content VARCHAR,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO users (name, email, password, role)
VALUES ('Olga', 'olga@gmail.com', '123456', 'wife');

SELECT * FROM users WHERE id='1';
