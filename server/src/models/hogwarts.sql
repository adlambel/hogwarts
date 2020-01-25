DROP TABLE students;
DROP TABLE professors;
DROP TABLE logs;


CREATE TABLE students(
	id int primary key auto_increment not null,
	house varchar(20) not null,
    firstname varchar(45) not null,
	lastname varchar(45) not null,
    gender varchar(1) not null);
    
CREATE TABLE professors(
	id int primary key auto_increment not null,
	firstname varchar(45) not null,
	lastname varchar(45) not null,
    gender varchar(1) not null);
    
CREATE TABLE logs(
	id int primary key auto_increment not null,
	house varchar(20) not null,
	professor int not null,
	date timestamp not null,
	value int not null);

INSERT INTO db_tests.`students`
( id,
  firstname,
	lastname,
gender,
house)
VALUES
(1,
'Thibault',
'grouet',
'M',
'Gryfondor');

INSERT INTO db_tests.`professors`(
	id,
    firstname,
	lastname,
	gender)
VALUES
(1,
'Harry',
'Potter',
'F');

INSERT INTO db_tests.`logs`
(id,
house,
professor,
date,
value)
VALUES
(1,
'Gryffindor',
1,
NOW(),
10);

INSERT INTO db_tests.`logs`
(id,
house,
professor,
date,
value)
VALUES
(2,
'Hufflepuff',
1,
NOW(),
20);

INSERT INTO db_tests.`logs`
(id,
house,
professor,
date,
value)
VALUES
(3,
'Ravenclaw',
1,
NOW(),
100);

INSERT INTO db_tests.`logs`
(id,
house,
professor,
date,
value)
VALUES
(4,
'Slytherin',
1,
NOW(),
100);