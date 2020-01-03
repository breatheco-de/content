---
title: "Vue: Vista vs Componente"
subtitle: "La diferencia conceptual"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2019-11-05"
authors: ['curilen']
status: "draft"
tags: ["vue", "vue-router"]
---

Cuando hablamos de los frameworks de JavaScript modernos se suele utilizar el concepto de componente (component) para definir a secciones o partes de código que se reutilizaran en diferentes lugares de nuestra aplicación. 

La confusión generalmente llega cuando se incluye el termino de vistas (views o layout), la que por lo general no esta incluida en estos mismos frameworks.

El concepto de vista se origina de diferentes lugares en el ámbito de la programación y por lo general hace referencia a la pagina que se mostrara en una ruta especifica.

En el caso de Vue, la diferencia entre vista y componente es más bien conceptual que técnica (código), ya que todas estas vistas se escriben y definen igual que cualquier otro componente. La diferencia radica en el **cómo** vamos a utilizar este componente.

Si queremos que nuestro componente se muestre como un contenedor general una ruta en particular, la cual puede tener otros componentes e información a mostrar, es muy probable que estemos hablando de una vista. Por el contrario, si nuestro componente es solo una sección de nuestra pagina, como por ejemplo un modal, una alerta, un menú, una caja de texto, entre otros, este seria un componente.
 
En los artículos anteriores revisamos como crear un componente con Vue y luego vimos como agregar rutas en nuestro proyecto. Si juntamos estos dos podemos decidir de manera más practica el como actúan estos componentes con el enrutamiento de nuestra aplicación o en su renderizado.

Para ejemplificar esta diferencia veamos la típica imagen que muestra las secciones de una pagina:

!["layout"](https://www.w3schools.com/html/img_sem_elements.gif)

En este caso, el contenedor general, es decir, la pagina, seria nuestro componente de vista. Dentro de este componente/vista van otros componentes como el header, nav, section, footer, etc.

Para finalizar es necesario recalcar que esto es conceptual como se menciono en un comienzo, ya que las vistas en algunos lados son llamadas como paginas o incluso hay proyectos donde las vistas y componentes se declaran en el mismo lugar.

A continuación, dejamos un ejemplo de un proyecto de Vue que contiene una vista y múltiples componentes en el:

<iframe
     src="https://codesandbox.io/embed/vue-template-obte0?fontsize=14"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Vue View vs Component"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>


