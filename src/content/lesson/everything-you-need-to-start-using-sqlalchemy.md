---
slug: "everything-you-need-to-start-using-sqlalchemy"
title: "Everything you need to know about SQLAlchemy"
subtitle: "SQLAlchemy is the most populer ORM for Python, start using it in 8min"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
date: "2020-10-19T16:36:31+00:00"
textColor: "white"
authors: ["alesanchezr"]
status: "published"
tags: ["sql alchemy","python"]

---

## What is SQL Alchemy

SQL Alchemy is an [Object-Relational Mapper / Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), or ORM: a library that developers use to create databases and manipulate their data without the need of knowing/using SQL.

There are other alternatives to it like SQLAlchemy like Peewee, and other languages have their own ORM's like PHP Eloquent or Java Hibernate.

## Why Use ORM?

ORM's have gained popularity because dealing with SQL language directly requires a lot of effort in many cases. The goal of any ORM is to simplify the maintenance of your data. This is done by creating ***objects*** to deal with database interactions.

With ORM you won't have to type SQL again (95% of the time) and you will be able to work with objects.

### Example:

To insert an user with SQL you have to type:

```sql
INSERT INTO user (name, last_name) VALUES ('Bob', 'Ross');
```

With an ORM your code keeps being familiar like this:

```py
user = User()
user.name = 'Bob'
user.last_name = 'Ross'

db.session.commit()
```
You can just say: `db.session.commit()` and all the things you have done in your code will be translated into SQL language code.

## Let's review the most typical database operation

## Creating our database


The first step will be defining our model

```py
class Person(Base):
    __tablename__ = 'person'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
  ```

### INSERT: Inserting a Database Record

All you have to do is create a new Person object, add it into the database session and commit!
Just replace `<username_value>` and `<email_value>` with the real values you want added below.

```py
person = Person(username=<username_value>, email=<email_value>)
db.session.add(person)
db.session.commit()
```

### SELECT: Fetching / Retrieving Records

There are 3 ways to retrieve data from a database:
    1. Fetch all record from a particular Table/Model using `MyModel.query.all()`
    2. Fetch one single record based on its primary key using `MyModel.query.get(id)`
    3. Fetch a group of records based on a query `Person.query.filter_by(arg1=value, arg2=value, ...)`

```py
# here is how to fetch all people
all_people = Person.query.all()
all_people = list(map(lambda x: x.serialize(), all_people))

# here is how to fetch a group of people with name = alex
all_people = Person.query.filter_by(name='alex')
all_people = list(map(lambda x: x.serialize(), all_people))

# here is how to fetch the person with id=3 (only works with primary keys)
person = Person.query.get(3)
```

### DELETE: Removing a Database Record.

All you have to do is create a new Person object, add it into the database session and commit!

```py
person = Person.query.get(3)
db.session.delete(person)
db.session.commit()
```

### UDPATE: Updating a Record

To update you need first to retrieve/select the record from the database, then you can update whatever property you like and commit again.

```py
person = Person.query.get(3)
person.name = "Bob"
db.session.commit()
```
## Transactions

A transaction is a sequence of operations (like INSERT, UPDATE, SELECT) made on your database, performed as one single work of unit. In other words, a transaction will never be complete unless each individual operation within the group is successful. If any operation within the transaction fails, the entire transaction fails.

Transactions have the following 4 standard properties(known as ACID properties):

![Transactions](../../assets/images/tran-1.png)

A transaction ends with COMMIT or ROLLBACK. 

### COMMIT command

COMMIT command is used to permanently save any transaction into the database.

When we use INSERT, UPDATE or DELETE, the changes made by these commands are not permanent, until the current session is closed, the changes made by these commands can be rolled back.

To avoid that, we use the COMMIT command to mark the changes as permanent.

### ROLLBACK command

This command restores the database to last commited state. It is also used with SAVEPOINT command to jump to a savepoint in a ongoing transaction.

If we used the UPDATE command to make some changes into the database, and realize that those changes were not required, the we can use the ROLLBACK command to rollback those changes, if they were not commited using the COMMIT command like this:

```jsx
ROLLBACK TO savepoint_name;
```
### SAVEPOINT command

SAVEPOINT command is used to temporarily to save a transaction so that you can rollback to that state using the ROLLBACK command whenever you need to, you can use like this:
```jsx
SAVEPOINT savepoint_name;
```
So when we use this command we can **name** the different states of our data using the ROLLBACK command whenever we need to.

![SQL](../../assets/images/sql-1.png)

Let's say we go out to have some pizza. Our pizza comes with three ingredients basic ingredients:
mozzarella, tomato, olives. Our table would look like this and its name its 'PIZZA': 

![SQL](../../assets/images/sql-2.png)

But we have a list of extra ingredients we can add to it: first we choose meat but then we change our mind and we want to add mushrooms instead. We would also like to add some pepperoni and bacon. Let see how could we do that:

```jsx
INSERT INTO class PIZZA(4, 'meat');

COMMIT; 

UPDATE class SET ingredient = 'mushrooms' WHERE id '4'

SAVEPOINT A;

INSERT INTO class PIZZA (5, 'pepperoni')

SAVEPOINT B

INSERT INTO class PIZZA (6, 'bacon')
```

Now our 'Pizza' has the following ingredients:

![SQL](../../assets/images/sql-3.png)

Now we have decided we no longer want bacon, so we use ROLLBACK:

```jsx
ROLLBACK TO B;
```
and our pizza looks like this:

![SQL](../../assets/images/sql-4.png)

....I'm a bit hungry after reading this lesson!! aren't you??


















  
