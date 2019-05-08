---
title: "Construyendo APIs REST utilizando Flask"
subtitle: "Flask se está convirtiendo en el framework Python más popular (si es que aún no lo es), aprende cómo construir API REST de la forma REST"
cover: "https://ucarecdn.com/91bcc549-6758-49c3-a790-4245afbd8ece/"
textColor: "black"
date: "2019-05-02"
status: "draft"
tags: ["Flask","python","REST","API"]
---

A estas alturas ya deberías saber qué es una API REST, si no, te recomiendo [lee sobre esto aquí](http://content.breatheco.de/lesson/understanding-rest-apis).

Como un resumen muy breve, construir una API de forma REST. Significa que tienes que construir sus endpoints de URL agrupados por **"recursos"**, un recurso es algo que deseas administrar, por ejemplo: Estudiante, Usuario, Coche, etc. Un recurso es algo similar a una tabla de base de datos, pero los llamamos "recursos" debido a algunas excepciones.

Aquí hay un ejemplo de endpoints RESTful API para administrar **Estudiantes**:

| Método | URL | Descripción |
| ------ | --- | ----------- |
| GET    | /estudiante | Deberia devolver todos los estudiantes |
| GET    | /estudiante/1 | Deberia devolver un solo estudiante con el id=1 |
| GET    | /cohort/1/estudiantes | Deberia devolver todos los estudiantes de la cohorte con el id=1 |
| POST   | /estudiante | Deberia crear un nuevo estudiante |
| PUT    | /estudiante/1 | Deberia actualizar la información del estudiante con el id=1 |
| DELETE | /estudiante/1 | Deberia eliminar al estudiante con el id=1 |

Echa un vistazo a las URL ellas siguen un patrón, después de un tiempo, los endpoints hablarán por sí mismos, tendrán sentido y podrás adivinar a lo que hacen o incluso adivinar algunos endpoints. Esa es la idea.

[[info]]
| :point_up: Puede leer más sobre las API REST en [esta lección de BreatheCode](http://content.breatheco.de/lesson/understanding-rest-apis).<br /> Aquí hay un video de 8 minutos que explica REST: https://www.youtube.com/watch?v=7YcW25PHnAA

## Ahora vamos a hablar sobre Flask

Flask es increíble! Es muy similar al Servidor Express de Node.js y eso lo hace aún más fresco porque podrás trabajar con ambas tecnologías sin mucha curva de aprendizaje.

Flask es una biblioteca para crear un servidor web y una API. Básicamente, cuando ejecutas un script de Python que contiene las siguientes líneas, el computar comenzará a escuchar las solicitudes HTTP:

```py
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

app.run(host='0.0.0.0')
```
[Haga clic para probar este código en vivo.](https://repl.it/@4GeeksAcademy/Flask-Hello-World)


## Flask Hello-Wold explicado

```py
from flask import Flask #aquí importamos la biblioteca Flask en nuestro archivo.
app = Flask(__name__) #aquí creamos una nueva instancia del servidor Flask.

@app.route("/") #aquí definimos el primer camino de la API: GET /
def hello(): #este método se llamará cuando la solicitud se llame desde cualquier cliente
    return "Hello World!" #flask devolverá "Hello World, esto podría ser una cadena HTML o una cadena JSON.

app.run(host='0.0.0.0') #finalmente iniciamos el servidor en localhost.
```

En Flask podemos agregar nuevos endpoints utilizando el decorador `@ app.route`, no te preocupes si esta es la primera vez que ves un decorador, el concepto es muy simple y [aquí hay un video de 5 minutos explicándolo](https://www.youtube.com/watch?v=7ipNLN9y-nc).

## Agregando nuevos endpoints.

Si deseas agregar otro endpoint a tu API que se ejecuta cuando un cliente llama `GET/person`, tendrás que agregar otro bloque de código como este:

```py
@app.route("/person") #aquí especificamos la ruta para el endpoint.
def handle_person(): #aquí declaramos una función que se llamará cuando se realice una solicitud a esa url
    return "Hello Person!" #aquí especificamos la cadena que queremos responder al cliente.
```

## Especificando el método: GET, PUT, POST, DELETE

Si deseas que tu endpoint responda a POST, PUT o DELETE, puedes especificarlo en el decorador de la siguiente manera:

```py
from flask import Flask, request

@app.route("/person", methods=['POST', 'GET']) # aquí especificamos que estos endpoints aceptan solicitudes POST y GET.
def handle_person():
  if request.method == 'POST': # podemos entender qué tipo de solicitud estamos manejando usando un condicional
    return "A POST has been received!"
  else:
    return "A GET has been received!"
```

## Respondiendo un cuerpo JSON

La respuesta puede ser básicamente lo que quieras siempre que sea una cadena: HTML, JSON, CSS, imágenes, etc. Solo asegúrate de convertir en una cadena (string) lo que quieras responder.

En el siguiente ejemplo, estamos utilizando el método jsonify para convertir un diccionario llamado `person1` en una cadena (string) JSON antes de devolverlo al cliente.

```py
from flask import Flask, jsonify

@app.route("/person")
def handle_person():
    person1 = {
      "name": "Bob"
    }
    return jsonify(person1)
```

## El código de respuesta

El código de respuesta es 200 por defecto, y 500 si hay un error desconocido. Si deseas responder al cliente con un código diferente, deberás especificarlo así:

```py
from flask import Flask, jsonify

@app.route("/person")
def handle_person():
    content = {
      "details": "Hey, there has been an error on your request"
    }
    resp = jsonify(content)
    resp.status_code = 400 # aquí cambiamos el código de estado a 400 (código típico para errores de solicitud)
    return resp
```

Otra forma de cambiar el código de respuesta usando una coma `,`:

```py
@app.route("/person")
def handle_person():
    content = {
      "details": "Hey, there has been an error on your request"
    }
    return jsonify(content), 400
```

## Manejo de errores y validaciones

Pero ¿y si la solicitud viene con errores? Por ejemplo: si tenemos un endpoint para crear una persona y debemos especificar el primer nombre Y el último nombre, pero solo se encontró el primer nombre en la solicitud, así es como lo validaríamos:

```py
@app.route('/person', methods=['POST'])
def create_person():
    # POST request
        body = request.get_json() # obtener el contenido del cuerpo de la solicitud

        if 'first_name' not in body:
            return 'You need to specify the first_name',400
        if 'email' not in body:
            return 'You need to specify the last_name', 400

        return "ok", 200
```

## Definiendo un modelo

Hay diferentes maneras de integrar Flask en un servidor de base de datos, pero explicaremos la integración con [SQL ALchemy](http://content.breatheco.de/lesson/everything-you-need-to-start-using-sqlalchemy).

Existe una gran biblioteca de Python que integra Flask + SQLAlchemy de una manera aparente: [Flask-SQLAlchemy](https://github.com/pallets/flask-sqlalchemy). Nosotros te sugerimos que leas[esta lección sobre SQLAlchemy](https://content.breatheco.de/lesson/everything-you-need-to-start-using-sqlalchemy) primero y vuelve aquí.

Para integrarte con SQLAlchemy, todo lo que tienes que hacer es instalar el paquete e importarlo a tus archivos de esta manera:
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
        return {
            "username": self.username,
            "email": self.email
        }
  ```

 Puedes añadir tantos modelos como quieras.

## ¿Listo para empezar a codificar?

Hemos preparado este ejemplo de codificación en vivo que puede ejecutar usted mismo en Gitpod y utilizarlo como base para su proyecto.

Flask Rest Hello: [https://github.com/4GeeksAcademy/flask-rest-hello](https://github.com/4GeeksAcademy/flask-rest-hello)
