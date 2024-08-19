---
title: "Cómo instalar NVM en Mac OS (node.js y npm)"
subtitle: "Guía no oficial para instalar NVM en Mac OS (probado) usando brew"
tags: ["node", "npm", "osx", "nvm"]
authors: ["alesanchezr"]

---

Existen varias maneras de instalar NVM en cualquier Mac que ejecute MacOS, pero nuestra recomendación es usar Brew y NVM por varias razones:

1. A veces querrás cambiar entre varias versiones de node dependiendo de las bibliotecas que uses; no querrás quedarte atascado en una sola versión.
2. Brew es un excelente gestor de paquetes para MacOS que contiene paquetes muy maduros que ya están a prueba de fallos contra cualquier posible error.

> 💡 Aquí hay algunas alternativas para [instalar nvm en computadoras con Windows](/es/how-to/como-instalar-nvm-en-windows) o [instalar nvm en cualquier otro sistema operativo](https://4geeks.com/how-to/install-nvm-on-every-operating-system).

## Pasos para instalar NVM en MacOS:

Este proceso de instalación ha sido probado en la versión MacOS Mojave; hay otros artículos para [instalar NVM en Windows](/es/how-to/como-instalar-nvm-en-windows), [instalar nvm en Linux](https://4geeks.com/how-to/install-nvm-on-linux) o [instalar nvm en cualquier sistema operativo](https://4geeks.com/how-to/install-nvm-on-every-operating-system).

### 1) Instalar brew (si no lo tienes ya instalado)

De acuerdo con [el sitio web oficial de brew](https://brew.sh/) solo necesitas pegar un comando en la consola:

```sh
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2) Instalar NVM usando brew

```sh
 $ brew install nvm
```

### 3) Asegúrate de que la ruta de NVM sea accesible desde la terminal

El archivo `.bash_profile` existe en todos los sistemas basados en Unix (incluyendo Linux y MacOS), y se utiliza para personalizar la terminal para un usuario en particular; en este caso, estamos usando el bash_profile para cargar NVM cada vez que el usuario de tu sistema abre una nueva terminal.

```sh
$ mkdir -p ~/.nvm
$ echo $'export NVM_DIR="$HOME/.nvm"\n. "/usr/local/opt/nvm/nvm.sh"' >> ~/.bash_profile
```

> 💡 Asegúrate de leer la salida de la terminal, busca mensajes de éxito o error y actúa en consecuencia.

### 4) Reinicia tu terminal actual (la mayoría de la gente olvida este paso)

Las actualizaciones al bash_profile no se aplican instantáneamente; tienes que reiniciar la terminal. Adelante, cierra la ventana de la terminal y abre una nueva en la misma ruta.

### 5) Valida que NVM esté disponible en tu Terminal de MacOS

Después de reiniciar la terminal, valida que tienes NVM disponible como un comando escribiendo `$ nvm` en la terminal; deberías ver algo como esto:

![nvm macos success installation](https://github.com/breatheco-de/content/blob/master/src/assets/images/nvm-installation-success.png?raw=true)

## Instalando tu primera versión de Node

Ahora que NVM se ha instalado correctamente, puedes proceder a instalar cualquier versión de node usando el comando `$ nvm i <version>`, por ejemplo, para instalar la versión 12 de node debes escribir en tu terminal:

```sh
$ nvm i 12
```

## Si tuviste algún error (solución de problemas)

Instalar NVM (Node Version Manager) en macOS a veces puede generar varios problemas debido a configuraciones del sistema, permisos o conflictos con software existente. Aquí tienes una lista de problemas comunes que podrías encontrar y cómo resolverlos:

### 1. **Error de Comando No Encontrado Después de la Instalación**

**Problema:** 😱  Después de instalar NVM, podrías intentar ejecutar comandos de `nvm` y recibir un mensaje que dice `nvm: command not found`.  
**Solución:** 😎  Este problema usualmente ocurre porque el script de NVM no está cargado en tu archivo de perfil de shell. Debes agregar la siguiente línea a tu `.bash_profile`, `.zshrc`, `.profile`, o `.bashrc`:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Esto carga nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Esto carga bash_completion de nvm
```

Después de agregar esto, reinicia tu terminal o ejecuta `source ~/.bash_profile` (o el archivo respectivo que hayas modificado).

### 2. **Falla de Instalación Debido a Errores de curl o wget**

**Problema:** 😱  Durante la instalación de NVM, podrías encontrar errores relacionados con `curl` o `wget` que no funcionan correctamente.  
**Solución:** 😎  Asegúrate de tener `curl` o `wget` instalados en tu Mac. Si faltan, puedes instalarlos usando Homebrew ejecutando:

```sh
brew install curl
brew install wget
```
Luego intenta reinstalar NVM.

### 3. **Problemas con .bash_profile y .bashrc**

**Problema:** 😱  NVM no parece funcionar correctamente incluso después de agregar el script al perfil.  
**Solución:** 😎  macOS usa principalmente `.bash_profile`, pero si usas un shell diferente como Zsh, debes agregar los scripts de exportación a `.zshrc`. Asegúrate de estar editando el archivo correcto para el shell que usas. Si no estás seguro, agrega el script tanto a `.bash_profile` como a `.bashrc`.

### 4. **Permiso Denegado Durante la Instalación**

**Problema:** 😱  Puedes ver un error de `Permiso denegado` al intentar instalar NVM.  
**Solución:** 😎  Esto suele suceder debido a permisos restringidos en el directorio donde NVM está intentando instalarse. Puedes intentar instalar NVM usando un comando modificado con permisos elevados:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Si esto no funciona, revisa los permisos de usuario para el directorio `.nvm` y ajústalos si es necesario.

### 5. **Conflictos con Instalaciones Existentes de Node o NVM**

**Problema:** 😱  Si tienes una instalación previa de Node o otra versión de NVM instalada mediante un método diferente, pueden ocurrir conflictos.  
**Solución:** 😎  Elimina cualquier instalación existente de Node.js y la instalación actual de NVM. Puedes desinstalar Node.js eliminando su directorio y limpiando cualquier enlace simbólico relacionado con él. Para NVM, debes eliminar el directorio `.nvm` y cualquier línea relacionada con NVM en tus archivos de perfil de shell.

### 6. **El Script del Perfil No se Ejecuta Automáticamente**

**Problema:** 😱  El shell no ejecuta automáticamente el script del perfil al abrir una nueva ventana de terminal.  
**Solución:** 😎  Es posible que necesites configurar tu terminal para que ejecute el script automáticamente. Esta configuración generalmente se puede ajustar en las preferencias del terminal bajo "Shells open with" o una sección similar. Asegúrate de que esté configurado para ejecutar el archivo de comandos como inicio de sesión.

Implementar estas soluciones debería ayudarte a resolver la mayoría de los problemas relacionados con la instalación de NVM en macOS, mejorando tu configuración de desarrollo y flujo de trabajo.
