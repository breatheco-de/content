---
title: "Còmo instalar NVM en Windows"
subtitle: "Este documento es una guìa para instalar nvm y node.js en Windows" 
textColor: "white"
date: "2020-10-19T12:36:30-04:00"
authors: ["kodi24fever"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "published"

---

A veces queremos escribir código en un ambiente local y necesitaremos node.js para instalar todas nuestras dependencias y ejecutar ciertos scripts, por ejemplo: ```npm run build```.
Este documento es una guìa para instalar nvm y node.js en Windows
  
## Paso a paso para instalar nvm:
***
1. ***Descargar nvm*** 

Para instalar la herramienta Node Version Manager en Windows tenemos que descargar un [archivo zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) que contiene el asistente de instalación.
***
2. **Instalar nvm**

Anda a la carpeta ***Descargas*** en Windows, y descomprime el archivo```nvm-setup.zip``` . Luego haz doble clic en ```nvm-setup```.
***
3. **Asistente de instalación**

Cuando se abra el asistente de instalación, haz clic en el botón ***next*** un par de veces y al final verás un botón que dice ***install*** y le daràs clic también. Luego, solo espera a que la barra de progreso ***termine***.
 
[[advertencia]] | ?? Recuerda no tocar ninguna configuración predeterminada ¡¡¡Siempre haz clic en next!!!
***
4. **Terminal**

Una vez instalado, abre la ventana de la Terminal en Windows. Si no encuentras la terminal, tipea ***CMD*** en la barra de búsqueda de Windows que se encuentra en la esquina inferior izquierda de tu escritorio.
***

5. **Instalar node versión 8 o la versión que quieras**

En la terminal ingresa el comando de abajo. Si quieres verificar cuáles son las versiones de node actuales, puedes ir a [nodejs.org](https://nodejs.org/en/). Te recomendamos que uses la **la recomendada para la mayoría de los usuarios***.
```
nvm install 8.15.0
```
***
6. **Verificar las versiones de node instaladas**

Siempre verifica las versiones de node que instalaste. Algunas veces nuestras aplicaciones no se ejecutan porque usamos veriones desactualizadas. Este comando te mostrará todas las versiones de node que tengas instaladas en Windows. 
```
nvm list
```
***

7. **Cambiar de una version de node a otra**
Siempre puedes usar diferentes versiones de node y este comando te permitirá cambiar entre las versiones de node que tengamos instaladas.
 ```
 nvm use 8.15.0
 ```
 ### o
 ```
 nvm use 10.15.1
 ```
 ## Si tienes algùn error
 
Por favor deja un "issue" si tienes dificultades en intentaremos ayudarte. Tambièn puedes contribuir y hacer un pull-request si piensas que esta guía necesita alguna actualización.
 
