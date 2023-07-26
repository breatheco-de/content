# _Pyenv_ Virtual environment

## ¿Que es _Pyenv_?

_Pyenv_ es una herramienta popular en el ecosistema de desarrollo de Python. Su principal utilidad es la de ayudar a los desarrolladores a manejar múltiples versiones de Python en sus equipos de trabajo, y facilitan la capacidad de cambiar entre versiones. Esto es de mucha utilidad en situaciones que requieren trabajar en diferentes proyectos que difieran en sus versiones de Python. De igual manera es de mucha utilidad cuando se quieren realizar pruebas de código en las diferentes versiones de Python.

## Usos principales de _Pyenv_

Los principales usos de _Pyenv_ los podemos describir como los siguientes:

1. Manejo de multiples versiones de Python<br>
El principal uso de _Pyenv_ es el de permitir a los desarrolladores manejar diferentes versiones de Python en sus sistemas. Permite la instalación de múltiples versiones de Python, que puedan funcionar a la vez, sin ninguna interferencia con la versión instalada a nivel del sistema. Esto es de mucho valor al momento de trabajar en proyectos que requieren una versión específica de Python, ya sea por temas de compatibilidad o alguna otra razón.
2. Cambiar versiones de Python<br>
Por medio de _Pyenv_ se habilita la capacidad de cambiar entre diferentes versiones de Python. Esto quiere decir que se puede elegir un intérprete de Python específico para cada sesión de la terminal, o para un proyecto específico. Esto ayuda a evitar conflictos entre diferentes proyectos que puedan depender de diferentes versiones de Python. Como ejemplo, si alguien tiene Python 3.7, 3.8 y 3.9 por medio de _Pyenv_, es posible cambiar de versión para un proyecto, y luego utilizar Python 3.9 para un proyecto diferente, todo por medio de un comando simple. 
3. Selección global de versiones de Python<br>
_Pyenv_ permite configurar una versión "global" de Python, que es la versión que se utilizará por defecto cuando no exista en la configuración detalle sobre la versión del proyecto. Esta versión se puede preceder muy fácilmente por medio de la configuración dentro del proyecto. Contar con una versión global es de mucha utilidad cuando se desea tener una versión por defecto de Python para cualquier nuevo proyecto que se cree, sin la necesidad de configurar la versión manualmente para cada uno de ellos.
4. Selección por proyecto de versiones de Python<br>
Con _Pyenv_ es posible configurar la versión de Python para cada proyecto utilizando un archivo de tipo ```.python-version```. Al navegar a un directorio que contenga el archivo, o en cualquiera de sus directorios padres, Pyenv realizará el cambio a la versión especifica de Python que se coloque en el proyecto. Esta característica asegura que cada proyecto utilice la versión de Python correcta, previniendo así problemas de compatibilidad.
5. Integración de ambientes virtuales<br>
Mientras el enfoque de _Pyenv_ es manejar versiones de Python, trabaja de manera muy conveniente con ambientes virtuales como ```virtualenv``` o el incluido en Python, ```venv```. Los ambientes virtuales permiten la creación de ambientes aislados para los proyectos, con sus dependenciuas y versiones de Python específicas. Utilizar _Pyenv_ en conjunto con los ambientes virtuales, es posible lograr una combinación poderosa para crear un sistema que de separación de ambientes de desarrollo simple y manejable entre cada proyecto dentro de la misma computadora.
6. Sistema de Plugins<br>
_Pyenv_ cuenta con un sistema de plugins que permite aumentar sus capacidades. Existen plugins que proveen optimizaciones adiciones sobre los compiladores, mientras que existen otros que integran _Pyenv_ con herramientas externas o manejadores de paquetes. Estos plugins aumentan increíblemente la capacidad de _Pyenv_ y hace posible la configuración para cubrir las necesidades particulares de cada quien.

Estos son los principales usos que se pueden listar, sin embargo, es posible que las necesidades particulares de cada desarrollador, en conjunto con la capacidad de instalar plugins, aumenten la utilidad de _Pyenv_.

## Ventajas de usar _Pyenv_
_Pyenv_ simplifica muchos temas y complejidades que existen al contar con la necesidad de contar con varias versiones de Python instaladas dentro de la misma computadora. Hacer uso de Pyenv reduce enormemente estas complejidades, al punto de básicamente eliminarlas. Adicional a esto, crea la opción de realizar pruebas de manera rápida y sencilla entre diferentes versiones para así garantizar la funcionalidad de la aplicación a través de diferentes instancias de Python.

En general es muy recomendable utilizar _Pyenv_ si se cuenta con la necesidad de manejar multiples versiones de Python en una sola computadora, si necesitas ayuda instalando Python, te recomendamos nuestra guía para [como instalar pyenv](https://4geeks.com/es/how-to/que-es-pyenv-y-como-instalar-pyenv).

## Conclusion
_Pyenv_ es una herramienta fundamental para desarrolladores que necesiten lidiar con la complejidad de manejar múltiples versiones de Python. De igual manera, es de mucha ayuda proveyendo aislamiento entre proyectos, simplifica el desarrollo eliminando estas complejidades, y mejora la compatibilidad. Independientemente si se es un desarrollador de Python principiante o experimentado, _Pyenv_ aporta mucho valor al flujo de desarrollo y es una herramienta indispensable para mejorar la experiencia de programación y productividad de los desarrolladores.
