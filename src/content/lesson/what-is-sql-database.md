---
title: "Mastering Databases: What is SQL Database"
subtitle: "Are you ready to work with data ? Learn here about what is SQL Database and how to work with it."
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
textColor: "white"
date: "2018-11-14"
tags: ["sql"]
status: "published"

---

## Why are Databases Important?
***

Databases are the best way to store data, and everyday there is more and more data!  The next hundred years are years of data-mining, machine learning and a lot of automation.  The only way to achieve that is by mastering the databases.

At the beginning, information was saved into more simple files like .csv (comma separated).  This was very disorganized – the data was both easy to corrupt and hard to access (imagine having to browse comma separated files).

![Edgar Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd#/media/File:Edgar_F_Codd.jpg)

At some point, our friend [Edgar](https://en.wikipedia.org/wiki/Edgar_F._Codd) decided to re-design those files and created a standard way of storing data into files focused on performance and integrity.  He partnered with mister [Donald](https://en.wikipedia.org/wiki/Donald_D._Chamberlin) and together they created a language called SQL (Structured Query Language) –  which was designed to work with data in a more user-friendly way.

## What is SQL?
***

SQL is the most used language when you want to speak to a database directly.   It stands for: Structured Query Language, and is simply a computer language for storing, manipulating and retrieving data that is stored in [relational databases](https://en.wikipedia.org/wiki/Relational_model).

An SQL query syntax looks something like this:

```sql
SELECT username FROM user WHERE email='info@breatheco.de'
```

In this example, we are asking the database for all the users with the email equal to "info@breatheco.de"

[[warning]]
| :point_up: If you want to earn a developer’s respect, you need to be comfortable with SQL.  You will use it A LOT when working with data.

## Defining your Database
***

Databases house collections of data called tables. Everything gets stored in tables with rows and columns, just like spreadsheets. Each column represents common attributes for the rows they intersect with, which are instances of the data.

####  What is a Table?

Each table is an entity of information like "People", "Cars", "Events", etc.  The rows contain the actual data representing an instance of the subject- so if we have a table called "People", it might contain columns for "First-Name", "Last-Name", and an "id", a row would have those values pertaining to the column, like "Bob", "Ross", and "42" (further breakdown below).  The table is the **only structure** capable of storing data via SQL.

####  What is a Column/Field?

Tables have columns (just like excel).  A table called Person can have 4 columns: Name, Last Name, Birth-Date and Weight.  A table can have as many columns as you want, and will hold a specific type of value (such as string, integer, boolean etc).  Columns describe the table in a similar way as properties describe a class in object oriented programming.

####  What is a Row?

If a table is called Persons and has those 4 columns (name, last name, birth date and weight), then the rows will be each specific person that you have stored into your database.

![What is SQL Database](https://ucarecdn.com/4f549fb5-d4c8-4e31-b63c-34426b675b92/)

&nbsp;
&nbsp;
&nbsp;

### Table Relationships

A database is a collection of inter-connected tables.  The connection between two tables is called a "relationship," and it can be one of the following:

**One to One:**

The perfect example is the IRS database:  this database probably has a table called TaxPayer that contains all the information about each person (with a social security number), and another table with the TaxDeclarations of the current year.  **One person can only have one declaration and one declaration can only be made by one person.**

![What is SQL Database](https://ucarecdn.com/6f51ce02-3a75-4027-ada5-cf63c50d1701/-/resize/700x/)

**One to Many:**

The Major League Baseball database probably has a table called Player (with the list of all the active players), and another table called Team with the list of all the active teams.  Both tables are connected because **one team has many players, but a player can be on only one team.**

![What is SQL Databases](https://ucarecdn.com/374d53ac-092f-4f34-a6f1-76bfaa5bd676/-/resize/700x/)

**Many to Many:**

A Public Library database probably has one table called Author (containing the information of all the authors with books published), and also another table with ALL of the books that have ever been published.  Both tables are related because **one author can have many books and one book can have many authors.**

![What is SQL Database](https://ucarecdn.com/af7344fc-0ee0-499e-8926-8f70dc9b2b0d/-/resize/700x/)

&nbsp;
&nbsp;
&nbsp;
## The SQL Syntax: Working the Tables
***

There are 3 main operations you can do to a table: Create, Update or Delete a table.  In SQL, those operations are called Create, Alter and Drop.  Remember that these operations are used to manipulate the structure of the database – not the data that it contains.

#### CREATE:

Creates a new table, a view of a table, or another object in the database.

```sql
CREATE TABLE IF NOT EXISTS `chat_group` (
  `chat_group_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  PRIMARY KEY('chat_group_id')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

#### ALTER:

Modifies an existing database object, such as a table.

```sql
ALTER TABLE table_name MODIFY column_name datatype NOT NULL;
```

#### DROP:

Deletes an entire table, a view of a table, or another object in the database.

```sql
DROP TABLE CUSTOMERS;
```

## The SQL Syntax: Manipulating Data
***

When using SQL, you have 4 main commands to manipulate data: Select, Insert, Update and Delete.

All of those commands are designed to manipulate ONE or SEVERAL record/rows of the database at the same time.  But, you can only execute ONE command at a time.

#### SELECT:

This is the most used operation.   It is the only way to retrieve any specific row/record of data from a database.  You can specify what rows you want to retrieve by requesting a group of conditions that those rows have to meet.

```sql
SELECT column1, column2... columnN FROM table1 WHERE column1 = 3;

//Select a particular user by his Social Security Number 
SELECT ssn, username, email FROM USER WHERE ssn = '233-34-3453';
```

#### INSERT:

Creates a new row/record into the table.  It will be appended at the end.

```sql
INSERT INTO table_name (column1,column2,...columnN) VALUES (value1,value2,...valueN);

//Insert a particular user 
INSERT INTO USER (ssn,username,email) VALUES ('234-45-3342','alesanchezr','a@breatheco.de');
```

#### UPDATE:

Updates a record or row of a specific table.  You have to give either one or many conditions to identify the specific row(s) you want to update.

```sql
UPDATE table_name SET column1 = value1 WHERE [condition]

//updating the email of a user 
UPDATE USER SET email = 'new@breatheco.de' WHERE ssn = '333-44-5534'
```

#### DELETE:

Works very similar to update, but, instead of passing the new values of the new columns you want to update, you only need to specify which rows you want to delete by requesting a group of conditions.

```sql
DELETE FROM table_name WHERE [condition]

//delete all users (the condition is optional 
DELETE FROM user;

//delete a specific user 
DELETE FROM user WHERE ssn = '342-45-6732'
```

## Maintaining Data Integrity
***

Keeping the integrity of the data is hard!  Databases with a lot of activities and users normally struggle to keep data integrity.  Sometimes the data is so delicate and sensitive that adding a zero to a simple integer could end up making someone a millionaire!

We can classify the integrity problems in 4 types:

+ **Entity Integrity:**  There are no duplicate rows in a table.
+ **Domain Integrity**:  Enforces valid entries for a given column by restricting the type, the format, or the range of values.
+ **Referential integrity:**  Rows being used by other records cannot be deleted.
+ **User-Defined Integrity:** Enforces some specific business rules that do not fall into entity, domain or referential integrity.
  
#### How can we Maintain Integrity?

+ **User unique columns:**  This will avoid having users with the same email, with the same SSN, countries with the same name, etc.
+ **Use foreign keys** (constraints):  This will avoid having a baseball player on a team that does not exists.
+ Specify **default values** and what columns can be **NULL** 
+ **Use enums:**  They are great to set the possible values of a column "status", or for a column "type", etc.
+ **Use transactions (commit and rollback):**  We will talk about that below; transactions are a good way of going back in time if something went wrong.

## SQL Transactions
***

A transaction is a group of one or more SQL operations (inserts, deletes, updates, creates, drops, etc.).

A transaction groups several operations into one because they all depend on each other.  You need to have the guarantee that if one of those operations fails, the database will "undo" everything you did within the same transaction.

For example, let say that a Bank Client is moving money from one account to another.  This transaction involves two operations:

 + Removing from one account.
 + Inserting into the other account.

What if the first operation was successful but the second one failed?  You need to "undo" the first one or the user will lose the money forever.

## Every Transaction should be:
***

Transactions have the following four standard properties, usually referred to by the acronym ACID:

+ **Atomicity:**  ensures that all operations within the work unit are completed successfully.  Otherwise, the transaction is aborted at the point of failure, and previous operations are rolled back to their former state.
+ **Consistency:**  ensures that the database properly changes states upon a successfully committed transaction.
+ **Isolation:**  enables transactions to operate independently of and transparent to each other.
+ **Durability:**  ensures that the result or effect of a committed transaction persists in case of a system failure.
  
## Controlling SQL Transactions
***

These are the following commands used to control transactions:

+ **COMMIT**:  to save the changes.
+ **ROLLBACK:** to rollback the changes.
+ **SAVEPOINT:**  creates points within groups of transactions in which to ROLLBACK
+ **SET TRANSACTION:** Places a name on a transaction.
  
Transactional control commands are only used with the DML commands INSERT, UPDATE and DELETE.  They cannot be used while creating tables or dropping them because these operations are automatically committed in the database.

### COMMIT;

The COMMIT command is the transactional command used to save changes invoked by a transaction to the database.

The COMMIT command saves all transactions to the database since the last COMMIT or ROLLBACK command.

The syntax for COMMIT command is as follows:

```sql
//operation one... 

//operation two... 

//operation three... 

COMMIT;
```

### ROLLBACK;

The ROLLBACK command is the transactional command used to undo transactions that have not already been saved to the database.

The ROLLBACK command can only be used to undo transactions since the last COMMIT or ROLLBACK command was issued.

The syntax for ROLLBACK command is as follows:

```SQL
//any operation before the rollback 
INSERT INTO client_account SET (amount) VALUES (1000)

//now we rollback the transaction, the insert never happened 
ROLLBACK;
```

### SAVEPOINT [savepoint name];

A SAVEPOINT is a point in a transaction when you can roll the transaction back to a certain point without rolling back the entire transaction.

The syntax for SAVEPOINT command is as follows:

```SQL
SAVEPOINT SAVEPOINT_NAME;
```

This command serves only in the creation of a SAVEPOINT among transactional statements.  The ROLLBACK command is used to undo a group of transactions.

The syntax for rolling back to a SAVEPOINT is as follows:

```SQL
ROLLBACK TO SAVEPOINT_NAME;
```

The RELEASE SAVEPOINT command is used to remove a SAVEPOINT that you have created.

The syntax for RELEASE SAVEPOINT is as follows:

```sql
RELEASE SAVEPOINT SAVEPOINT_NAME;
```

The SET TRANSACTION command can be used to initiate a database transaction.  This command is used to specify characteristics for the transaction that follows.

For example, you can specify a transaction to be read only, or read write.

The syntax for SET TRANSACTION is as follows:

```sql
SET TRANSACTION [ READ WRITE | READ ONLY ];
```

[[info]]
|:link:https://www.tutorialspoint.com/sql/sql-syntax.htm















