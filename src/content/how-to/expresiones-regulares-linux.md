# Expresiones regulares en Linux
## Utilidad de las expresiones regulares

Las expresiones regulares son una herramienta versátil para resolver problemas relacionados con la búsqueda y edición de texto. Las expresiones regulares o _RegEx_ se pueden ver como un tipo de buscador con muchas capacidades complejas que la herramienta básica. Una búsqueda sencilla está fijada en los caracteres que se colocan, y los resultados que devuelven son directamente relacionados 1 a 1 a la búsqueda. RegEx permite una capa de complejidad que deja realizar búsquedas en base a parámetros y así devuelve una mayor variedad de resultados con estos patrones complejos.
Con esta capacidad, RegEx permite una solución viable para los siguientes tipos de problemas:
1.	Búsqueda de texto y filtrado: por su capacidad más compleja de patrones permite realizar búsquedas en base a una mayor cantidad de parámetros y devolver resultados variados que un simple Find no sería capaz de devolver.
2.	Formato de texto: tomando en cuenta los resultados de la búsqueda, es posible dar formato y modificar los resultados, como, por ejemplo, reemplazar una serie de caracteres en un texto, eliminar espacios en blanco y similares.
3.	Automatizar tareas: se pueden utilizar para simplificar tareas de modificación y reemplazo por medio de la ejecución de scripts.

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

## Uso de expresiones regulares en linux
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
Consolidando todos estos puntos teóricos en un ejemplo para lograr comprender mejor estos temas tomemos el siguiente ejemplo.

Queremos realizar un estudio histórico de errores encontrados al momento de la ejecución en un sistema. Estos errores se guardan en un archivo llamado log.txt. El log guarda las incidencias con el formato ````YYYY/MM/DD````. El sistema tiene 15 años, pero nos interesan únicamente los errores del 2010 en adelante.

Mediante el uso de RegEx podemos simplificar esta tarea. Es posible aprovechar los corchetes para definir nuestros años y así obtener los valores.

Primero, sabemos que nos interesan años del 2010 al 2023, viendo estos dos valores, todos los años van a comenzar con ````20```` así que es un buen punto de partida.

Para el tercer espacio, solo se cuenta con dos posibilidades, esto porque solo hay dos valores para la década. Utilizando los corchetes se puede realizar la búsqueda con ````[1-2]````

Finalmente, para el último espacio, este puede tener cualquier valor del 0 al 9, de igual manera que para el espacio anterior la búsqueda se puede realizar con ````[0-9]````

Juntando todo, el RegEx que nos ayudará a filtrar únicamente los valores de interés sería ````20[1-2][0-9]````

Utilizaríamos grep ya que lo que queremos únicamente es ver, y no realizar ninguna modificación ni nada mas complejo para esta tarea. El comando sería

        $ grep "20[1-2][0-9]" log.txt

Esto devolvería exactamente las líneas del log que cuenten con los años relevantes. Es posible hacer la búsqueda un poco mas robusta agregando ````/```` ya que sabemos que el formato del log coloca ese separador entre el año y el mes.

Este es un ejemplo muy sencillo, pero que muestra las capacidades de filtrado y búsqueda de las expresiones regulares de una manera intuitiva y fácil de comprender. Es posible expandir esto y hacer muchas combinaciones con los símbolos y patrones para resolver muchas problemáticas.
