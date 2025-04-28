---
slug: everything-you-need-to-start-using-sqlalchemy
title: Everything You Need to Know About SQLAlchemy
authors:
  - alesanchezr
  - cvazquezlos
tags:
  - SQL Alchemy
  - Python
description: >-
  Discover how to use SQLAlchemy, the most popular ORM for Python. Learn to
  handle databases easily in just 8 minutes. Start now!
---
## What is SQL Alchemy?

SQLAlchemy is an [Object-Relational Mapper/Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), or ORM, a library that developers use to create databases and manipulate their data without needing to know/use SQL.

There are other alternatives in Python like Peewee, and other languages have their own ORMs, such as PHP Eloquent or Java Hibernate.

## Why use an ORM?

ORMs have gained popularity because dealing with SQL directly requires significant effort in most cases. The goal of an ORM is to simplify data maintenance. This is done by creating ***objects*** to handle database interactions.

Basically, with an ORM you won't need to write SQL again (95% of the time) and can work with objects.

### For example:

To insert a user with SQL you have to write:

```sql
INSERT INTO user (name, last_name) VALUES ('Bob', 'Ross');
```

With an ORM, your code remains familiar like this:

```py
user = User()
user.name = "Bob"
user.last_name = "Ross"

# Add the user to the database
db.session.add(user)

# Similar to Git commit, this function saves all changes you've made
db.session.commit()
```

Just use the `db.session.commit()` function, and everything you've done with your code will be translated into SQL code.

## Let's review the most common database operations

### Importing and initializing the application

To use SQLAlchemy, we need to install the Python `flask` library. Once done, we'll establish a database connection and define the `db` object, which is essential to start working with it. The documentation shows two implementation methods: traditional (legacy projects) and modern (recommended).

```py
from flask import Flask
from sqlalchemy.orm import Mapped, mapped_column # Only needed in modern method
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)
```

### Creating our database

The first step would be defining our model.

- Traditional Method
```py
class Person(db.Model):
    # Here we define the table name "Person"
    __tablename__ = "person" # Optional since it uses the class name by default.

    # Note that each column is also a normal Python instance attribute
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)

    # The serialize method converts the object to a dictionary
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
```

- Modern Method
```py
class Person(Base):
    # Here we define the table name "Person"
    __tablename__ = "person" # Optional since it uses the class name by default.

    # Note that each column is also a normal Python instance attribute
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(unique=False, nullable=False)

    # The serialize method converts the object to a dictionary
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
```

### INSERT: Inserting a record into the database

To insert a record into the database, you first need the instance you want to add. Then add it to the database session and complete the action with a commit. The following code shows this functionality (replace `<username_value>` and `<email_value>` with actual values you want to add):

```py
person = Person(username = <username_value>, email = <email_value>)
db.session.add(person)
db.session.commit()
```

### SELECT: Searching or retrieving records from the database

There are 3 ways to get information from the database:

1. Get all records from a particular table/model using `MyModel.query.all()`
2. Get a single record based on its primary key using `MyModel.query.get(id)`
3. Get a group of records based on a query `Person.query.filter_by(arg1=value, arg2=value, ...)`

```py
# Get all records from a particular table/model, in this case, Person
all_people = Person.query.all()
all_people = list(map(lambda x: x.serialize(), all_people))

# Get a single record based on its primary key, which in this case is the person's "id" (only works with primary keys)
person = Person.query.get(3)

# Get a group of records based on a query, in this case, the string "alex" in the "name" column
all_people = Person.query.filter_by(name = "alex")
all_people = list(map(lambda x: x.serialize(), all_people))
```

Starting with SQLAlchemy 2.x, these queries are done with `execute`

```py
from sqlalchemy import select

# Get all records
all_people = db.session.execute(select(Person)).scalars().all()

# Get a record by ID
person = db.session.get(Person, 3)  # Recommended direct method
# Alternative with execute:
person = db.session.execute(select(Person).where(Person.id == 3)).scalar_one_or_none()

# Filter records
people = db.session.execute(
    select(Person).where(Person.name == "alex")
).scalars().all()

# Advanced filters
from sqlalchemy import or_
people = db.session.execute(
    select(Person).where(or_(Person.name == "alex", Person.age > 25))
).scalars().all()
```

# Differences Between `query` and `db.session.execute()` Methods

## Comparison Table of Common Operations

| Operation               | Traditional Method (`query`)                     | Modern Method (`db.session.execute()`)        |
|-------------------------|------------------------------------------------|-----------------------------------------------|
| **All records**  | `Model.query.all()`                            | `db.session.execute(select(Model)).scalars().all()` |
| **Get by ID**      | `Model.query.get(id)`                          | `db.session.get(Model, id)`<br>or<br>`db.session.execute(select(Model).where(Model.id == id)).scalar_one()` |
| **Simple filters**     | `Model.query.filter_by(name="x")`              | `db.session.execute(select(Model).where(Model.name == "x"))` |
| **Complex filters**   | `Model.query.filter(or_(...))`                 | `db.session.execute(select(Model).where(or_(...)))` |
| **First result**    | `Model.query.first()`                          | `db.session.execute(select(Model).limit(1)).scalar_one()` |
| **Sorting**        | `Model.query.order_by(Model.name.desc())`      | `db.session.execute(select(Model).order_by(Model.name.desc()))` |
| **Pagination**          | `Model.query.paginate(page=1, per_page=10)`    | `db.session.execute(select(Model).offset(0).limit(10))` |

> ℹ️ **Note**: While `query` still works, migrating to the new style is recommended for future compatibility.
 
### DELETE: Deleting a record from the database

To delete a record from the database, you must first select the instance you want to delete (through its primary key, the id) and delete it using `db.session.delete(person)`, as shown in the following example:

- Traditional method
```py
person = Person.query.get(3) 
db.session.delete(person)
db.session.commit()
```

- Modern method
```py
person = db.session.get(Person, 3) 
db.session.delete(person)
db.session.commit()
```

### UPDATE: Updating a record

To modify a record, you must first select it from the database, then you can work with it by changing its properties and commit again, as shown in the following example:

- Traditional method
```py
person = Person.query.get(3)
person.name = "Bob"
db.session.commit()
```

- Modern method
```py
person = db.session.get(Person, 3) 
person.name = "Bob"
db.session.commit()
```

## Transactions

A transaction is a sequence of operations (like INSERT, UPDATE, SELECT) performed on your database. For a transaction to be complete, all operations must be successful. If one operation fails, the entire transaction fails.

All transactions must ensure 4 main properties (known as ACID properties): Atomicity, Consistency, Isolation, and Durability.

![ACID Properties](https://github.com/breatheco-de/content/blob/master/src/assets/images/tran-1.png?raw=true)

A transaction ends with `COMMIT` or `ROLLBACK`. 

### COMMIT: session.commit()

The `COMMIT` command is used to permanently save the changes made in a transaction to the database. 

When you use INSERT, UPDATE, or DELETE, the changes made with these commands are not permanent; the changes can be undone, or in other words, we can go back.

However, when you use the COMMIT command, the changes to your database will be permanent.

### ROLLBACK: session.rollback()

The `ROLLBACK` command restores your database to your last COMMIT. You can also use it with the SAVEPOINT command to jump to a point you saved during an ongoing transaction.

Similarly, if you use UPDATE to make changes to your database, you can undo them using the ROLLBACK command, but only if you haven't used the COMMIT command yet:

```py
db.session.rollback()
```

### SAVEPOINT: session.begin_nested()

The `SAVEPOINT` command is used to temporarily save a transaction so you can return to a certain point using the ROLLBACK command if needed. You can use it like this:

```py
db.session.begin_nested()
```

This command can be called multiple times, and with each call, a checkpoint called `checkpoint` is established with a unique identifier.

![SQL checkpoint](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-1.png?raw=true)

For example, let's say we want to prepare a pizza and create a database to enter its ingredients. The base of this pizza has three ingredients: mozzarella, tomato, and olives. Our table will be called 'Pizza' and, after inserting the ingredients, it would look like this:

![SQL pizza table](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-2.png?raw=true)

Additionally, we have a list of extra ingredients we can add: we first choose meat, but then change our minds and want to replace it with mushrooms. We'll also add pepperoni and bacon. Here's how this transaction would be done:

```py
# Let's assume we already added the base ingredients beforehand

# Now we insert a new ingredient to the pizza, meat
ingredient = Ingredient()
ingredient.name = "meat"
ingredient.id = 4
db.session.add(ingredient)

# Now we COMMIT and save it to the database, thus setting the ingredient in the Pizza
db.session.commit()

# We replace the fourth ingredient, which was previously meat, with mushrooms
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

# One last "checkpoint" before adding bacon
checkpoint_b = db.session.begin_nested()

# Insert bacon
ingredient = Ingredient()
ingredient.name = "bacon"
db.session.add(ingredient)
```

Now our 'Pizza' has the following ingredients:

![SQL Pizza table](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-3.png?raw=true)

However, before putting it in the oven, we decided we didn't want bacon, so we used rollback:

```py
checkpoint_b.rollback()
# Goes back to checkpoint B, not including bacon
```

Finally, our 'Pizza' looks like this:

![SQL Pizza table after rollback](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-4.png?raw=true)

...I got hungry after reading this lesson! Didn't you?

# Relationships in SQLAlchemy:
Relationships allow connecting models/tables to each other, reflecting how data interacts in your database. SQLAlchemy offers 3 main types of relationships, each with its traditional (v1.x) and modern (v2.x+) syntax.

## 1. One-to-Many Relationship

### When should I use it?
When a record in Table A can have multiple associated records in Table B.

- Traditional Method (query)
```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    posts = db.relationship('Post', backref='author')

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
```

- Modern Method (SQLAlchemy 2.x)
```python
class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    posts: Mapped[List["Post"]] = relationship(back_populates="author")

class Post(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    author: Mapped["User"] = relationship(back_populates="posts")
```

## 2. Many-to-Many Relationship

- Traditional Method
```python
tags = db.Table('tags',
    db.Column('post_id', db.Integer, db.ForeignKey('post.id')),
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'))
)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tags = db.relationship('Tag', secondary=tags, backref=db.backref('posts', lazy='dynamic'))

class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
```

- Modern Method
```python
class Post(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    tags: Mapped[List["Tag"]] = relationship(secondary="post_tag", back_populates="posts")

class Tag(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    posts: Mapped[List["Post"]] = relationship(secondary="post_tag", back_populates="tags")

post_tag = Table(
    "post_tag",
    db.metadata,
    Column("post_id", ForeignKey("post.id")),
    Column("tag_id", ForeignKey("tag.id"))
)
```
### When to use it?
When you need complex relationships where both tables can have multiple records linked to each other.

## 3. One-to-One Relationship

- Traditional Method
```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    profile = db.relationship('Profile', uselist=False, backref='user')

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
```

- Modern Method
```python
class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    profile: Mapped["Profile"] = relationship(back_populates="user")

class Profile(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    user: Mapped["User"] = relationship(back_populates="profile")
```
### When to use it?
When a record in Table A must be linked to exactly one record in Table B.

## Comparison Table

| Relationship | Traditional Method | Modern Method | Advantages of Modern Method |
|----------|--------------------|----------------|-----------------------------|
| **One-to-Many** | `relationship('Post', backref='author')` | `Mapped[List["Post"]] = relationship(back_populates="author")` | Explicit typing, better IDE support |
| **Many-to-Many** | Separate secondary table, lazy-loaded `backref` | Table as object, bidirectional `back_populates` | Greater clarity, precise type control |
| **One-to-One** | `uselist=False` in relationship | `Mapped["Profile"]` without list | More intuitive syntax, better documentation |
| **Configuration** | Implicit in backref | Explicit with back_populates | Clearer and more maintainable relationships |
| **Typing** | No native support | Typing with `Mapped[T]` | Better static analysis, autocompletion |

> 💡 **Tip**: The modern method is compatible with Flask-SQLAlchemy 3.x and offers better performance and long-term maintainability.

With SQLAlchemy, you can connect your models like LEGO pieces (but without the pain of stepping on one barefoot 😆). Whether it's 1:1 (like a phone and its owner), 1:N (like a meme and its thousands of shares), or N:M (like your favorite shows and your sleepless nights), the ORM has you covered!

Now go write queries as if the code documented itself! 🦸‍♂️💻

(And remember: if your code works on the first try, it's time to be suspicious... or celebrate with coffee ☕).

Ready for the next level? SQLAlchemy awaits! 😉
