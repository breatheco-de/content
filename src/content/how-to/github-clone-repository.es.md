---
title: "Cómo clonar un repositorio de github"
subtitle: "La clonación es la forma más rápida de descargar un proyecto o código, en esta lección explicaremos cómo clonar y la diferencia que tiene con el forking."
tags: ["git","github"]
date: "2020-10-19T16:36:30+00:00"
authors: []
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "draft"

---

# Clonar un repositorio de GitHub

Puedes **clonar un repositorio git** de la siguiente manera:

```bash session
$ git clone <git-repository-url>
```

`<git-repository-url>` debe ser reemplazado por el enlace del repositorio que deseas clonar, como este:

```bash
$ git clone https://github.com/4GeeksAcademy/html-hello
```

Clonar un repositorio crea una copia local del proyecto/repositorio deseado en tu computadora, que se sincroniza entre ambas ubicaciones (Remoto-Local).

En otras palabras, clonar un repositorio significa descargar una copia completa de él a tu computadora. ¿Y qué significa una copia completa? Bueno, significa que después de clonar un repositorio tendrás toda la historia del repositorio en tu computadora.

Entonces, ¿por qué clonar un repositorio te preguntarás? Clonar un proyecto tiene muchos beneficios como:

- Navegar por la historia del proyecto y ver cómo ha evolucionado.
- Ver los cambios que han ocurrido en el código.
- Saber quién ha modificado el código y cuándo.
- Acceder a las ramas del proyecto y crear las tuyas propias.
- Comenzar a modificar el código, guardar los cambios y agregar tu trabajo al existente.

Y todo esto sin necesidad de estar conectado a internet. Solo necesitaremos una conexión a internet cuando queramos "compartir" nuestro trabajo con alguien más o cuando queramos subir nuestro trabajo a GitHub.

![Cloning Thing GIF](https://c.tenor.com/AQM9IEdO0K8AAAAd/clone.gif?raw=true)

En la siguiente sección, profundizaremos en ejemplos más detallados de **cómo clonar un repositorio de github** y también **cómo hacerle fork cualquier repositorio de github**.

## Pasos para clonar un repositorio de GitHub (usando la terminal)
Para este ejemplo, clonaremos uno de los repositorios populares de 4Geeks, es decir, [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello). Los pasos para clonar este repositorio son los siguientes:

1. **Determinar o localizar dónde quieres clonar el repositorio deseado**
Localiza la carpeta en tu computadora donde quieres guardar el repositorio, o puedes crear una nueva. Digamos que queremos guardar nuestro repositorio en una carpeta llamada `my-first-cloned-repo` como se muestra a continuación.

![Locating Folder](https://i.imgur.com/lAV0nLj.jpg?raw=true)

2. **Abre el terminal**
Puedes usar el terminal **Git Bash** o cualquier terminal de **IDE (Entorno de Desarrollo Integrado) o Editor de Código**. Con el terminal abierto, ingresa `cd` y agrega/copia la ubicación/ruta de la carpeta. Dado que queremos guardar el repositorio en nuestra carpeta `my-first-cloned-repo`, copiemos la ruta de la carpeta `C:\Users\rafam\Programming Projects\my-first-cloned-repo` y pégala en el terminal, también puedes arrastrar y soltar la carpeta en el terminal y presionar enter.

```bash session
rafam@LAPTOP-LLV85FV6 MINGW64 ~
$ cd 'C:\Users\rafam\Programming Projects\my-first-cloned-repo'

rafam@LAPTOP-LLV85FV6 MINGW64 ~/Programming Projects/my-first-cloned-repo
```

3. Ve al repositorio [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello) en GitHub. Una vez que te encuentres en el repositorio de Github, necesitas hacer clic en el botón **Código** para mostrar las opciones de clonación y luego hacer clic en el botón **Copiar** que está resaltado (se muestra a continuación) y junto a la URL del repositorio:

![4Geeks Repo Example Pic 1](https://i.imgur.com/xu3Psl0.png?raw=true)

![4Geeks Repo Example Pic 2](https://i.imgur.com/QPEPsZE.png?raw=true)

4. **Ve a la terminal y use el comando git clone escribiendo `git clone` junto con la URL copiada**

```bash session
rafam@LAPTOP-LLV85FV6 MINGW64 ~
$ cd 'C:\Users\rafam\Programming Projects\my-first-cloned-repo'

rafam@LAPTOP-LLV85FV6 MINGW64 ~/Programming Projects/my-first-cloned-repo
$ git clone https://github.com/4GeeksAcademy/react-flask-hello.git
```

5. **Presiona Enter y el repositorio será clonado**

```bash session
rafam@LAPTOP-LLV85FV6 MINGW64 ~
$ cd 'C:\Users\rafam\Programming Projects\my-first-cloned-repo'

rafam@LAPTOP-LLV85FV6 MINGW64 ~/Programming Projects/my-first-cloned-repo
$ git clone https://github.com/4GeeksAcademy/react-flask-hello.git 

Cloning into 'react-flask-hello'...
remote: Enumerating objects: 1024, done.
remote: Counting objects: 100% (33/33), done.
remote: Compressing objects: 100% (22/22), done.
Receiving objects: 99% (1014/1024), 6.82 MiB | 6.79 MiB/seused 991
Receiving objects: 100% (1024/1024), 8.86 MiB | 7.31 MiB/s, done.
Resolving deltas: 100% (521/521), done.
```

Es importante entender que puedes clonar cualquier repositorio no solo de GitHub, sino de cualquier otro sitio, si tienes la URL de git. Recuerda que clonas un repositorio con el comando `git clone <url>`.

## Clone vs Fork

La diferencia entre hacer fork y clonar un proyecto/repositorio realmente se reduce a cuánto control un desarrollador tiene sobre un repositorio dado.

Al hacer **Fork**, puedes hacer tu propia copia de un repositorio en otro lugar (por ejemplo, GitHub). Poseer una copia del repositorio significa que puedes hacer cambios en él sin afectar al repositorio original.

Al **Clonar** crea una copia local de un repositorio. Imagina hacer eso descargando un repositorio a la memoria local de tu computadora. Los clones tienen referencias a sus repositorios originales, a diferencia de los forks.

![Clone vs Fork](https://i.imgur.com/eSN0n99.jpg?raw=true)

## Cómo Forker un Repositorio

Entonces quieres hacer tu propia copia de un repositorio, vamos a hacer una copia del que clonamos en el ejemplo anterior [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello).

Los pasos para forkear el repositorio son los siguientes:

1. Ve al repositorio de GitHub [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello)

2. Haz clic en el botón de **Fork** ubicado en la esquina superior derecha de la página

![Fork Steps 2](https://i.imgur.com/0qzfYg0.png?raw=true)

3. Entonces, debe ser seleccionado un propietario para el repositorio al que se le hizo fork, haciendo clic en el botón **Seleccionar un propietario** y eligiendo el **Nombre del repositorio**. También puedes agregar una descripción (opcional) a tu fork si lo deseas.

![Fork Steps 3](https://imgur.com/4gqX7LM.png?raw=true)

4. Debajo del campo de descripción, hay una casilla de verificación (**Copiar solo la rama `main`**) que te permite copiar solo la rama principal, si deseas copiar todo el repositorio con todas sus ramas, entonces esta casilla debe estar sin marcar.

![Fork Steps 4](https://imgur.com/8CRRVxR.png?raw=true)

5. Ahora puedes hacer clic en **Crear fork** y estará hecho.

![Fork Steps 5](https://i.imgur.com/sm1x81i.png?raw=true)

## Cómo clonar usando la aplicación GitHub en lugar de la terminal

También puedes usar la aplicación de escritorio de GitHub para clonar un repositorio en tu computadora, una vez que hayas descargado la **Aplicación de escritorio de GitHub** [aquí](https://desktop.github.com/), y esté conectado al sitio web y la aplicación de escritorio de GitHub, entonces puedes seguir estos pasos:

1. Ve al repositorio GitHub deseado, usemos nuevamente el repositorio [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello). Haz clic en el botón **Código** para mostrar las opciones y procede a hacer clic en el botón **Abrir con GitHub Desktop**.

![GitHub App Steps 1](https://i.imgur.com/KPFvgCO.png?raw=true)

2. La aplicación de escritorio de GitHub se abrirá automáticamente en su computadora y se mostrará una ventana llamada **Clonar un repositorio**. Aquí puedes confirmar el repositorio para clonar y puedes cambiar la ruta local donde se guardará el repositorio haciendo clic en el botón **Choose...**, o simplemente puedes copiar la ruta y pegarla en el campo correspondiente.

![GitHub App Steps 2](https://i.imgur.com/mMS54sJ.png?raw=true)

3. Ahora puedes proceder a hacer clic en el botón **Clone** y el repositorio se clonará en la ruta/directorio deseado.

![GitHub App Steps 3](https://i.imgur.com/UVc92fA.png?raw=true)

El siguiente video describe paso a paso todo lo que se ha explicado en este artículo **GitHub Clone Repository**: