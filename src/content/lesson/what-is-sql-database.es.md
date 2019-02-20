---
title: "Dominando Bases de Datos: ¿Qué es la Base de Datos SQL?"
subtitle: "¿Estás listo para trabajar con datos? Aprende aquí sobre qué es la base de datos SQL y cómo trabajar con ella." 
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
textColor: "white"
date: "2018-14-11"
tags: ["fale"]
---

## ¿Por qué son importantes las bases de datos?
***

Las bases de datos son la mejor manera de almacenar datos, y cada día hay más y más datos.  Los próximos cien años son años de data-mining, machine learning y mucha automatización.  La única forma de lograrlo es dominar las bases de datos.

Al principio, la información se guardaba en archivos más simples como .csv (separados por comas).  Esto era muy desorganizado – 
los datos eran fáciles de corromper y de difícil acceso (imagina tener que buscar archivos separados por comas).

![Qué es la Base de Datos SQL](https://ucarecdn.com/11fcd6d8-6177-4f42-b4e0-7b6475f24b0a/-/resize/200x/)

En algún momento, nuestro amigo [Edgar](https://en.wikipedia.org/wiki/Edgar_F._Codd) decidió rediseñar esos archivos y creó una forma estándar de almacenar datos en archivos centrados en el rendimiento y la integridad.  Se asoció con el señor [Donald](https://en.wikipedia.org/wiki/Donald_D._Chamberlin) y juntos crearon un lenguaje llamado SQL –  que fue diseñado para trabajar con datos de una manera muy amigable.

## ¿Qué es SQL?
***

SQL es el lenguaje más utilizado cuando se desea hablar directamente con una base de datos.  Significa: Structured Query Language (Lenguaje de Consulta Estructurada).  SQL es un lenguaje informático para almacenar, manipular y recuperar datos que se almacenan en bases de datos relacionales.

Una sintaxis de consulta SQL se ve como esto:

```sql
SELECT username FROM user WHERE email='info@breatheco.de'
```

En este ejemplo, solicitamos a la base de datos todos los usuarios con el correo electrónico igual a "info@breatheco.de"

[[warning]]
| :point_up: Si deseas ganarte el respeto de un desarrollador, necesitas sentirte cómodo con SQL.  Lo usarás MUCHO cuando trabajes con datos.

## Definiendo tu Base de Datos 
***

Las bases de datos son similares en apariencia a las hojas de cálculo: todo se almacena en tablas con filas y columnas.

####  ¿Qué es una tabla?

Cada tabla es una entidad de información con “Personas”, “Carros”, “Eventos”, etc.  Las filas contienen la data actual (personas reales, carros, eventos, etc.).  La tabla es la **única estructura** capaz de almacenar data en una tabla SQL.

####  ¿Qué es una columna?

Las tablas tienen columnas (como excel).  Una tabla llamada Persona puede tener 4 columnas: Nombre, apellido, fecha de nacimiento y peso.  Una tabla puede tener tantas columnas como tu quieras, las columnas describen la tabla de una forma similar a como las propiedades describen una clase en la programación orientada a objetos.

####  ¿Qué es una fila?

Si una tabla es llamada Personas y tiene esas 4 columnas (nombre, apellido, fecha de cumpleaños y peso) entonces las filas serán cada persona en específico que has almacenado en tu base de datos.

![Qué es la base de datos SQL](https://ucarecdn.com/4f549fb5-d4c8-4e31-b63c-34426b675b92/)

&nbsp;
&nbsp;
&nbsp;

### Relaciones entre tablas

Una base de datos es una colección de tablas interconectadas.  La conexión entre dos tablas se denomina "relación" y puede ser una de las siguientes:

**Una a una::**

El ejemplo perfecto es la base de datos IRS, probablemente esta base de datos tiene una tabla llamada Contribuyente que contiene toda la información acerca de cada persona con un número de seguridad social y otra tabla con las Declaraciones De Impuestos del año en curso:  **Una persona puede tener solo una declaración y una declaración puede ser hecha por una persona.**

![Qué es la base de datos SQL](https://ucarecdn.com/6f51ce02-3a75-4027-ada5-cf63c50d1701/-/resize/700x/)

**Una a muchos::**

The Major League Baseball database probably has a table called Player (with the list of all the active players), and another table called Team with the list of all the active teams.  Both tables are connected because o**ne team has many players, but a player can be on only one team.**

![What is SQL Databases](https://ucarecdn.com/374d53ac-092f-4f34-a6f1-76bfaa5bd676/-/resize/700x/)

**Many to Many:**

A Public Library database probably has one table called Author (containing the information of all the authors with books published), and also another table with ALL of the books that have ever been published.  Both tables are related because **one author can have many books and one book can have many authors.**

![What is SQL Database](https://ucarecdn.com/af7344fc-0ee0-499e-8926-8f70dc9b2b0d/-/resize/700x/)

&nbsp;
&nbsp;
&nbsp;
## The SQL Syntax: Working the Tables
***


The SQL Syntax: Working the Tables
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

Updates a record or row of a specific table.  You have to give a group either one or many conditions to identify the specific row(s) you want to update.

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


Maintaining Data Integrity
Keeping the integrity of the data is hard!  Databases with a lot of activities and users normally struggle to keep data integrity.  Sometimes the data is so delicate and sensitive that adding a zero to a simple integer could end up making someone a millionaire!

We can classify the integrity problems in 4 types:

+ **Entity Integrity:**  There are no duplicate rows in a table.
+ **Domain Integrity**:  Enforces valid entries for a given column by restricting the type, the format, or the range of values.
+ **Referential integrity:**  Rows being used by other records cannot be deleted.
+ **User-Defined Integrity:** Enforces some specific business rules that do not fall into entity, domain or referential integrity.
  
#### How can we Maintain Integrity?

+ **User unique columns:**  This will avoid having users with the same email, with the same SSN, countries with the same name, etc.
+ **Use foreign keys** (constraints):  This will avoid having a baseball player on a team that does not exists.
+ Specify **default values** and what columns can be **NULL:** perfect for
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
|:link:https://www.tutorialspoint.com/sql/sql-syntax.html















