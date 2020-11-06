---
title: "Cómo instalar NVM on Windows"
subtitle: "En este documento encontrarás una guía para instalar nvm y node.js en Windows"
tags: ["windows","nps"]
textColor: "white"
date: "2020-10-19T12:36:30-04:00"
authors: ["kodi24fever"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "published"

---
A veces quisieramos nos gustaría escribir algo de código en un entorno local, y para eso necesitaremos node.js para instalar todas tus dependencias y ejecutar ciertos scripts. Por ejemplo: ```npm run build```.
Aquí encontrarás una guía para instalar nvm y node.js en un entorno Windows.
  
## Pasos para instalar nvm:
***
1. ***Descargar nvm*** 
Para poder instalar la herramienta Node Version Manager en un entorno Windows debemos descargar un [archivo zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) que contiene el asistente de instalación.
***
  2. **Instalar nvm**
  Anda a tu carpeta ***Descargas o Downloads*** en Windows, y descomprime el archivo ```nvm-setup.zip``` y haz doble clic en el archivo ```nvm-setup```.
  ***
  
  3. **Asistente de instalación**
 Cuando se abre el asistente de instalación, dale clic al botón ***next*** un par de veces y, al final verás un botón ***install*** al cual también que darle clic. Después de eso, solo espera a que la barra de progreso **termine**.
 
[[warning]] | Recuerda no tocar la configuración predeterminada ¡Sigue dándole clic a next!!

***
  4. **Línea de comando**
Una vez instañado, abre la línea de comando de Windows. Si tienes algún problema en encontrar la línea de comando, escribe ***CMD*** en la barra de búsqueda de Windows en la esquina inferior izquierda de tu escritorio.
***

5. **Instalar node version 8 o la versión que quieras**
En la línea de comando, escribe el comando que hay más abajo. Si quieres verificar cuáles son las node versions actuales, puede ir a [nodejs.org](https://nodejs.org/es/) y verlos todos. Nosotros te recomendamos usar la ***recomendada para la mayoría de los usuarios***.
```
nvm install 8.15.0
```
***
6. **Verificar las versiones de node instaladas**
Siempre verifica las versiones de node instaladas. Algunas veces nuestras aplicaciones no se ejecutan porque usamos versiones desactualizadas. Este comando te mostrará todas las versiones de node que tengas instaladas en Windows.
```
nvm list
```
  ***
  
  7. **Cambiar entre diferentes versiones de node**
  Siempre puedes udar diferentes versiones de node y este comando te permite saltar entre todas nuestras versiones instaladas.
  ```
  nvm use 8.15.0
  ```
  ### o
  ```
  nvm use 10.15.1
  ```
 ## Si tuviste errores
 Por favor deja una iisue aquí e intentaremos ayudarte. También puedes contribuir y hacer pull-request si piensas que esta guía requiere de actualizaciones.
 
