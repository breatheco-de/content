## ¿Que son ORM y para qué son útiles?

## ¿Qué es SQLAlchemy?

## Construye tu modelo de base de datos

El primer paso en la creación de la base de datos es el modelado, pero si quieres saber como construir un buen modelo en base a los requerimientos de tu aplicación te recomendamos que revises [nuestro artículo de modelado de datos](#). Para éste artículo vamos a asumir que ya sabes qué tablas necesitas, que columnas deben tener y como se relacionan todas éstas.

Para llevar las tablas del modelo a la base de datos hay que partir por una clase `Base`, que se crea a partir de otra llamada `DeclarativeBase` de SQLAlchemy.

```python
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass

```

Esta clase base se utilizará para crear las tablas y posteriormente generar la conexión con la cual haremos las operaciones.

### ¿Como se define una tabla?

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

Ya con esto tenemos definida una clase que luego será convertida una tabla de la base de datos. Adicionalmente también podemos agregar otras funciones que nos puedan ayudar a representar o manipular los datos del modelo, asi como mas columnas de cualquiera de los [tipos de datos soportados por SQLAlchemy](#)

## Relaciones entre tablas



## Operaciones CRUD
