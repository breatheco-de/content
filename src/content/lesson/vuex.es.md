---
title: "Vuex"
subtitle: "Haz que tu aplicación sea escalable"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2019-11-05"
authors: ['curilen']
status: "draft"
tags: ["vue", "vuex"]
---
## ¿Qué es Vuex y porque tendria que utilizarlo?
Vuex es una librería que nos permite centralizar nuestros datos y que aun se mantengan reactivos, es decir, que cuando existan cambios, se reflejen automáticamente en nuestra pagina.

Centralizar nuestros datos es esencial cuando nuestra aplicación es compleja y/o necesitamos que sea lo más escalable posible, ya que cuando necesitamos pasar datos entre varios componentes se puede volver un poco complejo el proceso al tener en un solo componente ese dato que necesitamos en otros 5.

## ¿Cómo funciona?

![vuex](https://vuex.vuejs.org/vuex.png)

Primero debemos conocer algunos conceptos que se incluyen y/o utilizan con la librería:

* **Estado** (state): El estado de la aplicación es un objeto que contiene los datos que maneja nuestra aplicación. 
* **Acciónes** (Actions): Las acciones de la aplicación son las funciones que permiten ejecutar las mutaciones, esto se hace mediante una confirmación (**commit**). Estas funciones pueden ser síncronas o asíncronas. Las acciones también pueden ejecutar otras acciones mediante el **dispatch**.
* **Mutaciones** (Mutations): Las mutaciones son funciones (síncronas) que se encargan de modificar los estados de la aplicación. Estas solo pueden ser ejecutadas por las acciones.
* **Getters**: Estos no estan incluidos en el diagrama, pero son bastante utilizados en la implementación de Vuex. Son funciones que permiten acceder a los estados, ademas pueden ser contener filtrado y/o calculo de datos, entre otros.

### **El flujo**

![vuex flow](https://vuex.vuejs.org/flow.png)

En primer lugar, tenemos un **componente** y/o vista el cual emite (**dispach**) una **acción** dado un determinado evento, como, por ejemplo, un clic en un elemento HTML o por los eventos del ciclo de vida de los componentes. Esta acción procesa y ejecuta su función, la cual, al terminar, confirma (**commit**) los cambios a modificar. Esta confirmación de la función envía los nuevos datos al mutador (**mutations**) para que él modifique el estado (**state**) de la aplicación. Una vez realizada la modificación, los observadores que se encuentran asociados a los componentes notifican de este cambio, lo cual gatilla nuevamente el **renderizado del componente** para que se puedan reflejar los cambios.

El flujo descrito anteriormente es unidireccional, por lo que no es posible modificar el estado de la aplicación directamente desde el componente.

Por otra parte, los getters que permiten obtener valores calculados o parciales utilizando el estado de la aplicación, solo pueden acceder a los datos del estado y devolver datos. Estos getter se pueden llamar directamente desde los componentes.

[[info]]
| :point_up: Para trabajar de manera más fluida con Vuex te recomendamos instalar la extension [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) que permite ver el estado de la aplicacion y el detalle de cada componente.

## ¿Cómo utilizarlo?

Primero debemos instalar la librería en nuestro proyecto. Para esto basta con instalarla mediante un gestor de paquetes como npm o yarn

```bash
npm install vuex
````

Luego se debe incluir en la instancia de Vue, en nuestro caso es en el archivo main.js

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```

Con lo anterior ya tenemos instalado Vuex en nuestro proyecto. El siguiente paso es configurarlo según nuestras necesidades.

Crearemos una nueva carpeta en src llamada store. Dentro de ella incluiremos un nuevo archivo llamado index.js el cual tendrá el siguiente código:

```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
});
```

En el código anterior se importa Vue y Vuex, para después asociar el plugin a Vue. Finalmente se exporta una nueva instancia de Vuex, la cual dejamos con una estructura definida que incluye un objeto para state, getters, mutations y actions.

Después, importamos este archivo en nuestro main.js y la incluimos en las opciones de la instancia de Vue, quedando algo similar a esto:

``` js
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
```

Esta seria la configuración básica para poder comenzar a utilizar Vuex. De ahora en adelante solo nos queda agregar los elementos que necesitemos según el proyecto.

A continuación, dejamos un ejemplo donde se incluyen cada uno de los elementos de la estructura de Vuex y su utilización dado un escenario determinado:

<iframe
     src="https://codesandbox.io/embed/vue-vuex-25kjq?fontsize=14&module=%2Fsrc%2Fstore%2Findex.js"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Vue Vuex"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
