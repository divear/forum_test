CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    body VARCHAR(255),
    username VARCHAR(255)
);

CREATE TABLE coms(
    com_id SERIAL PRIMARY KEY,
    body VARCHAR(255),
    username VARCHAR(255),
    post_id SERIAL REFERENCES posts(post_id)
);