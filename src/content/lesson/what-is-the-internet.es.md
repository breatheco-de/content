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

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```bash
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```bash
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```bash
$ node app
```

Second Tab:
```bash
$ gulp watch
```

(optional) Third:
```bash
$ karma test
```
#### Building for source
For production release:
```bash
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```bash
$ gulp build dist --prod
```

### ISSUE

| URL | DESCRIPCION |
| ------ | ------ |
| /assignments/cohort/{cohort_id} | No esta hecha la funcionalidad en el API |
| /assignment/sync/ | No esta la funcionalidad en el COLLECCION POSTMAN |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```bash
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```bash
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
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