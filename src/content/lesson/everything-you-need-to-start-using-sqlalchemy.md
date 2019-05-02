---
slug: "everything-you-need-to-start-using-sqlalchemy"
title: "Everything you need to know about SQLAlchemy"
subtitle: "SQLAlchemy is the most populer ORM for Python, start using it in 8min"
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
date: "2019-04-28"
textColor: "white"
authors: ["alesanchezr"]
status: "published"

tags: ["sql alchemy", "python"]
---

## What is SQL Alchemy

Is an ORM: a library that developers use to create databases and manipulate their data without the need of knowing/using SQL.

There are other alternatives to it like SQLAlchemy like Peewee, and other languages have their own ORM's like PHP Eloquent or Java Hibernate.

## Why using it?

There is a lot of debate around this, ORM's gain popularity because dealing with SQL language directly requiers a lot of effort and on the mayority of the cases.

Basically with ORM you won't have to type SQL again (95% of the time) and you will be able to work with objects.

### For example:

To insert an user with SQL you have to type:

```sql
INSERT INTO user (name, last_name) VALUES ('Juan', 'McDonals');
```

With an ORM your code keeps beign familiar code like this:

```py
user = User()
user.name = 'Juan'
user.last_name = 'McDonals'

db.session.commit()
```
You can just say: `db.session.commit()` and all the things you have done in your code will be translated into SQL language code.

## Lets review the most typical database operation

### Defining our Model/Tables
=======
user.save()
```

You can just say: `user.save()` and the ORM will translate this into SQL.

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

### INSERT: Inserting a database record

All you have to do is create a new Person object, add it into the database session and commit!
Replace `<username_value>` and `<email_value>` with the real person values you want to add.

```py
person = Person(username=<username_value>, email=<email_value>)
db.session.add(person)
db.session.commit()
  ```

### SELECT: Fetching or retrieving records

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

### DELETE: Removing a database record.

All you have to do is create a new Person object, add it into the database session and commit!

```py
person = Person.query.get(3)
person.delete()
db.session.commit()
  ```

### UDPATE: Updating a record

TO update you need first to retrieve/select the record from the database, then you can update whatever property you like and commit again.
```py
person = Person.query.get(3)
person.name = "Bob"
db.session.commit()
```


