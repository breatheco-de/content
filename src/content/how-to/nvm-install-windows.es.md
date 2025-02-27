---
title: "Cómo instalar NVM on Windows"
subtitle: "¡Aprende a instalar NVM en Windows sin esfuerzo! Cambia entre versiones de Node.js con facilidad. ¡Domine su entorno de desarrollo hoy mismo!"
tags: ["windows","nvm", "node", "javascript"]
textColor: "white"
date: "2020-10-19T12:36:30-04:00"
authors: ["kodi24fever"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "published"

---

Como desarrollador, es probable que te encuentres con la necesidad de manejar múltiples proyectos de Node.js en tu [entorno de desarrollo local](https://4geeks.com/es/lesson/que-es-un-entorno-en-la-programacion), cada uno requiriendo diferentes versiones de Node.js. Para gestionar estos requisitos de manera eficiente, te recomendamos encarecidamente instalar Node Version Manager (NVM) en lugar de instalar Node.js directamente. NVM te permite cambiar entre versiones de Node sin problemas, asegurando que cada proyecto tenga el entorno adecuado para ejecutarse de manera efectiva. Para aquellos interesados en optimizar aún más su configuración de desarrollo, tenemos un artículo que detalla las mejores prácticas para evitar problemas comunes en el futuro.

> 📝 Esta guía es solo para usuarios de Windows. Sigue estos enlaces si deseas [instalar NVM en MacOS](https://4geeks.com/how-to/install-node-nvm-mac-osx) o [instalar NVM en Linux](https://4geeks.com/how-to/install-nvm-linux).
  
## Pasos para instalar NVM en Windows

### 1) Descarga nvm
Para poder instalar la herramienta Node Version Manager en un entorno Windows debemos descargar un [archivo zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.zip?raw=true) que contiene el asistente de instalación.  

### 2) Instala nvm
Anda a tu carpeta ***Descargas o Downloads*** en Windows, y descomprime el archivo ```nvm-setup.zip``` y haz doble clic en el archivo ```nvm-setup```.  

**Asistente de instalación**.  

Cuando se abre el asistente de instalación, dale clic al botón ***next*** un par de veces y, al final verás un botón ***install*** al cual también que darle clic. Después de eso, solo espera a que la barra de progreso **termine**.  

> :point_up: Recuerda no tocar la configuración predeterminada ¡Sigue dándole clic a next!!

### 3) Abre tu Línea de comando (o terminal)

Una vez instañado, abre la línea de comando de Windows. Si tienes algún problema en encontrar la línea de comando, escribe ***POWER SHELL*** en la barra de búsqueda de Windows en la esquina inferior izquierda de tu escritorio.  

### 4) Instala node versión 22 o la versión que quieras

En la línea de comando, escribe el comando que hay más abajo. Si quieres verificar cuáles son las versiones de node actuales, puedes ir a [nodejs.org](https://nodejs.org/es/) y verlas todas. Nosotros te recomendamos usar la ***recomendada para la mayoría de los usuarios***.  

```bash
nvm install 22
```

### 5) Comprueba que se instaló correctamente

Reinicia tu terminal y una vez la vuelvas a abrir, escribe el siguiente comando para comprobar que tienes node version 22:

```bash
node -v
```

Deberia salirte la version 22

### 6) PowerShell en VSCode debe poder ejecutar scripts (opcional)

> 🔥 Solo sigue estos pasos si estás usando VSCode

Dentro de la terminal de código de VSCode, si intentas ejecutar `npm` desde la línea de comandos, es probable que estés recibiendo el siguiente error: `no se pueden ejecutar scripts porque la ejecución de scripts está deshabilitada`:

![No se pueden ejecutar scripts porque la ejecución de scripts está deshabilitada](https://github.com/breatheco-de/content/blob/master/src/assets/assets/assets/disabled-error-message.jpg?raw=true)

Para solucionarlo, sigue estos pasos:

1. Abre la paleta de comandos escribiendo `control` + `shift` + `p`.
2. Escribe en la paleta de comandos `User settings json`.
3. Selecciona esa opción y se abrirá un archivo JSON para edición.
4. Agrega lo siguiente a tu archivo settings.json de VSCode:
   
```json
"terminal.integrated.profiles.windows": {
  "PowerShell": {
    "source": "PowerShell",
    "icon": "terminal-powershell",
    "args": ["-ExecutionPolicy", "Bypass"]
  }
},
"terminal.integrated.defaultProfile.windows": "PowerShell",
```

> ⚠️ Ten cuidado con el archivo JSON; asegúrate de no tener errores de sintaxis.

Here is the translation to Spanish:

## Posibles errores y soluciones

A continuación, se presenta una lista de problemas comunes que podrías encontrar al **instalar NVM (Node Version Manager) en Windows**, junto con soluciones para cada uno:

### 1. **Error de comando no encontrado después de la instalación**

**Problema:** 😱 Después de instalar NVM correctamente, es posible que encuentres un problema donde al ejecutar comandos `nvm` se muestre un error de `comando no encontrado`.
**Solución:** 😎 Esto usualmente ocurre porque la ruta de NVM no se ha agregado correctamente a las variables de entorno del sistema. Puedes agregar manualmente el directorio de NVM a tu PATH de la siguiente manera:
   - Haz clic derecho en 'Este equipo' o 'Mi PC'.
   - Selecciona 'Propiedades'.
   - Haz clic en 'Configuración avanzada del sistema'.
   - En la ventana de 'Propiedades del sistema', haz clic en 'Variables de entorno'.
   - En la sección 'Variables del sistema', busca y selecciona la variable 'Path' y haz clic en 'Editar'.
   - Agrega la ruta de la instalación de NVM, normalmente `C:\Users\<Tu-Usuario>\AppData\Roaming\nvm`.
   - Haz clic en 'Aceptar' para guardar los cambios y cierra todas las ventanas.

### 2. **El instalador no configura las variables de entorno**

**Problema:** 😱 A veces, incluso si la instalación se completa correctamente, NVM podría no funcionar porque el instalador no configura las variables de entorno necesarias.
**Solución:** 😎 Verifica que las variables de entorno se hayan configurado correctamente. Si no es así, agrega manualmente `NVM_HOME` y `NVM_SYMLINK` a las variables de entorno de tu sistema:
   - `NVM_HOME` debe apuntar al directorio donde está instalado NVM.
   - `NVM_SYMLINK` debe apuntar al directorio donde se colocarán las instalaciones de Node.
   - Asegúrate de agregar también estas rutas a la variable 'Path', como se describe en la solución anterior.

### 3. **Acceso denegado durante la instalación**

**Problema:** 😱 La instalación falla con un mensaje de error 'Acceso denegado'.
**Solución:** 😎 Esto puede ocurrir si no tienes privilegios de administrador en tu computadora. Intenta ejecutar el instalador como administrador haciendo clic derecho sobre el instalador y seleccionando 'Ejecutar como administrador'.

### 4. **Problemas al instalar versiones específicas de Node**

**Problema:** 😱 Después de instalar NVM, al intentar instalar ciertas versiones de Node, la instalación falla.
**Solución:** 😎 Esto puede suceder debido a problemas de red o si el número de versión de Node especificado es incorrecto. Asegúrate de tener una conexión a internet estable y verifica el número de versión. También intenta instalar otra versión para comprobar si el problema es específico de una versión en particular. A veces, ejecutar el símbolo del sistema como administrador ayuda.

### 5. **nvm no se reconoce como un comando interno o externo**

**Problema:** 😱 Este error suele aparecer si el símbolo del sistema estaba abierto durante la instalación y no se ha reiniciado, o si la ruta PATH no se ha actualizado correctamente.
**Solución:** 😎 Cierra y vuelve a abrir el símbolo del sistema o reinicia tu computadora para asegurarte de que todos los cambios ambientales entren en vigor. Revisa las configuraciones de PATH como se describe en las soluciones para el 'Error de comando no encontrado después de la instalación'.

### 6. **Incapacidad para cambiar versiones de Node**

**Problema:** 😱 NVM instala y lista las versiones de Node correctamente, pero cambiar entre ellas parece no funcionar.
**Solución:** 😎 Asegúrate de que cuando instales versiones de Node mediante NVM, estés ejecutando el símbolo del sistema como administrador. A veces, los problemas de permisos pueden impedir que NVM modifique correctamente los enlaces simbólicos.

### 7. **Rendimiento lento en Windows**

**Problema:** 😱 A veces, NVM puede ser notablemente más lento en Windows en comparación con sistemas Unix.
**Solución:** 😎 Este es un problema conocido debido a cómo se gestionan las variables de entorno y las rutas en Windows. Minimizar la cantidad de versiones de Node instaladas y reiniciar el sistema después de realizar cambios importantes puede ayudar a mejorar el rendimiento.

Estas soluciones abordan los problemas más comunes que se enfrentan al instalar NVM en Windows, ayudándote a garantizar una configuración más fluida y una mejor gestión de diferentes versiones de Node.js.
