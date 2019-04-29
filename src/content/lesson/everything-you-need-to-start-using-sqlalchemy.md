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

## Whay is SQL Alchemy

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
  ```
