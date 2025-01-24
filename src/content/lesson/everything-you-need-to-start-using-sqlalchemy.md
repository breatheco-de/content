---
slug: everything-you-need-to-start-using-sqlalchemy
title: Everything you need to know about SQLAlchemy
subtitle: SQLAlchemy is the most popular ORM for Python, start using it in 8 min.
cover_local: ../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg
date: '2023-06-22T19:44:22+00:00'
textColor: white
authors:
  - alesanchezr
  - cvazquezlos
status: published
tags:
  - SQL Alchemy
  - Python
description: >-
  Master SQLAlchemy, the top ORM for Python! Learn to simplify database
  interactions in just 8 minutes. Discover how to get started now!
---
## What is SQL Alchemy?

SQL Alchemy is an [Object-Relational Mapper/Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), or ORM: a library that developers use to create databases and manipulate their data without the need of knowing/using SQL.

There are other alternatives in Python, like Peewee, and other languages have their own ORMs like PHP Eloquent or Java Hibernate.

## Why use ORM?

ORMs have gained popularity because dealing with SQL language directly requires a lot of effort in many cases. The goal of any ORM is to simplify the maintenance of your data. This is done by creating ***objects*** to deal with database interactions.

With ORMs you won't have to type SQL again (95% of the time), and you will be able to work with objects.

### Example:

To insert a user with SQL, you have to type:

```sql
INSERT INTO user (name, last_name) VALUES ('Bob', 'Ross');
```

With an ORM your code keeps being familiar like this:

```py
user = User()
user.name = "Bob"
user.last_name = "Ross"

# Add the user to the database
db.session.add(user)

# Similar to the Git commit, what this does is save all the changes you have made
db.session.commit()
```

Just use the `db.session.commit()` function, and everything you have done with your code will be translated into SQL language code.

## Let's review the most typical database operations

### Importing and initializing the application

To use SQL Alchemy, we need to install the Python `flask` library. Once we have done that, we will establish a connection to the database and define the `db` object, which is the most important thing to start working with.

```py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)
```

### Creating our database

The first step will be defining our model:

```py
class Person(Base):
    __tablename__ = "person"

    # Here we define columns for the table "Person"
    # Notice that each column is also a normal Python instance attribute
    id = Column(Integer, primary_key = True)
    name = Column(String(250), nullable = False)

    # The serialize method converts the object to a dictionary
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
```

### INSERT: Inserting a record into the database

To insert a record in the database, it is first necessary to have the instance added. Then, add it to the database session and complete the action with a commit. The following code visualizes this functionality (replace `<username_value>` and `<email_value>` with the actual values you want to add):

```py
person = Person(username = <username_value>, email = <email_value>)
db.session.add(person)
db.session.commit()
```

### SELECT: Searching or retrieving records from the database

There are 3 ways to retrieve data from a database:

1. Fetch all records from a particular table/model using `MyModel.query.all()`
2. Fetch one single record based on its primary key using `MyModel.query.get(id)`
3. Fetch a group of records based on a query `Person.query.filter_by(arg1=value, arg2=value, ...)`

```py
# Fetch all records from a particular table/model
all_people = Person.query.all()
all_people = list(map(lambda x: x.serialize(), all_people))

# Get a single record based on its primary key, which in this case is the "id" of the person (only works with primary keys)
person = Person.query.get(3)

# Get a group of records based on a query, in this case, the string "alex" on the "name" column
all_people = Person.query.filter_by(name = "alex")
all_people = list(map(lambda x: x.serialize(), all_people))
```

### DELETE: Removing a record from the database

To delete a record from the database, it is necessary to previously select the instance to be deleted (through its primary key, the id) and delete it using `db.session.delete(person)`, according to the following example:

```py
person = Person.query.get(3)
db.session.delete(person)
db.session.commit()
```

### UPDATE: Updating a record

To modify a record, you must first select it from the database, then you can work with it by changing its properties and commit it again, as shown in the following example:

```py
person = Person.query.get(3)
person.name = "Bob"
db.session.commit()
```

## Transactions

A transaction is a sequence of operations (such as INSERT, UPDATE, SELECT) performed on your database. For a transaction to be complete, all operations must be successful. If one operation fails, the whole transaction fails.

All transactions must ensure 4 main properties (known as ACID properties): Atomicity, Consistency, Isolation and Durability.

![ACID Properties](https://github.com/breatheco-de/content/blob/master/src/assets/images/tran-1.png?raw=true)

A transaction ends with `COMMIT` or `ROLLBACK`.

### COMMIT: session.commit() 

The `COMMIT` command is used to permanently save the changes made in a transaction within the database. 

When you use INSERT, UPDATE or DELETE, the changes made with these commands are not permanent; the changes made can be undone or, in other words, we can go back.

However, when you use the COMMIT command, the changes in your database will be permanent.

### ROLLBACK: session.rollback()

The `ROLLBACK` command restores your database to your last COMMIT. You can also use it with the SAVEPOINT command to jump to a point you saved during an ongoing transaction.

Similarly, if you use UPDATE to make changes to your database, you can undo them using the ROLLBACK command, but only if you have not yet used the COMMIT command.

```py
db.session.rollback()
```

### CHECKPOINT OR SAVEPOINT

The `SAVEPOINT` command is used to temporarily save a transaction so that you can return to a certain point using the ROLLBACK command if you need to. You can use it like this:

```py
db.session.begin_nested()
```

This command can be called many times, and with each call, a checkpoint called `checkpoint` is established and has a unique identifier associated with it.

![SQL checkpoint](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-1.png?raw=true)

Let's take, for example, the case that we want to prepare a pizza, and we prepare a database in which to enter the ingredients it contains. The base of this pizza that we want to prepare has three ingredients: mozzarella, tomato and olives. Our table is going to be called 'Pizza' and, after inserting the ingredients, it would look like this: 

![SQL table pizza](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-2.png?raw=true)

In addition, we have a list of extra ingredients we can add: we choose meat first, but then change our mind and want to replace it with mushrooms. We will also add pepperoni and bacon. Let's see how this transaction would be done:

```py
# Let's suppose that we already have the base ingredients added beforehand

# Now we insert a new ingredient in the pizza, the meat
ingredient = Ingredient()
ingredient.name = "meat"
ingredient.id = 4
db.session.add(ingredient)

# Now we do COMMIT and save it in the database so that we set the ingredient in the Pizza
db.session.commit()

# We replace the fourth ingredient, which was previously the meat, with the mushrooms
ingredient = Ingredient.query.get(4)
ingredient.name = "mushrooms"
db.session.commit()

# Save a "checkpoint"
checkpoint_a = db.session.begin_nested()

# Add pepperoni to the pizza
ingredient = Ingredient()
ingredient.name = "pepperoni"
db.session.add(ingredient)
db.session.commit()

# One last "checkpoint" before adding the bacon ingredient
checkpoint_b = db.session.begin_nested()

# Add bacon
ingredient = Ingredient()
ingredient.name = "bacon"
db.session.add(ingredient)
db.session.commit()
```

Now, our 'Pizza' has the following ingredients:

![SQL Pizza model](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-3.png?raw=true)

However, before putting it in the oven, we decided we didn't want bacon, so we used the rollback:

```py
checkpoint_b.rollback()
# Back to checkpoint B, not including the bacon
```

Finally, our 'Pizza' looks like this:

![SQL Pizza model rollback](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-4.png?raw=true)

... I'm a bit hungry after reading this lesson!! Aren't you??
