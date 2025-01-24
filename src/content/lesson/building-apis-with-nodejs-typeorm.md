---
title: Connecting a Database to Our REST API
subtitle: TypeOrm allows you to build REST APIs in a quick, minimalist, and flexible way
cover_local: >-
  https://storage.googleapis.com/screenshots-breathecode/5f92b35c3ee7976c35b25c6a88817aca44a29ed98a5c63d698876c13fa53b054
textColor: white
date: '2021-04-17T16:36:31+00:00'
status: published
tags:
  - typeOrm
  - Expressjs
  - node
  - REST
  - API
description: >-
  Learn how to connect a database to your REST API using TypeORM. Discover
  simple ORM techniques to streamline your data management today!
---
## What is SQL TypeOrm?

TypeORM is an [Object-Relational Mapper / Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), or ORM, which is a library developers use to create databases and manipulate their data without needing to know/use SQL.


## Why Use an ORM?

ORMs have gained popularity because dealing directly with SQL language often requires a lot of effort. The goal of an ORM is to simplify the maintenance of your data.

Essentially, with an ORM, you won't need to write SQL again (95% of the time) and you can work with objects.

### For example:

To insert a user with SQL, you would write:

```sql
INSERT INTO user (name, last_name) VALUES ('Juan', 'McDonals');
```

With an ORM, your code remains familiar like this:

```javascript
user = User()
user.name = 'Juan'
user.last_name = 'McDonals'

# add the user to the database
user.save();

```

You simply say: `user.save()`, and everything you've done with your code will translate into SQL language code.

## Decorators
TypeOrm uses the design pattern called decorator to modify the behavior of a class. These decorators help us define elements of a model, like creating a column, defining if it has a primary key, etc.

To build our model, we will use the following decorators provided by TypeOrm.

- `@Entity()`: Using this decorator, a class is created that maps to a database table.

- `@PrimaryGeneratedColumn()`: Indicates that the column is a Primary Key and that its value should be auto-incremented. You can pass a parameter ('uuid') which makes the values in this column random text strings instead of sequential integers.

- `@Column()`: A common database column. We can specify several parameters such as type (varchar, int, tinyint, decimal), whether it is mandatory (nullable: true | false), maximum length (length: int), and many more things.
[See Documentation](https://typeorm.io/#/entities/column-options)

- `@CreateDateColumn() and @UpdateDateColumn()`: Special decorators that indicate that the value of these columns is automatically assigned when creating a new record or updating an existing one respectively.

## Reviewing the Most Typical Database Operation

### Creating our database

The first step would be to define our model

```javascript
@Entity()
export class Users extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;
  
}
```

### INSERT: Inserting a record in the database

```javascript

	const usersRepo = getRepository(User);
	const user = usersRepo.create(req.body as ObjectLiteral);  //I create a user
	
	const result = await usersRepo.save(user); //I save the new user

  ```

### SELECT: Searching or retrieving records

There are 3 ways to return data from the database:
    1. Search/Retrieve/Return all records from a particular Table/Model using `getRepository(MyModel).find()`
    2. Search/Retrieve/Return a single record based on its primary key using `getRepository(MyModel).findOne()` 
    3. Search/Retrieve/Return a group of records based on their query `Person.query.filter_by(arg1=value, arg2=value, ...)`

```javascript
# here is how all the people are searched
const users = await getRepository(Users).find();

# here is how a group of people with name = alex are searched
const users = await getRepository(Users).find("first_name":"alex");

# here is how a person with id = 3 is searched (only works with primary keys)
user = Users.query.get(3)
const user = await getRepository(Users).findOne(req.params.id:"3");
```

### DELETE: Deleting a record from the database.

All you have to do is create a new Person object, add it to the database session, and commit!

```javascript
const users = await getRepository(Users).delete(ID_USER);

  ```

### UPDATE: Updating a record.

To update, first you need to return/select the record from the database, then you can update the property you want and commit again.
```javascript
	const user = await getRepository(Users).findOne(req

.params.id); //I search for the user in the table by the ID received
	getRepository(Users).merge(user, req.body);  // Merges existing data with that received through body
	const results = await getRepository(Users).save(user);  // Stores the change in the database
```

## Relationships
### One-to-one
In English one-to-one, the decorator `@OneToOne` is used, it is a relationship where A contains an instance of B and B contains an instance of A.

### Many-to-one
In English many-to-one, the decorator `@ManyToOne` is used.

### One-to-many
In English one-to-many, the decorator `@OneToMany` is used.

### Many-to-many
In English many-to-many, the decorator `@ManyToMany` is used, it is a relationship where A contains several instances of B and B contains several instances of A.

An example is the relationship between a Question entity and a Category entity. A question can have multiple categories and each category can have multiple questions.

```javascript
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];

}
```

`@JoinTable()` is used to define the owning entity in the relationship. In this example, the decorator `@ManyToMany` must be used.

- To store a `@ManyToMany` relationship: here is an example where category instances are created and then assigned as an array to the `Question` entity.

```javascript
const category1 = new Category();
category1.name = "animals";
await connection.manager.save(category1);

const category2 = new Category();
category2.name = "zoo";
await connection.manager.save(category2);

const question = new Question();
question.title = "dogs";
question.text = "who let the dogs out?";
question.categories = [category1, category2];
await connection.manager.save(question);
```
- To delete a `@ManyToMany` relationship:

With cascades enabled, you can delete this relationship with just one save call.
To remove a many-to-many relationship between two records, remove it from the corresponding field and save the record.

```javascript
const question = getRepository(Question);
question.categories = question.categories.filter(category => {
    category.id !== categoryToRemove.id
})
await connection.manager.save(question)
```

## Ready to Start Coding?

We have prepared this live coding example that you can run yourself on Gitpod and use as a basis for your project.

Expressjs Rest Hello: [https://github.com/4GeeksAcademy/expressjs-rest-hello](https://github.com/4GeeksAcademy/expressjs-rest-hello)