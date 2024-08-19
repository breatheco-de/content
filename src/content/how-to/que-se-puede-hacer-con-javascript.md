---
title: "¿Qué se puede hacer con JavaScript?"
subtitle: "Descubre las infinitas posibilidades y aplicaciones que se pueden desarrollar con JavaScript. Explora casos de uso comunes y ejemplos prácticos para inspirarte en tu camino de programación."
tags: ["JavaScript"]
authors: [DF27ARTS]

---

JavaScript es uno de los lenguajes más versátiles y populares en la industria del desarrollo de software, este lenguaje te permite desarrollar aplicaciones tanto de Front-end como de Back-end e incluso IoT (Internet of things). Si aún no sabes que es JavaScript, te recomendamos esta lectura que te explicará más a profundidad [qué es y cómo empezar a aprender a programar JavaScript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript). En este artículo veremos algunos de los frameworks más populares de JavaScript y también veremos algunos ejemplos sobre qué tipo de aplicaciones puedes crear con este lenguaje de programación.

## Desarrollo Frontend

El [desarrollo Front-end](https://4geeks.com/es/lesson/what-is-front-end-development-es) se refiere a la parte visual e interactiva de una página web o aplicación móvil, JavaScript es el lenguaje más popular y utilizado para el desarrollo Front-end ya que te permite interactuar y manipular el HTML y el CSS (La estructura y estilos) de una página web, añadir efectos visuales como transiciones, animaciones, validaciones, eventos y mucho más. A continuación veremos algunos de los frameworks más populares para desarrollar aplicaciones Front-end con JavaScript.

### 1. React

[React](https://4geeks.com/es/lesson/learn-react-js-tutorial-es) es un framework de JavaScript desarrollado por Facebook que te permite crear interfaces de usuario reactivas y dinámicas utilizando [componentes](https://4geeks.com/es/lesson/making-react-components-es) (porciones de código) reutilizables, este es posiblemente el framework más popular de JavaScript para el desarrollo Front-end junto con la librería de Next.js que está desarrollada por encima de React. Además React cuenta con una gran comunidad de desarrolladores y recursos disponibles. A continuación te dejamos un breve ejemplo de código que muestra como hacer un contador con React:

```jsx
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Desarrollo Front-end</h1>
      <p>Me has clickeado {count} veces</p>
      <button onClick={() => setCount(prev => prev + 1)} > 
        Incrementar Contador 
      </button>
    </>
  );
}

export default App;
```

### 2. Angular

[Angular](https://angular.io/guide/what-is-angular) es un framework desarrollado por Google que te permite crear interfaces de usuario reactivas y dinámicas de una sola página (SPA, Single Page Application), utilizando el modelo de arquitectura MVC (Modelo Vista Controlador). Angular ofrece una serie de características como el enlace de datos bidireccional, la inyección de dependencias, el enrutamiento, las directiva y muchas más. En el siguiente código hecho con Angular podrás ver un ejemplo de un contador:

```jsx
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Desarrollo Front-end</h1>
    <p>Me has clickeado {{ count }} veces</p>
    <button (click)="incrementCount()">
      Incrementar Contador
    </button>
  `,
})
export class AppComponent {
  count = 0;
  incrementCount() {
    this.count++;
  }
}
```

### 3. VueJS

[Vue](https://vuejs.org/guide/introduction.html) es un framework de JavaScript que te permite crear aplicaciones de usuario de una manera sencilla, utilizando una sintaxis declarativa y reactiva. Vue se caracteriza por su facilidad de uso, su rendimiento y su escalabilidad. A continuación verás el mismo ejemplo del contador pero hecho con VueJS:

```jsx
<template>
  <h1>Desarrollo Front-end</h1>
  <p>Me has clickeado {{ count }} veces</p>
  <button @click="incrementCount">
    Incrementar Contador
  </button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const incrementCount = () => {
      count.value++;
    };
    return { count, incrementCount };
  },
};
</script>
```
 
## Desarrollo Backend

El [desarrollo Backend](https://4geeks.com/es/lesson/backend-developer-es) se refiere a la parte lógica y manipulación de datos de una página web o aplicación, es decir los que se ejecuta en el servidor y se comunica con la base de datos. JavaScript también puede ser utilizado para el desarrollo Back-end gracias a **Node.js** que permite ejecutar JavaScript fuera del navegador utilizando el motor V8 de Google Chrome.

El [desarrollo de APIs con Node.js](https://4geeks.com/es/lesson/building-apis-with-nodejs-typeorm-es) ofrece una serie de ventajas como la [programación asíncrona](https://4geeks.com/es/lesson/asincrono-algoritmos-async-await) y basada en eventos, el uso de un solo lenguaje para el desarrollo de toda la aplicación web, entre muchas otras. A continuación veremos algunos de los frameworks o librerías más populares para el desarrollo de aplicaciones Back-end utilizando JavaScript.

### 1. ExpressJS

[Express.js](https://4geeks.com/es/lesson/building-apis-with-nodejs-expressjs-es) es un framework de JavaScript que te permite desarrollar aplicaciones de Back-end de una manera flexible y sencilla. Este framework proporciona una serie de características esenciales para el desarrollo de aplicaciones web, como el manejo de rutas, el middleware entre muchas otras características.

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Desarrollo Back-end');
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
```

### 2. NestJS

[Nest.js](https://docs.nestjs.com/) es un framework de JavaScript inspirado en **Angular** que te permite crear una aplicación Back-end de manera robusta y escalable, utilizando el patrón de arquitectura MVC (Modelo Vista Controlador) y [TypeScript](https://4geeks.com/es/lesson/what-is-typescript-es), una extensión de JavaScript que añade tipado estático. Además también te permite escoger entre crear la aplicación con **ExpressJS** o con **Fastify** otro framework que te permite crear aplicaciones de Back-end.

#### app.module
```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### app.controler
```ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return "Desarrollo Back-end";
  }
}
```

## IoT (Internet de las Cosas o Internet of Things)

El IoT (Internet de las cosas o Internet of Things) se refiere a un conjunto de dispositivos conectados a internet que pueden comunicarse entre sí y con otros servicios como micrófonos, cámaras, sensores, electrodomesticos, etc... El internet de las cosas tiene múltiples aplicaciones en campos como la salud, la agricultura, entre muchos otros.

A continuación veremos algunas de las aplicaciones que puedes utilizar para desarrollar IoT junto con JavaScript.

### 1. Johnny-Five

[Johnny-Five](https://johnny-five.io/) es una plataforma de JavaScript para la robótica y el IoT, creada por Rick Waldron en el 2012. Esta plataforma permite controlar y programar dispositivos hardware como Arduino, Raspberry Pi, BeagleBone, etc. Johnny-Five se basa en el protocolo Firmata, que permite la comunicación entre el software y el hardware y ofrece una API sencilla y consistente para interactuar con diferentes componentes como LEDs, motores, sensores, etc.

### 2. CylonJS

[Cylon.js](https://cylonjs.com/) es una plataforma de JavaScript que permite controlar y programar dispositivos hardware utilizando una sintaxis declarativa y fluida. Cylon.js soporta más de 40 plataformas y dispositivos, como Arduino, Raspberry Pi, BeagleBone, Sphero, Leap Motion, etc, y ofrece una serie de características como el manejo de eventos, el paralelismo, el clustering y mucho más.

### 3. Node-RED

[Node-RED](https://nodered.org/) es una plataforma de JavaScript basada en Node.js, que permite crear flujos de datos y lógica para el IoT, utilizando una interfaz gráfica basada en nodos. Node-RED permite conectar fácilmente diferentes dispositivos y servicios, como MQTT, WebSocket, HTTP, TCP, UDP, etc, y ofrece una serie de nodos predefinidos y personalizables para realizar diferentes funciones.

## Conclusión

En este artículo vimos como la versatilidad de JavaScript te permite crear diferentes tipos de aplicaciones, desde páginas web, aplicaciones móviles, IoT y mucho más. JavaScript es uno de los lenguajes de programación más populares actualmente y cuenta con una gran comunidad de desarrolladores y recursos disponibles. 

Si quieres aprender más conceptos sobre JavaScript y llevar tus habilidades al siguiente nivel te invito a que te registres de forma totalmente gratuita en el curso [empieza a programar con JavaScript](https://4geeks.com/es/start-coding-using-javascript) de 4Geeks, donde aprenderás los conceptos basicos de este lenguaje y además tendrás acceso a cursos y otros  beneficios e incluso podrás acceder a la interacción con IA que estará constantemente revisando tu código y dándote feedback para que puedas seguir mejorando.
