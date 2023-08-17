---
title: "Dominando Bases de Datos: ¿Qué es la Base de Datos SQL?"
subtitle: "¿Estás listo para trabajar con datos? Aprende aquí sobre qué es la base de datos SQL y cómo trabajar con ella."
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
date: "2023-06-26T00:35:31+00:00"
tags: ["sql"]
status: "published"

---

## ¿Qué es SQL?

SQL (*Structured Query Language*, Lenguaje de Consulta Estructurado) es el lenguaje más utilizado cuando se desea hablar directamente con una base de datos. Permite almacenar, manipular y recuperar datos que se almacenan en [bases de datos relacionales](https://en.wikipedia.org/wiki/Base_de_datos_relacional).

La sintaxis de consulta SQL se ve como esto:

```sql
SELECT username FROM user WHERE email='info@breatheco.de'
```

En este ejemplo, solicitamos a la base de datos todos los usuarios con el correo electrónico igual a "info@breatheco.de"

> :point_up: Si deseas ganarte el respeto de un desarrollador, necesitas sentirte cómodo con SQL. Lo usarás MUCHO cuando trabajes con datos.

### Orígenes del SQL y las bases de datos

En un mundo en el que la presencia de datos es cada vez más protagonista por su importante impacto sobre la toma de decisiones y la proliferación de procesos de negocio guiados por los datos y la información, las bases de datos son la mejor manera de almacenarlos. De hecho un componente fundamental en la industria 4.0 es, precisamente, esta tecnología. A partir de los datos podremos llevar a cabo procesos de Data Mining, Machine Learning y automatizaciones, pero todo parte de las bases de datos.

El origen de las bases de datos eran los ficheros `.txt` y `.csv`, que si bien permitían almacenar una gran cantidad de información, los datos eran fáciles de corromper y de difícil acceso.

![Edgar Codd](https://github.com/breatheco-de/content/blob/master/src/assets/images/11fcd6d8-6177-4f42-b4e0-7b6475f24b0a.jpeg?raw=true)

Frente a este panorama, en algún momento, un científico propondría una forma de hacer mejor las cosas, y fue [Edgar](https://en.wikipedia.org/wiki/Edgar_F._Codd), quien decidió rediseñar esos archivos y creó una forma estándar de almacenar datos en archivos centrados en el rendimiento y la integridad. Se asoció con [Donald](https://en.wikipedia.org/wiki/Donald_D._Chamberlin) y juntos crearon un lenguaje llamado SQL, que fue diseñado para trabajar con datos de una manera muy amigable.

### Componentes de una base de datos

Las bases de datos son similares en apariencia a las hojas de cálculo: todo se almacena en tablas con filas y columnas. Cada columna representa atributos comunes en las filas en las que intersectan, que son instancias de datos.

#### 1. Tablas

En una base de datos, una `tabla` es una entidad de información con "Personas", "Coches", "Eventos", etc. Las filas contienen la información relativa a las características, siendo cada una de ellas una columna. Así, si tenemos una llamada llamada "Personas", puede contener columnas para "Nombre", "Apellidos", "DNI", etc. Una fila tendria los valores correspondientes a una persona. Por ejemplo, una fila podría ser "Luis", "Pérez Gómez", "123456789Z". La tabla es la **única estructura** capaz de almacenar datos vía SQL.

#### 2. Filas

Una tabla está compuesta por un conjunto de `filas`. Cada una de ellas es una instancia de la información. Así, en el ejemplo anterior, cada una de las filas sería una persona en específico que hemos almacenado en nuestra base de datos.

#### 3. Columnas

Una tabla está compuesta también por un conjunto de `columnas`. Cada una de ellas es una característica de la tabla en sí. Así, en el ejemplo anterior, cada una de las características de la persona será su Nombre, Apellidos y DNI. Cada característica llevará asociado un tipo de valor específico (string, entero, boolean, etc).

Una tabla puede contener un amplio conjunto de filas y columnas. De su tamaño dependerán los tiempos de acceso y ejecución de consultas.

![Qué es la base de datos SQL](https://github.com/breatheco-de/content/blob/master/src/assets/images/4f549fb5-d4c8-4e31-b63c-34426b675b92.gif?raw=true)

&nbsp;
&nbsp;
&nbsp;

### Relaciones entre tablas

Una base de datos es una colección de tablas interconectadas. La conexión entre dos tablas se denomina `relación` y puede ser una de las siguientes:

**Una a una:**

El ejemplo perfecto es la base de datos de seguridad social, probablemente esta base de datos tiene una tabla llamada Contribuyente que contiene toda la información acerca de cada persona con un número de seguridad social y otra tabla con las Declaraciones De Impuestos del año en curso:  **Una persona puede tener solo una declaración y solo una declaración puede ser hecha por una persona.**

![base de datos SQL](https://github.com/breatheco-de/content/blob/master/src/assets/images/6f51ce02-3a75-4027-ada5-cf63c50d1701.png?raw=true)

**Una a muchos:**

La base de datos de las Grandes Ligas en Baseball probablemente tiene una tabla llamada Jugadores (con la lista de todos los jugadores activos) y otra tabla llamada Equipos con la lista de todos los equipos activos. Ambas tablas están conectadas porque **un equipo tiene muchos jugadores, pero un jugador puede estar en un solo equipo.**

![Bases de datos SQL](https://github.com/breatheco-de/content/blob/master/src/assets/images/374d53ac-092f-4f34-a6f1-76bfaa5bd676.png?raw=true)

**Muchos a muchos:**

Una base de datos de la Biblioteca Pública probablemente tenga una tabla llamada Autor (que contiene la información de todos los autores con libros publicados), y también otra tabla con TODOS los libros que se han publicado. Ambas tablas están relacionadas porque **un autor puede tener muchos libros y un libro puede tener muchos autores.**

![base de datos SQL](https://github.com/breatheco-de/content/blob/master/src/assets/images/af7344fc-0ee0-499e-8926-8f70dc9b2b0d.png?raw=true)

&nbsp;
&nbsp;
&nbsp;
### Sintaxis de SQL

#### Manipulando tablas

Hay 3 operaciones principales que se pueden hacer en una tabla: Crear, actualizar o eliminar una tabla. En SQL, esas operaciones se llaman `CREATE`, `ALTER` y `DROP`. Recuerda que estas operaciones se utilizan para manipular la estructura de la base de datos, no la información que contiene.

##### CREATE:

Crea una nueva tabla, una vista de una tabla u otro objeto en la base de datos.

```sql
CREATE TABLE IF NOT EXISTS `chat_group` (
  `chat_group_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  PRIMARY KEY('chat_group_id')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

##### ALTER:

Modifica un objeto de base de datos existente, como una tabla.

```sql
ALTER TABLE table_name MODIFY column_name datatype NOT NULL;
```

##### DROP:

Elimina una tabla completa, una vista de una tabla u otro objeto en la base de datos.

```sql
DROP TABLE CUSTOMERS;
```

#### Manipulando datos

Cuando usamos SQL, existen 4 comandos principales para manipular datos: SELECT, INSERT, UPDATE y DELETE.

Todos esos comandos están diseñados para manipular UNO o VARIOS registros/filas de la base de datos al mismo tiempo. Pero, solo puede ejecutar UN comando a la vez.

##### SELECT:

Esta es la operación más utilizada. Es la única forma de recuperar cualquier fila/registro específico de datos desde una base de datos. Podemos especificar qué filas queremos recuperar solicitando un grupo de condiciones que esas filas deben cumplir.

```sql
SELECT column1, column2... columnN FROM table1 WHERE column1 = 3;

//Select a particular user by his Social Security Number 
SELECT ssn, username, email FROM USER WHERE ssn = '233-34-3453';
```

##### INSERT:

Crea una nueva fila/registro en la tabla. Se agregará al final.

```sql
INSERT INTO table_name (column1,column2,...columnN) VALUES (value1,value2,...valueN);

//Insert a particular user 
INSERT INTO USER (ssn,username,email) VALUES ('234-45-3342','alesanchezr','a@breatheco.de');
```

##### UPDATE:

Actualiza un registro o una fila de una tabla específica. Es necesario proporcionar una o varias condiciones para identificar las filas específicas que queramos actualizar.

```sql
UPDATE table_name SET column1 = value1 WHERE [condition]

//updating the email of a user 
UPDATE USER SET email = 'new@breatheco.de' WHERE ssn = '333-44-5534'
```

##### DELETE:

Funciona de manera muy similar a update, pero, en lugar de pasar los nuevos valores de las nuevas columnas que deseas actualizar, solo necesitamos especificar qué filas deseamos eliminar solicitando un grupo de condiciones.

```sql
DELETE FROM table_name WHERE [condition]

//delete all users (the condition is optional 
DELETE FROM user;

//delete a specific user 
DELETE FROM user WHERE ssn = '342-45-6732'
```

#### Integridad de los datos

Un problema que a menudo afecta a las bases de datos es asegurar la integridad de su información. A veces los datos son tan delicados y sensibles que agregar un cero a un entero, por ejemplo, simplemente podría terminar haciendo millonario a alguien.

Para asegurar la integridad, tenemos que seguir las siguientes reglas:

+ **Columnas únicas de usuario**: Esto evitará tener usuarios con el mismo correo electrónico, con el mismo número de seguridad social, países con el mismo nombre, etc.
+ **Usar claves foráneas** (restricciones): Esto evitará tener un jugador de béisbol en un equipo que no existe, por ejemplo.
+ Especificar **valores predeterminados** y qué columnas pueden ser **NULL** en la definición de las tablas.
+ **Utilizar enumeraciones**: Son excelentes para establecer los valores posibles de una columna. Por ejemplo, si tuviéramos una columna "Sexo" en una persona, una buena enumeración podría ser "Hombre", "Mujer", "No contesta".
+ **Usar transacciones (commit y rollback)**: Hablaremos de eso a continuación; Las transacciones son una buena manera de retroceder en el tiempo si algo sale mal.

#### Transacciones

Una transacción es una secuencia de operaciones (como INSERT, UPDATE, SELECT) realizadas en tu base de datos. Para que una transacción esté completa todas las operaciones deben ser exitosas. Si una operación falla, toda la transacción falla.

Todas las transacciones deben asegurar 4 propiedades principales (conocidas como propiedades ACID): atomicidad, consistencia, aislamiento y durabilidad.
  
#### Transacciones en SQL

Las transacciones en SQL se controlan con varias sentencias:

+ **COMMIT**: Se utiliza para guardar los cambios.
+ **ROLLBACK**: Se utiliza para revertir los cambios.
+ **SAVEPOINT**: Crea un "checkpoint" dentro de grupos de transacciones desde donde se puede volver con un `ROLLBACK`.
+ **SET TRANSACTION**: Coloca un nombre a una transacción.
  
Los comandos de control transaccional solo se usan con los comandos DML INSERT, UPDATE y DELETE. No se pueden usar al crear tablas o eliminarlas porque estas operaciones se confirman automáticamente en la base de datos.

##### Sentencia COMMIT

El comando `COMMIT` se usa para guardar de manera permanente los cambios realizados en una transacción dentro de la base de datos. Cuando usas INSERT, UPDATE o DELETE, los cambios realizados con estos comandos no son permanentes, los cambios hechos pueden desahacerse o, dicho con otras palabras, podemos volver atrás. 

Sin embargo, cuando usas el comando COMMIT los cambios en tu base de datos serán permanentes.

La sintaxis para el comando es la siguiente:

```sql
//operation one... 

//operation two... 

//operation three... 

COMMIT;
```

##### Sentencia ROLLBACK

El comando `ROLLBACK` restaura tu base de datos hasta tu último COMMIT. También puedes usarlo con el comando SAVEPOINT para saltar a un punto que hayas guardado durante una transacción en curso.

La sintaxis para el comando es la siguiente:

```SQL
//any operation before the rollback 
INSERT INTO client_account SET (amount) VALUES (1000)

//now we rollback the transaction, the insert never happened 
ROLLBACK;
```

##### Sentencia SAVEPOINT

El comando `SAVEPOINT` se usa para guardar temporalmente una transacción para así poder volver a cierto punto utilizando el comando ROLLBACK si así lo necesitas.

La sintaxis para el comando es la siguiente:

```SQL
SAVEPOINT SAVEPOINT_NAME;
```

Este comando solo sirve en la creación de un SAVEPOINT entre declaraciones transaccionales. El comando ROLLBACK se usa para deshacer un grupo de transacciones.

La sintaxis para volver a una SAVEPOINT es la siguiente:

```SQL
ROLLBACK TO SAVEPOINT_NAME;
```

El comando `RELEASE SAVEPOINT` se usa para eliminar un SAVEPOINT que se ha creado con anterioridad.

La sintaxis para el comando es la siguiente:

```sql
RELEASE SAVEPOINT SAVEPOINT_NAME;
```

##### Sentencia SET TRANSACTION

El comando `SET TRANSACTION` se usa para iniciar una transacción de base de datos. Este comando se utiliza para especificar características para la transacción siguiente. Por ejemplo, podemospuede especificar que una transacción sea de solo lectura o de lectura y escritura.

La sintaxis para el comando es la siguiente:

```sql
SET TRANSACTION [ READ WRITE | READ ONLY ];
```

> :link:https://www.tutorialspoint.com/sql/sql-syntax.html