

## ¿Cómo instalar Pyenv en Linux?

Pyenv es una herramienta muy importante para cualquier desarrollador de Python, esta herramienta te permite instalar e intercambiar fácilmente múltiples versiones de [Python](https://4geeks.com/es/lesson/que-es-python-tutorial) en tu sistema operativo. En este artículo veremos paso a paso como instalar esta herramienta en linux y también veremos algunos de los problemas que puedes encontrar al momento de realizar la instalación y cómo solucionarlos.

## Instalar Pyenv paso a paso

### 1. Actualizar lista de paquetes

Para instalar Pyenv en sistema operativo de Linux (Ubuntu / Debian ), primero necesitas actualizar la lista de paquetes disponibles en los repositorios de software para asegurarnos de utilizar las últimas versiones disponibles, para esto puedes ejecutar los siguientes comandos:

```bash
sudo apt update
```
```bash
sudo apt upgrade
```

### 2. Instalar dependencias

Después de actualizar la lista de paquete, es posible que necesitamos instalar algunas dependencias ya que de lo contrario podrías tener un error en la consola al momento de ejecutar el comando `pyenv`.

```bash
sudo apt install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl \
git
```

### 3. Clonar repositorio de github

Terminada la instalación de las dependencias es momento de instalar Pyenv, puedes clonar el repositorio directamente desde Github, para esto puedes usar el siguiente comando:

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

### 4. Agregar variables de entorno

Después de clonar el repositorio, necesitas agregar `pyenv` en las variables de entorno de tu sistema. Si estás utilizando una shell diferente de `bash` tienes que cambiar `~/.bashrc` en consecuencia, por ejemplo con la shell de `zsh` sería de la siguiente manera: `~/.zshrc`.

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init --path)"' >> ~/.bashrc
```

### 5. Reiniciar la consola

Después de agregar Pyenv a las variables de entorno de tu ordenador debes cerrar la terminal y después abrir una nueva, esto es necesario para que la computadora reconozca los cambios y puedas utilizar el comando de `pyenv`. También puedes ejecutar el siguiente comando para reiniciar la consola:

```bash
source ~/.bashrc
```

### 6. Comprobar que pyenv se instaló correctamente

Por último, solo necesitas comprobar que Pyenv se instalo correctamente en tu ordenador, para esto puedes usar el siguiente comando:

```bash
pyenv --version
```
> output:
```bash
pyenv 2.3.32-6-gac32a20f
```

¡Felicidades! 🎉🎉🎉

Ya tienes Pyenv instalado en tu ordenador, ahora ya puedes empezar a instalar e intercambiar entre diferentes versiones de Python según tus necesidades. 

## Problemas comunes y sus soluciones

A veces, al instalar Pyenv o alguna versión de Python utilizando `pyenv`, puedes encontrarte con algunos problemas. A continuación veremos algunos de los posibles problemas más comunes y sus soluciones.

### No se encuentra el comando pyenv

Si al ejecutar el comando `pyenv` en la consola te sale un error similar al siguiente:

```bash
-bash: pyenv: command not found
```

Es posible que la variable de entorno `PATH` no esté configurada correctamente para incluir el directorio `~/.pyenv/bin`, donde se encuentra el ejecutable de Pyenv. Para solucionar esto, puedes asegurarte de añadir correctamente la variable `PATH` con el siguiente comando.

```bash
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
```

Después tendrás que cerrar tu terminal y abrir una nueva para que se actualicen los cambios o tambien puedes usar el siguiente comando para reiniciar la terminal:

```bash
source ~/.bashrc
```

### No se cambia la versión de Python

Si al usar los comandos `pyenv global` o `pyenv local` para cambiar la versión de Python, sigues viendo la versión que tienes instalada en tu sistema, es posible que te falte el comando `pyenv init` en tu archivo de configuración de la terminal (`~/.bashrc`, `~/.zshrc`, etc.). Este comando se encarga de activar el mecanismo de cambio de versión de Pyenv, que usa un **hook** en el comando `cd` para modificar la variable de entorno `PATH` según la versión de Python seleccionada.

Para solucionar esto, puedes añadir la siguiente línea a final de tu archivo de configuración de la terminal (`~/.bashrc`, `~/.zshrc`, etc.).

```bash
eval "$(pyenv init --path)"
```

Puedes utilizar `vim` para editar el archivo, ejecuta el comando `vim ~/.bashrc` o `vim ~/.zshrc` según la shell que estes utilizando y luego presiona `i` para poder editar el archivo, despues copia y pega el comando superior al final del archivo y presiona `esc` para salir del modo de edición, luego escribe `:x` para guardar los cambios y salir del archivo.

Por último, tendrás que cerrar la terminal y abrir una nueva o también puedes ejecutar el siguiente comando para que tu ordenador reconozca los cambios:

```bash
source ~/.bashrc
```

### No se puede instalar una versión de Python

Si al intentar instalar una versión de Pyton con `pyenv` te sale un error similar al siguiente:

```bash
ERROR: The Python zlib extension was not compiled. Missing the zlib?

Please consult the Wiki page to fix the problem.
https://github.com/pyenv/pyenv/wiki/Common-build-problems
```

Es posible que te falten algunos paquetes que son necesarios para compilar Python desde el código fuente. Estos paquetes pueden variar según la versión Python y la distribución de Linux que estés utilizando, pero en general son los mismos que los requisitos previos para instalar Pyenv.

Para solucionar esto, puedes instalar los paquetes que te faltan usando el gestor de paquetes de tu distribución, por ejemplo con las distribuciones de Ubuntu o Debian puedes usar el siguiente comando para instalar los paquetes necesarios:

```bash
sudo apt install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl
```

## Instalar Pyenv en diferentes sistemas operativos

Si te interesa conocer más acerca de Pyenv y como instalar esta herramienta en diferentes sistemas operativos como Windows o MacOS te invito a que visites el artículo [que es pyenv](https://4geeks.com/es/how-to/que-es-pyenv-y-como-instalar-pyenv) de 4Geeks donde se explica un poco más a fondo que es esta herramienta, para que puedes usarla y como instalarla en tu ordenador.


## Conclusión

**Pyenv** es una herramienta indispensable para cualquier desarrollador que trabaje con el lenguaje de programación Python, esta herramienta te permite intercambiar entre diferentes versiones de Python de una manera muy sencilla lo cual puede ser muy útil en múltiples ocasiones. En este artículo, hemos visto cómo instalar Pyenv en tu ordenador de Linux paso a paso, y también vimos algunos de los problemas más comúnes al instalar Pyenv y como solucionarlos, te invito a que intentes sacarle el máximo provecho a esta herramienta probando todas sus funcionalidades y características.

Esperamos que este artículo te haya servido para instalar Pyenv de manera exitosa en tu ordenador de Linux. Te invitamos a explorar otros artículos de nuestro blog para que puedas mejorar tus habilidades en el desarrollo de software con Python u otros lenguajes de programación. Si sientes que estás listo para llevar tus habilidades al siguiente nivel, te animamos a que te [registres de forma totalmente gratiuta](https://4geeks.com/es/pricing) en 4Geeks.com.

¡Happy coding! 😀👋
