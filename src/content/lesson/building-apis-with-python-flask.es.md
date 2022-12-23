---
title: "Construyendo APIs REST utilizando Flask"
subtitle: "Flask se está convirtiendo en el framework Python más popular (si es que ya no lo es), aprende cómo construir API REST de la forma REST"
cover_local: "../../assets/images/91bcc549-6758-49c3-a790-4245afbd8ece.png"
textColor: "black"
date: "2020-10-19T16:36:31+00:00"
status: "published"
tags: ["Flask","python","REST","API"]

---

A estas alturas ya deberías saber qué es una API REST, si no, te recomiendo [leer sobre esto aquí](http://content.breatheco.de/lesson/understanding-rest-apis).

A modo de breve resumen, construir una API de forma REST significa que tienes que construir sus endpoints de URL agrupados por **"recursos"**. Un recurso es algo que quieres gestionar, por ejemplo: un estudiante, un usuario, un auto, etc. Un recurso es algo similar a una tabla de base de datos, pero los llamamos "recursos" debido a algunas excepciones.

Aquí hay un ejemplo de endpoints RESTful API para gestionar **Estudiantes**:

| Método | URL | Descripción |
| ------ | --- | ----------- |
| GET    | /estudiante | Debería devolver todos los estudiantes |
| GET    | /estudiante/1 | Debería devolver un solo estudiante con el id=1 |
| GET    | /cohort/1/estudiantes | Debería devolver todos los estudiantes de la clase con el id=1 |
| POST   | /estudiante | Debería crear un nuevo estudiante |
| PUT    | /estudiante/1 | Debería actualizar la información del estudiante con el id=1 |
| DELETE | /estudiante/1 | Debería eliminar al estudiante con el id=1 |

Echa un vistazo a las URL, ellas siguen un patrón. Después de un tiempo, los endpoints hablarán por sí mismos, tendrán sentido y podrás adivinar a lo que hacen o incluso adivinar algunos endpoints. Esa es la idea.

> :point_up: Puede leer más sobre las API REST en [esta lección de BreatheCode](http://content.breatheco.de/lesson/understanding-rest-apis).<br /> Aquí hay un video de 8 minutos que explica REST: https://www.youtube.com/watch?v=7YcW25PHnAA

## Ahora hablemos sobre Flask

¡Flask es increíble! Es muy similar al Servidor Express Node.js y eso lo hace aún más genial porque podrás trabajar con ambas tecnologías sin mucha curva de aprendizaje.

Flask es una librería para crear un servidor web y APIs. Básicamente, cuando ejecutas un script de Python que contiene las siguientes líneas, el computar comenzará a escuchar las solicitudes HTTP:

```py
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

app.run(host='0.0.0.0')
```
[Haz clic para probar este código en vivo.](https://repl.it/@4GeeksAcademy/Flask-Hello-World)


## Flask Hello-Wold explicado

```py
from flask import Flask  # Aquí importamos la librería Flask en nuestro archivo.
app = Flask(__name__)  # Aquí creamos una nueva instancia del servidor Flask.

@app.route("/")  # Aquí definimos el primer path de la API: GET /
def hello()  # Este método se llamará cuando el cliente haga el request
    return "Hello World!"  # Aquí flask devolverá "Hello World, esto podría ser un string HTML o un string JSON.

app.run(host='0.0.0.0')  # Finalmente iniciamos el servidor en el localhost.

```

En Flask podemos agregar nuevos endpoints utilizando el decorador `@ app.route`, no te preocupes si esta es la primera vez que ves un decorador, el concepto es muy simple y [aquí hay un video de 5 minutos explicándolo](https://www.youtube.com/watch?v=7ipNLN9y-nc).

## Agregando nuevos endpoints

Si deseas agregar otro endpoint a tu API que se ejecuta cuando un cliente haga el `GET/person`, tendrás que agregar otro bloque de código como este:

```py
@app.route("/person")  # Aquí especificamos la ruta para el endpoint.
def handle_person()  # Aquí declaramos una función que se llamará cuando se realice una request a esa url
    return "Hello Person!"  # Aquí especificamos el string que queremos responder al cliente.

```

## Especificando el método: GET, PUT, POST, DELETE

Si deseas que tu endpoint responda a POST, PUT o DELETE, puedes especificarlo en el decorador de la siguiente manera:

```py
from flask import Flask, request

@app.route("/person", methods=['POST', 'GET'])  # Aquí especificamos que estos endpoints aceptan solicitudes POST y GET.
def handle_person():
    if request.method == 'POST':  # Podemos entender qué tipo de request estamos manejando usando un condicional
        return "Se recibió un POST"
    else:
        return "Se recibió un GET"

```

## Respondiendo un cuerpo JSON

La respuesta puede ser básicamente lo que quieras siempre que sea un string: HTML, JSON, CSS, imágenes, etc. Solo asegúrate de convertir en string lo que quieras responder.

En el siguiente ejemplo, estamos utilizando el método jsonify para convertir un diccionario llamado `person1` en un string JSON antes de devolverlo al cliente.

```py
from flask import Flask, jsonify

@app.route("/person")
def handle_person():
    person1 = {"name": "Bob"}
    return jsonify(person1)

```

## El código de respuesta

El código de respuesta es 200 por defecto, y 500 si hay un error desconocido. Si deseas responder al cliente con un código diferente, deberás especificarlo así:

```py
from flask import Flask, jsonify

@app.route("/person")
def handle_person():
    contenido = {"detalles": "Hubo un error en la solicitud"}
    respuesta = jsonify(contenido)
    respuesta.status_code = 400  # Aquí cambiamos el código de estado a 400 (código muy común en caso de errores de solicitud)
    return respuesta

```

Otra forma de cambiar el código de respuesta usando una coma `,`:

```py
@app.route("/person")
def handle_person():
    contenido = {"detalles": "Hubo un error en la solicitud"}
    return jsonify(content), 400

```

## Manejo de errores y validaciones

Pero ¿y si la solicitud viene con errores? Por ejemplo: si tenemos un endpoint para crear una persona y debemos especificar el first_name Y el last_name, pero solo se encontró el first_name en la solicitud, así es como lo validaríamos:

```py
@app.route('/person', methods=['POST'])
def create_person():
    # POST request
    body = request.get_json()  # Obtener el request body de la solicitud
    if body is None:
        return "The request body is null", 400
    if 'first_name' not in body:
        return 'Especificar first_name',400
    if 'email' not in body:
        return 'Especificar last_name', 400
    return "ok", 200

```

## Definiendo un modelo

Hay diferentes maneras de integrar Flask en un servidor de base de datos, pero explicaremos la integración con [SQL ALchemy](http://content.breatheco.de/lesson/everything-you-need-to-start-using-sqlalchemy).

Existe una gran librería de Python que integra Flask + SQLAlchemy de manera constante: [Flask-SQLAlchemy](https://github.com/pallets/flask-sqlalchemy). Nosotros te sugerimos que leas[esta lección sobre SQLAlchemy](https://content.breatheco.de/lesson/everything-you-need-to-start-using-sqlalchemy) primero y vuelve aquí.

Para integrar con SQLAlchemy, todo lo que tienes que hacer es instalar el paquete e importarlo a tus archivos de esta manera:
```py
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

```

Una vez que se importa, puedes comenzar a declarar tus modelos de base de datos de esta manera:

```py
class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Person %r>' % self.username

    def serialize(self):
        return {"username": self.username,
                "email": self.email}

```

 Puedes añadir tantos modelos como quieras.

## ¿Listo para empezar a codificar?

Hemos preparado este ejemplo de codificación en vivo que puede ejecutar tu mismo en Gitpod y utilizarlo como base para su proyecto.

Flask Rest Hello: [https://github.com/4GeeksAcademy/flask-rest-hello](https://github.com/4GeeksAcademy/flask-rest-hello)
