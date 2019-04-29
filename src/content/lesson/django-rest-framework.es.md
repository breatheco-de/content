---
title: "Entendiendo Django Rest Framework"
subtitle: "En el mundo de Python, aprender lo que es Django es la mejor manera de crear aplicaciones web y API RESTful. Disfruta de esta lección sobre Django Rest Framework"
cover: "https://ucarecdn.com/3e50e217-514d-41dc-a7a4-4725e08f8afb/"
textColor: "white"
date: "2018-12-11"
tags: ["django","python","REST","API"]
---

### ¿Porqué Django?



En este punto, como desarrollador, probablemente te hayas dado cuenta de la importancia de las bibliotecas de terceros para ayudarte a tí mismo a través de la programación. El 99.99% de todo lo que estás a punto de codificar ya ha sido construido. Existe una herramienta para todo y, como desarrolladores, nuestro trabajo es seleccionarlas con inteligencia e integrarlas de manera coherente para resolver un problema en particular.

Django es LA HERRAMIENTA para el desarrollo web. No es solo una biblioteca - son docenas de bibliotecas agrupadas. Es una serie de "mejores prácticas" y formas eficientes de trabajar. Estas son algunas de las características más sorprendentes:

+ Viene con un servidor de desarrollo (configuración mínima) que le permite comenzar a codificar de inmediato.
+ Tiene una interfaz de línea de comandos (manage.py) que acelera el proceso de desarrollo.
+ Documentación y comunidad: la comunidad de django es tan grande que no tendrá problemas para encontrar respuestas, tutoriales, etc.

## La Arquitectura de Django
***

Al igual que cualquier otro marco, Django propone una arquitectura específica para construir tu software y tenemos que aprender, adoptar y dominar todo si queremos convertirnos en Desarrolladores Senior de pila completa (usando Django):

<before-after 
    before="https://ucarecdn.com/61212ca7-cde0-43c1-8267-a1101a95da2c/" after="https://ucarecdn.com/80444105-0d6a-4a93-beb1-090b84b03376/" />

El primer concepto a aprender es  la diferencia entre sitio web y App.  Un buen Ejemplo puede ser BreatheCo.de

BreatheCode es un gran sitio web de django con varias aplicaciones dentro:

+ admin.breatheco.de: Este es el portal de administración donde se gestionan todos los alumnos, cohortes y ubicaciones.
+ breatheco.de: Este es el acceso de los estudiantes a los cursos.
+ assets.breatheco.de: Esta es una útil recopilación de herramientas tanto para el profesor como para los estudiantes.
  
Todas esas aplicaciones pueden ser parte de un gran sitio web llamado "Plataforma BreatheCode".

## Creando un Nuevo Projecto
***

para comenzar un proyecto todo lo que debes hacer es:

```bash
$ django-admin startproject [project_name]
$ cd [project_name]
```

Eso creará una nueva carpeta en su directorio actual con el nombre del proyecto y una serie de archivos.

#### ¡No tengas miedo de los archivos generados!


Recuerda que todo es solo texto! Puedes y debes jugar con los archivos generados para entenderlos correctamente. ¿A quién le importa si lo rompes? Lo peor que puede pasar es que tenga que ejecutar el comando createproject nuevamente 🙂

Después de ejecutar el comando, se creará una carpeta de proyecto con al menos 4 archivos dentro:

![Django Rest Framework](https://ucarecdn.com/f9bc68cd-e407-4d55-afd6-ba95b0c8bc02/-/resize/300x/)

+ `__init__:` un archivo vacío que cualquier carpeta debe tener dentro para ser considerado un paquete de python.
+ `settings:` contiene todas las variables de configuración para su proyecto; más adelante abordaremos este archivo.
+ `urls:` contiene todas las rutas URL de su sitio web, la ruta / admin se agrega de forma predeterminada a todos los proyectos de Django.
+ `wsgi:` Contiene la lógica para el servidor Django.


El archivo `manage.py` que está afuera es una herramienta CLI para poder controlar y usar Django desde la línea de comandos. Lo usarás a diario.


## Creando la Primera Applicación
***

Ahora que tenemos un gran proyecto (sitio web) es hora de comenzar a agregarle aplicaciones. Para crear tu primera aplicación Django, escribe el siguiente comando:

```python
$ python manage.py startapp [app_name]
```


[[warning]]
| :point_up: Para ejecutar este comando, debes estar parado en la misma carpeta que el archivo manage.py. Puede usar el comando CD para moverse a esa misma carpeta.

#### Una vez más, no tengas miedo de los archivos generados!

Ahora que tenemos un gran proyecto (sitio web) es hora de comenzar a agregarle aplicaciones. Para crear tu primera aplicación Django, escribe el siguiente comando:


![Django Rest Framework](https://ucarecdn.com/c7eb4466-eaa5-4d33-8181-5b4c5df4e7f8/-/resize/600x/)

+ `python>__init__:`  Le dice a Python que esta carpeta es un paquete.
+ `python>admin.py:`  Aquí podemos agregar modelos en la interfaz de administración para poder CRUD esos modelos.
+ `python>models.py: `  Aquí tendremos que definir nuestro modelo de base de datos (todas las estructuras de objetos que queremos almacenar en una base de datos).
+ `python>apps.py:`  No toques esto, describe las aplicaciones que tenemos.
+ `python>tests.py:`  Aquí puedes escribir tu aplicación  [unit tests.](https://en.wikipedia.org/wiki/Unit_testing)
+ `python>views.py: `  Aquí tiene que describir cómo se construirán sus archivos HTML o JSON.

Vamos a discutir todos estos con más detalle a continuación.

Para resumir y continuar con nuestro ejemplo del "Proyecto BreatheCode", esta es la forma en que la estructura de archivos de su proyecto puede verse después de tener varias aplicaciones dentro de un gran proyecto.

![Django Rest Framework](https://ucarecdn.com/e59de5e1-2751-4286-adfb-69c047e93058/-/resize/600x/)

### Manage.py (Django CLI)


El archivo Manage.py es una increíble herramienta de línea de comandos que te ayudará mucho. No solo es útil para crear nuevas aplicaciones dentro de su proyecto, sino para todas estas otras tareas (y más):

|&nbsp;     |&nbsp;      |
|:----------|:-----------|
|Crea usuarios administradores para tus aplicaciones.      |`python>$ python manage.py createsuperuser`         |
|Ejecutando el servidor de desarrollo de Python         |`python>$ python manage.py runserver $IP:$PORT`     |
|Haciendo migraciones                            |`python>$ python manage.py makemigrations [your_appliation_name]`        |
|Ejecutando migraciones                            |`python>$ python manage.py migrate`           |


## Arquitectura de Django para construir API RESTful
***

Vamos a construir una API basada en REST, pero no tengas miedo del nombre - el estándar REST básicamente se construyó como una API extremadamente simple.

[[info]]
| :point_up: :tv: Puede leer más sobre las API REST en esta lección de BreatheCode.<br> <br>Aquí hay un video divertido de 8 minutos que explica REST: https://www.youtube.com/watch?v=7YcW25PHnAA


### Aquí es cómo Django maneja cualquier solicitud HTTP de API:

+ La primera parte del código que trata con la Solicitud será el Distribuidor de URL (urls.py). Su objetivo principal es comprender qué APIView correspondiente debe instanciarse en función de la URL que se llamó y, finalmente, llamar al método GET, POST, PUT o DELETE de ese APIView según el tipo de solicitud.
+ Como segundo paso, APIView recibe los parámetros de la URL (si los hay) a través de los parámetros del método y luego ejecuta cualquier lógica codificada para procesar la solicitud o las interacciones del modelo de la base de datos. Por ejemplo: Obteniendo alguna información de la base de datos; guardar o borrar alguna otra información; enviando emails, etc.
+ El siguiente paso, debe ser decidir qué JSON debe devolverse dentro del "Body" de la Respuesta. Para eso tenemos el "serializer".
+ Finalmente, APIView debe devolver un objeto de respuesta que contenga el objeto JSON preparado por el serializer.

<before-after width="900px"
    before="https://ucarecdn.com/c7e96be7-a7b6-4b6d-83a2-535b22fdc3b0/" after="https://ucarecdn.com/88f6b44f-01dc-4a13-ba1f-fbab5280d510/" />

### urls.py: El Distribuidor de URL

```python
from django.urls import include, path
from . import views

urlpatterns = [
    path('games/', views.GamesView.as_view(), name='games'),
    path('game/', views.GameView.as_view(), name='game'),
    ...
]
```


El archivo urls.py contiene un arreglo ***PATHs***. Cada ruta comienza con un patrón de URL seguido de la ***VISTA*** que se supone que administra esa ruta y 2 parámetros opcionales: ***NOMBRE***: para identificar la ruta; y ***KWARGS***: una lista de valores que se pueden pasar a ***VIEW.***

### view.py: The Rendering Logic

```python
class GamesView(APIView):
    def get(self, request):
        games = Game.objects.all()
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)
    def post(self, request, game_id):
         # any logic for the post request 
        pass
```

Las "vistas" se denominan "vistas" porque su principal responsabilidad es generar la respuesta que se enviará a quien lo solicite. Por ejemplo: devolver un JSON o devolver un documento HTML.

Pero las vistas tienen otra responsabilidad: las vistas deben ocuparse de cualquier lógica necesaria antes de devolver la respuesta. Por ejemplo, si la solicitud entrante era una solicitud POST para actualizar a un usuario, entonces la vista debe interactuar primero con la Base de datos y actualizar PRIMERO al usuario; luego puede continuar y devolver al usuario actualizado como un objeto JSON.

El ejemplo de la izquierda es una vista que atenderá dos posibles solicitudes: el **GET** y el **POST** para la URL ***/game***. Para el GET, GamesView obtendrá todos los objetos del juego de la base de datos y devolverá un JSON con la lista de ellos; para el POST, GamesView no tiene ninguna lógica todavía, pero debe buscar el juego en particular con ese game_id dado y actualizarlo.

### models.py: Modelos de Base de Datos

```python
from django.db import models

# Create your models here. 
class Game(models.Model):
    player1 = models.CharField(max_length=20)
    player2 = models.CharField(max_length=20)
    winner = models.CharField(max_length=20)
```

Models.py es el lugar donde se definen todos los objetos que se guardarán en la base de datos y toda la lógica necesaria para interactuar con ellos. También debe especificar el tipo de datos para cada una de las propiedades que tiene cada objeto.

El ejemplo que hemos estado usando solo necesita Class Game como modelo, y Class Game tiene solo 3 propiedades.

### tests.py: Prueba de Aplicación

```python
from django.urls import include, path
from . import views

urlpatterns = [
    path('games/', views.GamesView.as_view(), name='games'),
    path('game/', views.GameView.as_view(), name='game'),
    ...
]
```

El archivo urls.py contiene un arreglo ***PATHs***. Cada ruta comienza con un patrón ***URL***, seguido de la ***VISTA*** que se supone que administra esa ruta y 2 parámetros opcionales: ***NOMBRE:*** Para identificar la ruta; y ***KWARGS***: una lista de valores que se pueden pasar al ***VIEW***.

[[info]]
| :tv: Aquí hay una serie de 5 videos que explica las API de django de una manera sorprendente: https://www.youtube.com/watch?v=Yw7gETuRKjw&index=37&list=PL6gx4Cwl9DGBlmzzFcLgDhKTTfNLfX1IK


[[info]]
|:link: Este sitio web contiene sorprendentes recursos de Django: http://awesome-django.com
