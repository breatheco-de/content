---
title: "Creación de un componente con Vue"
subtitle: "Crear componentes globales y Single File Components"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2019-11-05"
authors: ['curilen']
status: "draft"
tags: ["vue", "component"]
---

## **¿Qué son los componentes y para que sirven?**
***

Los componentes de Vue son partes o secciones de código HTML, los cuales, es probable que se pueda reutilizar dentro del mismo proyecto. Esto se puede ejemplificar comparando nuestro proyecto con un edificio, en el cual nosotros sabemos que debemos incluir cierto tipo de ventana en todos los pisos. No nos dedicaríamos ha diseñar cada una de esas ventanas que deben ser iguales, si no que ese trabajo se hace una sola vez y se vuelve a comprar la misma ventana diseñada anteriormente. Los componentes buscan evitar duplicar nuestro código que se puede reutilizar. Para esto, además, Vue le añade ciertas características y funcionalidades a nuestro componente mediante su compilador.

Para comenzar a utilizar Vue y crear nuestro primer componente vamos a hacerlo en una primera etapa de la manera más básica en la que se puede incluir esta librería a un sitio HTML y luego mostraremos un ejemplo en un proyecto basado en Vue que tenga el boilerplate generado por vue-cli.

## **Creación de un componente básico**
***

### Componentes Vue en proyecto HTML

Debemos incluir la librería de Vue, para esto podemos descargarla directamente desde la pagina oficial o podemos utilizar el CDN que proporcionan. Se recomienda incluirlo en la etiqueta `<header>`.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

Una vez incluida la librería debemos incluir el tag HTML donde queremos que se rendericen nuestros componentes, se recomienda que sea un div o en una etiqueta de similar comportamiento. Además de esto, debemos agregarle un identificador único, el cual utilizaremos en la instancia de Vue para indicar en que tag se renderizará.

```html
<div id="app"></div>
``` 

Luego crearemos un nuevo archivo JavaScript, pueden llamarlo como gusten, en nuestro caso le pondremos el nombre de index.js. Este archivo se debe incluir en la pagina HTML donde esta cargada la librería. Se debe agregar después de la librería de Vue, de recomendación antes del cierre del tag `<body>`. Este seria nuestro caso:

```html
<script src="./index.js"></script>
```

En el archivo index.js incluiremos el siguiente código:

``` js
new Vue({
    el: '#app',
});
```

Esto indica que estamos creando una nueva instancia de Vue, la cual recibe opciones que se pasan en formato de objeto, además a la propiedad **el** de las opciones le asignamos el identificador del tag HTML en el cual se renderizará. Al ser un id se le antepone un símbolo **#**.

Si vemos la pagina HTML y revisamos la consola en el inspector de elementos, podemos ver el mensaje “You are running Vue in development mode.”. Esto nos indica que se incluyo con éxito Vue.

Con lo anterior realizado ya podemos comenzara crear y utilizar componentes de Vue. Para esto debemos comenzar definiendo un nombre de componente y su contenido HTML a mostrar (template):

``` js
Vue.component('my-component', {
    template: '<div>A custom component</div>'
})
```
En el ejemplo anterior el componente esta definido con el nombre de my-component, este es el nombre con el que utilizaremos nuestro componente, el cual, al ser definido con Vue.component se denomina componente global, esto quiere decir que se puede ocupar en toda la aplicación sin necesidad de una importación explicita. Para poder visualizarlo en nuestra pagina HTML debemos incluir una etiqueta con el nombre de nuestro componente (my-component) donde queremos que se muestre, pero siempre dentro del contenedor en el cual se renderiza nuestra instancia de Vue. En nuestro ejemplo es la etiqueta con el id **app**.

``` html
<div id="app">
    <my-component></my-component>
</div>
```

Como resultado, nuestra pagina mostrara el mensaje “A custom component”.
Si queremos utilizar Single File Components será necesario agregar una configuración de webpack y de recomendación con babel.

### Componentes Vue en proyecto con vue-cli

Si ya tenias un proyecto existente o iniciaste un proyecto nuevo con vue-cli, ya tienes lo necesario para comenzar a crear y utilizar tus componentes.

Con vue-cli cada componente se maneja en un archivo independiente (**Single File Component**), pero igualmente se pueden definir componentes globales. Inicialmente existe el archivo src/App.vue el cual se carga al inicio. Dentro de este ya existe la utilización del componente src/components/HelloWorld.vue.

Para este caso crearemos un componente igual al del proyecto HTML, solo con el mensaje “A custom component”. Para esto, creamos un archivo nuevo llamado MyComponent.vue dentro de la ruta src/components, este archivo se vera con el siguiente código:

``` html
<template>
    <div>A custom component</div>
</template>

<script>
    export default {
        name: 'MyComponent',
    }
</script>
```

Las etiquetas `<template>` deben estar incluidas en los componentes de Vue. Dentro de ellas ira el HTML que queremos mostrar. El tag `<script>` debe exportar por defecto todas las características de nuestro componente. En esta primera etapa nos interesa solo definir su nombre, lo cual se hace con la propiedad “name”.
Con esto ya tenemos definido nuestro componente. 

Para utilizarlo debemos importar el archivo de nuestro componente en nuestro App.vue. Luego en el export default que tiene el archivo App.vue, agregaremos la variable de importación en la propiedad components. Posterior a esto, ya podemos incluir la etiqueta de nuestro componente en la sección que queramos mostrarlo. Podemos agregarlo con el nombre directo de nuestra variable de importación, en nuestro caso MyComponent o con el formato Kebab Case my-component.

Nuestro archivo App.vue se vera similar a esto:

``` html
<template>
  <div id="app">
    <MyComponent />
    <my-component />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue';

export default {
  name: 'app',
  components: {
    MyComponent
  }
}
</script>
```

Al igual que en el proyecto HTML, se debe ver como resultado el mensaje “A custom component”.

## **Características de los componentes**
***

Ya que podemos crear y utilizar componentes básicos, es necesario revisar algunas de sus características e ir probándolas.

Como habíamos mencionado anteriormente, el compilador de Vue agrega características y funcionalidades a nuestros componentes. Dentro de estos podemos destacar el objeto data.

El objeto `data` esta ligado a el sistema reactivo de Vue, cualquier cambio que ocurra con las propiedades definidas en él la vista se actualizara para mostrar o utilizar sus nuevos valores. En el caso de los componentes de un solo archivo, la propiedad data es una función que devuelve un objeto con propiedades.

A continuación, se ve un ejemplo de la utilización de data donde al presionar un botón, el contador definido en data se incrementa. Esto se ve reflejado en la vista con la utilización de la variable count.

``` html
<template>
    <button v-on:click="count++" >Incrementa {{ count }}</button>
</template>

<script>
    export default {
        name: 'MyComponent',
        data: () => {
            return {
                count: 0
            }
        }
    }
</script>
```

Otra de las características de los componentes son los `props`. Los cuales, son atributos que permiten compartir información entre componentes. Podemos crear cuantos nosotros queramos y pasar cualquier tipo de información, incluso funciones.

Al pasar este atributo al componente, se transforma en una propiedad para él, pero no puede ser modificado (inmutable).

Tomando el ejemplo anterior y agregándole un nuevo prop llamado **msg** se vería de la siguiente manera:

``` html
<template>
    <button v-on:click="count++" >{{ msg }} {{ count }}</button>
</template>

<script>
    export default {
        name: 'MyComponent',
        props: ['msg'],
        data: () => {
            return {
                count: 0
            }
        },

    }
</script>
```

Y en su utilización (App.vue) se vería similar a esto:

``` html
<template>
  <div id="app">
    <MyComponent msg="Incrementa" />
  </div>
</template>
```

De esta manera se le esta definiendo en el componente “padre” o “contenedor” cual es el texto que se mostrara en el botón. Para utilizar más props en la etiqueta MyComponent, simplemente debemos sepáralos con un espacio, como cualquier atributo de una etiqueta de HTML, como por ejemplo id, class y name.

Como ultima característica de los componentes de Vue a revisar, mostraremos un ejemplo de uso de `slot`.

Los slots en los componentes de Vue permiten definir contenido distribuido. Esto permitirá que al utilizar un componente con etiqueta de apertura y cierre podamos pasar un contenido central desde el componente “padre” al “hijo”. Para decidir donde se mostrará ese contenido se utiliza la etiqueta `<slot>`. Esta etiqueta acepta el atributo “name”, el cual no es obligatorio y en caso de agregarse debe ser único para ese componente. Este atributo permite agregar más de un slot para un mismo componente y que su contenido se muestre en distintas secciones de nuestro componente.
Si usamos los slots con nombres, en el componente “padre”, a las etiquetas que agregamos y queremos que se muestren en slots específicos podemos agregarle el atributo slot con el nombre que corresponda. En caso de no utilizar los nombres de slot, la etiqueta de slot se considera como predeterminada y todo el contenido quedara en ese lugar donde se agrego la etiqueta.

Todo esto nos permitirá incluir cualquier tipo de contenido, incluso otros componentes.

A continuación, dejamos un ejemplo con la utilización de slot:

``` html
<template>
    <div>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div >
</template>

<script>
    export default {
        name: 'MyComponent',
    }
</script>
```

``` html
<template>
  <div id="app">
    <MyComponent>
	    <div slot="header"> A custom header </div>
        <div> A custom content central </div>
        <div slot="footer"> A custom footer </div>
    </MyComponent>
  </div>
</template>
```

## **Componente global vs componente de un solo archivo**
***

Como vimos anteriormente podemos crear componentes **globales** y otros **Single File Components**.
Los componentes globales se pueden utilizar en cualquier lugar de nuestra aplicación. 
Los componentes locales o de un solo archivo es necesario importarlos o registrarlos en el lugar de su utilización.
Para decidir si utilizar uno u otro, la primera pregunta que debiésemos hacernos es si realmente ocuparemos ese componente en gran parte del proyecto o solo en una sección. Si es en gran parte, lo mejor seria un componente global, en cambio si solo es en pocas secciones, será suficiente con uno local.
Además de esto, también debemos considerar el tamaño del proyecto. En caso de ser un proyecto grande o complejo se recomienda utilizar Single File Components, ya que permiten tener una mejor organización de código y los hace más mantenibles en el tiempo. 

## **Ciclo de vida de la instancia**
***

Al igual que en React, Vue tiene un ciclo de vida para sus componentes.

![vue component lifecycle](https://es.vuejs.org/images/lifecycle.png)

En la [documentación oficial](https://es.vuejs.org/v2/guide/instance.html#Hooks-del-Ciclo-de-vida-de-la-Instancia) puedes obtener más información con respecto al ciclo de vida de los componentes.

[[demo]]
| Para revisar el ejemplo presentado en su totalidad puedes hacer [clic aquí](https://codesandbox.io/s/vue-template-sj83m?fontsize=14)