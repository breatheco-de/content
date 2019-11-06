---
title: "Creación de un layout y rutas con vue-router"
subtitle: "Agregando vistas y rutas a nuestra aplicación Vue"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2019-11-05"
authors: ['curilen']
status: "draft"
tags: ["vue", "vue-router"]
---

Cuando vemos una aplicación web por lo general tienen links o menús que redirigen a otras paginas de la aplicación. Para poder implementar esto en nuestra aplicación con Vue es necesario que podamos definir rutas y que componentes queremos que se carguen en cada una de ellas. **Vue-router** es una librería que contiene muchas herramientas y funcionalidades, las cuales nos permiten hacer lo anteriormente mencionado y más.

Para agregar vue-router en una aplicación que utilice vue-cli simplemente debemos instalar el paquete con algún gestor como npm o yarn:

```bash
npm install vue-router
```

Posterior a la instalación debemos incluir esta libreria a nuestra instancia de Vue, esto se realiza en 2 pasos.

* Primero demos agregar las siguientes líneas en nuestro main.js:

```js
import VueRouter from 'vue-router';
Vue.use(VueRouter);
```

* Una vez incluidas ya podemos comenzar a definir las rutas que utilizara nuestra aplicación. Para esto debemos crear una instancia de VueRouter con nuestras definiciones para luego agregar esta instancia (variable **router** en el ejemplo) en la de Vue.

```js
import MyView from './views/MyView.vue';

const router = new VueRouter({
    routes: [
       	{
            path: 'example',
            component: MyView
        }
    ]
})

var vm = new Vue({
    el: "#app",
    router,
    render: h => h(App)
})
```

En el ejemplo anterior, cuando declaramos la instancia de VueRouter, se le agrega a las opciones la propiedad `routes`, la cual es un arreglo que tiene las definiciones de las rutas que se podrán utilizar nuestra aplicación. Esto se define con un objeto literal en la que la clave `path` corresponde a la ruta que queremos tener y la clave `component` al componente que queremos mostrar en esa ruta.

Por último, agregamos la etiqueta `<router-view>` en nuestro contenedor principal. En nuestro ejemplo será en el archivo App.vue

```html
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>
```

Con lo anterior ya podemos acceder a nuestra nueva ruta, la que para ejemplificar, puede ser http://localhost:3000/#/example.

[[info]]
| :point_up: Para redirigir mediante un link a nuestra nueva pagina podemos hacer uso de la etiqueta `<router-link>` que nos provee la librería

Como mencionamos anteriormente, vue-router nos proporciona distintas herramientas para manejar las rutas de nuestra aplicación. Dentro de las características disponibles, esta librería nos permite anidar rutas, es decir, crear una jerarquía de rutas.

```js
const router = new VueRouter({ 
	routes: [ 
	    { 
	        path: '/example, 
	        component: MyView, 
	        children: [ 
	            { path: 'test', component: MyViewTest }, 
	            { path: 'final/:id', component:  MyViewFinal },
	        ]
	    }
	]
});
```

En el ejemplo anterior, a la ruta “/example”, además de las claves **path** y **component** se le agrega una nueva llamada `children`, la cual es un arreglo que permite incluir otras rutas que serán parte de “/example”. Además de esto, la ruta “final/:id” recibe un parámetro el cual definimos como **id**, este parámetro puede ser una letra o un numero, pero debe incluirse después de “final/”, de otra forma, si no se incluye, la aplicación nos dirá que la ruta no existe.

Como resultado del ejemplo anterior tendríamos las siguientes rutas:
/example
/example/test
/example/final/1

Otra de las características es que las rutas que se incluyen en nuestra aplicación, al momento de acceder a ellas se les agrega un `/#/` después del dominio y antes de la ruta definida, como por ejemplo http://localhost:3000/#/example.
Esto se utiliza (generalmente en las SPA) para que el navegador en primera instancia intente resolver la ruta internamente y no inmediatamente con un servidor. Lo anterior busca prevenir la recarga de la pagina, entre otras cosas.

Si por determinados requerimientos necesitamos utilizar la ruta típica (http://localhost:3000/example), vue-router tiene una opción de configuración que permite hacer esto de manera simple. Solamente debemos agregar a las opciones de la instancia la clave `mode` con el valor `history`, quedando de la siguiente manera:

```js
const router = new VueRouter({ 
	    mode: 'history', 
	    routes: [...] 
	});
```

Todo lo anterior es necesario para que funcionen las rutas en nuestra aplicación, pero no necesariamente se deben incluir en el orden o archivos especificados anteriormente. A continuación, dejamos un ejemplo en el cual las rutas se declaran en un archivo independiente para luego ser importado en el main.

<iframe
     src="https://codesandbox.io/embed/vue-template-dn173?autoresize=1&fontsize=14"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Vue Router"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>