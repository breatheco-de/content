Las empresas modernas ya no permiten a los desarrolladores trabajar en sus computadoras locales; usan herramientas de provisionamiento. Codespaces es la oferta de Github para entornos de codificación de provisionamiento.

> **En palabras simples**: Codespaces es una tecnología que crea -en cuestión de segundos- computadoras y entornos de codificación en la nube, listos para ser usados por desarrolladores de software.

Al enseñar habilidades relacionadas con la codificación, los entornos de provisionamiento como Codespaces se han convertido [en una de nuestras principales herramientas](https://4geeks.com/lesson/4geeks-teaching-tools) en 4Geeks. Como estudiante, se te anima a usar estos entornos ya que acelerarán tu aprendizaje por lo menos en un orden de magnitud, eliminando toda la fricción de configuración y permitiéndote enfocarte en tu código.

En esta lección, aprenderemos por qué los Entornos de Provisionamiento se están volviendo una tendencia, sus beneficios y desventajas, y cómo usar Github Codespaces.

## ¿Por qué codificar en la nube en lugar de en tu computadora local?

Codificar en la nube trae muchas limitaciones, como requerir y depender de una conexión a internet, pero la tendencia es clara; la mayoría de las empresas estarán usando entornos en la nube en los próximos años. Pero, ¿Por qué?

> ¿Alguna vez has intentado seguir un tutorial en línea, pero después de seguir a fondo cada paso, el código aún no se ejecuta en tu computadora?

La codificación en tu computadora local también trae limitaciones: las computadoras locales pueden romperse y el código puede perderse. Además, cada computadora local viene con diferentes sistemas operativos, versiones de python, etc. Asegurarse de que su código sea compatible para ejecutarse en todas las computadoras puede ser un desafío e innecesario, ya que se publicará en una sola computadora: el entorno de producción.

## ¿Por qué los Codespaces?

Los Codespaces es la oferta de Github para la provisión de entornos de codificación. Esto simplifica dramáticamente el proceso de codificación, especialmente para los nuevos codificadores.

Con los codespaces, puedes abrir cualquier repositorio en un entorno de codificación en la nube y comenzar o continuar codificando en segundos.

## ¿Cómo funcionan los Codespaces?

GitHub llama a cada entorno de codificación un "codespace". Si comienzas a trabajar en un proyecto y creas una nueva computadora en la nube para trabajar en tu proyecto, esta nueva computadora se llamará "codespace".

> 💻 Cada codespace es una computadora -virtual-.

- Tu lista de codespaces (computadoras) actuales está aquí: [github.com/codespaces](https://github.com/codespaces). (Probablemente esté vacío ya que solo estás aprendiendo sobre esto).
- La forma recomendada de crear un nuevo codespace es desde un repositorio de GitHub (si necesitas aprender qué es Github, piensa en él como una unidad de disco duro en línea de código, donde cada carpeta es uno de tus proyectos de codificación).

![open a codespace](https://github.com/breatheco-de/content/blob/master/src/assets/images/create-codespace.gif?raw=true)

- Una vez que el nuevo codespace se abra, creará una computadora vacía para ti, pero también descargará los archivos de la carpeta del repositorio de Github que especificaste (tu código) a esta nueva computadora.

- Finalmente, abrirá un editor de código (probablemente VSCode, el IDE de codificación más utilizado en el mundo) y una terminal para comenzar a codificar como si el codespace estuviera en tu computadora local desde el principio.

- Si vuelves a [tus espacios de código](https://github.com/codespaces), encontrarás todas las computadoras que has creado y podrás volver a abrirlas. Los cambios que hiciste en los archivos se mantendrán durante unos días; retendrás todos los datos siempre y cuando VUELVAS A ABRIR el mismo espacio de trabajo en el que estabas trabajando en primer lugar.

## ¿Qué es un espacio de código de Github?

Es una computadora en la nube, lista para que comiences a codificar. Puedes volver a tu lista de espacios de código en cualquier momento y eliminar, renombrar o fijar cada uno de los espacios de código.

Cuando abres un repositorio de Github usando Codespaces, estarás "alquilando" una computadora con acceso al editor de código más popular del mundo: VSCode.

## Ejecutar un proyecto en Codespaces

Ve a cualquier repositorio de GitHub y podrás abrir un espacio de código haciendo clic en el botón de código -> espacios de código, mira esta imagen:
![open repository codespace](https://github.com/breatheco-de/content/blob/master/src/assets/images/open-codespace.png?raw=true)

## La terminal

Como programador, a veces necesitas usar la terminal del computador; siempre puedes encontrar o abrir la terminal haciendo clic en el menú de la hamburguesa en la parte superior izquierda y seleccionando la opción "terminal" => "nueva terminal".

![](https://github.com/breatheco-de/content/raw/master/src/assets/images/terminal.png?raw=true)

### ¿Qué es la terminal o línea de comandos?

Todo computador tiene una terminal, y puedes usarla para hacer casi todo lo que quieras: abrir una aplicación, crear un archivo, carpeta, etc. Sin embargo, en Codespaces, la terminal solo controlará el computador virtual.

No tienes que aprender los comandos de la terminal todavía, pero [recomendamos encarecidamente leer esta lección](https://4geeks.com/lesson/the-command-line-the-terminal) para familiarizarte con ella y entender sus funciones y limitaciones.

![terminal command](https://github.com/breatheco-de/content/blob/master/src/assets/images/terminal-command.png?raw=true)