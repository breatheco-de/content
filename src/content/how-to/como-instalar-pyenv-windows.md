---
title: "¿Cómo instalar Pyenv en Windows?"
subtitle: "Aprende a instalar Pyenv en tu Windows para gestionar fácilmente múltiples versiones de Python. Explora los pasos y consejos para sacar el máximo provecho de esta herramienta."
tags: ["Python", "Pyenv", "Instalación de Software", "Desarrollo en Windows"]
authors: [DF27ARTS]

---

[Pyenv](https://4geeks.com/es/how-to/que-es-pyenv-y-como-instalar-pyenv) es una herramienta que nos permite administrar distintas versiones de Python en nuestro ordenador, permitiendo intercambiar entre diferentes versiones de manera sencilla dependiendo de los requerimientos del entorno en el que estamos trabajando. Esto puede ser muy útil por varias razones por ejemplo comprobar que nuestra aplicación es compatible con diferentes versiones de [Python](https://4geeks.com/es/lesson/que-es-python-tutorial). En este artículo veremos cómo instalar **Pyenv** en nuestro ordenador **Windows** haciendo uso de **Git** y también con el subsistema de linux para windows y el entorno de desarrollo **Ubuntu**.

## Instalación de pyenv con Git

**Paso 1** (instalar Git): para poder realizar la instalación de [Pyenv](https://4geeks.com/es/lesson/pyenv-virtualenv) con los comandos de **Git** primero debemos verificar que tenemos **Git** instalado en nuestro ordenador, para esto podemos abrir una consola con la combinación `windows + x` y luego selecciona **Windows PowerShell** o **Terminal (administrador)** esto te abrirá una consola de **PowerShell** una vez se abra la consola podemos usar el siguiente comando:

```PowerShell
git --version
```

Deberías ver en la consola un mensaje similar al siguiente con la versión de git que tengas instalada:


```PowerShell
git version 2.42.0.windows.2
```

Si en la consola te sale un error significa que aun no tienes **Git** instalado en tu ordenador, para descargarlo puedes ir la página oficial de [Git](https://git-scm.com/download/win) y una vez descargado sigue las instrucciones de instalación.

**Paso 2** (Instalar pyenv-win): una vez hayas verificado que tienes **Git** instalado, puedes utilizar el siguiente comando para instalar **pyenv** en tu ordenador, este comando clonará el repositio de (pyenv-win.git) en tu propio ordenador y lo guardará en la carpeta `.pyenv`.

```PowerShell
git clone https://github.com/pyenv-win/pyenv-win.git "$HOME\.pyenv"
```

**Paso 3** (Añadir las variables de entorno): agrega las siguientes variables `PYENV`, `PYENV_ROOT` and `PYENV_HOME` en las variables de entorno de tu ordenador, puedes hacerlo con los siguientes comandos:

```PowerShell
[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")

[System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")

[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
```

**Paso 4** (Añadir ruta a las variables de usuario): agrega la siguiente ruta a la variable USER PATH de tu ordenador para poder acceder al comando `pyenv`, puedes hacerlo con el siguiente comado:

```PowerShell
[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```

**Paso 5** (Comprobar instalación): comprueba que **pyenv** se instalo correctamente con el siguiente comando:

```PowerShell
pyenv 
```
> output en la consola:
```PowerShell
pyenv 3.1.1
Usage: pyenv <command> [<args>]

Some useful pyenv commands are:
   commands     List all available pyenv commands
   duplicate    Creates a duplicate python environment
   local        Set or show the local application-specific Python version
   global       Set or show the global Python version
   shell        Set or show the shell-specific Python version
   install      Install a Python version using python-build
   uninstall    Uninstall a specific Python version
   update       Update the cached version DB
   rehash       Rehash pyenv shims (run this after installing executables)
   vname        Show the current Python version
   version      Show the current Python version and its origin
   version-name Show the current Python version
   versions     List all Python versions available to pyenv
   exec         Runs an executable by first preparing PATH so that the selected Python
   which        Display the full path to an executable
   whence       List all Python versions that contain the given executable
```

¡Felicidades! ya tienes **pyenv** instalado en tu ordenador.

## Instalación de pyenv con WSL y Ubuntu

También puedes instalar **pyenv** haciendo uso de wsl (windows subsystem for linux) y el subsistema de linux Ubuntu, para esto debemos seguir algunos pasos los cuales veremos a continuación.

**Paso 1** (Activar wsl en tu ordenador): antes de instalar **pyenv** debes activar WSL en tu ordenador, para esto abre una consola con la combinación `windows + x` y luego selecciona **Windows PowerShell** o **Terminal (administrador)** esto te abrirá una terminal de **PowerShell**, luego ejecuta el siguiente comando para habilitar el subsistema de linux para windows:

```PowerShell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux  
```

**Paso 2** (Descargar ubuntu): luego debes descargar **Ubuntu** desde la tienda de [microsoft](https://apps.microsoft.com/store/detail/ubuntu/9PDXGNCFSCZV?hl=es-mx&gl=mx), una vez terminada la descarga se te abrirá una terminal de **Ubuntu** y te pedirá que ingreses un usuario y una contraseña.

**Paso 3** (Actualizar el sistema): una vez que tengas acceso a la terminal de **Ubuntu** debemos asegurarnos de actualizar el sistema, para esto escribe los siguientes comandos:

```PowerShell
sudo apt update 
sudo apt upgrade
```

> Nota: el proceso de actualización puede tardar algunos minutos dependiendo de la velocidad de tu internet, se paciente.

**Paso 4** (Instalar dependencias): ahora que actualizamos el sistema necesitamos instalar algunas dependencias que serán necesarias, copia y pega el siguiente comando en la terminal:

```PowerShell
sudo apt install \
build-essential \
curl \
libbz2-dev \
libffi-dev \
liblzma-dev \
libncursesw5-dev \
libreadline-dev \
libsqlite3-dev \
libssl-dev \
libxml2-dev \
libxmlsec1-dev \
llvm \
make \
tk-dev \
wget \
xz-utils \
zlib1g-dev
```

**Paso 5** (Instalar pyenv): ya podemos instalar **pyenv** en nuestro ordenador, ejecuta el siguiente comando en la consola:

```PowerShell
curl https://pyenv.run | bash
```

**Paso 6** (Agregar variables al archivo .bashrc): terminada la instalación, debemos agregar algunas variables al archivo `.bashrc`, para abrir el archivo con `vim` utiliza el siguiente comando:

```PowerShell
vim .bashrc
```

Una vez se abra el archivo, presiona `i` para poder entrar en modo de edición y luego copia y pega el siguiente código al final del archivo:

```vim
export PYENV_ROOT="$HOME/.pyenv" 
export PATH="$PYENV_ROOT/bin:$PATH" 
if command -v pyenv 1>/dev/null 2>&1; then 
    eval "$(pyenv init --path)" 
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)" 
fi
```

Luego presiona la tecla `esc` para salir del modo de edición y después escribe `:x` para guardar y salir del archivo.

**Paso 7** (Reiniciar la consola y probar la instalación): escribe el siguiente comando para reiniciar la consola:

```PowerShell
exec bash
```

y una vez que se reinicie  la consola, verifica que se instaló **Pyenv** correctamente con el siguiente comando:

```PowerShell
pyenv
```
> output en la consola:
```PowerShell
pyenv 2.3.31
Usage: pyenv <command> [<args>]

Some useful pyenv commands are:
   --version           Display the version of pyenv
   activate            Activate virtual environment
   commands            List all available pyenv commands
   deactivate          Deactivate virtual environment
   doctor              Verify pyenv installation and development tools to build pythons.
   exec                Run an executable with the selected Python version
   global              Set or show the global Python version(s)
   help                Display help for a command
   hooks               List hook scripts for a given pyenv command
   init                Configure the shell environment for pyenv
   install             Install a Python version using python-build
   latest              Print the latest installed or known version with the given prefix
   local               Set or show the local application-specific Python version(s)
   prefix              Display prefixes for Python versions
   rehash              Rehash pyenv shims (run this after installing executables)
   root                Display the root directory where versions and shims are kept
   shell               Set or show the shell-specific Python version
   shims               List existing pyenv shims
   uninstall           Uninstall Python versions
   update              Update pyenv, its plugins including the list of available versions
   version             Show the current Python version(s) and its origin
   version-file        Detect the file that sets the current pyenv version
   version-name        Show the current Python version
   version-origin      Explain how the current Python version is set
   versions            List all Python versions available to pyenv
   virtualenv          Create a Python virtualenv using the pyenv-virtualenv plugin
   virtualenv-delete   Uninstall a specific Python virtualenv
   virtualenv-init     Configure the shell environment for pyenv-virtualenv
   virtualenv-prefix   Display real_prefix for a Python virtualenv version
   virtualenvs         List all Python virtualenvs found in `$PYENV_ROOT/versions/*'.
   whence              List all Python versions that contain the given executable
   which               Display the full path to an executable
```

¡Felicidades! ya tienes **pyenv** instalado en el subsistema Ubuntu de tu ordenador.

Si te interesa conocer más acerca de pyenv para windows te recomiendo que visites su pagina oficial en [pyenv for windows](https://github.com/pyenv-win/pyenv-win) y si quieres conocer cómo instalar pyenv en otros sitemas operativos te invito a que visites la pagina de [cómo instalar pyenv](https://4geeks.com/es/how-to/que-es-pyenv-y-como-instalar-pyenv) de la academia 4Geeks donde podrás aprender cómo instalar esta erramienta en diferentes sistemas operativos cómo MacOS o linux.

## Conclusión

Pyenv es una herramienta muy útil para controlar las versiones de Python con las que deseas trabajar en tu ordenador, su instalación en el sistema operativo de windows se puede realizar de varias formas, en este artículo aprendimos cómo instalarlo de dos maneras diferentes la primera clonando el repositorio de pyenv-win con **Git** y la segunda instalándolo con el subsistema de linux **Ubuntu**. Aunque la instalación de pyenv puede requerir de varios pasos y parecer un poco compleja, si sigues los pasos especificados en este artículo podrás hacerlo sin ningún problema.

Esperamos que hayas encontrado útil este artículo y que hayas podido instalar Pyenv en tu sistema Windows. Te invitamos a explorar otros recursos en nuestro blog para mejorar tus habilidades en Python y desarrollo en Windows. Si deseas llevar tu aprendizaje al siguiente nivel, te animamos a [registrarte de forma totalmente gratuita](https://4geeks.com/es/pricing) en 4Geeks.com.