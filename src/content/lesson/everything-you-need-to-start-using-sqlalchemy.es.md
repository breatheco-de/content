---
slug: "todo-lo-necesario-para-empezar-usar-sqlalchemy"
title: "Todo lo que necesitas saber sobre SQLAlchemy"
subtitle: "SQLAlchemy es el ORM más popular para Python, comience a usarlo en 8 minutos"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
date: "2020-10-19T16:36:31+00:00"
textColor: "white"
authors: ["alesanchezr"]
status: "published"
tags: ["SQL Alchemy","Python"]

---

## ¿Qué es SQL Alchemy?


SQLAlchemy es un [Object-Relational Mapper / Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), o un ORM, es decir una librería que los desarrolladores utilizan para crear bases de datos y manipular sus datos sin la necesidad de conocer / usar SQL.

Existen otras alternativas como SQL Alchemy o Peewee, y otros lenguajes tienen sus propios ORMs como PHP Eloquent o Java Hibernate.


## ¿Por qué usar un ORM?

Los ORM han ganado popularidad debido a que lidiar con el lenguaje SQL directamente requiere de mucho esfuerzo en la mayoría de los casos. El objetivo del ORM entonces es simplificar la mantención de tus datos.

Básicamente, con ORM no tendrás que escribir SQL otra vez (95% del tiempo) y podrás trabajar con objetos.

### Por ejemplo:

Para insertar un usuario con SQL tienes que escribir:

```sql
INSERT INTO user (name, last_name) VALUES ('Juan', 'McDonals');
```

Con un ORM tu código sigue siendo un código familiar como este:

```py
user = User()
user.name = 'Juan'
user.last_name = 'McDonals'

# agrega el user a la base de datos
db.session.add(user)

# parecido al commit de GIT lo que hace es guardar todos los cambios que hayas hecho
db.session.commit()
```

Basta con que digas: `db.session.commit()` y todo lo que hayas hecho con tu código se traducirá a código de lenguaje SQL.

## Revisemos la operación de base de datos más típica

### Creando nuestra base de datos

El primer paso sería definir nuestro modelo



```py
class Person(Base):

    # Aquí definimos el nombre de la tabla person.
    # Ten en cuenta que cada columna es también un atributo normal de primera instancia de Python.

    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)

    # el metodo serialize convierte el objeto en un diccionario
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
  ```

### INSERT: Insertando un registro en la base de datos

```py
person = Person(username=<username_value>, email=<email_value>)
db.session.add(person)
db.session.commit()
  ```

### SELECT: Buscando o recuperando registros

Hay 3 formas para devolver data de la base de datos:
    1. Buscar/Recuperar/Devolver todos los registros desde un Table/Model en particular usando `MyModel.query.all()`
    2. Buscar/Recuperar/Devolver un solo registro basado en su primary key usando `MyModel.query.get(id)`
    3. Buscar/Recuperar/Devolver un grupo de registros basado en su consulta `Person.query.filter_by(arg1=value, arg2=value, ...)`

```py
# aqui es como se buscan todas las personas
all_people = Person.query.all()
all_people = list(map(lambda x: x.serialize(), all_people))

# aqui es como se busca un grupo de personas con name = alex
all_people = Person.query.filter_by(name='alex')
all_people = list(map(lambda x: x.serialize(), all_people))

# aquí es cómo se busca a una persona con id = 3 (solo funciona con las primary key)
person = Person.query.get(3)
```

### DELETE: Eliminando un registro de la base de datos.

Todo lo que tiene que hacer es crear un nuevo objeto Person, agregarlo a la sesión de la base de datos y ¡commit!

```py
person = Person.query.get(3)
person.delete()
db.session.commit()
  ```

### UDPATE: Actualizar un registro.

Para actualizar, primero necesitas devolver/seleccionar el registro de la base de datos, luego puedes actualizar la propiedad que desees y hacer commit nuevamente.
```py
person = Person.query.get(3)
person.name = "Bob"
db.session.commit()
```

## Transacciones

Una transacción es una secuencia de operaciones (como por ej. INSERT, UPDATE, SELECT) realizadas en tu base de datos. Para que una transacción esté completa una cierta cantidad de operaciones dentro de un grupo deben ser exitosas. Si una operación falla, toda la transacción falla.

Las transacciones tienen las siguientes 4 propiedades estándar (conocidas como propiedades ACID: español significa Atomicidad, Consistencia, Aislamiento y Durabilidad )

![Transactions](../../assets/images/tran-1.png)

Una transacción termina con COMMIT o ROLLBACK. 

### Comando COMMIT 

El comando COMMIT se usa para guardar de manera permanente los cambios realizados en una transacción dentro de la base de datos. 

Cuando usas INSERT, UPDATE o DELETE, los cambios realizados con estos comandos no son permanentes, los cambios hechos pueden desahacerse o "podemos volver atrás".

Pero cuando usas el comando COMMIT los cambios en tu base de datos serán permanentes.  

### Comando ROLLBACK 

Restaura tu base de datos hasta tu último COMMIT. También puedes usarlo con el comando SAVEPOINT para saltar a un punto que hayas guardado durante una transacción en curso.


Del mismo modo, si usas UPDATE para hacer cambios en tu base de datos, puedes deshacerlos usando el comando ROLLBACK pero sólo si aún no has usado el comando COMMIT de esta forma:


```jsx
ROLLBACK TO savepoint_name;
```
### Comando SAVEPOINT 

Este comando se usa para guardar temporalmente una transacción para así poder volver a cierto punto utilizando el comando ROLLBACK si así lo necesitas, puedes usarlo así:

```jsx
SAVEPOINT savepoint_name;
```
Cuando usas este comando puedes ponerle un **name** o nombre a los diferente estados de tu base de datos y así usar el comando ROLLBACK cuando quieras.

![SQL](../../assets/images/sql-1.png)

Digamos que vamos a comer pizza y nuestra pizza tiene tres ingredientes de base:
mozzarella, tomate y aceitunas.  Nuestra tabla se llamaria 'PIZZA' y se vería de la siguiente manera:

![SQL](../../assets/images/sql-2.png)

Pero tenemos una lista de ingredientes extra que podemos añadirle: escogemos carne pero luego cambiamos de parecer y queremos champiñones. También nos gustaría añadirle pepperoni y tocino. Veamos como se vería nuestra transacción:


```jsx
INSERT INTO class PIZZA(4, 'meat');

COMMIT; 

UPDATE class SET ingredient = 'mushrooms' WHERE id '4'

SAVEPOINT A;

INSERT INTO class PIZZA (5, 'pepperoni')

SAVEPOINT B

INSERT INTO class PIZZA (6, 'bacon')
```

Ahora nuestra 'Pizza' tiene los siguientes ingredientes:

![SQL](../../assets/images/sql-3.png)

Ahora acabamos de decir que ya no queremos tocino, asi que usamos ROLLBACK:

```jsx
ROLLBACK TO B;
```
y nuestra 'PIZZA' se ve así:

![SQL](../../assets/images/sql-4.png)

....me ha dado hambre luego de leer esta lección ¿¿tú no tienes hambre??

















  

