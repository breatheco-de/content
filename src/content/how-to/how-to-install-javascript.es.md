---
title: "How to install javascript"
subtitle: "Every good web developer needs to run Javacript on it's developing machine, here's how to make your System Javascript ready."
tags: ["javascript", "nodejs", "install", "windows", "macos", "linux"]
date: "2023-03-27T16:36:30+00:00"
authors: ["Javier Seiglie"]

---

[Aprender a programar con Javascript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) es una excelente opción para aquellos que desean iniciarse en el mundo de la programación web. Javascript es un lenguaje de programación versátil y muy utilizado, lo que lo convierte en una herramienta muy valiosa para cualquier desarrollador web. Si llegaste hasta aquí y todavía no conoces en detalle Javascript te invito a leer esta guía relacionado a [para qué sirve Javascript](https://4geeks.com/es/how-to/para-que-sirve-javascript). Debido a que JavaScript es un lenguaje que se ejecuta principalmente en los navegadores (Chrome, Mozilla, Edge, etc), si queremos usarlo en el sistema, debemos instalar NodeJS.

![NodeJs](https://i.imgur.com/zPghTHs.png)

## ¿Qué es NodeJs?

Cuando hablamos de instalar JavaScript en nuestro sistema, nos referimos a instalar el entorno que nos permite desarrollar en JavaScript y justo ahí es donde nos encontramos con NodeJs.

NodeJs es el entorno de ejecución para JavaScript que se utiliza tanto para el desarrollo de aplicaciones web de [Front End](https://4geeks.com/es/lesson/what-is-front-end-development-es) como de [Back End](https://4geeks.com/es/lesson/backend-developer-es). Fue creado con la versión 8 del motor que utiliza Chrome para procesar código JavaScript (recordemos que este lenguaje está diseñado para ser ejecutado en navegadores). 

## Instalar NodeJs

El primer paso para añadir NodeJs en nuestro sistema sería acceder a [este link](https://nodejs.org/es/download) y seleccionar el Sistema Operativo para comenzar la descarga

![Instalar NodeJS](https://i.imgur.com/8eIqVlp.png)

### Como instalar Javascript en Windows?

Para completar la instalación en Windows, deberás seguir los pasos descritos en el instalador. No requiere ninguna configuración mientras se está instalando, así que será "siguiente", "siguiente", "siguiente", "terminar".

Para verificar que se ha instalado correctamente:
- Accedemos a la línea de comandos (buscar en las aplicaciones CMD o apretar `win` + `r` y escribir `cmd` )
- escribir `node --version`

De haberse instalado correctamente, debería de aparecernos una respuesta parecida a la que se muestra a continuación.

```cmd
v18.15.0
```

### Como instalar Javascript en MacOS?

#### Instalando NodeJs mediante descarga desde nodejs.org

Una vez accedemos a la zona de descarga (el link mas arriba), seleccionamos `Instalador MacOs` y lo descargamos.

Debido a que no requiere ningún tipo de modificación mientras se instala, solo deberás de iniciar el instalador y seguir los pasos ("siguiente", "siguiente", "siguiente", "terminar").

#### Instalando NodeJs mediante homebrew

Si deseas realizar la instalación desde la terminal, podrías hacerlo mediante el manejador de paquetes **homebrew**.

Para realizar la instalación debemos ejecutar el siguiente comando en la terminalÑ 

```bash
brew install node
```

#### Instalando NodeJs mediante MacPorts

Para instalar utilizando **MacPorts** como manejador de paquetes, deberás de abrir una terminal y escribir

```bash
sudo port install nodejs
```

Para verificar la instalación, ya sea mediante la descarga desde NodeJs, Homebrew o MacPorts, deberás de abrir una terminal y ejecutar el siguiente comando `node --version`. De haberse instalado correctamente, se mostrará un mensaje parecido al siguiente:

```bash
v18.15.0
```

### Como instalar Javascript en Linux?

Debido a que Linux viene en muchos sabores, hablaremos de como instalar NodeJs en Ubuntu solamente.

#### Instalar NodeJs con APT

Nota importante: Debido a que estaremos haciendo uso del **súper usuario** para realizar las instalaciones, es muy probable que se le pida la contraseña para completar los pasos.

Cada vez que vamos a añadir un nuevo software a nuestro sistema basado en Linux, debemos actualizar nuestros indices de paquetes locales y después podremos instalar el paquete que deseamos, en este caso `nodejs`.

```bash
sudo apt update
sudo apt upgrade
sudo apt install nodejs
```

Debemos de instalar **npm** (Node Package Manager) para manejar los paquetes de NodeJs, ya que no viene incluida en la versión descrita.

```bash
sudo apt install npm
```

#### Instalar NodeJs con APT y PPA NodeSource

Si queremos instalar una versión diferente de NodeJs a la que podemos instalar con el recurso anterior, podemos utilizar un PPA (Personal Package Archive) mantenido por NodeSource. En los PPA se encuentran más versiones del paquete que en los repositorios de Ubuntu.

Como mencionamos anteriormente, es necesario realizar un **update** y un **upgrade** siempre que queramos instalar nuevos paquetes para optimizar la compatibilidad de los paquetes y estar usando la versión mas  reciente de nuestros programas y sistemas.

```bash
sudo apt update
sudo apt upgrade
sudo apt-get install curl
```

Si por algun motivo no tenemos instalado **cURL**, lo podemos instalar de la siguiente forma

```bash
sudo apt-get install curl
```

Ahora estamos listos para añadir el repositorio de NodeJs, recuerda cambiar `setup_18.x` por la versión que desees instalar, ejemplo `setup_14.x' 

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

Una vez que se haya añadido el repositorio de nuestra elección, debemos de proceder a instalar.

```bash
sudo apt-get install nodejs
```

De esta forma no es necesario instalar **NPM** ya que viene incluido en el paquete que acabamos de instalar.

#### Verificar instalación

Para verificar la instalación de NodeJs y NPM en Linux, abriremos una terminal y escribiremos

```bash
node --version
npm --version
```
De haberse instalado correctamente, se mostrará la siguiente información, para NodeJs `v18.15.0` y para NPM `9.5.0`. Ambos retornos dependerán de la versión instalada. Del mismo modo, podemos usar el comando:

```bash
whereis node
whereis npm
```
Con estos comandos conoceremos donde están instalados los paquetes.

## Ejecutar JavaScript

NodeJs no posee una Interfaz de Usuario (UI) para desarrollar, en vez de eso, mediante el uso de IDEs como VS Code, Atom, etc, podemos ejecutar JavaScript haciendo uso del entorno que proporciona NodeJs sin necesidad de realizar grandes cambios (o cambio alguno) en la configuración del Sistema nosotros mismos.

Digamos que tenemos un archivo `app.js` que creamos para probar nuestra instalación y ejecutar código JavaScript desde nuestro sistema.

Este será el código js que estará en nuestro archivo app.js:

```javascript
console.log("I can run now outside of the browser!")
```

Para ejecutar este código, debemos de abrir la terminal o CMD (si estás utilizando Windows) y escribir `node` y seguido donde se encuentra nuestro archivo js que queremos ejecutar.

**Ejemplo** supongamos que tenemos nuestro archivo app.js en la unidad `C:` carpeta `test`

```bash
node c:\test\app.js
```

De haberse pasado la dirección correcta donde se encuentra el archivo, se mostrara en la consola:

```bash
I can run now outside of the browser!
```

Puedes leer contenido relacionado y mucho mas en el blog de [4Geeks](www.4geeks.com/es/how-to).
