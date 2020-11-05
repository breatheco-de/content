---
title: "Cómo instalar node y npm en un Mac (mojave)"
subtitle: " Guìa no oficial para instalar node.js y npm en un mac (probada con versiòn MacOS mojave)"
date: "2020-10-19T12:36:30-04:00"
tags: ["node","npm","osx"]
authors: ["alesanchezr"]
textColor: "white"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "published"

---

Aqui hay varias formas de instalar node en cualquier mac, pero mi recomendación es instalarlo usando brew y nvm.
Creo que es la mejor manera por varias razones:

  1. Algunas veces querrás cambiar entre varias versiones de node dependiendo de la librerías que uses, no quieres quedarte solo con una versión.
  2. Brew es un gestionador de paquetes para mac increíble que contiene paquetes muy maduros a prueba de balas en caso de posibles bugs.
  
## Pasos para instalarlo:

  1. **Instalar brew (si es que ya no lo tienes)**  
  Segùn el [sitio oficial de brewbrew
  ](https://brew.sh/) sòlo debes pegar un comando en la consola: 
  ```sh
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
  
  2. Instalar NVM usando brew
  
  ```sh
   $ brew install nvm
  ```
  
  3. Cargarlo en la terminal
  
  ```sh
  $ mkdir -p ~/.nvm
  $ echo $'export NVM_DIR="$HOME/.nvm"\n. "/usr/local/opt/nvm/nvm.sh"' >> ~/.bash_profile
  ```
  4. Reiniciar la terminal actual
  ```sh
  $ source ~/.bash_profile
  ```
  
  5. Instalar node version 8 o la versión que tu quieras
  ```sh
  $ nvm i 8
  ```
  
 ## Si tuviste errores
 
 Por favor deja un mensaje'/issue' en este repositorio e intentaremos ayudarte. Tambièn puedes contribuir con una pull-request si crees que esta guía necesita actulizaciones.
