---
title: "¿Cómo consumir una API en Python?"
subtitle: "Aprende a consumir una API en Python. Descubre los pasos esenciales para acceder y utilizar datos externos en tus aplicaciones. ¡Potencia tus proyectos ahora!"
tags: ["python", "apis"]
authors: ["DF27ARTS"]

---

## ¿Cómo consumir una API en Python usando requests?

En el mundo del desarrollo moderno es muy común hacer uso de una API (Application Programming Interface) para conectarse a servicios de terceros. Por ejemplo, si estas creando una aplicación donde necesitas rastrear la ubicación de los usuarios, en lugar de escribir todo el código necesario para eso, puedes simplemente hacer uso de la API de google maps.

En este artículo veremos cómo consumir una API en Python con ayuda de la librería **Requests**. En el siguiente ejemplo veremos un caso sencillo de una petición **GET** a la API gratuita de [jsonplaceholder](https://jsonplaceholder.typicode.com/).

Para poder hacer uso de la librería **Requests** primero debemos instalarla en nuestro ordenador, para eso puedes utilizar el siguiente comando:

```bash
pip install requests
```

Una vez instalada, ya podemos usarla en nuestro código para hacer pedidos **HTTP**, en este caso, un pedido **GET** de un usuario de ejemplo.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/users/1"
response = requests.get(URL)

if response.status_code == 200:
    print('Solicitud exitosa')
    print('Data:', response.json())
else:
    print('Error en la solicitud, detalles:', response.text)
```
> output del código:
```bash
Solicitud exitosa
Data: {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
```

En este ejemplo, hacemos uso del método `get(api_url)` de la librería requests para traer la información de de un usuario falso proporcionada por la API de **jsonplacehorder**, este método retorna la información recibida desde la API y se guarda en la variable `response`. Si la solicitud fue exitosa la petición retorna un `status_code` de 2XX (Entre 200 y 299) y la información del usuario, pero si ocurrió algún error en la proceso retorna un `status_code` de 4XX (Entre 400 y 499) y un mensaje con el motivo del error.

## ¿Qué es una API en Python?

Las APIs son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos. En el contexto de la programación, una API se utiliza para acceder a funciones y datos de una aplicación externa. En [Python](https://4geeks.com/es/lesson/como-programar-en-python), las APIs son una forma común de obtener y manipular datos desde servicios en línea, como servicios web, bases de datos y otros recursos externos.

Un ejemplo común de una API sería la [api del clima](https://openweathermap.org/api) que te brinda información básica sobre el clima de cualquier ciudad o país, si necesitas realizar una aplicación que requiera información sobre el clima de cualquier parte del mundo, puedes hacer uso de esta API a través de protocolos **HTTP** para conseguir esa información y poder usarla directamente en tu aplicación.

## ¿Cómo consumir una API?

A continuación veremos algunos ejemplos sobre cómo consumir una API en Python con la ayuda de la librería **Requests** de Python y la API gratuita de  [jsonplaceholder](https://jsonplaceholder.typicode.com/) que proporciona datos simulados, para esto necesitas instalar esta la librería de requests en tu ordenador, puedes instalarla con el siguiente comando:

```bash
pip install requests
```

Esta librería te permite acceder a la información obtenida desde una API de una forma muy sencilla, estos son algunos de los métodos y propiedades más comunes para acceder a la información que retornan las peticiones:

| Propiedad            | Descripción                                                                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|`response.status_code`|  Contiene el código de status de la petición, ejemplo: 201                                                                                   |
|`response.url`        | Contiene la URL de la petición.                                                                                                              |
|`response.headers`    | Proporciona los headers de la petición.                                                                                                      |
|`response.cookies`    | Proporciona las cookies de la petición.                                                                                                      |
|`response.encoding`   | Contiene la codificación de la petición, ejemplo: utf-8.                                                                                     |
|`response.json()`     | Guarda la información que viene desde la API, por ejemplo, en la API del clima, una lista de diccionarios con la información de las ciudades.|

> Nota importante, las peticiones a la API de **jsonplaceholder** sólo simulan el comportamiento de una API real, no todas las peticiones son funcionales, por ejemplo, si hacer una petición de tipo POST la API de **jsonplaceholder** la información NO se guardará en los servidores de la API pero la API te responde con un mensaje que simula que si.

### Ejemplo con la solicitud GET

Las solicitudes de tipo **GET** se utilizan para traer información de un servidor.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(URL)

if response.status_code == 200:
    data = response.json()

    print('Solicitud exitosa')
    print('Data:', data)
else:
    print('Error en la solicitud, detalles:', response.text)
```

> output del código:

```bash
Solicitud exitosa
Data: {
    'userId': 1, 
    'id': 1, 
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}
```

En este ejemplo, hacemos uso del método `get()` de la librería requests para traer la información de un post simulado por la API de **jsonplaceholder**, esta información será guardada en la variable `response`, luego con un condicional `if else` verificamos si la petición a la API se realizó de forma correcta, de ser así mostramos la información en la consola, de lo contrario imprimimos un mensaje con el error.

### Ejemplo con la solicitud POST

Las solicitudes de tipo **POST** se utilizan para enviar datos al servidor.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts"
DATA = {
    "title": "Título del ejemplo",
    "body": "Contenido de un nuevo post",
    "userId": 1
}

response = requests.post(URL, json=DATA)

if response.status_code == 201:
    data = response.json()

    print('Post creado de forma exitosa')
    print('Respuesta:', data)
else:
    print('Error en la solicitud, detalles:', response.text)
```

> output del código:

```bash
Post creado de forma exitosa
Respuesta: {
    'title': 'Título del ejemplo', 
    'body': 'Contenido de un nuevo post', 
    'userId': 1, 
    'id': 101
}
```

En este ejemplo, hacemos uso del método `post()` de la librería requests para crear un nuevo objeto en el servidor, el método `post()` recibe dos parámetros, el primero es la URL de la API y el segundo es la información del objeto que queremos crear dentro de un diccionario.

### Ejemplo con la solicitud PUT

Las solicitudes de tipo **PUT** se utilizan para actualizar datos en el servidor.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts/1"
DATA = {
    "title": "Título actualizado",
    "userId": 2
}

response = requests.put(URL, json=DATA)

if response.status_code == 200:
    data = response.json()

    print('Post actualizado de forma exitosa')
    print('Respuesta:', data)
else:
    print('Error en la solicitud, detalles:', response.text)
```

> output del código:

```bash
Post actualizado de forma exitosa
Respuesta: {
    'title': 'Título actualizado', 
    'userId': 2, 
    'id': 1
}
```

Para hacer una solicitud de tipo PUT debemos hacer uso del método `put()` de la librería de requests, este método también recibe dos parámetros, el primero es la URL que le indica a la API el objeto en particular que deseas actualizar y el segundo parámetro es la información con la que deseas actualizar el objeto.

### Ejemplo con la solicitud DELETE

Las solicitudes de tipo **DELETE** se utilizan para eliminar datos en el servidor.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.delete(URL)

if response.status_code == 200:
    print('Post eliminado de forma exitosa.')
else:
    print('Error en la solicitud, detalles:', response.text)
```
> output del código:
```bash
Post eliminado de forma exitosa.
```

Para realizar una solicitud de tipo DELETE en Python debemos hacer uso del método `delete()` de la librería requests, este método recibe como parámetro la URL que le indica a el servidor de la API el objeto en particular que deseas eliminar, normalmente las APIs retornan un mensaje que nos indica si el objeto se eliminó de forma correcta o no pero la API de jsonplaceholder no retorna un mensaje en particular solo retorna un `status_code` de **200**.

## Conclusión

Las APIs desempeñan un papel fundamental en la integración de aplicaciones y el intercambio de datos en el mundo del desarrollo de software. En Python la librería **Requests** nos permite interactuar con las APIs de una forma sencilla e intuitiva, en este artículo aprendimos como hacer uso de esta librería para hacer peticiones **HTTP** y así obtener, crear, actualizar o eliminar información en una API, ahora ya estás listo/a para consumir una API de forma correcta y hacer uso de sus funcionalidades en tus propias aplicaciones.

## Material Recomendado

Para profundizar en cómo consumir APIs en Python, te invitamos a realizar este **curso interactivo**. Es una excelente oportunidad para aprender de manera práctica y dominar el uso de la librería `requests`:

👉 [¡Haz este curso interactivo sobre Python HTTP Requests & API!](https://4geeks.com/es/interactive-exercise/python-http-requests-api-tutorial-ejercicio)

¡No te lo pierdas! Es el primer paso para convertirte en un experto en la integración de APIs.
