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


SQL Alquemy es un [Object-Relational Mapper / Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), o un ORM, es decir una librería que los desarrolladores utilizan para crear bases de datos y manipular sus datos sin la necesidad de conocer / usar SQL.



Existen otras alternativas como SQLAlchemy como Peewee, y otros lenguajes tienen sus propios ORMs como PHP Eloquent o Java Hibernate.

## ¿Porqué usar un ORM?

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
    __tablename__ = 'person'
    # Aquí definimos las columnas de la tabla 'person'.
    # Ten en cuenta que cada columna es también un atributo de instancia de Python normal.
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

Todo lo que tienes que hacer es crear un nuevo objeto Person, agregarlo a la sesión de la base de datos y realizar commit.
Reemplazar `<username_value>` y `<email_value>` con los valores reales que deseas agregar.


```py
person = Person(username=<username_value>, email=<email_value>)
db.session.add(person)
db.session.commit()
  ```

### SELECT: Buscando o recuperando registros

Hay 3 formas para devolver data de la base de datos:
    1. Buscar/Recuperar/Devolver todo los registros desde un Table/Model en particular usando `MyModel.query.all()`
    2. Buscar/Recuperar/Devolver un solo registro basado en su primary key usando `MyModel.query.get(id)`
    3. Buscar/Recuperar/Devolver un grupo de registro basado en su consulta `Person.query.filter_by(arg1=value, arg2=value, ...)`

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


