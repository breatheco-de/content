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
user.save()
```

Solo puede decir: `user.save ()` y el ORM lo traducirá a SQL.

## Creando nuestra base de datos

El primer paso será definir nuestro modelo.

```py
class Person(Base):
    __tablename__ = 'person'
    # Aquí definimos columnas para la persona de la mesa.
    # Ten en cuenta que cada columna es también un atributo normal de primera instancia de Python.
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
  ```
