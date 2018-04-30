DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

Drop table if exists burgers;
-- truncate table parks;

create table burgers(
id INT AUTO_INCREMENT,
burger_name varchar(150) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

select * from burgers;
