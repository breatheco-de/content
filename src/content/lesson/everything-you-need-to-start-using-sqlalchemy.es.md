---
slug: todo-lo-necesario-para-empezar-usar-sqlalchemy
title: Todo lo que necesitas saber sobre SQLAlchemy
subtitle: SQLAlchemy es el ORM más popular para Python, comience a usarlo en 8 minutos.
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
  Descubre cómo usar SQLAlchemy, el ORM más popular para Python. Aprende a
  manejar bases de datos fácilmente en solo 8 minutos. ¡Empieza ahora!
---
## ¿Qué es SQL Alchemy?

SQLAlchemy es un [Object-Relational Mapper/Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), o un ORM, es una librería que los desarrolladores utilizan para crear bases de datos y manipular sus datos sin la necesidad de conocer/usar SQL.

Existen otras alternativas en Python como Peewee, y otros lenguajes tienen sus propios ORMs, como PHP Eloquent o Java Hibernate.

## ¿Por qué usar un ORM?

Los ORM han ganado popularidad debido a que lidiar con el lenguaje SQL directamente requiere de mucho esfuerzo en la mayoría de los casos. El objetivo del ORM entonces es simplificar el mantenimiento de tus datos. Esto se hace creando ***objetos*** para tratar con las interacciones de la base de datos.

Básicamente, con ORM no tendrás que escribir SQL otra vez (el 95% del tiempo) y podrás trabajar con objetos.

### Por ejemplo:

Para insertar un usuario con SQL tienes que escribir:

```sql
INSERT INTO user (name, last_name) VALUES ('Bob', 'Ross');
```

Con un ORM tu código sigue siendo un código familiar como este:

```py
user = User()
user.name = "Bob"
user.last_name = "Ross"

# Agrega el user a la base de datos
db.session.add(user)

# Parecido al commit de Git, lo que hace esta función es guardar todos los cambios que hayas hecho
db.session.commit()
```

Basta con que utilices la función `db.session.commit()` y todo lo que hayas hecho con tu código se traducirá a código de lenguaje SQL.

## Revisemos las operaciones más típicas que se pueden realizar sobre una base de datos

### Importando e inicializando la aplicación

Para utilizar SQL Alchemy necesitamos instalar la librería `flask` de Python. Una vez lo hayamos hecho, estableceremos una conexión a la base de datos y definiremos el objeto `db`, que es lo más importante para empezar a trabajar con ella.

```py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)
```

### Creando nuestra base de datos

El primer paso sería definir nuestro modelo:

```py
class Person(Base):
    __tablename__ = "person"

    # Aquí definimos el nombre de la tabla "Person"
    # Ten en cuenta que cada columna es también un atributo normal de primera instancia de Python.
    id = Column(Integer, primary_key = True)
    name = Column(String(250), nullable = False)

    # El método serialize convierte el objeto en un diccionario
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
```

### INSERT: Insertando un registro en la base de datos

Para insertar un registro en la base de datos, es necesario, primero, contar con la instancia que se desea añadir. A continuación, agregarlo a la sesión de la base de datos y completar la acción con un commit. En el siguiente código se visualiza esta funcionalidad (reemplaza `<username_value>` y `<email_value>` con los valores reales que desees agregar):

```py
person = Person(username = <username_value>, email = <email_value>)
db.session.add(person)
db.session.commit()
```

### SELECT: Buscando o recuperando registros de la base de datos

Hay 3 formas para obtener información de la base de datos:

1. Obtener todos los registros de una tabla/modelo en particular usando `MyModel.query.all()`
2. Obtener un único registro en función de su clave principal mediante `MyModel.query.get(id)`
3. Obtener un grupo de registros en función de una consulta `Person.query.filter_by(arg1=value, arg2=value, ...)`

```py
# Obtener todos los registros de una tabla/modelo en particular, en este caso, de Person
all_people = Person.query.all()
all_people = list(map(lambda x: x.serialize(), all_people))

# Obtener un único registro en función de su clave principal, que en este caso es el "id" de la persona (solo funciona con las claves principales)
person = Person.query.get(3)

# Obtener un grupo de registros en función de una consulta, en este caso, el string "alex" en la columna "name"
all_people = Person.query.filter_by(name = "alex")
all_people = list(map(lambda x: x.serialize(), all_people))
```

### DELETE: Eliminando un registro de la base de datos

Para eliminar un registro de la base de datos es necesario seleccionar previamente la instancia que se desee borrar (a través de su clave primaria, el id) y eliminarla utilizando `db.session.delete(person)`, de acuerdo al siguiente ejemplo:

```py
person = Person.query.get(3)
db.session.delete(person)
db.session.commit()
```

### UDPATE: Actualizar un registro

Para modificar un registro, hay que seleccionar previamente el mismo de la base de datos, luego puedes trabajar con él cambiando sus propiedades y hacer commit nuevamente, según el siguiente ejemplo:

```py
person = Person.query.get(3)
person.name = "Bob"
db.session.commit()
```

## Transacciones

Una transacción es una secuencia de operaciones (como INSERT, UPDATE, SELECT) realizadas en tu base de datos. Para que una transacción esté completa, todas las operaciones deben ser exitosas. Si una operación falla, toda la transacción falla.

Todas las transacciones deben asegurar 4 propiedades principales (conocidas como propiedades ACID): Atomicidad, Consistencia, Aislamiento y Durabilidad.

![Propiedades ACID](https://github.com/breatheco-de/content/blob/master/src/assets/images/tran-1.png?raw=true)

Una transacción termina con `COMMIT` o `ROLLBACK`. 

### COMMIT: session.commit()

El comando `COMMIT` se usa para guardar de manera permanente los cambios realizados en una transacción dentro de la base de datos. 

Cuando usas INSERT, UPDATE o DELETE, los cambios realizados con estos comandos no son permanentes, los cambios hechos pueden deshacerse o, dicho con otras palabras, podemos volver atrás.

Sin embargo, cuando usas el comando COMMIT los cambios en tu base de datos serán permanentes.

### ROLLBACK: session.rollback()

El comando `ROLLBACK` restaura tu base de datos hasta tu último COMMIT. También puedes usarlo con el comando SAVEPOINT para saltar a un punto que hayas guardado durante una transacción en curso.

Del mismo modo, si usas UPDATE para hacer cambios en tu base de datos, puedes deshacerlos usando el comando ROLLBACK, pero solo si aún no has usado el comando COMMIT de esta forma:

```py
db.session.rollback()
```

### SAVEPOINT: session.begin_nested()

El comando `SAVEPOINT` se usa para guardar temporalmente una transacción para así poder volver a cierto punto utilizando el comando ROLLBACK si así lo necesitas. Puedes usarlo así:

```py
db.session.begin_nested()
```

Este comando se puede llamar muchas veces, y con cada llamada se establece un punto de control llamado `checkpoint` y que lleva asociado un identificador único.

![SQL checkpoint](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-1.png?raw=true)

Pongamos, por ejemplo, el caso de que queramos preparar una pizza y preparemos una base de datos en la que introducir los ingredientes que lleva. La base de esta pizza que queremos preparar lleva tres ingredientes: mozzarella, tomate y aceitunas. Nuestra tabla se va a llamar 'Pizza' y, después de insertar los ingredientes, se vería de la siguiente manera:

![SQL tabla pizza](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-2.png?raw=true)

Además, tenemos una lista de ingredientes extra que podemos añadir: escogemos carne primero, pero luego cambiamos de parecer y queremos reemplazarla por champiñones. También añadiremos pepperoni y bacon. Veamos como se haría esta transacción:

```py
# Supongamos que ya tenemos los ingredientes base añadidos con anterioridad

# Ahora insertamos un nuevo ingrediente en la pizza, la carne
ingredient = Ingredient()
ingredient.name = "meat"
ingredient.id = 4
db.session.add(ingredient)

# Ahora hacemos COMMIT y lo guardamos en la base de datos, de tal forma que fijamos el ingrediente en la Pizza
db.session.commit()

# Reemplazamos el cuarto ingrediente, que antes era la carne, por los champiñones
ingredient = Ingredient.query.get(4)
ingredient.name = "mushrooms"
db.session.commit()

# Guardamos un "checkpoint"
checkpoint_a = db.session.begin_nested()

# Añadimos pepperoni en la pizza
ingredient = Ingredient()
ingredient.name = "pepperoni"
db.session.add(ingredient)
db.session.commit()

# Un último "checkpoint" antes de añadir el bacon
checkpoint_b = db.session.begin_nested()

# Insertamos el bacon
ingredient = Ingredient()
ingredient.name = "bacon"
db.session.add(ingredient)
```

Ahora nuestra 'Pizza' tiene los siguientes ingredientes:

![SQL tabla Pizza](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-3.png?raw=true)

Sin embargo, antes de meterla en el horno hemos decidido que no queremos bacon, así que usamos el rollback:

```py
checkpoint_b.rollback()
# Vuelve atrás, hasta el checkpoint B, donde no se incluye el bacon
```

Finalmente, nuestra 'Pizza' se ve así:

![SQL tabla Pizza despues de rollback](https://github.com/breatheco-de/content/blob/master/src/assets/images/sql-4.png?raw=true)

... Me ha dado hambre después de leer esta lección ¿¿tú no tienes hambre??
