---
title: "¿Cómo instalar Pyenv en Mac?"
subtitle: "Descubre los pasos detallados para instalar Pyenv en tu Mac y gestiona fácilmente múltiples versiones de Python. Aprende a utilizar esta herramienta esencial para el desarrollo en Python en MacOS."
tags: ["Python", "Pyenv", "macos"]
authors: ["DF27ARTS", "alesanchezr"]
table_of_contents: true

---

Pyenv es una herramienta que te permite installar y manejer varias versiones de [Python](https://4geeks.com/es/technology/python) a la vez y fácilmente. Hay muchas maneras de instalar pyenv en una mac y en este artículo te las vamos a mostrar ordenadas de la más recomendada a la menos recomendada.

En este artículo veremos como **instalar pyenv en una Mac** únicamente. Si te interesa, existen guias para: [Instalar pyenv en Linux](https://4geeks.com/es/how-to/instalar-pyenv-linux), [instalar pyenv en windows](https://4geeks.com/es/how-to/instalar-pyenv-windows) y una [guia general sobre pyenv y cómo instalarlo](https://4geeks.com/es/how-to/que-es-pyenv-y-como-instalar-pyenv).

## Dependencias que debemos installar primero que Pyenv

Antes de instalar `pyenv` en tu ordenador Mac, necesitas instalar otros paquetes de software que son utilizados por Pyenv internamente (dependencias).

### Instalar la línea de comandos XCode (opcional)

El primero es la librería de comandos de XCode, un entorno de desarrollo integrado (IDE) oficial de Apple para crear aplicaciones para macOS, iOS, watchOS y tvOS. XCode es utilizado extensamente cuando programas para el ecosistema de Apple y Mac, sin embargo, para programar en python no es necesario conocerlo, solo instalarlo, ya que es utilizado de forma interna (invisible) por **pyenv**.

> 👆🏽 Si ya tienes `xcode-select` instalado, puedes omitir este paso. Puedes chequear si lo tienes instalado con el comando `xcode-select -v`, si lo tienes instalado te dirá la versión.

Para realizar la instalación de XCode en tu mac, ejecuta el siguiente comando:

```bash
xcode-select --install
```

### Instalar otras librerias necesarias

`Pyenv` contruye las versiones de Python desde **0** y para esto requiere de algunas herramientas, **openssl**,  **readline**, **sqlite3**, **zlib** y **xz**. Estas herramientas pueden ser instaladas a travéz del gestor de paquetes `Homebrew` con el siguiente comando:

```bash
brew install openssl readline sqlite3 xz zlib
```

Una vez terminada la instalación de las librerías, puedes instalar `pyenv` de dos formas diferentes, la primera es haciendo uso de `homebrew` y la segunda es clonando el repositorio de Github en tu propio ordenador con `Git`, a continuación veremos un ejemplo con las dos opciones.

## Instalar pyenv utilizando homebrew

Para realizar la instalación de `pyenv` con `homebrew` puedes copiar y pegar los siguientes comandos en la consola. El primer comando instalará la última versión estable de `Homebrew` y el segundo comando instalará `pyenv` en tu ordenador.
 
```bash
brew update
brew install pyenv
```

Una vez terminada la instalación, reinicia la consola para que se guarden los cambios y ejecuta los siguientes comandos para agregar `pyenv` a las variables de entorno de tu ordenador de esta manera `pyenv` se inicializará automáticamente cada vez que se abra una nueva terminal. Si no estás utilizando `zsh` como shell, debes cambiar `~/.zshrc` en consecuencia.

```bash
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
```

## Instalar pyenv clonando el repositorio de github

Si prefieres clonar el repositorio de `pyenv` en tu propio ordenador para tener más control, puedes utilizar el siguiente comando.

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

Ahora solo necesitas añadir **pyenv** a las variables de entorno de tu ordenador para poder acceder al comando `pyenv` desde la consola. Si estás utilizando una shell diferente a `zsh` tienes que cambiar `~/.zshrc` por la shell que estés utilizando.

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
```

Después de esto, necesitarás reiniciar la consola para poder empezar a utilizar el comando de `pyenv`.

## Confirma que pyenv se instaló correctamente

Una ves terminada la instalación de `pyenv` en tu ordenador solo necesita confirmar que la instalación se realizó correctamente. Ingresa los siguientes comandos en la consola para ver la versión de **pyenv** que instalaste y las versiones de python disponibles que puedes descargar.

```bash
pyenv --version
```
> output en la consola:

```bash
pyenv 2.3.31
```

```bash
pyenv install --list
```

> output en la consola:

```bash
....
3.10.1
3.10.2
3.10.3
3.10.4
3.10.5
3.10.6
3.10.7
3.10.8
3.10.9
3.10.10
3.10.11
3.10.12
3.10.13
3.11.0
3.11-dev
3.11.1
3.11.2
3.11.3
3.11.4
3.11.5
3.11.6
3.12.0
3.12-dev
3.13.0a1
3.13-dev
```

## Instalar una versión de python en tu ordenador

Ahora puedes instalar una versión de Python en tu ordenador utilizando `pyenv` con el siguiente comando:

```bash
pyenv install <versión de python>
```

Terminada la instalación puedes establecer esa versión de python de forma global, para esto ejecuta el siguiente comando:

```bash
pyenv global <versión de python>
```

¡Felicidades! ya tienes `pyenv` instalado en tu ordenador, ya puedes empezar a descargar y utilizar las diferentes versiones de Python y probar tus proyectos con cada una de ellas si lo deseas.

## Conclusión

**Pyenv** es una herramienta esencial para cualquier desarrollador que trabaje con el lenguaje de programación Python, te permite intercambiar entre diferentes versiones de python de una manera muy sencilla. En este artículo vimos como instalar `pyenv` en tu ordenador Mac utilizando **Homebrew** o clonando el repositorio de github, puedes utilizar la forma que mejor se acomode a tus necesidades. Recuerda seguir practicando tus habilidades de programación con estas herramientas que están diseñadas para facilitar el proceso de desarrollo y te ayudarán en tu carrera como desarrollador de software.

Esperamos que este artículo te haya guiado con éxito en la instalación de Pyenv en tu sistema operative de tu Mac. Con Pyenv, podrás gestionar sin esfuerzo distintas versiones de Python y optimizar tu entorno de desarrollo. Te invitamos a explorar otros recursos en nuestro blog para mejorar tus habilidades en Python y desarrollo en Mac. Si deseas llevar tu aprendizaje al siguiente nivel, te animamos a [registrarte de forma totalmente gratuita](https://4geeks.com/es/pricing) en 4Geeks.com.
