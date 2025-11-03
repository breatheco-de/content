---
title: "Fundamentos de React Native: Configuración CLI, Estructura y Componentes Esenciales"
description: "Guía completa para comenzar con React Native CLI; configura tu entorno de desarrollo para iOS y Android, domina los componentes fundamentales (View, Text, Image, ScrollView) y el sistema de props para crear aplicaciones móviles multiplataforma desde cero."
author: "Rosinni"
tags:
  - React Native
  - React Native CLI
  - Mobile Development
  - Components
  - Props
  - iOS
  - Android
  - JavaScript
  - TypeScript
---

Bienvenido al mundo del desarrollo móvil multiplataforma. React Native te permite escribir código una vez y ejecutarlo tanto en iOS como en Android, usando JavaScript y React. A diferencia de otras soluciones, React Native compila a componentes nativos reales, lo que garantiza un rendimiento cercano al desarrollo nativo puro. Esto significa que cuando usas un componente `View` en React Native, en iOS se renderiza como un `UIView` nativo y en Android como un `android.view.View` nativo. No estás creando una aplicación web envuelta en un navegador, sino una aplicación verdaderamente nativa escrita con JavaScript.

## Breve introduccion: ¿Que es React?
- React es una biblioteca de JavaScript para construir interfaces de usuario de forma declarativa mediante componentes reutilizables.
- React te permite conectar lógica de negocio con lógica UI, basandose en "estados" y/o dependencias. Cuando los datos de estos estados cambian, React se encarga de actualizar eficientemente la interfaz.
- Originalmente, React fue creado para "web". Utilizando el "Virtual DOM" (Representación ligera en memoria del DOM) React es capaz de optimizar las actualizaciones del UI y crear experiencias fluidas. Este principió se adaptó para mobile con "React Native", el cual también usa un Virtual DOM (o "Shadow Tree" en la nueva arquitectura) para mantener una representación en memoria de la jerarquía de componentes nativos. Cuando el estado cambia, solo envía los cambios necesarios al lado nativo

## ¿Cómo funciona React Native?

### Vieja Arquitectura: (Antes de 0.76) - Bridge y UIManager
La arquitectura original de React Native (la cual esta activa, por default, para todas las versiones anteriores a 0.76) funciona usando un "Bridge" o puente entre la parte native y el codigo JS (Bundle JS). Cada vez que la aplicacion necesita actualizar su UI, el bundle de Javascript (JS Thread) serializa la informacion del cambio a JSON (utilizando el UIManager) y la envía a la parte nativa, la cual la interpreta y comunica con los módulos de Android e iOS. El problema con este enfoque es que, se generaban cuellos de botella cuando habian varias actualizaciones en simultáneo lo que producía:

- Animaciones entrecortadas
- Listas largas con scroll ralentizadas
- Interacciones táctiles tenían delay perceptible

Además, la comunicacion con modulos nativos siempre es asíncrona, lo cual puede traer problemas si se necesitan valores de forma inmediata al inicio del app.

### Nueva arquitectura: Trabajando con JSI y Fabric
Despues de la version 0.76 React Native comenzó a trabajar con un nuevo tipo de arquitectura que usa JSI (JavaScript Interface) para llamar directamente a funciones C++/nativas sin serialización. Además, reemplazó el UIManager con un nuevo renderer: Fabric, el cual permite actualizaciones síncronas del UI. Por otro lado, introdujo nuevas maneras de trabajar con módulos nativos (TurboModules) y mejoró radicalmente el performance de las aplicaciones al trabajar con animaciones complejas, listas largas y updates frecuentes

## Configuración del Entorno con React Native CLI

React Native CLI te proporciona control total sobre tu aplicación móvil. Puedes acceder directamente a las configuraciones nativas de Android e iOS, integrar módulos nativos personalizados y tener completa flexibilidad sobre cómo se construye tu aplicación. Esta herramienta es ideal cuando necesitas integrar React Native en aplicaciones nativas existentes, crear módulos nativos personalizados, tener control total sobre el proceso de build, o trabajar en entornos enterprise con requisitos específicos de seguridad y personalización.

Antes de comenzar a programar, necesitamos preparar nuestro entorno de desarrollo. Este proceso varía según tu sistema operativo y la plataforma para la que quieras desarrollar. La configuración inicial es probablemente la parte más compleja de trabajar con React Native CLI, pero una vez completada, el desarrollo diario es mucho más fluido.

### Requisitos Previos Generales

Independientemente de tu sistema operativo, necesitarás **Node.js y npm**. React Native usa **Node.js** para ejecutar JavaScript en tu máquina de desarrollo y **npm** para gestionar todas las dependencias del proyecto. Necesitas la versión `18` o superior. Si no lo tienes instalado, puedes descargarlo desde el sitio oficial de **Node.js**.

Además de Node, es altamente recomendable instalar `Watchman` si estás en Mac o Linux. `Watchman` es una herramienta desarrollada por Facebook que observa cambios en el sistema de archivos, lo que hace que el servidor de desarrollo de React Native responda mucho más rápido cuando modificas tus archivos. En Mac puedes instalarlo fácilmente con **Homebrew**:

```bash
brew install watchman
```

### Configuración para Desarrollo Android

Si vas a desarrollar para Android, necesitarás configurar el entorno de Android independientemente de si estás en Mac, Windows o Linux. El primer paso es instalar el **Java Development Kit**. React Native requiere específicamente `Java 17`, y la forma más sencilla es usar OpenJDK. En Mac puedes instalarlo con Homebrew:

```bash
brew install openjdk@17
```

Mientras que en Windows puedes descargar el instalador desde **Adoptium**, asegurándote de seleccionar la `versión 17`.

El siguiente paso es instalar Android Studio, que incluye el **SDK de Android**, todas las herramientas de build necesarias y un emulador para probar tus aplicaciones sin necesidad de un dispositivo físico. Durante la instalación de Android Studio, es crucial que marques las opciones para instalar el Android SDK, Android SDK Platform y Android Virtual Device. Estas herramientas son fundamentales para el desarrollo y sin ellas no podrás compilar ni ejecutar aplicaciones Android.

Una vez instalado Android Studio, necesitas configurar el SDK de Android. Abre Android Studio y ve a `Settings` (o Preferences en Mac), luego navega a `Appearance & Behavior`, `System Settings`, y finalmente `Android SDK`. En la pestaña `SDK Platforms`, asegúrate de tener instalado al menos Android `13.0` (Tiramisu) o una versión superior. En la pestaña `SDK Tools`, verifica que estén instalados Android SDK Build-Tools, Android SDK Platform-Tools y Android Emulator.

El último paso, y uno de los más importantes, es configurar las variables de entorno. React Native necesita saber dónde está instalado el **SDK de Android** para poder compilar tus aplicaciones. En Mac o Linux, necesitas agregar estas variables a tu archivo de configuración de shell. Si usas `zsh` (el shell por defecto en Mac moderno), edita el archivo `~/.zshrc` y agrega las siguientes líneas:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Después de editar el archivo, ejecuta el siguiente comando para aplicar los cambios:

```bash
source ~/.zshrc
```

En Windows el proceso es ligeramente diferente. Necesitas abrir la Configuración del Sistema, ir a Configuración avanzada del sistema, y hacer clic en Variables de entorno. Crea una nueva variable de usuario llamada `ANDROID_HOME` con el valor apuntando a tu SDK, típicamente en `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`. Luego edita la variable Path y agrega dos nuevas entradas: `%ANDROID_HOME%\platform-tools` y `%ANDROID_HOME%\emulator`.

### Configuración para Desarrollo iOS

El desarrollo para iOS tiene un requisito fundamental, necesitas una Mac. Apple no permite desarrollar aplicaciones iOS en Windows o Linux debido a que Xcode, su suite de desarrollo, solo está disponible en macOS. Si tienes una Mac, el primer paso es instalar **Xcode** desde la Mac App Store. Ten en cuenta que Xcode es una descarga bastante grande, ocupando más de 40GB de espacio en disco, así que asegúrate de tener suficiente espacio libre.

Una vez instalado Xcode, ábrelo por primera vez para que complete la instalación de componentes adicionales. Luego ve a `Preferences`, selecciona `Locations`, y asegúrate de que `Command Line Tools` esté seleccionado en el dropdown. Esto instala herramientas de línea de comandos que React Native necesita para compilar aplicaciones iOS desde la terminal.

También necesitas instalar las **Command Line Tools** explícitamente ejecutando el siguiente comando en tu terminal:

```bash
xcode-select --install
```

Finalmente, necesitas instalar **CocoaPods**, que es el gestor de dependencias para iOS. CocoaPods se instala como una gema de Ruby mediante el siguiente comando:

```bash
sudo gem install cocoapods
```

React Native usa **CocoaPods** para gestionar las dependencias nativas de iOS, y cada vez que instales una nueva librería que tenga código nativo, necesitarás ejecutar `pod install` en la carpeta ios de tu proyecto.

### Verificando la Instalación

React Native incluye una herramienta útil llamada "doctor" que puede verificar tu configuración y detectar problemas comunes. Puedes ejecutarla con el siguiente comando:

```bash
npx react-native doctor
```

Este comando revisará tu instalación y te indicará si falta algo o si hay problemas de configuración que necesitas resolver antes de comenzar a desarrollar.

## Componentes Básicos de React Native y Props

React Native te proporciona un conjunto de componentes fundamentales que son los bloques de construcción de cualquier aplicación móvil. A diferencia del desarrollo web donde usas elementos HTML como divs, spans y párrafos, en React Native trabajas con componentes específicamente diseñados para interfaces móviles que se traducen directamente a componentes nativos de iOS y Android. Veamos los cuatro componentes más esenciales que necesitas dominar: `View` para estructurar layouts, `Text` para mostrar contenido textual, `Image` para recursos visuales, y `ScrollView` para contenido desplazable.

### 1. View - El Contenedor Fundamental

View es el componente más básico y esencial en React Native. Es el equivalente móvil de un `div` en HTML, pero diseñado específicamente para aplicaciones nativas. Cada elemento visual de tu aplicación estará contenido dentro de uno o más componentes View, ya sea directamente o anidados en múltiples niveles para crear estructuras complejas.

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

function MiComponente() {
  return (
    <View style={styles.container}>
      {/* Otros componentes van aquí */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});

export default MiComponente;
```

Bajo el capó, View se traduce a componentes nativos reales de cada plataforma. En iOS se convierte en un `UIView`, y en Android en un `android.view.View`. Esto significa que obtienes el rendimiento y la apariencia nativa de cada plataforma sin tener que escribir código específico para cada una. `View` puede manejar toques y gestos mediante el sistema de responders de React Native, aunque para interacciones más complejas generalmente usarás componentes especializados como `TouchableOpacity` o el sistema de gestos de React Native Gesture Handler.

Las props más comunes de View incluyen `style` para definir tanto estilos visuales como propiedades de layout, `onStartShouldSetResponder` para controlar cómo el componente responde a eventos táctiles, y las props de accesibilidad como `accessible`, `accessibilityLabel` y `accessibilityRole` que son fundamentales para hacer tu aplicación usable por personas con discapacidades visuales o motoras.

Una práctica común es usar View para crear separadores visuales, contenedores con sombras, o elementos con bordes redondeados. Por ejemplo, muchas aplicaciones usan View con `borderRadius`, `shadowColor` y `elevation` para crear tarjetas con efecto de profundidad que se ven modernas y atractivas.

### 2. Text - Mostrando Contenido Textual

En React Native existe una regla estricta, **todo el texto debe estar dentro de un componente `Text`**. No puedes poner strings de texto directamente dentro de un `View` o cualquier otro componente. Si intentas hacerlo, obtendrás un error. Esta restricción puede parecer incómoda al principio, pero existe por razones técnicas relacionadas con cómo React Native optimiza el renderizado de texto en cada plataforma nativa.

```tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function MiTexto() {
  return (
    <View>
      <Text style={styles.titulo}>
        ¡Hola, React Native!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
});
```

Text tiene capacidades que lo hacen muy versátil. Una de las más útiles es la anidación: puedes poner un componente Text dentro de otro Text para aplicar estilos diferentes a distintas partes del mismo texto. Esto es perfecto para resaltar palabras específicas, crear enlaces inline, o combinar diferentes pesos de fuente en una misma oración.

```tsx
<Text style={styles.parrafo}>
  Este texto es normal, pero{' '}
  <Text style={styles.negrita}>esta parte está en negrita</Text>
  {' '}y aquí tenemos{' '}
  <Text style={styles.enlace}>un enlace</Text>.
</Text>
```

Nota el uso de `{' '}` para agregar espacios entre los textos anidados. React Native no preserva los espacios en blanco de la misma manera que HTML, así que si quieres espacios entre textos anidados, necesitas agregarlos explícitamente. Este es un detalle pequeño pero importante que puede causar frustración si no lo conoces.

El componente Text puede ser interactivo mediante el prop `onPress`, lo que te permite crear texto tocable sin necesidad de envolverlo en un botón. Esto es perfecto para implementar enlaces, términos y condiciones expandibles, o cualquier texto que necesite responder a toques del usuario. Cuando usas `onPress` en un Text, automáticamente obtiene feedback visual al tocarlo, mostrando un ligero cambio de opacidad.

Si necesitas que el usuario pueda seleccionar y copiar texto, establece `selectable={true}`. Esto es especialmente importante para números de teléfono, direcciones, códigos de confirmación, o cualquier información que el usuario podría necesitar copiar a otra aplicación.

### 3. Image - Mostrando Recursos Visuales

`Image` es el componente que usas para mostrar cualquier tipo de imagen en tu aplicación. Puede cargar imágenes desde tres fuentes principales: archivos locales que empaquetas con tu aplicación, URLs remotas que se descargan de internet, o datos en formato `base64`. Cada fuente tiene sus propios casos de uso, ventajas y consideraciones de rendimiento.

### Imágenes Locales

Las imágenes locales son archivos que incluyes en tu proyecto y que se empaquetan con tu aplicación. Se cargan usando la función `require()`:

```tsx
import React from 'react';
import { Image, StyleSheet } from 'react-native';

function LogoLocal() {
  return (
    <Image
        source={require('./assets/logo.png')}
    />
  );
}
```

Las imágenes locales tienen varias ventajas importantes. Están disponibles inmediatamente sin necesidad de conexión a internet, lo cual mejora la experiencia del usuario y la confiabilidad de tu aplicación. React Native las optimiza automáticamente durante el proceso de build, y maneja automáticamente diferentes densidades de pantalla. Si tienes `logo.png`, `logo@2x.png`, y `logo@3x.png` en tu carpeta de assets, React Native seleccionará automáticamente la versión apropiada según la densidad de pantalla del dispositivo.

### Imágenes Remotas

Para imágenes que se descargan de internet, usas un objeto con la propiedad `uri`:

```tsx
<Image
  source={{ uri: 'https://ejemplo.com/foto-perfil.jpg' }}
  style={styles.fotoPerfil}
/>
```

Cuando trabajas con imágenes remotas, es fundamental especificar las dimensiones explícitamente en el style. A diferencia de las imágenes locales donde React Native puede inferir las dimensiones del archivo, las imágenes remotas no mostrarán nada si no especificas `width` y `height`. Esto es porque React Native necesita saber cuánto espacio reservar antes de que la imagen se descargue.


### 4. ScrollView - Contenido Desplazable

En aplicaciones móviles, es raro que todo tu contenido quepa en una sola pantalla sin necesidad de desplazamiento. ScrollView es el componente que hace posible mostrar contenido más grande que el espacio disponible, permitiendo al usuario desplazarse vertical u horizontalmente para ver todo.

```tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function PantallaContenido() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Sección 1</Text>
        <Text style={styles.parrafo}>
          Contenido de la primera sección...
        </Text>
      </View>
      
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Sección 2</Text>
        <Text style={styles.parrafo}>
          Contenido de la segunda sección...
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  seccion: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  parrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});
```

Una característica importante de ScrollView es que renderiza todos sus hijos inmediatamente, incluso los que no están visibles en pantalla. Esto está bien para contenido relativamente pequeño, digamos menos de 100 elementos o pantallas de contenido que no son demasiado largas. Sin embargo, para listas largas con cientos o miles de elementos, `ScrollView` causará problemas serios de rendimiento porque está intentando renderizar todo al mismo tiempo.

Para listas largas, React Native proporciona componentes especializados llamados `FlatList` y `SectionList`. Estos componentes solo renderizan los elementos que están visibles en pantalla más un pequeño **buffer**, y van creando y destruyendo elementos dinámicamente mientras el usuario se desplaza. Esto es conocido como "virtualización" o "windowing", y es fundamental para mantener un buen rendimiento con datos grandes.


## Entendiendo las Props

Las props son el mecanismo fundamental de comunicación entre componentes en React Native. Son la forma en que pasas datos y configuración desde un componente padre a sus componentes hijos. El nombre "props" viene de "properties" (propiedades), y conceptualmente son similares a los atributos HTML, pero mucho más poderosas porque pueden contener cualquier tipo de dato JavaScript: `strings`, `números`, `objetos`, `arrays`, e incluso `funciones`.

### Flujo de Datos Unidireccional

Una característica fundamental de las props es que son inmutables desde la perspectiva del componente que las recibe. Un componente hijo no puede modificar sus props; solo puede leerlas y renderizar basándose en ellas. Si un hijo necesita comunicar algo al padre, lo hace a través de funciones que el padre pasa como props. Este patrón de flujo de datos unidireccional hace que tu código sea más predecible y fácil de depurar.

```tsx
// Componente hijo que RECIBE props
function Saludo({ nombre, edad }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Hola, {nombre}</Text>
      <Text style={styles.subtitulo}>Tienes {edad} años</Text>
    </View>
  );
}

// Componente padre que ENVÍA props
function App() {
  return (
    <View>
      <Saludo nombre="Ana" edad={28} />
      <Saludo nombre="Carlos" edad={35} />
    </View>
  );
}
```

En este ejemplo, el componente App está reutilizando el mismo componente Saludo dos veces con diferentes props. Esto es el poder de las `props`, te permiten crear componentes genéricos y reutilizables que se comportan diferente según los datos que reciben.

### Tipado de Props con TypeScript

Usar TypeScript para definir los tipos de tus props hace tu código mucho más robusto y mantenible. TypeScript te permite especificar exactamente qué tipo de datos espera cada prop, si es obligatoria u opcional, y tu editor te dará autocompletado inteligente y detectará errores antes de ejecutar el código.

```tsx
interface SaludoProps {
  nombre: string;
  edad: number;
  esVIP?: boolean;
  profesion?: string;
}

function Saludo({ 
  nombre, 
  edad, 
  esVIP = false,
  profesion 
}: SaludoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.edad}>{edad} años</Text>
      {profesion && (
        <Text style={styles.profesion}>{profesion}</Text>
      )}
      {esVIP && (
        <View style={styles.badgeVIP}>
          <Text style={styles.badgeTexto}>⭐ VIP</Text>
        </View>
      )}
    </View>
  );
}
```

En este ejemplo, TypeScript nos garantiza que `nombre` será siempre un string y `edad` será siempre un número. Las props `esVIP` y `profesion` son opcionales gracias al `?`, lo que significa que el componente funcionará tanto si las pasas como si no. Además, le dimos un valor por defecto de `false` a `esVIP` usando la sintaxis de destructuring, así que si no se pasa explícitamente, siempre será false.

Los beneficios de tipar tus props son enormes. Tu editor te mostrará un error inmediatamente si intentas pasar un string donde se espera un número, o si olvidas una prop obligatoria. Cuando uses el componente, obtendrás autocompletado de las props disponibles. Y cuando alguien más (o tú en el futuro) lea el código, sabrá exactamente qué props acepta el componente sin necesidad de leer toda la implementación.

### Props de Estilo

El prop `style` es especial en React Native. Acepta tres formatos diferentes, cada uno con sus propios casos de uso. Puedes pasar un objeto de estilos directamente, aunque esto no es recomendado en producción porque React Native crea un nuevo objeto en cada render, lo que puede afectar el rendimiento. La forma recomendada es usar `StyleSheet.create()` que optimiza los estilos asignándoles identificadores únicos que React Native puede procesar de manera más eficiente.

```tsx
// ❌ Evitar: estilo inline (crea nuevo objeto en cada render)
<View style={{ padding: 20, backgroundColor: 'blue' }} />

// ✅ Recomendado: usar StyleSheet
<View style={styles.container} />

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'blue',
  },
});
```

También puedes pasar un array de estilos, donde los estilos posteriores sobrescriben propiedades duplicadas de los anteriores. Esto es extremadamente útil para estilos condicionales:

```tsx
<View style={[
  styles.boton,
  isPrimary && styles.botonPrimario,
  isDisabled && styles.botonDeshabilitado,
  { marginTop: espacioExtra }
]} />
```

En este ejemplo, el View siempre tiene los estilos de `styles.boton`. Si `isPrimary` es true, también aplica `styles.botonPrimario`. Si `isDisabled` es true, aplica `styles.botonDeshabilitado`. Y finalmente, puede tener un margen superior dinámico basado en la variable `espacioExtra`. Cuando una condición es false, ese estilo simplemente se ignora.

Este patrón de arrays de estilos es muy común en React Native y te permite crear componentes muy flexibles que pueden adaptarse visualmente a diferentes estados o contextos sin necesidad de lógica complicada o múltiples componentes duplicados.

### Props de Función

Las funciones son props de primera clase en React Native, lo que significa que puedes pasarlas como cualquier otro valor. Esto es fundamental para manejar eventos e interacciones del usuario, y es el mecanismo principal de comunicación desde un hijo hacia su padre.

```tsx
interface BotonProps {
  titulo: string;
  onPress: () => void;
  icono?: string;
  deshabilitado?: boolean;
}

function BotonCustom({ 
  titulo, 
  onPress, 
  icono,
  deshabilitado = false 
}: BotonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={deshabilitado}
      style={[
        styles.boton,
        deshabilitado && styles.botonDeshabilitado
      ]}
    >
      {icono && <Text style={styles.icono}>{icono}</Text>}
      <Text style={[
        styles.textoBoton,
        deshabilitado && styles.textoDeshabilitado
      ]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

// Uso:
function App() {
  const manejarClick = () => {
    console.log('¡Botón presionado!');
    // Aquí iría tu lógica
  };

  return (
    <View>
      <BotonCustom
        titulo="Guardar"
        onPress={manejarClick}
        icono="💾"
      />
    </View>
  );
}
```

Este patrón de pasar funciones como props es extremadamente común. El componente hijo (BotonCustom) no necesita saber qué hace la función que recibe; solo necesita saber cuándo llamarla (cuando el usuario toca el botón). Esto mantiene tus componentes desacoplados y reutilizables. El mismo BotonCustom puede usarse para guardar datos, enviar un formulario, navegar a otra pantalla, o cualquier otra acción, simplemente pasándole diferentes funciones en `onPress`.

### Props Children

El prop `children` es especial y automático en React. Contiene cualquier contenido que coloques entre las etiquetas de apertura y cierre de tu componente. Es la forma estándar de crear componentes que actúan como contenedores o wrappers.

```tsx
interface TarjetaProps {
  children: React.ReactNode;
  titulo: string;
  colorFondo?: string;
}

function Tarjeta({ 
  children, 
  titulo,
  colorFondo = '#fff'
}: TarjetaProps) {
  return (
    <View style={[styles.tarjeta, { backgroundColor: colorFondo }]}>
      <View style={styles.header}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
      <View style={styles.contenido}>
        {children}
      </View>
    </View>
  );
}

// Uso:
<Tarjeta titulo="Mi Tarjeta" colorFondo="#f0f0f0">
  <Text>Este contenido va automáticamente en children</Text>
  <Text>Puedes poner cualquier componente aquí</Text>
  <Image source={require('./imagen.png')} />
  <View>
    <Text>Incluso estructuras anidadas complejas</Text>
  </View>
</Tarjeta>
```

El tipo `React.ReactNode` es muy permisivo e incluye elementos de React, strings, números, arrays, fragments, y cualquier otra cosa que React pueda renderizar. Esto hace que tu componente sea extremadamente flexible. El patrón de usar children es fundamental para crear componentes de layout, contenedores estilizados, modales, y cualquier otro componente que necesite envolver contenido arbitrario.


### Optimización de Estilos

Siempre usa `StyleSheet.create` en lugar de estilos `inline`. Los estilos inline crean un nuevo objeto en cada render, lo que puede afectar el rendimiento, especialmente si tienes muchos componentes re-renderizando frecuentemente. `StyleSheet.create` optimiza los estilos asignándoles identificadores únicos que React Native puede procesar de manera más eficiente. Además, tener tus estilos centralizados hace mucho más fácil mantener consistencia visual en tu aplicación. Si necesitas cambiar todos los botones primarios de azul a verde, solo necesitas modificar un lugar en tu StyleSheet.


### Accesibilidad desde el Inicio

La accesibilidad no debe ser algo que agregas al final del desarrollo, sino una consideración desde el principio. Usa las props de accesibilidad en todos los componentes interactivos. Un `TouchableOpacity` debería tener un `accessibilityLabel` descriptivo que explique qué hace el botón, un `accessibilityHint` que proporcione información adicional si es necesario, y un `accessibilityRole` que indique qué tipo de elemento es.


## Conclusión

A medida que continúes tu viaje con React Native, estos patrones y conceptos se volverán segunda naturaleza. Desarrollarás intuición sobre cuándo dividir un componente, cómo estructurar tus props, y qué componente usar para cada situación. La práctica es fundamental.
