## Instalar Pandas en Python

La librería de pandas en un recurso muy importante para un desarrollador a la hora de trabajar con una amplia cantidad de datos en Python, en este artículo veremos como instalar paso a paso esta librería en Windows, MacOS y Ubuntu ( Linux ).

Comando para instalar pandas:
```
pip install pandas
```
Una vez termine la instalación verifica que pandas se instaló correctamente ejecutar el siguiente código en un entorno de desarrollo integrado como [visual studio code](https://code.visualstudio.com/docs).
```py
import pandas as pd
print(pd.__version__)
```
> ( output ) del código:
```
Tu versión de pandas, ejemplo: 1.5.2
```

O si quieres conocer más información puedes ejecutar el siguiente comando en la terminal que te mostrará información más detallada sobre esta librería.

```
pip show pandas
```
> ( output ) en la terminal:
```
Name: pandas
Version: 1.5.2
Summary: Powerful data structures for data analysis, time series, and statistics
Home-page: https://pandas.pydata.org
Author: The Pandas Development Team
Author-email: pandas-dev@python.org
License: BSD-3-Clause
Location: C:\Users\57320\AppData\Local\Programs\Python\Python311\Lib\site-packages
Requires: numpy, numpy, python-dateutil, pytz
```

Esta información puede variar dependiendo de la versión de **Pandas** que tengas instalada y en que carpeta la hayas instalado.

## ¿Cómo instalar Pandas en Python Windows?

Para instalar Pandas en windows, primero debes asegurarte de que tienes instalado **Python** y el administrador de paquetes **pip** en tu ordenador, para esto debes abrir una terminal, presionan la tecla `windows + R` y escribe **"cmd"** esto te abrirá una terminal, luego escribe los siguientes comandos:

```py
# verifica si tienes Python instalado
python --version

# Verifica si tienes el paquete pip instalado
pip --version
```

Si aún no tienes Python instalado, ingresa a la página [instalar python windows](https://www.python.org/downloads/windows/), escoje la versión de Python que quieres instalar y sigue las instrucciones.

Normalmente el paquete de **pip** ya viene instalado junto con Python pero si por alguna razón no lo tienes instalado o quieres actualizarlo puedes hacerlo con los siguientes comandos: 

```
> curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
> python get-pip.py
```

Ahora que ya confirmaste que tienes **Python** y el paquete **pip** instalados correctamente, ya puedes instalar la librería de **Pandas** en tu ordenador, para esto escribe en la terminal el siguiente comando:

```
pip install pandas
```

Una vez terminada la instalación puedes verificar que se instalo correctamente con el comando:

```
pip show pandas
```

## ¿Cómo instalar Pandas en Python MacOS?

Para instalar **Pandas** en MacOS primero debes verificar si ya tienes instalado **Python** y el administrador de paquetes **pip** en tu ordenador, para esto debes abrir una terminal, usa la combinación `command + espacio` y luego escribe **"Terminal"** esto te abrirá una nueva terminal en ella escribe los comandos:

```
# verifica si tienes python instalado
python --version

# Verifica si tienes pip instalado
pip --version
```

Si aún no tienes Python instalado puedes ingresar a la página [instalar python macos](https://www.python.org/downloads/macos/), escoje la versión de Python que quieres instalar y sigue las instrucciones.

El paquete **pip** se instala por defecto junto con Python pero si aun no lo tienes instalado o si quieres actualizarlo, puedes hacerlo con los comandos:

```
> curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
> python get-pip.py
```

Ahora que ya tienes Python y el paquete de `pip` instalados, ya puedes instalar la librería de **Pandas** en tu computador, para esto puedes usar el comando:

```
pip install pandas
```

Terminada la instalación, puedes verificar que la librería se instalo correctamente con el comando:

```
pip show pandas
```

## ¿Cómo instalar Pandas en Python Ubuntu (Linux)?

Para instalar la librería de **Pandas** en Ubuntu ( Linux ), primero debes asegurarte de que tienes instalado **Python** y el administrador de paquetes **pip** en tu ordenador, para esto debes abrir una terminal, usa la combinación `Ctrl + Alt + T` esto abrirá una nueva terminal, luego ingresa en la terminal los siguientes comandos:

```
# verificar si tienes python instalado
python --version

# Verificar si tienes pip instalado
pip --version
```

Si aún no tienes Python instalado puedes ir a la pagina [instalar python linux](https://www.python.org/downloads/source/), escoje la versión que quieres instalar y sigue las instrucciones.

El administrador de paquetes **pip** viene incluido por defecto cuando instalas Python, pero si por alguna razón no lo tienes instalado o quieres actualizarlo puedes hacerlo con los siguientes comandos:

```py
> sudo apt update
> sudo apt install python3-pip
```

Una vez confirmes que tienes instalado Python y el paquete **pip** correctamente, ya puedes instalar **Pandas** en tu ordenador, para esto puedes escribir en la termial el comando:

```
pip3 install pandas
```

Una vez instalada, verifica que el paquete se instaló correctamente con el comando:

```
pip3 show pandas
```

> El comando `pip3 install pandas` es para la vesión de Python 3.0 si tienes una versión anterior como Python 2.0 utiliza el comando `pip install pandas`.

## ¿Qué es Pandas en Python?

Pandas en una biblioteca de Python que te permite analizar y manipular datos, esta biblioteca es ampliamente utilizada en el desarrollo con Python en áreas como la ciencia de datos ( Data science ), Machine learning, Inteligencia artificial entre muchas otras. 

Una ventaja de Pandas es que la puedes integrar con otras librerías de Python como la librería de NumPy, la integración de Pandas con NumPy te permite realizar análisis de datos y operaciones matematicas avanzadas junto con la visualización de datos de una forma más eficiente.

## ¿Cómo actualizar la versión de Pandas?

Para actualizar la biblioteca de pandas en tu ordenador puedes hacerlo con un comando muy sencillo no importa si tu sistema operativo es **Windows**, **MacOS** o **Ubuntu** (linux) puedes usar el mismo comando para actualizar pandas en cualquier sistema operativo.

Para actualizar **Pandas** primero debes abrir una terminal, a continuación verás cómo hacerlo dependiendo de tu sistema operativo.

```
> Windows
Presiona la combinación de teclas [ windows + R ] y luego escribe "cmd"

> MacOS
Presiona la combinación de teclas [ command + space ] y luego escribe "Terminal"

> Ubuntu (linux)
Presiona la combinación de teclas [ Ctrl + Alt + T ]
```

Una vez tengas abierta la terminal escribe los siguientes comandos:

```py
# Verifica tu versión actual de pandas, ejemplo: 1.5.2
pip show pandas

# Actualiza pandas en tu ordenador
pip install --upgrade pandas

# Verifica tu versión de pandas actualizada, ejemplo: 2.0.2
pip show pandas
```

Con el comando `pip install --upgrade pandas` actualizarás **Pandas** en tu ordenador a la última versión estable disponible. Ahora ya prodrás acceder a las últimas características disponibles en esta librería.

## Conclusión

En conclusión pandas es una biblioteca muy útil a la hora de trabajar con datos en Python, esta biblioteca te permite analizar y manipular datos complejos además de que la puedes integrar con otras librerías de Python como NumPy para analizar y visualizar datos. Es una herramienta muy útil en áreas de desarrollo como Data Science, Machine Learning y básicamenta para cualquier programa que trabaje con una amplia cantidad de datos en Python.

Si te interesa conocer más a fondo cómo puedes utilizar la biblioteca de **Pandas** en Machine Learning te recomiendo que visites la página [pandas machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning) de la academia de programación 4Geeks donde encontraras recursos muy utiles y explicaciones con ejemplos de código y videotutoriales que te ayudarán a enterder mejor esta librería y aprenderas a utilizar todas las caracteristicas mas importantes que ofrese.
