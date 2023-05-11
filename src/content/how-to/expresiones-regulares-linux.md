# Expresiones regulares en Linux
## Utilidad de las expresiones regulares

Las expresiones regulares son una herramienta versátil para resolver problemas relacionados con la búsqueda y edición de texto. Las expresiones regulares o _RegEx_ se pueden ver como un tipo de buscador con muchas capacidades complejas que la herramienta básica. Una búsqueda sencilla está fijada en los caracteres que se colocan, y los resultados que devuelven son directamente relacionados 1 a 1 a la búsqueda. RegEx permite una capa de complejidad que deja realizar búsquedas en base a parámetros y así devuelve una mayor variedad de resultados con estos patrones complejos.
Con esta capacidad, RegEx permite una solución viable para los siguientes tipos de problemas:
1.	Búsqueda de texto y filtrado: por su capacidad más compleja de patrones permite realizar búsquedas en base a una mayor cantidad de parámetros y devolver resultados variados que un simple Find no sería capaz de devolver.
2.	Formato de texto: tomando en cuenta los resultados de la búsqueda, es posible dar formato y modificar los resultados, como, por ejemplo, reemplazar una serie de caracteres en un texto, eliminar espacios en blanco y similares.
3.	Automatizar tareas: se pueden utilizar para simplificar tareas de modificación y reemplazo por medio de la ejecución de scripts.

Un caso práctico de uso para apreciar la utilidad de regex sería el siguiente

      1\d{10}

Con este _RegEx_ sería posible buscar buscar texto que tengan una longitud de 11 dígitos comenzando por 1


## Simbología básica 

Las expresiones regulares funcionan por medio de un conjunto de símbolos y patrones en los cuales se especifican los parámetros de búsqueda a utilizar para obtener los resultados dentro de un documento de texto.

Los símbolos básicos de uso son los siguientes:

| Símbolo | Descripción
|---|---|
| . | se utiliza como comodín y devuelve cualquier caracter |
| ^ | realiza la búsqueda con el inicio de la cadena |
| $ | realiza la búsqueda con el final de la cadena |
| * | realiza la búsqueda en base a la incidencia de los caracteres |
| \ | representa un caracter especial |
| ( ) | agrupa expresiones regulares |
| [ ] | busca valores en un rango |
| \| | utilizado como _or_ busca el primero valor, o el segundo |
| ? | realiza la búsqueda con exactamente un caracter |

Existen herramientas que son de mucha utilidad para familiarizarse con el uso de estos caracteres y la simbología que utiliza RegEx. Una de estas herramientas es el sitio de https://regexr.com/ que permite realizar pruebas de búsquedas con RegEx y validar los resultados devueltos.

## Funciones básicas de expresiones regulares en linux
Esta simbología es de uso general y se puede utilizar en cualquier aplicación que pueda aprovechar RegEx en sus búsquedas. Para el caso particular de Linux, se utiliza en conjunto con comandos como grep, sed y awk. Cada uno de estos comandos tiene diferentes capacidades y su utilidad va ligada a la tarea que se desee realizar.

* grep: busca líneas que coincidan con un patrón de expresiones regulares e imprime esas líneas en una salida. Es útil cuando necesitamos verificar rápidamente la existencia de un patrón particular en una entrada o archivo.
> Un ejemplo de uso es
>
>       $ grep "ERROR" log.txt
> Lo cual nos devolvería todas las instancias del texto ERROR en el archivo log.txt
* sed: ofrece comandos de transformación de texto adicionales como sustitución. Se utiliza en conjunto con las expresiones regulares
> Un ejemplo del uso de sed
>
>       $ sed 's/ERROR/CRITICAL/' log.txt
> En este ejemplo la s al principio muestra que se trata de una sustitución. Va a buscar todas las instancias de ERROR y reemplazarlas por CRITICAL.
* awk: ofrece una multitud de funciones integradas para la manipulación de cadenas, aritmética y tiempo, pero también permite al usuario definir sus propias funciones como cualquier lenguaje de secuencias de comandos normal.
> Es posible realizar una sustitución como se hizo con sed utilizando awk,
>
>       awk '{gsub(/ERROR/, "CRITICAL")}{print}' log.txt
> este ejemplo utiliza el método gsub para buscar las instancias de ERROR y reemplazar por CRITICAL, finalmente imprimiendo en pantalla las líneas con los resultados. Esto nos demuestra que awk es el más versátil de estos comandos a utilizar junto con las expresiones regulares, sin embargo, es importante tener en cuenta la sintaxis del lenguaje que utiliza.

## Ejemplos de expresiones regulares
Consolidando todos estos puntos teóricos en ejemplos para lograr comprender mejor estos temas tomemos los siguientes ejemplos.

### Estudio de errores
Queremos realizar un estudio histórico de errores encontrados al momento de la ejecución en un sistema. Estos errores se guardan en un archivo llamado log.txt. El log guarda las incidencias con el formato ````YYYY/MM/DD````. El sistema tiene 15 años, pero nos interesan únicamente los errores del 2010 en adelante.

Mediante el uso de RegEx podemos simplificar esta tarea. Es posible aprovechar los corchetes para definir nuestros años y así obtener los valores. Sabiendo que nos interesan años del 2010 al 2023 podemos utilizar ````20```` para comenzar a filtrar. Para el siguiente espacio podemos utilizar ````[1-2]```` ya que con estos valores definimos el valor de la década. Finalmente, en el último espacio, como se tienen todas las posibilidades de valores, utilizamos ````[0-9]````. Utilizando el comando grep para realizar la búsqueda, quedaría el comando:

        $ grep "20[1-2][0-9]" log.txt

Esto devolvería exactamente las líneas del log que cuenten con los años relevantes. 

### Búsqueda de números telefónicos por país
De un archivo llamado usuarios.txt, necesitamos obtener todos los números telefónicos de México. Las expresiones regulares se prestan para esto ya que los este tipo de datos cuenta con una estructura definida, 10 dígitos con el código de país.
Teniendo esto en cuenta, el _RegEx_ que podemos utilizar junto con su comando sería:

        $ grep "\+52 \d{10}" usuarios.txt

Esto nos devolvería todos los números telefónicos de usuarios en México.

Estos ejemplos sencillos muestran las capacidades de filtrado y búsqueda de las expresiones regulares de una manera intuitiva y fácil de comprender. Es posible expandir esto y hacer muchas combinaciones con los símbolos y patrones para resolver muchas problemáticas. Las expresiones regulares son una herramienta muy útil en nuestro arsenal que nos permiten simplificar búsquedas que serían demasiado complejas, y tomarían demasiado tiempo realizandolas de maneras mas tradicionales.
