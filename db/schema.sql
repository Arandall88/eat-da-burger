DROP DATABASE if exists  burger_db;
CREATE DATABASE burger_db;
USE burger_db;


CREATE TABLE burger_db
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(127) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)
);
