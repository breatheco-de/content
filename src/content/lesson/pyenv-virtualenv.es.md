# Pyenv Virtual environment

## ¿Que es Pyenv?

_Pyenv_ es una herramienta popular en el ecosistema de desarrollo de Python. Su principal utilidad es la de ayudar a los desarrolladores a manejar múltiples versiones de Python en sus equipos de trabajo, y facilitan la capacidad de cambiar entre versiones. Esto es de mucha utilidad en situaciones que requieren trabajar en diferentes proyectos que difieran en sus versiones de Python. De igual manera es de mucha utilidad cuando se quieren realizar pruebas de código en las diferentes versiones de Python.

## Usos principales de _Pyenv_

Los principales usos de _Pyenv_ los podemos describir como los siguientes:

### Manejo de multiples versiones de Python

El principal uso de _Pyenv_ es el de permitir a los desarrolladores manejar diferentes versiones de Python en sus sistemas. Permite la instalación de múltiples versiones de Python, que puedan funcionar a la vez, sin ninguna interferencia con la versión instalada a nivel del sistema. Esto es de mucho valor al momento de trabajar en proyectos que requieren una versión específica de Python, ya sea por temas de compatibilidad o alguna otra razón.

### Cambiar versiones de Python
Por medio de _Pyenv_ se habilita la capacidad de cambiar entre diferentes versiones de Python. Esto quiere decir que se puede elegir un intérprete de Python específico para cada sesión de la terminal, o para un proyecto específico. Esto ayuda a evitar conflictos entre diferentes proyectos que puedan depender de diferentes versiones de Python. Como ejemplo, si alguien tiene Python 3.7, 3.8 y 3.9 por medio de _Pyenv_, es posible cambiar de versión para un proyecto, y luego utilizar Python 3.9 para un proyecto diferente, todo por medio de un comando simple. 

### Selección global de versiones de Python

_Pyenv_ permite configurar una versión "global" de Python, que es la versión que se utilizará por defecto cuando no exista en la configuración detalle sobre la versión del proyecto. Esta versión se puede preceder muy fácilmente por medio de la configuración dentro del proyecto. Contar con una versión global es de mucha utilidad cuando se desea tener una versión por defecto de Python para cualquier nuevo proyecto que se cree, sin la necesidad de configurar la versión manualmente para cada uno de ellos.

### Integración de ambientes virtuales

Mientras el enfoque de _Pyenv_ es manejar versiones de Python, trabaja de manera muy conveniente con ambientes virtuales como ```virtualenv``` o el incluido en Python, ```venv```. Los ambientes virtuales permiten la creación de ambientes aislados para los proyectos, con sus dependenciuas y versiones de Python específicas. Utilizar _Pyenv_ en conjunto con los ambientes virtuales, es posible lograr una combinación poderosa para crear un sistema que de separación de ambientes de desarrollo simple y manejable entre cada proyecto dentro de la misma computadora.

### Sistema de Plugins

_Pyenv_ cuenta con un sistema de plugins que permite aumentar sus capacidades. Existen plugins que proveen optimizaciones adiciones sobre los compiladores, mientras que existen otros que integran _Pyenv_ con herramientas externas o manejadores de paquetes. Estos plugins aumentan increíblemente la capacidad de _Pyenv_ y hace posible la configuración para cubrir las necesidades particulares de cada quien.

## Ventajas de usar _Pyenv_

_Pyenv_ simplifica muchos temas y complejidades que existen al contar con la necesidad de contar con varias versiones de Python instaladas dentro de la misma computadora. Hacer uso de Pyenv reduce enormemente estas complejidades, al punto de básicamente eliminarlas. Adicional a esto, crea la opción de realizar pruebas de manera rápida y sencilla entre diferentes versiones para así garantizar la funcionalidad de la aplicación a través de diferentes instancias de Python.

## Cómo instalar Pyenv 🚀

Si estás emocionado por utilizar Pyenv y aprovechar sus ventajas para gestionar múltiples versiones de Python, te proporcionamos una breve guía para instalar Pyenv en tu sistema.

Antes de continuar, te recomendamos revisar nuestro artículo detallado sobre [Cómo Instalar Pyenv](https://4geeks.com/es/how-to/que-es-pyenv-y-como-instalar-pyenv) para obtener instrucciones paso a paso y asegurarte de tener todo lo necesario configurado en tu entorno.

Una vez que hayas instalado Pyenv, podrás gestionar tus versiones de Python con facilidad y crear entornos virtuales para cada proyecto.

## Como crear un virtual env con pyenv-virtualenv
Debido a que virtualenv es un plugin de pyenv, es necesario asegurarse que el plugin esté correctamente instalado.
### Instalar pyenv-virtualenv como plugin
Este método instala el plugin dentro del directorio de plugins de _Pyenv_
Primero se hace el checkout de pyenv-virtualenv directo al directorio de plugins de _Pyenv_ por medio del siguiente comando:
```sh
$ git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
```
Luego es necesario reiniciar la consola para que se habilite la instancia de pyenv-virtualenv
```sh
$ exec "$SHELL"
```
### Instalar pyenv-virtualenv por Homebrew
Si se cuenta con un equipo Mac, se puede utilizar Homebrew para instalar este plugin. **Utilizar este metodo es el recomendado si se instaló Pyenv por este método**
```sh
$ brew install pyenv-virtualenv
```
Luego de la instalación, será necesario seguir los pasos de configuración de consola con Pyenv
Finalmente, se agrega el comando para inicializar virtualenv dentro del documento ```.rc``` de la consola de la siguiente manera:
```sh 
eval "$(pyenv virtualenv-init -)"
```
Esta configuración es de ayuda ya que hace que los ambientes se activen y se desactiven al momento de entrar o salir de directorios que contangan un archivo de ```.python-version```.
De cualquier manera, siempre es posible activar y desactivar de manera manual por medio del uso de 
```sh
pyenv activate <nombre>
pyenv deactivate
```

### Uso de virtualenv
Una vez instalado, virtualenv es muy intuitivo. para crear un ambiente se ejecuta un comando que incluye el numero de versión de Python junto con el nombre del directorio de la siguiente manera:
```sh
$ pyenv virtualenv 2.7.10 ambiente-2.7.10
```

Esto crea un ambiente basado en la versión de Python 2.7.10 dentro del directorio raiz de pyenv de versiones (```$(pyenv root)/versions```), dentro de un folder llamado ```ambiente-2.7.10```.

Se puede pasar solo un argumento a ```pyenv virtualenv```, lo cual hará que el ambiente se cree con la versión actual de _Pyenv_
```sh
$ pyenv virtualenv ambiente-virtual
```

### Listar virtualenvs existentes
El comando ```pyenv virtualenvs``` muestra los ambientes de virtualenv creados
```sh
$ pyenv virtualenv ambiente-virtual-3.4.3
$ pyenv virtualenvs
  ambiente-virtual-3.4.3 (created from /home/yyuu/.pyenv/versions/3.4.3)
  ambiente-2.7.10 (created from /home/yyuu/.pyenv/versions/2.7.10)
```

### Eliminar ambientes de virtualenv
Se pueden eliminar instancias de virtualenv de tres maneras:
1. Eliminando los directorios dentro de ```$(pyenv root)/versions``` y ```$(pyenv root)/versions/{version}/envs```
2. Ejecutando el comando:
```sh
pyenv uninstall ambiente-2.7.10
```
3. Ejecutando el comando:
```sh
pyenv virtualenv-delete ambiente-2.7.10
```
Es importante conocer el proceso de desinstalación para poder manejar adecuadamente los ambientes y poder "limpiar" la lista de ambientes para manejar únicamente los que son realmente necesarios.

## Conclusion

_Pyenv_ es una herramienta fundamental para desarrolladores que necesiten lidiar con la complejidad de manejar múltiples versiones de Python. De igual manera, es de mucha ayuda proveyendo aislamiento entre proyectos, simplifica el desarrollo eliminando estas complejidades, y mejora la compatibilidad. Independientemente si se es un desarrollador de Python principiante o experimentado, _Pyenv_ aporta mucho valor al flujo de desarrollo y es una herramienta indispensable para mejorar la experiencia de programación y productividad de los desarrolladores.
