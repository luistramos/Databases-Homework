# Class Database

## Submission

Below you will find a set of tasks for you to complete to set up a databases of students and mentors.

To submit this homework write the correct commands for each question here:

```sql
## Answers
1. create database cyf_classes;

2. create table mentors (
	id serial primary key,
	name varchar(30) not null unique,
	years_glasgow int,
	address varchar(60),
	fav_lang_programming varchar(30));
      
3. insert into mentors (name, years_glasgow, address, fav_lang_programming)
	values	('Isard', 4, 'Isard Street 3', 'JavaScript'),
			('Ricard', 1, 'Can Ribalta', 'Java'),
			('Ali', 2, 'Congress', 'JS'),
			('Vicent', 0, 'pipo street', 'html'),
			('Ananda', 9, 'Carmel Street', 'CSS'); 

4. create table students (
	id serial primary key,
	name varchar (30)not null unique,
	addres varchar (60),
	graduated_from_Code_Your_Future boolean);

5. insert into students(name, addres, graduated_from_Code_Your_Future)
	values('Luis', 'Avenida Ramos 45', true),
		('Alexander', 'Diagonal 599', false),
		('Andrea', 'Glories 30', true),
		('Karelys', 'Avenida Clot', true),
		('Oliver', 'baker street 221b', false),
		('Gabriel', 'El Masnou', true),
		('Laura', 'Gran Avenida, 7º', true),
		('Linda', 'Monserrat, 15º', true),
		('Oswaldo', 'Calle nueva, 34º', true),
		('Nata', 'Calle Vieja, 5', true);
      
6. select * from mentors;
   select * from students;

7. create table classes (
	id serial primary key,
	mentor_id int references mentors (id),
	tema varchar (30),
	date_class date,
	location varchar (60));

8. insert into classes (mentor_id,tema,date_class,location)
	values (4,'HTML','2022-12-17','Barcelona'),
		(1,'NODEJS','2022-12-13','Barcelona'),
		(5,'REACT','2023-01-10','Barcelona'),
		(2,'DATEBASE','2023-01-14','Barcelona');

9. create table attendance (
  	id serial primary key,
  	student_id int references students (id),
  	class_id int references classes (id));

	insert into attendance (student_id, class_id)
		values (1,1), (2,1), (3,1), (4,2), (5,2), (6,2), (7,3), (8,3), (9,4), (10,4);

10. a) Retrieve all the mentors who lived more than 5 years in Glasgow
 		select * from mentors
			where years_glasgow > 5;
	b) - Retrieve all the mentors whose favourite language is Javascript
		select * from mentors
			where fav_lang_programming  = 'JavaScript';
	c) Retrieve all the students who are CYF graduates
		select * from students
			where  graduated_from_Code_Your_Future =true;
	d) Retrieve all the classes taught before June this year
		select * from classes
			where  date_class < '2023-06-01';
 	e) Retrieve all the students (retrieving student ids only is fine) who attended the Javascript class
		(or any other class that you have in the `classes` table).
	 	select * from attendance;
 		
```

When you have finished all of the questions - open a pull request with your answers to the `Databases-Homework` repository.

## Task

1. Create a new database called `cyf_classes` (hint: use `createdb` in the terminal)
2. Create a new table `mentors`, for each mentor we want to save their name, how many years they lived in Glasgow, their address and their favourite programming language.
3. Insert 5 mentors in the `mentors` table (you can make up the data, it doesn't need to be accurate ;-)).
4. Create a new table `students`, for each student we want to save their name, address and if they have graduated from Code Your Future.
5. Insert 10 students in the `students` table.
6. Verify that the data you created for mentors and students are correctly stored in their respective tables (hint: use a `select` SQL statement).
7. Create a new `classes` table to record the following information:

   - A class has a leading mentor
   - A class has a topic (such as Javascript, NodeJS)
   - A class is taught at a specific date and at a specific location

8. Insert a few classes in the `classes` table
9. We now want to store who among the students attends a specific class. How would you store that? Come up with a solution and insert some data if you model this as a new table.
10. Answer the following questions using a `select` SQL statement:
    - Retrieve all the mentors who lived more than 5 years in Glasgow
    - Retrieve all the mentors whose favourite language is Javascript
    - Retrieve all the students who are CYF graduates
    - Retrieve all the classes taught before June this year
    - Retrieve all the students (retrieving student ids only is fine) who attended the Javascript class (or any other class that you have in the `classes` table).
