# Pandas Drop

## Conceptos de la función DataFrame.drop()
La función se utiliza principalmente para eliminar elementos, ya sean filas o columnas, de un DataFrame de Pandas.
La función, en conjunto con los parámetros apropiados, permite la eliminación sencilla de información específica dentro del conjunto de datos. 

Este es un ejemplo de cómo utilizar la función:

```py
DataFrame.drop(labels, axis=1, inplace=False)
```

En este ejemplo se utilizan diferentes parámetros para definir qué datos se van a eliminar del DataFrame. En este caso se eliminará el eje 1 que significa columna, y el ```inplace``` indica si se va a reemplazar el cambio sobre el DataFrame existente o si se generará uno nuevo.

## Como funciona la función drop()
```drop()``` tiene como principales usos los siguientes:
1. Eliminar filas
    * Para eliminar filas, se utiliza el parámetro ```axis=0```, el cual es el valor por defecto de no especificarse. Se utiliza en conjunto de los parámetros ```labels``` y el de ```index``` para definir cuales filas se quiere eliminar
    * Al utilizar ```index``` se buscan las filas que cumplan con el nombre descrito en label y se eliminan.
    * El parámetro ```level``` es de utilidad cuando se trabaja con DataFrames con índices de múltiples niveles.

    ```py
        import pandas as pd
        data = {'A': [1, 2, 3],
                'B': [4, 5, 6],
                'C': [7, 8, 9]}
        df = pd.DataFrame(data, index=['X', 'Y', 'Z'])
        df_eliminar_filas = df.drop(['Y', 'Z'])  
        print(df_eliminar_filas)

        # Resultado esperado
        #    A  B  C
        # X  1  4  7   
    ```

    *    En este este ejemplo, se nombran las filas como ```"X"```, ```"Y"``` y ```"Z"```, y por medio de drop se eliminan las filas ```"Y"``` y ```"Z"``` y se puede apreciar en el resultado como queda solo la primera fila llamada X. Cabe destacar que, debido a que no se utilizó ```inplace```, por defecto se guardó en un nuevo DataFrame llamado ```df_eliminar_filas```.

2. Eliminar columnas
    * Para eliminar columnas, se utiliza el parámetro ```axis=1```. Al igual que cuando eliminamos columnas, se utiliza en conjunto de los parámetros ```labels``` y el de ```index``` para definir cuales columnas se eliminaran.
    * Aquí también se puede utilizar ```index``` para especificar el nombre de las columnas que se desean eliminar. Adicionalmente se puede utilizar ```columns``` para definir las columnas. Si se utiliza ```columns``` se presume que se van a eliminar columnas y deja de ser necesario especificar el ```axis```.

    ```py
        import pandas as pd
        data = {'A': [1, 2, 3],
                'B': [4, 5, 6],
                'C': [7, 8, 9]}
        df = pd.DataFrame(data, index=['X', 'Y', 'Z'])
        df_eliminar_columnas = df.drop(columns=['B', 'C']) 
        print(df_eliminar_columnas)

        # Resultado esperado
        #    A
        # X  1
        # Y  2
        # Z  3   
    ```
    * Este ejemplo es muy similar al anterior, solo que en este caso se eliminaron las columnas. Como se aprecia del ejemplo anterior las columnas por defecto cuentan con ```labels``` de ```"A"```, ```"B"``` y ```"C"```, de las cuales se eliminan ```"B"``` y ```"C"```, y se aprecia en el resultado como se eliminaron esas columnas.
    
3. Manejo de errores
    * El parámetro ```errors``` determina como se manejan los errores que ocurren en caso que no se encuentren los ```index``` o ```labels``` especificados para eliminar.
    * ```raise``` funciona para resaltar un ```ValueError``` si no se encuentra algún ```label```.
    * ```ignore``` indica que simplemente se ignoren los ```label``` no encontrados.
    ```py
        import pandas as pd
        data = {'A': [1, 2, 3],
                'B': [4, 5, 6],
                'C': [7, 8, 9]}        
        df = pd.DataFrame(data, index=['X', 'Y', 'Z'])
        try:
            df_dropped_row = df.drop(index='W', errors='ignore')
        except KeyError as e:
            print("Error:", e)

        # Resultado esperado
        # KeyError: "['W'] not found in axis"
    ```
    * En este ejemplo se intenta eliminar una fila con índice ```"W"```, que como se aprecia al momento de definir los ```labels``` del DataFrame, no existe. Se puede ver el error.

4. Ediciones del DataFrame o retornando nuevos
    * ```inplace=True``` se utiliza para modificar el DataFrame original. En este caso, la función no retorna nada.
    * ```inplace=False```, el valor por defecto, en este caso, la función devuelve un DataFrame nuevo sin modificar el original.
    ```py
        import pandas as pd
        data = {'A': [1, 2, 3],
                'B': [4, 5, 6],
                'C': [7, 8, 9]}
        df = pd.DataFrame(data, index=['X', 'Y', 'Z'])
        df.drop(['Y', 'Z'], inplace=True)  
        print(df)

        # Resultado esperado
        #    A  B  C
        # X  1  4  7  
    ```
    * Este ejemplo es el mismo que se mostró para eliminar columnas. La mayor diferencia es el uso de ```inplace=True```, lo cual permite que no sea necesario crear una nueva variable para almacenar el nuevo DataFrame ya que se edita sobre el ya existente.

## Aprovechando el uso del parámetro inplace
Es importante profundizar un poco sobre los beneficios y desventajas de utilizar el parámetro de ```inplace=True``` para poder aprovechar este parámetro al máximo.

### Ventajas
1. Eficiencia de memoria: Al utilizar ```inplace=True```, la función modifica el DataFrame original, sin crear una copia nueva. Esto ayuda con el manejo de memoria, especialmente para DataFrames grandes, logrando así optimizar el uso de la memoria.
2. Claridad de código: en algunos casos, el uso de ```inplace=True``` ayuda al código a ser más conciso y legible, ya que es más sencillo comprender que se modifica el DataFrame original.
3. Evita nombramientos de variables: con ```inplace=True``` no es necesario crear una variable para guardar el resultado de la función, ya que la modificación ocurre sobre el DataFrame original.

### Desventajas
1. Pérdida de información: Debido a que las modificaciones se realizan directamente sobre el DataFrame original, si en algún punto se determina que las filas o columnas eliminadas son necesarias, no será posible obtener sus valores, ya que se reescribieron y eliminaron completamente.
2. No idempotencia: Las operaciones que utilizan ```inplace=True``` tienen la capacidad de ser no idempotentes, es decir, que, si se ejecuta la misma operación múltiples veces, cada vez se produce un resultado diferente. Esto puede llevar a comportamiento no esperado si el código se ejecuta más de una vez.
3. Complejidad para debug: Modificar la data original puede hacer más complejo el trabajo de trazar y hacer debug sobre problemas encontrados, ya que no se puede comparar fácilmente un "antes" y un "después".

## Alternativas a la Eliminación Completa
```drop()``` no es la única forma de "remover" valores de los DataFrames, existen otras funciones de utilidad para modificar, discutiremos dos ejemplos a continuación:

### pop()
El método sirve para "extraer" una columna de un DataFrame. Este método modifica el DataFrame original, y adicionalmente, devuelve la columna "extraída" del DataFrame original.

```py
import pandas as pd
data = {'A': [1, 2, 3],
        'B': [4, 5, 6],
        'C': [7, 8, 9]}
df = pd.DataFrame(data, index=['X', 'Y', 'Z'])
columna_B = df.pop('B')

print(df)
print("\nColumna B:")
print(columna_B)

#Resultado esperado
#    A  C
# X  1  7
# Y  2  8
# Z  3  9
# 
# Columna B:
# X    4
# Y    5
# Z    6
```

### del
Se puede utilizar ```del``` para eliminar una columna de un DataFrame. Similar a ```pop()```, del modifica el DataFrame de manera ```inplace``` 

```py
import pandas as pd
data = {'A': [1, 2, 3],
        'B': [4, 5, 6],
        'C': [7, 8, 9]}
df = pd.DataFrame(data, index=['X', 'Y', 'Z'])
del df['B']
print(df)

#Resultado esperado
#    A  C
# X  1  7
# Y  2  8
# Z  3  9
```
### dropna()
```dropna()``` se puede utilizar cuando se desea eliminar columnas o filas con valores faltantes, o NaN.

```py
import pandas as pd
import numpy as np

data = {'A': [1, np.nan, 3],
        'B': [4, 5, 6],
        'C': [7, np.nan, 9]}
df = pd.DataFrame(data, index=['X', 'Y', 'Z'])
df_limpio = df.dropna()

print(df_limpio)

#Resultado esperado
#      A  B    C
# X  1.0  4  7.0
# Z  3.0  6  9.0

```

## Conclusión
```drop()``` es una función de mucha ayuda que con la comprensión de sus atributos se puede lograr eliminar información de los DataFrames muy a detalle.

Así como ```drop()```, existen más funciones de Pandas que son de mucha ayuda al momento de manipular datos. Te recomendamos continuar leyendo en nuestro [tutorial de Pandas](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning).


