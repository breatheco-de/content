---
title: "Build and operate database with SQL Alchemy"
subtitle: "SQLAlchemy in its version 2 allows us to manage our database as if they were ordinary objects in the code. Learn how to take advantage of this powerful ORM."
tags: ["python","databases","sqlalchemy","sql"]

---
## What are ORMs and what are they useful for?

ORM stands for Object-Relational Mapping. It is a programming technique that connects the object-oriented programming (OOP) world of code with the relational world of databases. In simpler terms, it acts as a translator between the way you represent data in your code using objects and the way data is stored in relational databases using tables and relationships.

ORMs simplify the process of accessing and manipulating data in databases from code. They provide a layer of abstraction that protects you from the complexities of SQL queries and allows you to work with data using objects and their relationships, just as you would in any object-oriented programming application.

Among its benefits are:

- **Simplifies data access:** Works with objects instead of complex SQL queries.

- **Improves productivity:** Reduces development and code maintenance time.

- **Promotes modularity:** Separates business logic from data management.

- **Increases portability:** Facilitates database change without modifying the code.

## What is SQLAlchemy?

SQL Alchemy is a popular Python SQL and Object Relational Mapper (ORM) toolkit that provides a complete set of tools for interacting with databases from within Python applications. It offers a powerful and flexible API that allows developers to perform a wide range of database operations. Key features include.

- **Object-Relational Mapping (ORM):** SQL Alchemy's ORM capabilities allow you to work with database data using Python objects, simplifying data access and manipulation.

- **Basic SQL query API:** SQL Alchemy provides a powerful and flexible API for building and executing SQL queries, including support for both raw SQL and a declarative query builder.

- **Database abstraction layer:** SQL Alchemy abstracts from the underlying database engine, allowing you to write database-independent code that can be easily ported to different databases.

- **Event system:** SQL Alchemy has an event system that allows you to connect to various stages of database operations, such as before and after query execution.

- **Broad ecosystem:** SQL Alchemy has support for integration with various complementary tools, such as `flask-sqlalchemy` for integration with apis Flask, or `alembic` that allows you to manage migrations in a simple way.

Overall, SQL Alchemy is a powerful and versatile tool that has become the de facto standard for Python database development. Its rich feature set, flexibility and ease of use make it an invaluable asset for creating robust and scalable data-driven applications.

> Learn how to build an api with Flask in [this article](https://4geeks.com/lesson/building-apis-with-python-flask).

## Build your database model

The first step in database creation is modeling, but if you want to know how to build a good model based on your application requirements we recommend that you review [our data modeling article](https://4geeks.com/lesson/database-modeling). For this article we are going to assume that you already know what tables you need, what columns they should have and how they all relate to each other.

To take the tables from the model to the database you have to start with a `Base` class, which is created from another one called `DeclarativeBase` from SQLAlchemy.

```python
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass

```

This base class will be used to create the tables and later generate the connection with which we will do the operations.

## How to define a table?

From the base class we can create other classes that will be converted into tables of our database, and that you will be able to use from the code of your application to consult or to manipulate information. Let's analyze how a class for a films table looks like:

```python
class Films(Base):
    __tablename__ = "films"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100))
    release_date: Mapped[date] = mapped_column(Date)
```

1. The `__tablename__` property corresponds to the final name that the table will have in the database. It is recommended to use lower case and avoid the use of special characters.

2. The `id` property is mapped as an integer (int) and is indicated as corresponding to a primary key column. SQLAlchemy interprets this and creates a numeric sequence that is incremented with each row or record inserted.

3. The `title` column is mapped as a string field (str) and is indicated to correspond to a `String(100)` column where the number represents the maximum text length that can be stored in that field.

4. Finally the `release_date` column is mapped as the previous ones, but with a `date` data type to store dates.

With this we have already defined a class that later will be converted into a database table. Additionally we can also add other functions that can help us to represent or manipulate the data of the model, as well as more columns of any of the [data types supported by SQLAlchemy](https://docs.sqlalchemy.org/en/20/core/types.html)

## Relationships between tables

The main purpose of relational databases is precisely the association of different entities through their relationships, and SQLAlchemy has all the tools to define these relationships from Python code without having to touch SQL. Suppose that, in addition to the `Films` table defined in the previous section, you also have an `Actors` table with the information of the actors in the Hollywood industry.

```python
class Actors(Base):
    __tablename__ = "actors"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    date_of_birth: Mapped[date] = mapped_column(Date)
```

If you want to make a database of movies including the actors appearing in them (IMDB style) it is necessary to define this relationship in the model. Since an actor can appear in many movies, and in turn a movie can have many actors, we have a `many to many` relationship. For this transient relationship we need what is known as a **pivot table**, using a name to identify the relationship, this table will be called `Cast`.

```python
class Cast(Base):
    __tablename__ = "cast"
    id: Mapped[int] = mapped_column(primary_key=True)
    # Relationship with actors
    actor_id = mapped_column(ForeignKey("actors.id"))
    actor: Mapped["Actors"] = relationship(back_populates="movies")

    # Relationship with films
    film_id = mapped_column(ForeignKey("films.id"))
    film: Mapped["Films"] = relationship(back_populates="characters")
```

### How is the relationship defined?

1. **Foreign key:** This refers to the foreign key to which the entity is related. It should be noted that in a `one-to-many` relationship the foreign key is placed at the `many` end of the relationship. In this case, since `one actor can be in many casts`, the foreign key is placed in the cast table.

2. **Relationship mapping:** In addition to the foreign key, SQLAlchemy allows us to map the entity with which we have a relationship thanks to the `relationship` properties. This generates a direct reference to the object to which it is related and allows access to it from the code without the need for an additional query.

3. **Filling backwards:** In addition to the mapping of the relationship in the entity, it is also possible to generate the same reference in the opposite direction towards the foreign entity. In this case, it is possible to create a property in the `Actors` entity that makes reference to all the casts where it appears. To do so, the `back_populates` parameter is used, specifying the name of the relationship in the foreign entity that will make the reference.

```python
class Actors(Base):
    __tablename__ = "actors"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    date_of_birth: Mapped[date] = mapped_column(Date)
    movies: Mapped[List["Cast"]] = relationship(back_populates="actor")


class Cast(Base):
    __tablename__ = "cast"
    id: Mapped[int] = mapped_column(primary_key=True)
    # Relationship with actors
    actor_id = mapped_column(ForeignKey("actors.id"))
    actor: Mapped["Actors"] = relationship(back_populates="movies")
    # Relationship with Films
    film_id = mapped_column(ForeignKey("films.id"))
    film: Mapped["Films"] = relationship(back_populates="characters")

class Films(Base):
    __tablename__ = "films"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100))
    release_date: Mapped[date] = mapped_column(Date)
    characters: Mapped[List["Cast"]] = relationship(back_populates="film")

```

Here we highlight the following:

- We see how 2 entities relate to each other using `relationship` properties where each points to the relationship attribute of the other, and being mapped to the entity type of their relationship.

- Although entities have `relationship` properties only `Cast` has `ForeignKey` since it corresponds to it because it is the `many` end of the relationships: both an Actor and a movie have many Casts.

- Because an `Actor` can appear in many `Cast` the `movies` relationship maps as a list of Casts, while at the other end of the relationship an actor is directly of type `Actors`. The same happens in the `Film` relationship where `characters` is a list of `Cast`.

- When mapping relationships to other entities, the name of the entity is specified in quotes and respecting capitalization, for example `actor: Mapped["Actors"]`. This is so that the relationships are not affected by the order in which the classes appear in the code, which allows in this case to have mapped `movies: Mapped[List["Cast"]]` being that `Cast` is defined further down in the code.

Finally let us remember that `many-to-many` relationships, such as the case of movies with actors, are in practice two one-to-many relationships of both entities with a pivot table. In this case the `Cast` entity is the pivot and just as its relationship with the Actors was defined, the same must be done with the Films to complete the relationship.

## CRUD Operations

In order to perform operations with the database and our models it is necessary to generate a session with which to perform the operations.

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# You can add the 'echo=True' parameter to the following line to see how the SQL code of the library works
engine = create_engine("postgresql://user:password@server.com:5432/example", echo=False)

Session = sessionmaker(bind=engine)
session = Session()
```

The `session` object will be the one used to perform the database operations.

### **C**reate

To create a new `Films` record, you can instantiate a Movies object and set its attributes, then add it to the session and commit the changes:

```python
# Create a new film record
new_film = Films(title="The Shawshank Redemption", release_date=datetime.date(1994, 9, 23))

# Add the new film to the session
session.add(new_film)

# Commit the changes to the database
session.commit()

```

### **R**ead

To retrieve existing movie records, you can use queries created with the SQLAlchemy query API. This is an example of searching for all movies:

```python
# Fetch all films
query = select(Planets)
films = self.session.scalars(query).all()

for film in films:
    print(f"Film: {film.title}, Release Date: {film.release_date}")
```

You can also use filters to retrieve specific movies based on certain criteria:

```python
query = select(Films).filter_by(id=id)
film = session.scalars(query).first()

if film:
    print(f"Film found: {film.title}, Release Date: {film.release_date}")
else:
    print("Film not found")
```

### **U**pdate

To update an existing movie record, you must obtain the `Flims` object to be updated, modify its attributes and commit the changes:

```python
# Search for the movie with id 1
query = select(Films).filter_by(id=1)
film = self.session.scalars(query).first()
if (film is None):
    print("Film not found")
    return None
# Update the title and confirm the changes
film.title="New title"
session.add(film)
session.commit()
```

### **D**elete

To delete an existing movie record, you must get the `Films` object and delete it from the session, similar to the update case but changing the last step:

```python
# Search for the movie with id 1
query = select(Films).filter_by(id=1)
film = self.session.scalars(query).first()
if (film is None):
    print("Film not found")
    return None
session.delete(film)
session.commit()
```

### Registering relationships

Once the relationships have been defined, you can access the related objects using the defined relationship attributes. Returning to the example of the relationship of actors to the casts of each movie, you can obtain the actors of a given movie by first querying the movie object:

```python
query = select(Films).filter_by(id=1)
film = session.scalars(query).first()

for character in film.characters:
    print(f"Actor: {character.actor.name}")

```

To add related objects to an existing object, you can add them to the relationship attribute corresponding to the foreign key. For example, to add an actor to the cast of a movie, actor and movie must already exist, once obtained they can be added to the `Cast` table:

```python
# The film is obtained
query = select(Films).filter_by(id=1)
film = session.scalars(query).first()

# Actor is obtained
query = select(Actor).filter_by(id=1)
actor = session.scalars(query).first()

# Cast is added
cast=Cast(actor_id=people_id,film_id=film_id)
session.add(cast)
session.commit()

```

>**To manipulate relationships you just edit the `ForeignKey` fields like any other field. The values of the `ForeignKey` fields must previously exist in the table where the relationship points to.**

## Test yourself

You already have all the information you need to start implementing SQLAlchemy databases in your Python applications. Remember that you are not limited to just APIs, you can also use SQLAlchemy in Data Science, Machine Learning, Electronics, Internet of Things (IOT) applications and much more.

[Continue learning about SQL Alchemy, build projects and complete interactive tutorials.](https://4geeks.com/technology/sql-alchemy)
