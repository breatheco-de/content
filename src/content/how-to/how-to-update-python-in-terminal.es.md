---
title: "¿Cómo actualizar Python en la terminal?"
subtitle: "En nuestra guía paso a paso sobre cómo actualizar Python en la terminal, exploramos los métodos más sencillos para actualizar con éxito la versión de Python en sistemas Linux, macOS y Windows."
tags: ["python", "terminal", "full stack development"]
authors: ["javierseiglie"]
status: "published"

---

Para actualizar la versión de Python en la terminal, puedes usar estos comandos dependiendo de tu sistema operativo:

```bash
# Linux
sudo apt update 
sudo apt install python3.11

# macOS
brew install python

# Windows
python -m venv --upgrade RUTA-DEL-ENTORNO-VIRTUAL-AQUÍ
```

En este artículo, nos enfocamos en actualizar Python usando la terminal, pero hay muchas otras maneras de [actualizar la versión de Python](https://4geeks.com/how-to/how-to-update-python-version).

## Actualizar Python en la terminal de Windows

Para [actualizar Python en Windows](https://4geeks.com/how-to/how-to-update-python-on-windows), debes descargar la versión de Python a la que deseas actualizar desde [python.org](https://www.python.org/ "python.org"). 
Si ya tienes diferentes versiones de Python instaladas y quieres actualizar la versión de un entorno virtual, puedes hacerlo usando el siguiente comando:

```cmd
python -m venv --upgrade RUTA-DEL-ENTORNO-VIRTUAL-AQUÍ
```

Para seleccionar la versión de Python que quieres usar, es tan simple como escribir `py -versión-que-quieres-usar`, por ejemplo:

```cmd
	py -3.8 # Selecciona la versión 3.8 de Python
	py -3.11 # Selecciona la versión 3.11 de Python
```

## Actualizar Python en la terminal de Linux

Antes de actualizar Python, necesitamos verificar si ya está instalado (no tiene sentido actualizar algo que no existe). Para comprobar si Python está instalado, escribe lo siguiente:

```bash
python3 --version
```

Si Python está instalado, el resultado te mostrará la versión instalada, como en este ejemplo:

```bash
Python 3.11.1
```

Si tu computadora no tiene Python instalado, primero debemos preparar el sistema para instalar Python haciendo lo siguiente:

```bash
sudo apt update 
sudo apt install software-properties-common
```

Una vez que hayamos descargado los archivos necesarios para instalar la última versión de Python, podemos instalarlo usando `apt-get` (recomendado) o utilizando el código fuente.

### Actualizar con Apt-Get

No es necesario reinventar la rueda; `Apt-Get` es un gestor de paquetes integrado en Linux que hará nuestra vida más fácil durante la instalación.

Como primer paso, configuremos el `PPA deadsnakes` en el sistema ejecutando el siguiente comando:

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
```

Es momento de actualizar la caché de Apt e instalar el paquete de Python:

```bash
sudo apt update 
sudo apt install python3.9
```

Python ahora está actualizado, pero puede que aún esté apuntando a la versión instalada previamente. Ahora necesitamos actualizar esto:

```bash
 sudo update-alternatives --config python3
```

Se mostrará una lista de opciones, solicitándote que elijas la versión de Python a la que deseas apuntar. Selecciónala escribiendo el número correspondiente a la versión que deseas usar.

Para verificar esta selección, escribe:

```bash 
python --version
```

## Actualizar Python en la terminal de macOS

Actualizar Python en macOS es más sencillo. En los sistemas macOS, puedes tener diferentes versiones de Python instaladas al mismo tiempo. Esto facilita la actualización visitando la página de descarga de [python.org](https://www.python.org/downloads/mac-osx/ "python.org") para macOS, seleccionando el instalador para descargarlo y ejecutarlo.

Si prefieres usar `Homebrew`, ejecuta el siguiente comando:

```bash
brew install python
```

Una vez que finalice la instalación, tendrás la última versión de Python instalada, la cual puedes verificar con el siguiente código:

```bash
python3 --version
```

Espero que disfrutes de la lectura y sigas en el lado Geek. Puedes consultar el blog de 4Geeks para más contenido relevante como [cómo salir de Python en la terminal](https://4geeks.com/how-to/how-to-exit-python-in-terminal).
