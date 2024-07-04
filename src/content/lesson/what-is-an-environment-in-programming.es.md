---
title: "Entendiendo los Entornos y las Variables de Entorno en la Programación"
description: "Domina el uso de las variables de entorno en la programación para optimizar y asegurar tu desarrollo en múltiples plataformas como Python, Node.js, PHP, etc."
tags: ["python", "node", "javascript"]
authors: ["alesanchezr"]

---

En el desarrollo de software, un "entorno" se refiere a la configuración bajo la cual se ejecutan aplicaciones o software específicos; esta configuración incluye:

- Los lenguajes de programación y versiones específicos necesarios. Por ejemplo: `python 3.10`
- Dependencias de software requeridas para desarrollar, probar y ejecutar aplicaciones.
- Secretos y variables con claves privadas, rutas a la base de datos y otros valores importantes que son únicos por desarrollador o implementación.
- El sistema operativo (opcional)
- Especificaciones de hardware (opcional)

Gestionar adecuadamente los entornos es crucial cuando se trabaja en múltiples proyectos o se colabora con un equipo, ya que asegura la consistencia y previsibilidad en el comportamiento del software a través de diferentes máquinas y configuraciones.

> ☝️ Este artículo no trata sobre máquinas virtuales o contenedores Docker; nos enfocamos en la creación de entornos que generalmente ocurre dentro de la computadora personal del desarrollador, la máquina virtual o el contenedor Docker.

## Instalación de lenguajes de programación para múltiples entornos

Como desarrollador de software, puede que necesites usar Python 3.10 en un proyecto y Python 3.11 en otro.

Para resolver este problema, recomendamos la instalación de gestores de versiones en lugar de instalar los lenguajes de programación directamente, por ejemplo:

- [Instalar nvm](https://4geeks.com/how-to/install-nvm-on-every-operating-system) en lugar de Node directamente
- [Instalar pyenv](https://4geeks.com/how-to/what-is-pyenv-and-how-to-install-pyenv) en lugar de Python directamente
- Instalar phpenv en lugar de PHP directamente

## ¿Qué son las Variables de Entorno?

Las variables de entorno son pares clave-valor almacenados en una computadora que se pueden usar para configurar y afectar el comportamiento de los procesos en ejecución en ese sistema. Juegan un papel crítico en la gestión de configuraciones de aplicaciones que no deben estar codificadas en el código fuente, como claves API, conexiones a bases de datos y otros datos sensibles.

### ¿Por qué usar Variables de Entorno?

- **Seguridad**: Mantener la información sensible fuera del código fuente.
- **Flexibilidad**: Permitir que el mismo código de la aplicación se ejecute en diferentes entornos con diferentes configuraciones.
- **Escalabilidad**: Simplificar el proceso de escalar aplicaciones en diferentes servidores y entornos.

## Creación de un entorno

Dependiendo del lenguaje de programación elegido, usarás diferentes herramientas para crear entornos como [venv](https://docs.python.org/3/library/venv.html), [rbenv](https://github.com/rbenv/rbenv), etc. Vamos a explorar las herramientas de entorno más recomendadas para los lenguajes de programación más populares.

### Gestión de Entornos Python con pyenv y pipenv

- **pyenv**: Esta herramienta permite a los desarrolladores gestionar múltiples versiones de Python en una sola máquina, habilitando el cambio entre versiones según los requisitos del proyecto. Es particularmente útil cuando los proyectos requieren versiones específicas de Python que no son globales.

  - **Instalación y Configuración**: Explica cómo instalar pyenv (por ejemplo, usando `curl` o `brew` en macOS) y configurarlo para gestionar versiones de Python.
  - **Uso:**: Demuestra cómo instalar una versión específica de Python (`pyenv install 3.8.6`) y cómo establecer una versión local para un proyecto (`pyenv local 3.8.6`).
 
> 💡 Sigue leyendo sobre [qué es pyenv y cómo instalarlo](https://4geeks.com/how-to/what-is-pyenv-and-how-to-install-pyenv).

- **pipenv**: Esta herramienta crea y gestiona automáticamente un entorno virtual para tus proyectos, además de añadir/eliminar paquetes de tu `Pipfile` a medida que instalas/desinstalas paquetes. También genera el `Pipfile.lock`, que se utiliza para producir builds deterministas.

  - **Creación y Gestión de Entornos**: Muestra cómo crear un proyecto usando pipenv (`pipenv --python 3.8`) y cómo activar y gestionar el entorno virtual resultante.
  - **Ventajas**: Enfatiza los beneficios de usar pipenv, como la gestión de dependencias y la gestión de entornos específicos del proyecto.

### Gestión de Entornos Node.js con nvm y nodeenv

- **nvm (Node Version Manager)**: Similar a pyenv pero para Node.js, nvm permite a los desarrolladores instalar y cambiar entre versiones de node. Es esencial para proyectos que dependen de una versión específica de Node.js o cuando necesitas probar la aplicación en diferentes versiones.

  - **Instalación y Gestión de Node**: Guía sobre la instalación de nvm y su uso para instalar múltiples versiones de Node.js  (`nvm install 14`, `nvm use 14`).

- **nodeenv**: v para Python. Es útil para asegurar que las dependencias se mantengan separadas entre proyectos.

  - **Creación de un Entorno Aislado**: Instrucciones sobre la instalación de nodeenv y la creación de un entorno para un proyecto (`nodeenv env-name`), y activación del mismo (`source env-name/bin/activate`).

### Mejores Prácticas

- **Documentación**: Documenta siempre qué variables de entorno y versiones de Node o Python son necesarias para cada proyecto.
- **Archivos .env**: Usa archivos `.env` para mantener las variables de entorno consistentes en las etapas de desarrollo y producción, pero asegúrate de que estos archivos nunca se registren en el control de versiones con información sensible.
- **Consistencia entre Miembros del Equipo**: Utiliza herramientas como Docker para asegurar que todos los miembros del equipo estén trabajando con las mismas configuraciones, minimizando el problema de "funciona en mi máquina".

### Conclusión

Entender y utilizar las variables de entorno y las herramientas de gestión de entornos como pyenv, pipenv, nvm y nodeenv son habilidades esenciales para los desarrolladores modernos. Mejoran la seguridad, permiten un desarrollo flexible en diferentes entornos y facilitan una colaboración más fluida entre equipos.

---

Este esquema te debería proporcionar un marco sólido para construir tu artículo, completo con explicaciones y ejemplos prácticos para guiar a tus lectores a través de la gestión de entornos de manera efectiva.
