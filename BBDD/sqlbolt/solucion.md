# Ejercicios sqlbolt

## Ejercicio 1
1. Find the title of each film:
- SELECT Title FROM movies;
2. Find the director of each film 
- SELECT Director FROM movies;
3. Find the title and director of each film 
- SELECT Title, Director FROM movies;
4. Find the title and year of each film 
- SELECT Title, Year FROM movies;
5. Find all the information about each film
- SELECT * FROM movies;

## Ejercicio 2
1. Find the movie with a row id of 6 
- SELECT * FROM movies WHERE id = 6;
2. Find the movies released in the years between 2000 and 2010 
- SELECT * FROM movies WHERE Year BETWEEN 2000 AND 2010;
3. Find the movies not released in the years between 2000 and 2010
- SELECT * FROM movies WHERE Year NOT BETWEEN 2000 AND 2010;
4. Find the first 5 Pixar movies and their release year
- SELECT Title, Year FROM movies WHERE Id < 6;

## Ejercicio 3
1.  Find all the Toy Story movies 
- SELECT * FROM movies WHERE Title LIKE 'Toy Story%';
2. Find all the movies directed by John Lasseter 
- SELECT * FROM movies WHERE Director LIKE 'John%';
3. Find all the movies (and director) not directed by John Lasseter 
- SELECT Title, Director FROM movies WHERE Director NOT LIKE 'John%';
4. Find all the WALL-* movies 
- SELECT Title FROM movies WHERE Title LIKE 'WALL%';

## Ejercicio 4
1. List all directors of Pixar movies (alphabetically), without duplicates
- SELECT DISTINCT Director FROM movies ORDER BY Director ASC;
2. List the last four Pixar movies released (ordered from most recent to least) 
- SELECT Title, Year FROM movies ORDER BY Year DESC LIMIT 4;
3. List the first five Pixar movies sorted alphabetically 
- SELECT Title FROM movies ORDER BY Title ASC LIMIT 5;
4. List the next five Pixar movies sorted alphabetically
- SELECT Title FROM movies ORDER BY Title ASC LIMIT 5 OFFSET 5;

