DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50)
)