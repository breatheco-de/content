---
title: "Creando User Story: Aprenda con Ejemplos de Historias de Usuarios"
subtitle: "Antes de avanzar hacia el desarrollo, necesitamos una estrategia (Historias de usuarios). Encuentra y aprende aquí con ejemplos de historias de usuarios.
Es la actividad más infravalorada en el ciclo de desarrollo de software y representa el 70% de las razones por las que los proyectos no se entregan a tiempo.."
cover: "https://ucarecdn.com/980ce2e0-b73e-4019-8e97-3510e3028e10/"
textColor: "white"
date: "2018-11-13"
tags: ["user story"]
---

## Que es un "User Story"?
***

<iframe width="1185" height="667" src="https://www.youtube.com/embed/LGeDZmrWwsw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/LGeDZmrWwsw">Click aquí para abrir el video en una ventana nueva</a></small></div>

Lo más difícil de hacer en software no es programar, ¡es diseñar el sistema! Y NO estamos hablando de diseño gráfico ... estamos hablando de arquitectura, modelado de datos, requisitos del cliente, etc. Algunas de esas cosas son más difíciles que otras, pero hacer una lista de requisitos es probablemente una de las artes más difíciles.

**¿Qué es una Característica?** Es una funcionalidad que tiene la aplicación! Por ejemplo: Desloguearse, registrarse, votar, comprar, etc.

Describir una característica parece fácil, pero puede ser desafiante: ¿dónde debería comenzar? ¿Qué tan detallado debe ser? ¿Qué tan técnico puedes ser? Pero, no te preocupes ... ¡las "User Story" han llegado al rescate!

Las historias de usuarios se han vuelto muy populares como un estándar de documentación basado en características porque eliminan toda la grasa del proceso. Son directos, fáciles de entender por todos los involucrados (no solo los desarrolladores) y fáciles de probar.

### ¿Qué es tan Especial acerca de ellas?
***

Una historia de usuario es como tener una conversación con su futuro usuario. Deben estar escritos en español no técnico, estándar para niños de 12 años con poca capacidad de atención:

+ Alrededor de 100 caracteres cada uno: ¡cuanto menos mejor!
+ Con solo UNA funcionalidad para cada uno - si ves que crece, simplemente divide la historia en 2 historias diferentes.

#### Aquí hay unos Ejemplos:

![user stories examples](https://ucarecdn.com/032a818d-e4d7-4276-8195-ce5d8a3edcf6/-/resize/2000x/)

### ¿Cómo debes escribir las User Stories?
***

Es tan simple que se vuelve complicado ... lo más importante es: (1) Mantener un lenguaje simplista, (2) Mantenerlo breve, y, (3) Especificar:

+ **Rol:**  ¿Quién es capaz de usar la función?
+ **Característica:** ¿De qué se trata la característica?
+ **Razón:**  ¿Cuál es la razón para hacerlo?

<p align="center"; style= "font-size:30px" > Como <font color="blue">[rol]</font>, Puedo <font color="#ff00ff">[característica]</font> para que <font color="blue">[razón]</font></p>

Veamos otro ejemplo:
```jsx
Como "propietario de una cuenta", puedo "consultar mi saldo en línea" para que "pueda mantener un saldo diario las 24 horas del día".
```

Bastante fácil ¿verdad? Sin embargo, en algunos casos, encontramos que el sufijo "para que" se lea de forma redundante, así que adelante, haga que sea opcional, si lo desea.

```jsx
Como "propietario de una cuenta", puedo "consultar mi saldo en línea".
```

Siéntase libre de usar leves desviaciones de esta plantilla usando sinónimos:

+ **Como [rol], Yo quiero [característica] porque [razón]**
+ **Como [rol], Yo puedo [característica]**
+ **Como [rol], Yo puedo [característica] Puede que [razón]**

### Herramientas para escribir User Stories

Hay millones de herramientas; Hemos buscado en Google: [haga clic aquí para acceder. ](http://lmgtfy.com/?q=free+tools+to+write+user+stories)Algunos son gratuitos y otros cuestan dinero, pero a lo largo de los años hemos decidido hacerlos nosotros mismos utilizando tarjetas de índice. Si insistes en usar algo digital, debes usar [este documento](https://docs.google.com/spreadsheets/d/1Lj6NBXGLgAY-dyCHkVQIJdG6IbqrGRw6p6k3q-jb7tE/edit?usp=sharing) Plantilla que hemos preparado para ti.

### Usa tarjetas de índice y un Sharpie

![user stories examples](https://ucarecdn.com/94f4a28c-a93c-4e05-9f86-ce64abc2ff7b/-/resize/400x/)

La teoría es simple - si usas una tarjeta de índice más grande que 3" x 5", escribirás demasiado. Del mismo modo, si usa algo más pequeño que un marcador (como un bolígrafo o lapicero), escribirá demasiado.

Se supone que las User Stories son cortas y dulces. Se supone que ayudan a una mayor comunicación y no cuentan toda la larga versión de la historia. Cumplir con estas restricciones físicas ayudará.

Al final, tendrá una enorme "lista de tareas pendientes", con las historias pasando de "Tareas pendientes" a "Hacer" y, finalmente, a "Hecho". Cada historia se asignará a un desarrollador al comienzo de cada reunión de planificación.

![user stories examples](https://ucarecdn.com/faaa70b0-5343-43f0-8565-994c9b40ab8b/-/resize/400x/)

### ¿Cuándo está realmente "hecha" una Story?

Si las historias son cortas y dulces, ¿cómo se supone que debemos conocer todos los diferentes criterios de aceptación? En la parte posterior de cada historia, tendremos que ingresar algunos "criterios de aceptación" que podemos verificar al final cuando el desarrollador piense que la función está terminada.

Para escribir excelentes criterios de aceptación, debemos pensar no solo en el comportamiento esperado habitual en la aplicación, sino también en cualquier caso en el que la aplicación falle (por ejemplo: cuando especifica una contraseña incorrecta, cuando se rechaza su tarjeta de crédito, etc.) .).

##### Por Ejemplo:

**User Story:**
"Como amante de la música, quiero poder pagar mi álbum con mi tarjeta VISA"

**Ejemplos de criterios de aceptación (específicos para esta historia):**

+ Puedo comprar un álbum con mi tarjeta VISA
+ No puedo pagar con una tarjeta VISA que está vencida
+ No puedo pagar con una tarjeta VISA con un número equivocado

## ¡No te obsesiones!
***

Por favor, este es un programa sobre desarrollo web de pila completa. No tienes que escribir las mejores historias jamás hechas. ¡Perfecto no se envía! Tómese un tiempo para pensar en sus historias, pero no se quede estancado durante el proceso.

Utilizará mucho las historias de los usuarios, pero, como desarrollador, no es su responsabilidad escribirlas. Hay personas certificadas para eso (analistas de requisitos). Tu trabajo es leerlos y seguirlos.
























