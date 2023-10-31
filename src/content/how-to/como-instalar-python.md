---
title: "¿Cómo instalar Python? Guía paso a paso para comenzar con el lenguaje de programación"
subtitle: "Aprende cómo instalar Python en tu computadora fácilmente. Descubre los pasos necesarios para comenzar a programar con este popular lenguaje de programación."
tags: ["python"]
authors: ["DF27ARTS"]

---

## ¿Cómo instalar Python?

Python es uno de los lenguajes de programación más usado en el mundo, este lenguaje te permite desde crear aplicaciones de back-end junto a frameworks como [django](https://docs.djangoproject.com/en/4.2/) o [FastAPI](https://fastapi.tiangolo.com/), crear algoritmos de Machine learning con [Tensorflow](https://www.tensorflow.org/?hl=es-419) o incluso crear interfaces de usuario en el front-end con tecnologías como [ReactPy](https://reactpy.dev/docs/index.html).

Este lenguaje es sin duda uno de los más utilizados en el mundo de la programación por ser un lenguaje bastante versátil y sencillo de aprender. En este artículo veremos cómo instalar o actualizar este lenguaje en diferentes sistemas operativos como Windows, MacOS y Linux.

## ¿Cómo instalar Python en Windows?

Existen dos formas de instalar [Python](https://4geeks.com/es/lesson/como-programar-en-python) en tu computadora Windows, la primera es instalar el sistema operativo **Ubuntu** y luego con ayuda de este instalar Python, la segunda forma es instalar Python de forma tradicional desde la página oficial de Python.

### 1. Instalar Python con Ubuntu

Para instalar Python con el sistema operativo **Ubuntu** primero necesitamos activar **WSL** (Windows subsystem for Linux) en tu ordenador, este subsistema te permite ejecutar el sistema operativo Linux en tu computadora de Windows.

#### Instalar WSL 2 para Windows 10

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/ilKQHAFeQR0" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Pasos para iniciar la instalación

> Si viste el video anterior por completo puedes saltar hasta el último paso.

1. Para activar **WSL** desde la consola, presiona la combinación de teclas `windows` + `x` y luego selecciona **Windows PowerShell** o **Terminal (administrador)** esto abrirá la terminal de **Powershell** luego en esta terminal ejecuta el siguiente comando para habilitar el subsistema de Linux en Windows: 

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux  
```

2. Después, abre la tienda de [microsoft](https://apps.microsoft.com/store/detail/ubuntu/9PDXGNCFSCZV?hl=es-mx&gl=mx) (Microsoft Store) y descarga la última versión de **Ubuntu**, esto puede tardar unos minutos, una vez terminada la instalación se te abrirá la terminal de **Ubuntu** y te pedirá que crees un usuario y una contraseña, ingresa tus datos y guarda tu contraseña porque la necesitarás más adelante para instalar Python.

3. Una vez que tengas instalado el sistema operativo de **Ubuntu** en tu ordenador, abre la terminal de **Ubuntu** y ejecuta el siguiente comando para instalar o actualizar Python.

```bash
sudo apt update && sudo apt install python3
```

> Al ejecutar este comando te va a pedir la contraseña que ingresaste al instalar **Ubuntu**, entonces ingresa tu contraseña y presiona `Enter` esto iniciará la descarga de Python 3.

4. Ahora que ya instalaste Python, verifica que tienes la última versión de Python 3 instalada, para esto ingresa el siguiente comando:

```bash
python3 --version
```

### 2. Instalar Python desde la página oficial

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/K0P7nDfXkzo" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Pasos para iniciar la instalación

1. Para instalar Python de forma tradicional ingresa a la [página oficial de python](https://www.python.org/downloads/) y luego dirígete a la sección de **Downloads** (Descargas), esta página detectará tu sistema operativo por defecto y te ofrecerá la última versión estable de Python disponible para descargarla. 

2. Luego ejecuta el archivo que se descargo y es importante que al hacerlo selecciones las dos opciones:
   - [x] Install launcher for all users (recommended)
   - [x] Add Python 3.11 to path
> Al agregar Python 3.11 a la variable PATH, podrás ejecutar comandos y scripts de Python desde cualquier ubicación de tu sistema operativo sin necesidad de proporcionar la ruta completa al ejecutable de Python.

3. Una vez terminada la instalación, verifica que versión de Python tienes instalada con el comando:
```bash
python --version
```
> Al ejecutar este comando deberías ver la última versión de Python disponible, por ejemplo: `Python 3.11.4` es la última versión disponible al momento de redactar este artículo, 08/07/2023.

## ¿Cómo instalar Python en MacOS?

El sistema operativo de MacOS usualmente ya tiene instalada una versión de Python por defecto, si abres la consola y verificas tu versión de Python instalada con el comando `python --version` debería ser algo similar a esto: `Python 2.7.1`. Aunque ya tienes instalada una versión de Python te recomiendo que instales la última versión de Python disponible así tendrás acceso a las últimas funcionalidades de este lenguaje.

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/m51cSDeeEeU" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Pasos para iniciar la instalación

1. Para instalar Python dirígete a la página oficial de [python](https://www.python.org/downloads/) y dale click al botón (Download Python), esta página detectará tu sistema operativo por defecto y te ofrecerá la última versión de python disponible para tu sistema operativo.

2. Después, ejecuta el archivo que acabas de descargar, dale al botón **Continue** en todas la ventanas y luego al botón **Install** es probable que te pida tu contraseña, después de escribir tu contraseña presiona `enter` y se iniciará la descarga de Python en tu ordenador.

3. Por último, verifica que descargaste la ultima versión de Python disponible para Mac, para verificar la versión de Python utiliza el comando:

```bash
python3 --version
```

## ¿Cómo instalar Python en Linux?

Algunas distribuciones de Linux como **Ubuntu** y **Fedora** pueden tener una versión de Python instalada por defecto pero no todas distribuciones de Linux tiene esta característica, en cualquier caso si tu sistema operativo de Linux ya trae instalado Python es probable que tenga instalada una versión desactualizada así que te recomiendo que descargues la última versión de Python disponible para linux asi tendras acceso a las últimas características de este lenguaje.

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/3aUmRIZAbA8" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Pasos para iniciar la instalación

1. Para instalar Python en Linux, abre una terminal con la combinación de teclado `Ctrl` + `Alt` + `T` y ejecuta el siguiente comando para verificar si tienes una versión de Python previamente instalada:

```bash
python3 --version
```

2. Luego, utiliza los siguientes comandos para instalar o actualizar Python en tu ordenador: 

* Ubuntu y Debian:
```bash
sudo apt update
sudo apt install python3
```

* Fedora:
```bash
sudo dnf install python3
```

* Arch Linux:
```bash
sudo pacman -Sy python
```

3. Por último verifica que versión de Python acabas de instalar con el comando: 

```bash
python3 --version
```

¡Felicidades! Ya tienes instalado Python en tu sistema operativo, ahora ya puedes empezar a ejecutar tus primeras líneas de código en Python. Espero que los ejemplos y los videotutoriales de este artículo te sean de utilidad, diviértete creando las aplicaciones del futuro con ayuda de Python. Si quieres conocer más sobre este lenguaje de programación te invito a que leas el siguiente [tutorial de Python](https://4geeks.com/es/lesson/como-programar-en-python) en el Blog de [4Geeks](https://4geeks.com/es/).
