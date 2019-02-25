---
title: "Que es el Internet?"
subtitle: "Que es el Internet: Todo lo que se ve en internet es un documento de texto. Todo!! Como desarrolladores, todo lo que hacemos es generar trozos de texto basados en un conjunto de criterios. Si entiendes este simple concepto, el cielo será el limite."

cover: "https://ucarecdn.com/05a36362-c09f-4961-a7b9-8e3132a902b1/"

textColor: "white"

date: "2017-08-10"
tags: ["fale"]
---

## Todo cobra sentido si retrocedemos en el tiempo…

Si todo es un documento de texto, como es posible tener sitios web tan increibles como FAcebook, Youtube, etc?

Los sitios web de hoy son muy diferentes que antes; no tienen los mismos elementos, pero si retrocedemos un poco en el pasado y exploramos el comienzo de Internet, todo tendrá sentido.

La Internet fue creada para intercambiar información, sus fundadores estaban buscando compartir documentos de forma rápida y sin tener que manejar una infraestructura compleja y costosa. Simplemente definieron un marco de trabajo y desarrollaron las tecnologías para que cualquier persona que quisiera compartir un documento pudiera publicarlo e invitar a los demás a leerlo.

La comunidad científica lo utilizo para los famosos  ["Peer Reviews"](https://www.elsevier.com/reviewers/what-is-peer-review), que se utilizan para que tus colegas revisen y aprueben una publicación antes de ser aceptada y publicada por la comunidad.

Por esta razón buscaron hacer algo que se asemejara lo más posible a un documento de MS Word o cualquier procesador de texto.

[[info]]
| :point_up: Si quieres seguir leyendo sobre la historia de internet te recomendamos ["este video super cool."](https://www.youtube.com/watch?v=BWb6ri3ePew)


> Entonces, la forma más sencilla de ver Internet es como una red de documentos compartidos. Documentos que alguna vez fueron publicaciones científicas 
> rígidas y formales que hoy vemos como documentos interactivos, emocionantes y espectaculares.


![What is the internet](https://breatheco.de/wp-content/uploads/2017/01/86675a97e9c272de762940f781cca976-1024x512.jpg)


## Todo es texto (HTTP)

Como era de esperarse, si vas a compartir documentos todo lo que necesitas es texto. Cuando haces páginas web todo corre bajo el protocolo HTTP (The Hypertext Transfer Protocol) que es un especialista en la transmisión de texto.

Lo que esto quiere decir es que: **todo es texto**. Pues sí, si quieres enviarle una foto a tu abuela por correo electrónico entonces ocurren mas o menos las siguientes cosas:


La foto se convierte en texto (un texto que, en este momento, no vas a poder entender).
It gets transmitted through the Internet as text.  If a hacker intercepts this, what they would see is a bunch of symbols/letters/numbers one after the other.
That chain of characters arrives at your grandmother’s computer.
Your grandmother double clicks the photo and the program she is using to see the photo transforms that text back into an image understandable to a human.

### Tecnología

Dillinger usa varios proyectos de codigo abierto para funcionar correctamente:

* [AngularJS] - HTML mejorado para apps Web!
* [Ace Editor] - impresionante editor de texto basado en web.
* [markdown-it] - Analizador de Markdown bien hecho. Rapida y facil de extender.
* [Twitter Bootstrap] - Excelente interfaz de usuario (UI) para aplicaciones web modernas.
* [node.js] - Entrada/Salida de evento para el backend
* [Express] - framework rápido de la aplicación de red node.js [@tjholowaychuk]
* [Gulp] - Sistema de compilación en streaming
* [Breakdance](http://breakdance.io) - Conversor de HTML a Markdown
* [jQuery] - duh

Y claro esta el mismo Dillinger es codigo abierto con un [repositorio publico][dill]
 en GitHub.

### Instalación

Dillinger requiere [Node.js](https://nodejs.org/) v4+ para correr.

Instalar las dependencias y devDependencias e iniciar el servidor.

```bash
$ cd dillinger
$ npm install -d
$ node app
```

Para el ambiente productivo...

```bash
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger actualmente se extiende con los siguientes plugins. Las instrucciones sobre cómo usarlas en su propia aplicación están vinculadas a continuación.

| Plugin | LEEME |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Desarrollo

¿Quieres contribuir? ¡Genial!

Dillinger usa Gulp + Webpack para un desarrollo rápido.
¡Haga un cambio en su archivo y vea instantáneamente sus actualizaciones!

Abre tu terminal favorito y corre los siguientes comandos.

Primer Tab:
```bash
$ node app
```

Segundo Tab:
```bash
$ gulp watch
```

(opcional) Tercero:
```bash
$ karma test
```
#### Building for source
Para lanzamiento de producción:
```bash
$ gulp build --prod
```
Generando archivos zip pre-construidos para su distribución:
```bash
$ gulp build dist --prod
```

### INCOVENIENTES

| URL | DESCRIPCION |
| ------ | ------ |
| /assignments/cohort/{cohort_id} | No esta hecha la funcionalidad en el API |
| /assignment/sync/ | No esta la funcionalidad en el COLLECCION POSTMAN |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

### Docker
Dillinger Es muy fácil de instalar y desplegar en un contenedor Docker.

De forma predeterminada, el Docker expondrá el puerto 8080, así que cámbielo dentro del Dockerfile si es necesario. Cuando esté listo, simplemente use el Dockerfile para construir la imagen.

```bash
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
Esto creará la imagen de dillinger y atraerá las dependencias necesarias. Asegúrese de intercambiar `$ {package.json.version}` con la versión actual de Dillinger.

Una vez hecho esto, ejecute la imagen de Docker y asigne el puerto a lo que desee en su host. En este ejemplo, simplemente asignamos el puerto 8000 del host al puerto 8080 del Docker (o cualquier puerto expuesto en el Dockerfile):

```bash
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

Ve [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Escribir MÁS Pruebas
 - Agregar modo nocturno

Licencia
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>


<iframe src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/4n0xNbfJLR8">Click here to open video in a new window</a></small></div>
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzAzNjkyMjAzXX0=
-->