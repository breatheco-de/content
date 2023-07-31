---
title: "¿Qué es pyenv y cómo instalarlo?"
subtitle: "Descubre qué es pyenv y cómo instalar esta poderosa herramienta para gestionar versiones de Python en tu sistema. Facilita el desarrollo de proyectos."
tags: ["python"]
authors: ["javierseiglie"]

---

## ¿Qué es pyenv?

`Pyenv` es una herramienta que nos brinda la posibilidad de administrar distintas versiones de [Python](https://4geeks.com/technology/python) en nuestra computadora, permitiendo intercambiar de manera sencilla entre sus distintas versiones, según sean los requerimientos del entorno en el que estemos desarrollando.

## ¿Para qué se utiliza pyenv?

`Pyenv` tiene múltiples usos, brindándole a los desarrolladores un mayor control sobre los proyectos, entre los cuales destacan:

- **Gestión de versiones de Python:** Permite instalar, desinstalar y cambiar entre diferentes versiones de Python sin interferir con la [instalación de Python](https://4geeks.com/es/how-to/como-instalar-python) que se encuentra en el sistema.

- **Aislamiento de entornos:** Permite a los desarrolladores crear entornos de Python específicos para cada proyecto, asegurando que cada proyecto tenga sus propias dependencias y paquetes aislados.

- **Pruebas de compatibilidad:** Facilita la prueba de código en diferentes versiones de Python, garantizando la compatibilidad e identificando posibles problemas.

- **Gestión de paquetes:** Los desarrolladores pueden instalar y gestionar paquetes utilizando `pyenv` de manera sencilla, asegurando que se cumplan los requisitos de versión específicos para cada proyecto.

Ahora veamos como seria el proceso de instalación para diferentes sistemas operativos.

## Instalación de pyenv en Windows

**Paso 1:** Instalar Git, en caso de no tenerlo instalado previamente, lo puedes descargar en la [página oficial](https://git-scm.com/downloads), si no estas seguro de como instalarlo puedes seguir este [tutorial](https://www.youtube.com/watch?v=cYLapo1FFmA).

**Paso 2:** Instalar pyenv-win, abre la terminal de Git Bash o PowerShell y clonaremos el repositorio de `pyenv` desde Github con el siguiente comando:

```PowerShell
git clone https://github.com/pyenv-win/pyenv-win.git $HOME/.pyenv
```

**Paso 3:** Añadir PYENV, PYENV_HOME y PYENV_ROOT a tus varibles de entorno con los siguientes comandos:

```PowerShell
[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")

[System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")

[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
```

**Paso 4:** Añadir las siguientes rutas a tu variable USER PATH para poder ejecutar el comando pyenv en la terminal:

```PowerShell
[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```

**Paso 5:** Verificar la instalación, primero cierra la terminal actual y abre una nueva, luego ejecuta el siguiente comando para verificar que `pyenv` se ha instalado correctamente:

```PowerShell
pyenv --version
```

Debería aparecer algo como esto:

```PowerShell
pyenv 3.1.1
```

Si quieres saber mas sobre `pyenv` en Windows, puedes visitar su [página oficial](https://github.com/pyenv-win/pyenv-win)

## Instalación de pyenv en Mac

**Paso 1:** Instalar Xcode, abrimos la terminal y ejecutamos el siguiente comando:

```bash
xcode-select --install
```

de tenerlo instalado previamente, aparecerá un mensaje como este:

```bash
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

**Paso 2:** : Instalar homebrew, primeramente podemos verificar que no lo tengamos instalado, ejecutando el siguiente comando:

```bash
brew --version
```

de no tenerlo instalado, aparecerá un mensaje como este:

```bash
-bash: brew: command not found

```

para instalarlo, ejecutamos el siguiente comando:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Paso 3:** Para evitar errores durante la instalación de las versiones de Python, debemos tener instaladas algunas bibliotecas, las cuales podemos instalar con el siguiente comando:

```bash
brew install openssl readline sqlite3 xz zlib
```

**Paso 4:** Instalar `pyenv`, ejecuta el siguiente comando:

```bash
brew install pyenv

```

**Paso 5:** Verificar la instalación, primero cierra la terminal actual y abre una nueva, luego ejecuta el siguiente comando para verificar que `pyenv` se ha instalado correctamente:

```bash
pyenv --version
```

debería aparecer algo como esto en tu terminal:

```bash
pyenv 2.3.23
```

Si quieres saber más sobre `pyenv` en Mac, puedes visitar su [página oficial](https://github.com/pyenv/pyenv)

## Instalación de pyenv en Linux

**Paso 1:** Antes de instalar `pyenv` debemos instalar varias bibliotecas y paquetes necesarios para realizar la instalación correctamente, ingrese el siguiente comando para ello:

```bash
sudo apt install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl \
git
```

**Paso 2:** Clonar el repositorio de `pyenv` desde Github, ejecutando el siguiente comando en la terminal:

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

**Paso 3:** Configurar las variables de entorno según el interprete de comandos que estes utilizando (por ejemplo, ~/.bashrc ~/.zshrc):

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init --path)"' >> ~/.bashrc
```

```zsh
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
```

**Paso 4:** Verificar la instalación, primero cierra la terminal actual y abre una nueva, luego ejecuta el siguiente comando para confirmar que `pyenv` se ha instalado correctamente:

```bash
pyenv --version
```

debería aparecer algo como esto en tu terminal:

```bash
pyenv 3.1.1
```

Si quieres saber mas sobre `pyenv` en Linux, puedes visitar su [página oficial de pyenv](https://github.com/pyenv/pyenv)

Herramientas como `pyenv` son muy útiles en el mundo del desarrollo, ya que al permitirnos gestionar las versiones de Python que tenemos instaladas en nuestra computadora, podemos trabajar en diferentes proyectos sin preocuparnos por las versiones de Python que estos requieren, debido a la facilidad que nos brinda de instalar e intercambiar entre sus versiones de manera sencilla. Incorporar esta herramienta a tu flujo de trabajo te hará más productivo, evitarás errores de compatibilidad, haciendo que tu desarrollo sea más fluido. Te invitamos a leer el Blog de [4Geeks](https://4geeks.com/) para más contenido interesante.

