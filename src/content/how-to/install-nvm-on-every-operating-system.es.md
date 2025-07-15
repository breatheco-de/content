---
title: "Cómo Instalar NVM (Node Version Manager) en Cualquier Sistema Operativo"
description: "Descubre cómo instalar NVM en Windows, macOS y Linux con nuestra guía completa. Gestiona múltiples entornos de Node.js fácilmente y cambia entre versiones sin problemas."
tags: ['línea de comandos', 'nvm', 'node', 'javascript']
authors: ['alesanchezr']

---

Node Version Manager (NVM) es una herramienta esencial para cualquier desarrollador de JavaScript. Te permite [gestionar múltiples proyectos y entornos de Node.js](https://4geeks.com/lesson/what-is-an-environment-in-programming) y cambiar entre ellos según las necesidades del proyecto. Esta flexibilidad ayuda a los desarrolladores a gestionar dependencias, probar nuevas características y garantizar la compatibilidad entre diferentes versiones de Node sin alterar todo el entorno de desarrollo.

En esta guía rápida, cubriremos cómo instalar NVM en computadoras con Windows, macOS o Linux. Pero si encuentras algún problema, tenemos instrucciones más detalladas para cada sistema operativo por separado:

-  [Instalar nvm en Windows](https://4geeks.com/es/how-to/como-instalar-nvm-en-windows).
-  [Instalar nvm en macOS](https://4geeks.com/es/how-to/como-instalar-nvm-en-mac-os-node-js-y-npm).
-  [Instalar nvm en Linux](https://4geeks.com/es/how-to/como-instalar-nvm-en-linux).

> Dado que NVM se ejecuta en [la línea de comandos](https://4geeks.com/technology/command-line), asumiremos que tienes algunos conocimientos básicos sobre qué es y cómo usar la línea de comandos.

## Pasos para instalar NVM en Windows

1. **Descarga el Instalador** desde el [repositorio de GitHub de nvm-windows](https://github.com/coreybutler/nvm-windows/releases) y descarga la última versión.

2. **Ejecuta el Instalador**: Lanza el instalador descargado. Sigue las indicaciones para instalar NVM en Windows. Se recomienda usar la configuración predeterminada para la mayoría de los usuarios.

3. **Verifica la Instalación**: Abre el símbolo del sistema y escribe `nvm --version`. Si NVM está instalado correctamente, se mostrará el número de versión.

> 🚨 ¡IMPORTANTE! Asegúrate de que el directorio de NVM esté añadido al PATH de tu sistema. El instalador normalmente maneja este paso.

Aquí tienes una explicación más detallada sobre [cómo instalar NVM en Windows](https://4geeks.com/how-to/nvm-install-windows).

## Pasos para instalar NVM en macOS y Linux

La forma más fácil y recomendada es utilizando el comando `curl` o `wget`:

1. **Abre tu Terminal**: Accede a tu terminal en tu sistema macOS o Linux.

2. **Instala el Script**: Ejecuta el siguiente comando en la terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

O, si prefieres usar `wget`:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

3. **Actualiza tu Perfil**: Añade lo siguiente a tu archivo de perfil de shell (.bash_profile, .zshrc, .profile, etc.):
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Esto carga nvm
```

4. **Reinicia tu Terminal**: Para asegurarte de que los cambios tengan efecto, reinicia tu terminal.

5. **Verifica la Instalación**: En la terminal, escribe `nvm --version`. Una instalación exitosa mostrará el número de versión de NVM.

## ¿Por Qué Usar NVM?

- **Múltiples Versiones de Node.js**: Cambia fácilmente entre versiones de Node según el proyecto.
- **Paquetes Globales por Versión**: Instala paquetes NPM globales específicos para cada versión de Node sin conflictos.
- **Flexibilidad en el Desarrollo**: Prueba aplicaciones fácilmente en diferentes versiones de Node.

## Conclusión

Con NVM instalado, ahora puedes instalar cualquier versión de Node.js simplemente ejecutando `nvm install node_version`. Por ejemplo, `nvm install 14.17.0` instalará la versión 14.17.0 de Node.js. Puedes cambiar entre versiones instaladas usando `nvm use node_version`.

## Solución de Problemas

Si encuentras algún problema durante la instalación, asegúrate de que:
- Tu conexión a internet sea estable.
- Tienes los permisos de escritura adecuados en tu sistema.
- Has cerrado y reabierto tu ventana de terminal para refrescar las variables de entorno.

Para una documentación más detallada, visita la [Página de GitHub de NVM](https://github.com/nvm-sh/nvm).
