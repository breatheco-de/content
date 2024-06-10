---
title: "Construye y opera base de datos con SQL Alchemy"
subtitle: "SQLAlchemy en su version 2 nos permite manejar nuestra base de datos como si se tratarán de objetos ordinarios en el código. Aprende a aprovechar las ventajas de este poderoso ORM"
tags: ["python","databases","sqlalchemy","sql"]

---
## ¿Que son ORM y para qué son útiles?

ORM son las siglas de Object-Relational Mapping. Es una técnica de programación que conecta el mundo del código de la programación orientada a objetos (POO) con el mundo relacional de las bases de datos. En términos más sencillos, actúa como traductor entre la forma en que representas los datos en tu código mediante objetos y la forma en que se almacenan los datos en las bases de datos relacionales mediante tablas y relaciones.

Los ORM simplifican el proceso de acceso y manipulación de datos en bases de datos desde el código. Proporcionan una capa de abstracción que te protege de las complejidades de las consultas SQL y te permite trabajar con datos utilizando objetos y sus relaciones, como harías en cualquier aplicación de programación orientada a objetos.

Entre sus beneficios se encuentran:

- **Simplifica el acceso a datos:** Trabaja con objetos en lugar de consultas SQL complejas.

- **Mejora la productividad:** Reduce el tiempo de desarrollo y mantenimiento de código.

- **Promueve la modularidad:** Separa la lógica de negocio de la gestión de datos.

- **Aumenta la portabilidad:** Facilita el cambio de base de datos sin modificar el código.

## ¿Qué es SQLAlchemy?

SQL Alchemy es un popular conjunto de herramientas SQL y Object Relational Mapper (ORM) de Python que proporciona un completo conjunto de herramientas para interactuar con bases de datos desde aplicaciones Python. Ofrece una API potente y flexible que permite a los desarrolladores realizar una amplia gama de operaciones con bases de datos. Entre sus características principales se incluyen.

- **Mapeo Objeto-Relación (ORM):** Las capacidades ORM de SQL Alchemy le permiten trabajar con datos de bases de datos utilizando objetos Python, simplificando el acceso y la manipulación de datos.

- **API de consultas SQL básicas:** SQL Alchemy proporciona una API potente y flexible para construir y ejecutar consultas SQL, incluyendo soporte tanto para SQL sin procesar como para un constructor de consultas declarativo.

- **Capa de abstracción de la base de datos:** SQL Alchemy se abstrae del motor de base de datos subyacente, lo que permite escribir código independiente de la base de datos que se puede portar fácilmente a diferentes bases de datos.

- **Sistema de eventos:** SQL Alchemy cuenta con un sistema de eventos que le permite conectarse a varias etapas de las operaciones de la base de datos, como antes y después de la ejecución de la consulta.

- **Amplio ecosistema:** SQL Alchemy cuenta con compatibilidad para la integración con diversas herramientas complementarias, como por ejemplo `flask-sqlalchemy` para su integración con apis Flask, o `alembic` que permite gestionar migraciones de una forma sencilla.

En general, SQL Alchemy es una herramienta potente y versátil que se ha convertido en el estándar de facto para el desarrollo de bases de datos en Python. Su rico conjunto de características, flexibilidad y facilidad de uso la convierten en un activo inestimable para la creación de aplicaciones basadas en datos robustas y escalables.

> Aprende a construir una api con Flask en [éste artículo](https://4geeks.com/es/lesson/building-apis-with-python-flask-es)

## Construye tu modelo de base de datos

El primer paso en la creación de la base de datos es el modelado, pero si quieres saber como construir un buen modelo en base a los requerimientos de tu aplicación te recomendamos que revises [nuestro artículo de modelado de datos](https://4geeks.com/es/lesson/modelado-bases-de-datos). Para éste artículo vamos a asumir que ya sabes qué tablas necesitas, que columnas deben tener y como se relacionan todas éstas.

Para llevar las tablas del modelo a la base de datos hay que partir por una clase `Base`, que se crea a partir de otra llamada `DeclarativeBase` de SQLAlchemy.

```python
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass

```

Esta clase base se utilizará para crear las tablas y posteriormente generar la conexión con la cual haremos las operaciones.

## ¿Como se define una tabla?

De la clase base podemos crear otras clases que serán convertidas en tablas de nuestra base de datos, y que podrás usar desde el código de tu aplicación para consultar o manipular información. Analicemos como luce una clase para una tabla de películas:

```python
class Films(Base):
    __tablename__ = "films"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100))
    release_date: Mapped[date] = mapped_column(Date)
```

1. La propiedad `__tablename__` corresponde al nombre final que tendrá la tabla en la base de datos. Es recomendable usar minúsculas y evitar el uso de caracteres especiales.

2. La propiedad `id` se mapea como un entero (int) y se indica que corresponde a una columna de clave primaria. SQLAlchemy interpreta esto y crea un secuencia numérica que se incrementa con cada fila o registro insertado.

3. La columna `title` se mapea como campo de cadena de caracteres (str) y se indica que corresponde a una columna `String(100)` donde el numero representa la longitud del texto máxima que se puede almacenar en ese campo.

4. Por último la columna `release_date` se mapea al igual que las anteriores, pero con un tipo de dato `date` para almacenar fechas.

Ya con esto tenemos definida una clase que luego será convertida una tabla de la base de datos. Adicionalmente también podemos agregar otras funciones que nos puedan ayudar a representar o manipular los datos del modelo, asi como mas columnas de cualquiera de los [tipos de datos soportados por SQLAlchemy](https://docs.sqlalchemy.org/en/20/core/types.html)

## Relaciones entre tablas

El principal propósito de las bases de datos relacionales es precisamente la asociación de distintas entidades mediante sus relaciones, y SQLAlchemy tiene todas las herramientas para definir estas relaciones desde el código Python sin tener que tocar SQL. Supongamos que, ademas de la tabla `Films` que se define en el apartado anterior, también se tiene una tabla `Actors` con la información de los actores de la industria de Hollywood.

```python
class Actors(Base):
    __tablename__ = "actors"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    date_of_birth: Mapped[date] = mapped_column(Date)
```

Si se quiere hacer una base de datos de películas incluyendo los actores que aparecen en ellas (al estilo IMDB) aparece la necesidad de definir ésta relación en el modelo. Dado que un actor puede aparecer en muchas películas, y a su vez una película puede tener muchos actores, nos encontramos con una relación de `muchos a muchos`. Para esta relación transitoria necesitamos lo que se conoce como una **tabla pivote**, usando un nombre que sirva para identificar la relación, ésta tabla se llamará `Cast` (elenco).

```python
class Cast(Base):
    __tablename__ = "cast"
    id: Mapped[int] = mapped_column(primary_key=True)
    # Relationship with actors
    actor_id = mapped_column(ForeignKey("actors.id"))
    actor: Mapped["Actors"] = relationship(back_populates="movies")

    # Relationship with films
    film_id = mapped_column(ForeignKey("films.id"))
    film: Mapped["Films"] = relationship(back_populates="characters")
```

### ¿Cómo se define la relación?

1. **Llave foránea:** Se hace referencia a la llave foránea con la cual se relaciona la entidad. Cabe destacar que en una relación `uno a muchos` la llave foránea se coloca en el extremo `muchos` de la relación. En este caso, como `un actor puede estar en muchos elencos`, la llave foránea se coloca en la tabla del elenco (Cast).

2. **Mapeo de relación:** Adicionalmente a la llave foránea, SQLAlchemy nos permite mapear la entidad con la que se tiene relación gracias a las propiedades `relationship`. Ésta genera una referencia directa al objeto con el que se relaciona y permite acceder a éste desde el código sin necesidad de una consulta adicional.

3. **Llenar hacia atrás:** Ademas del mapeo de la relación en la entidad también es posible generar la misma referencia en sentido contrario hacia la entidad foránea. Dicho en este caso, es posible crear una propiedad en la entidad `Actors` que haga referencia a todos los elencos en donde aparece. Para ello se utiliza el parámetro `back_populates` especificando el nombre de la relación en la entidad foránea que hará la referencia.

```python
class Actors(Base):
    __tablename__ = "actors"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    date_of_birth: Mapped[date] = mapped_column(Date)
    movies: Mapped[List["Cast"]] = relationship(back_populates="actor")


class Cast(Base):
    __tablename__ = "cast"
    id: Mapped[int] = mapped_column(primary_key=True)
    # Relationship with actors
    actor_id = mapped_column(ForeignKey("actors.id"))
    actor: Mapped["Actors"] = relationship(back_populates="movies")
    # Relationship with Films
    film_id = mapped_column(ForeignKey("films.id"))
    film: Mapped["Films"] = relationship(back_populates="characters")

class Films(Base):
    __tablename__ = "films"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100))
    release_date: Mapped[date] = mapped_column(Date)
    characters: Mapped[List["Cast"]] = relationship(back_populates="film")

```

Aquí se destaca lo siguiente:

- Vemos como 2 entidades se relacionan mutuamente usando propiedades `relationship` donde cada una apunta hacia el atributo relationship de la otra, y siendo mapeada con el tipo de entidad de su relación

- A pesar de que las entidades tienen propiedades `relationship` solo `Cast` tiene `ForeignKey` puesto que le corresponde por ser el extremo `muchos` en las relaciones: tanto un Actor como una película tienen muchos Cast.

- Debido a que un `Actor` puede aparecer en muchos `Cast` la relación `movies` se mapea como una lista de Casts, mientras que en el otro extremo de la relación un actor es directamente de tipo `Actors`. Lo mismo ocurre en la relación con el `Film` donde `characters` es una lista de `Cast`

- A la hora de mapear relaciones con otras entidades, se especifica el nombre de la entidad entre comillas y respetando las mayúsculas, por ejemplo `actor: Mapped["Actors"]`. Esto para que las relaciones no se vean afectadas por el orden en que aparezcan las clases en el código, lo que permite que en este caso se puedan tener mapeadas `movies: Mapped[List["Cast"]]` siendo que `Cast` se define mas abajo en el código.

Por último recordemos que las relaciones de `muchos a muchos`, como el caso de las películas con los actores, son en la práctica dos relaciones de uno a muchos de ambas entidades con una tabla pivote. En este caso la entidad `Cast` hace de pivote y asi como se definió su relación con los actores (Actors), también se debe hacer lo propio con las películas (Films) para completar la relación.

## Operaciones CRUD

Para poder realizar operaciones con la base de datos y nuestros modelos es necesario generar una sesión con la cuál realizar las operaciones

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Puedes agregar el parámetro 'echo=True' a la siguiente línea para ver el como funciona código SQL de la librería
engine = create_engine("postgresql://user:password@server.com:5432/example")

Session = sessionmaker(bind=engine)
session = Session()
```

El objeto `session` será el que se utilice para realizar las operaciones en la base de datos.

### Crear (**C**eate)

Para crear un nuevo registro de `Films`, puede instanciar un objeto Películas y establecer sus atributos, y después añadirlo a la sesión y confirmar los cambios:

```python
# Create a new film record
new_film = Films(title="The Shawshank Redemption", release_date=datetime.date(1994, 9, 23))

# Add the new film to the session
session.add(new_film)

# Commit the changes to the database
session.commit()

```

### Leer (**R**ead)

Para recuperar los registros de películas existentes, puedes utilizar consultas creadas con la API de consultas de SQLAlchemy. Este es un ejemplo de búsqueda de todas las películas:

```python
# Fetch all films
query = select(Planets)
films = self.session.scalars(query).all()

for film in films:
    print(f"Film: {film.title}, Release Date: {film.release_date}")
```

También puede utilizar filtros para recuperar películas concretas en función de unos criterios:

```python
query = select(Films).filter_by(id=id)
film = session.scalars(query).first()

if film:
    print(f"Film found: {film.title}, Release Date: {film.release_date}")
else:
    print("Film not found")
```

### Actualizar (**U**pdate)

Para actualizar un registro de película existente, debes obtener el objeto `Flims` que vayas a actualizar, modificar sus atributos y confirmar los cambios:

```python
# Buscar la pelicula con el id 1
query = select(Films).filter_by(id=1)
film = self.session.scalars(query).first()
if (film is None):
    print("Film not found")
    return None
# Actualizar el titulo y confirmar los cambios
film.title="New title"
session.add(film)
session.commit()
```

### Eliminar (**D**elete)

Para eliminar un registro de película existente, debes obtener el objeto `Films` y eliminarlo de la sesión, similar al caso de actualizar pero cambiando el último paso:

```python
# Buscar la pelicula con el id 1
query = select(Films).filter_by(id=1)
film = self.session.scalars(query).first()
if (film is None):
    print("Film not found")
    return None
session.delete(film)
session.commit()
```

### Registro de relaciones

Una vez definidas las relaciones, puede acceder a los objetos relacionados utilizando los atributos de relación definidos. Retomando el ejemplo de la relación de los actores con los elencos de cada película, puedes obtener los actores de una película determinada consultando primero el objeto de la película:

```python
query = select(Films).filter_by(id=id)
film = session.scalars(query).first()

for character in film.characters:
    print(f"Actor: {character.actor.name}")

```

Para añadir objetos relacionados a un objeto existente, puede añadirlos al atributo de relación correspondiente a la llave foránea. Por ejemplo, para añadir un actor al elenco de una película actor y película deben existir previamente, una vez obtenidos pueden ser agregados a la tabla `Cast`:

```python
# Se obtiene el film
query = select(Films).filter_by(id=1)
film = session.scalars(query).first()

# Se obtiene el actor
query = select(Actor).filter_by(id=1)
actor = session.scalars(query).first()

# Se agrega el elenco
cast=Cast(actor_id=people_id,film_id=film_id)
session.add(cast)
session.commit()

```

>**Para manipular relaciones solo se editan los campos `ForeignKey` como cualquier otro campo. Los valores de los campos `ForeignKey` deben existir previamente en la tabla donde a donde apunta la relación.**

## Ponte a prueba

Ya tienes toda la información que necesitas para empezar a implementar bases de datos con SQLAlchemy en tus aplicaciones con Python. Recuerda que no estas limitado a solo APIs, también puedes usar SQLAlchemy en aplicaciones de Ciencia de datos, Machine Learning, Electrónica, Internet de las cosas (IOT) y mucho más.

[Desafíate a completar el siguiente proyecto para consolidar tus conocimientos en SQLAlchemy](https://github.com/4GeeksAcademy/sqlalchemy-operations)
