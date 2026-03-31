---
slug: todo-lo-necesario-para-empezar-usar-sqlalchemy
title: Todo lo que necesitas saber sobre SQLAlchemy
authors:
  - alesanchezr
  - cvazquezlos
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

Para utilizar SQL Alchemy necesitamos instalar la librería `flask` de Python. Una vez lo hayamos hecho, estableceremos una conexión a la base de datos y definiremos el objeto `db`, que es lo más importante para empezar a trabajar con ella. En la documentación encontraremos 2 métodos para implementar esta librería: el tradicional (proyectos legacy) y el moderno (recomendado) 

```py
from flask import Flask
from sqlalchemy.orm import Mapped, mapped_column # Sólo necesario en el método moderno
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)
```

### Creando nuestra base de datos

El primer paso sería definir nuestro modelo. 

- Método Tradicional
```py
class Person(db.Model):
    # Aquí definimos el nombre de la tabla "Person"
    __tablename__ = "person" # Es opcional debiado a que usa el nombre de la clase por defecto.

    # Ten en cuenta que cada columna es también un atributo normal de primera instancia de Python.
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)

    # El método serialize convierte el objeto en un diccionario
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
```

- Método Moderno
```py
class Person(Base):
    # Aquí definimos el nombre de la tabla "Person"
    __tablename__ = "person" # Es opcional debiado a que usa el nombre de la clase por defecto.

    # Ten en cuenta que cada columna es también un atributo normal de primera instancia de Python.
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(unique=False, nullable=False)

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

A partir de la versión SQLAlchemy 2.x estas consultas se hacen con `execute`

```py
from sqlalchemy import select

# Obtener todos los registros
all_people = db.session.execute(select(Person)).scalars().all()

# Obtener un registro por ID
person = db.session.get(Person, 3)  # Método directo recomendado
# Alternativa con execute:
person = db.session.execute(select(Person).where(Person.id == 3)).scalar_one_or_none()

# Filtrar registros
people = db.session.execute(
    select(Person).where(Person.name == "alex")
).scalars().all()

# Filtros avanzados
from sqlalchemy import or_
people = db.session.execute(
    select(Person).where(or_(Person.name == "alex", Person.age > 25))
).scalars().all()
```

# Diferencias entre los métodos `query` y `db.session.execute()`

## Tabla comparativa de operaciones comunes

| Operación               | Método tradicional (`query`)                     | Método moderno (`db.session.execute()`)        |
|-------------------------|------------------------------------------------|-----------------------------------------------|
| **Todos los registros**  | `Model.query.all()`                            | `db.session.execute(select(Model)).scalars().all()` |
| **Obtener por ID**      | `Model.query.get(id)`                          | `db.session.get(Model, id)`<br>o<br>`db.session.execute(select(Model).where(Model.id == id)).scalar_one()` |
| **Filtros simples**     | `Model.query.filter_by(name="x")`              | `db.session.execute(select(Model).where(Model.name == "x"))` |
| **Filtros complejos**   | `Model.query.filter(or_(...))`                 | `db.session.execute(select(Model).where(or_(...)))` |
| **Primer resultado**    | `Model.query.first()`                          | `db.session.execute(select(Model).limit(1)).scalar_one()` |
| **Ordenamiento**        | `Model.query.order_by(Model.name.desc())`      | `db.session.execute(select(Model).order_by(Model.name.desc()))` |
| **Paginación**          | `Model.query.paginate(page=1, per_page=10)`    | `db.session.execute(select(Model).offset(0).limit(10))` |

> ℹ️ **Nota**: Aunque `query` sigue funcionando, se recomienda migrar al nuevo estilo para futura compatibilidad.
 
### DELETE: Eliminando un registro de la base de datos

Para eliminar un registro de la base de datos es necesario seleccionar previamente la instancia que se desee borrar (a través de su clave primaria, el id) y eliminarla utilizando `db.session.delete(person)`, de acuerdo al siguiente ejemplo:

- Método tradicional
```py
person = Person.query.get(3) 
db.session.delete(person)
db.session.commit()
```

- Método moderno
```py
person = db.session.get(Person, 3) 
db.session.delete(person)
db.session.commit()
```

### UPDATE: Actualizar un registro

Para modificar un registro, hay que seleccionar previamente el mismo de la base de datos, luego puedes trabajar con él cambiando sus propiedades y hacer commit nuevamente, según el siguiente ejemplo:

- Método tradicional
```py
person = Person.query.get(3)
person.name = "Bob"
db.session.commit()
```

- Método moderno
```py
person = db.session.get(Person, 3) 
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

# Relaciones en SQLAlchemy: 
Las relaciones permiten conectar modelos/tablas entre sí, reflejando cómo interactúan los datos en tu base de datos. SQLAlchemy ofrece 3 tipos principales de relaciones, cada una con su sintaxis tradicional (v1.x) y moderna (v2.x+).

## 1. Relación Uno a Muchos (One-to-Many)

### ¿Cuándo debo usarla?
Cuando un registro en Tabla A puede tener múltiples registros asociados en Tabla B.

- Método Tradicional (query)
```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    posts = db.relationship('Post', backref='author')

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
```

- Método Moderno (SQLAlchemy 2.x)
```python
class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    posts: Mapped[List["Post"]] = relationship(back_populates="author")

class Post(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    author: Mapped["User"] = relationship(back_populates="posts")
```

## 2. Relación Muchos a Muchos (Many-to-Many)

- Método Tradicional
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

- Método Moderno
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
### ¿Cuándo usarla?
Cuando necesitas relaciones complejas donde ambas tablas pueden tener múltiples registros vinculados entre sí.

## 3. Relación Uno a Uno (One-to-One)

- Método Tradicional
```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    profile = db.relationship('Profile', uselist=False, backref='user')

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
```

- Método Moderno
```python
class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    profile: Mapped["Profile"] = relationship(back_populates="user")

class Profile(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    user: Mapped["User"] = relationship(back_populates="profile")
```
### ¿Cuándo usarla?
Cuando un registro en Tabla A debe vincularse con exactamente un registro en Tabla B.

## Tabla Comparativa

| Relación | Método Tradicional | Método Moderno | Ventajas del Método Moderno |
|----------|--------------------|----------------|-----------------------------|
| **Uno a Muchos** | `relationship('Post', backref='author')` | `Mapped[List["Post"]] = relationship(back_populates="author")` | Tipado explícito, mejor soporte IDE |
| **Muchos a Muchos** | Tabla secundaria separada, `backref` con lazy loading | Tabla como objeto, `back_populates` bidireccional | Mayor claridad, control preciso de tipos |
| **Uno a Uno** | `uselist=False` en relationship | `Mapped["Profile"]` sin lista | Sintaxis más intuitiva, mejor documentación |
| **Configuración** | Implícito en backref | Explícito con back_populates | Relaciones más claras y mantenibles |
| **Tipado** | Sin soporte nativo | Tipado con `Mapped[T]` | Mejor análisis estático, autocompletado |

> 💡 **Tip**: El método moderno es compatible con Flask-SQLAlchemy 3.x y ofrece mejor rendimiento y mantenibilidad a largo plazo.

Con SQLAlchemy, puedes conectar tus modelos como si fueran piezas de LEGO (pero sin el dolor de pisar una descalzo 😆). Ya sea 1:1 (como un celular y su dueño), 1:N (como un meme y sus mil compartidos), o N:M (como tus series favoritas y tus noches de insomnio), ¡el ORM te tiene cubierto!

¡Ahora ve y escribe queries como si el código se autodocumentara! 🦸‍♂️💻

(Y recuerda: si tu código funciona a la primera, es hora de sospechar... o de celebrar con un café ☕).

¿Listo para el siguiente nivel? ¡SQLAlchemy te espera! 😉
