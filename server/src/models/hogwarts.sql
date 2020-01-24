--CREATE DATABASE db_tests

--DROP TABLE students;
--DROP TABLE professors;
--DROP TABLE logs;


CREATE TABLE students(
	id int primary key auto_increment not null,
	house varchar(20) not null,
    fullname varchar(45) not null,
    gender varchar(1) not null);
    
CREATE TABLE professors(
	id int not null,
    fullname varchar(45) not null,
    gender varchar(1) not null);
    
CREATE TABLE logs(
	id int primary key,
	house varchar(20) not null,
	professor int not null,
	date timestamp not null,
	value int not null);

INSERT INTO db_tests.`students`
(id,
fullname,
gender,
house)
VALUES
(1,
'Thibault',
'M',
'Gryfondor');

INSERT INTO db_tests.`professors`
(id,
fullname,
gender)
VALUES
(1,
'Harry',
'F');

INSERT INTO db_tests.`logs`
(id,
house,
professor,
date,
value)
VALUES
(1,
'Grifondor',
1,
NOW(),
10);
