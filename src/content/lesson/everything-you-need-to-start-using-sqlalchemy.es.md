---
slug: "todo-lo-necesario-para-empezar-usar-sqlalchemy"
title: "Todo lo que necesitas saber sobre SQLAlchemy"
subtitle: "SQLAlchemy es el ORM más popular para Python, comience a usarlo en 8 minutos"
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
date: "2019-04-28"
textColor: "white"
authors: ["alesanchezr"]
status: "published"

tags: ["SQL Alchemy", "Python"]
---

## Qué es SQL Alchemy

Es un ORM: una biblioteca que los desarrolladores utilizan para crear bases de datos y manipular sus datos sin la necesidad de conocer / usar SQL.

Existen otras alternativas como SQLAlchemy como Peewee, y otros lenguajes tienen sus propios ORM como PHP Eloquent o Java Hibernate.

## Porqué usarlo?

Existe un gran debate en torno a esto, la popularidad del ORM se debe a que tratar con el lenguaje SQL requiere mucho esfuerzo en la mayoría de los casos.

Básicamente, con ORM no tendrás que escribir SQL otra vez (95% del tiempo) y podrá trabajar con objetos.

### Por ejemplo:

Para insertar un usuario con SQL tienes que escribir:

```sql
INSERT INTO user (name, last_name) VALUES ('Juan', 'McDonals');
```

Con un ORM su código sigue siendo un código familiar como este:

```py
user = User()
user.name = 'Juan'
user.last_name = 'McDonals'

db.session.commit()
```
Solo puede decir: `user.save ()` y el ORM lo traducirá a SQL.

## Vamos a revisar la operación de base de datos más típica.

### Definiendo nuestro Models/Tables
=======
user.save()
```

Solo puedes decir: `user.save ()` y el ORM lo traducirá a SQL.

## Creando nuestra base de datos


El primer paso será definir nuestro modelo.

```py
class Person(Base):
    __tablename__ = 'person'
    # Aquí definimos el nombre de la tabla person.
    # Ten en cuenta que cada columna es también un atributo normal de primera instancia de Python.
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
  ```

### INSERT: Insertando un registro en la base de datos

Todo lo que tienes que hacer es crear un nuevo objeto Person, agregarlo a la sesión de la base de datos y realizar commit.
Reemplazar `<<username_value>` y `<email_value>` con los valores de personas reales que deseas agregar.

```py
person = Person(username=<username_value>, email=<email_value>)
db.session.add(person)
db.session.commit()
  ```

### SELECT: Buscando o recuperando registros

Hay 3 formas para devolver data de la base de datos:
    1. Buscar/Recuperar/Devolver todo los registros desde un Table/Model en particular usando `MyModel.query.all()`
    2. Buscar/Recuperar/Devolver un solo registro basado en su primary key usando `MyModel.query.get(id)`
    3. ReBuscar/Recuperar/Devolver un grupo de registro basado en su consulta `Person.query.filter_by(arg1=value, arg2=value, ...)`

```py
# aqui es como se buscan todas las personas
all_people = Person.query.all()
all_people = list(map(lambda x: x.serialize(), all_people))

# aqui es como se busca un grupo de personas con name = alex
all_people = Person.query.filter_by(name='alex')
all_people = list(map(lambda x: x.serialize(), all_people))

# aquí es cómo se busca a una persona con id = 3 (solo funciona con primary key)
person = Person.query.get(3)
```

### DELETE: Eliminando un registro de la base de datos.

Todo lo que tiene que hacer es crear un nuevo objeto Person, agregarlo a la sesión de la base de datos y commit!

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


