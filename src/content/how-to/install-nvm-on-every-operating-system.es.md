---
title: "Cómo instalar NVM (Node Version Manager) en todos los sistemas operativos"
description: "Descubre cómo instalar NVM en Windows, macOS y Linux con nuestra guía completa. Administra múltiples entornos de Node.js fácilmente y cambia entre versiones sin problemas."
tags: ['command-line', 'nvm', 'node', 'javascript']
authors: ['alesanchezr']

---

Node Version Manager (NVM) es una herramienta esencial para cualquier desarrollador de JavaScript. Te permite [administrar múltiples proyectos y entornos de Node.js](https://4geeks.com/lesson/what-is-an-environment-in-programming) y cambiar entre ellos según las necesidades del proyecto. Esta flexibilidad ayuda a los desarrolladores a gestionar dependencias, probar nuevas características y asegurar la compatibilidad entre diferentes versiones de Node sin interrumpir todo el entorno de desarrollo. 

En esta guía, cubriremos cómo instalar NVM en [Windows](https://4geeks.com/how-to/nvm-install-windows), [instalar NVM en macOS](https://4geeks.com/how-to/install-node-nvm-mac-osx), e [instalar NVM en Linux](https://4geeks.com/how-to/nvm-install-linux), asegurándonos de que puedas comenzar sin importar tu plataforma. Dado que NVM se ejecuta en [la línea de comandos](https://4geeks.com/technology/command-line), asumiremos que tienes algún conocimiento sobre qué es y cómo usar la línea de comandos.

## Pasos para instalar NVM en Windows

1. **Descargar el Instalador** desde el [repositorio GitHub de nvm-windows](https://github.com/coreybutler/nvm-windows/releases) y descargar la última versión.

2. **Ejecutar el Instalador**: Inicia el instalador descargado. Sigue las indicaciones para instalar NVM para Windows. Se recomienda usar la configuración predeterminada para la mayoría de los usuarios.

3. **Verificar la Instalación**: Abre tu símbolo del sistema y escribe `nvm --version`. Si NVM está instalado correctamente, se mostrará el número de versión.

> 🚨 ¡IMPORTANTE! Asegúrate de que el directorio de NVM esté agregado a la variable PATH de tu sistema. El instalador generalmente maneja este paso.

Aquí tienes una explicación más detallada sobre [cómo instalar NVM en Windows](https://4geeks.com/how-to/nvm-install-windows).

## Pasos para instalar NVM en macOS y Linux

La forma más fácil y recomendada es usar el comando `curl` o `wget`:

1. **Abrir tu Terminal**: Accede a tu terminal a través de tu sistema macOS o Linux.

2. **Instalar Script**: Ejecuta el siguiente comando en la terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

O, si prefieres usar `wget`:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

3. **Actualizar tu Perfil**: Agrega lo siguiente a tu archivo de perfil de shell (.bash_profile, .zshrc, .profile, etc.):
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

4. **Reiniciar tu Terminal**: Para asegurar que los cambios surtan efecto, reinicia tu terminal.

5. **Verificar la Instalación**: En la terminal, escribe `nvm --version`. Una instalación exitosa mostrará el número de versión de NVM.

## ¿Por qué usar NVM?

- **Múltiples Versiones de Node.js**: Cambia fácilmente entre versiones de Node por proyecto.
- **Paquetes Globales por Versión**: Instala paquetes NPM globales específicos para cada versión de Node sin conflictos.
- **Flexibilidad de Desarrollo**: Prueba fácilmente aplicaciones en diferentes versiones de Node.

## Conclusión

Con NVM instalado, ahora puedes instalar cualquier versión de Node.js simplemente ejecutando `nvm install node_version`. Por ejemplo, `nvm install 14.17.0` instalará la versión 14.17.0 de Node.js. Puedes cambiar entre versiones instaladas usando `nvm use node_version`.

## Solución de problemas

Si encuentras algún problema durante la instalación, asegúrate de que:
- Tu conexión a internet sea estable.
- Tengas permisos de escritura adecuados en tu sistema.
- Hayas cerrado y vuelto a abrir tu ventana de terminal para actualizar las variables de entorno.

Para una documentación más detallada, visita la [página de GitHub de NVM](https://github.com/nvm-sh/nvm).
