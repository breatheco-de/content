# Pandas Concat

## Que es Pandas Concat?
```pandas.concat()``` es una función incluida en la librería de Pandas. Pandas es una librería de Python comunmente utilizada para el analisis y manipulacion de datos. la función ```concat()``` se utiliza para combinar o concatenar dos o mas objetos de pandas a lo largo de un eje en particular, ya sea en filas o columnas, resultando en un objeto combinado.

Los principales objetos con los que ```concat()``` puede trabajar son series y dataframes de Pandas. Este es un ejemplo de la estructura de la función:
```py
pandas.concat(objs, axis=0, join='outer', ignore_index=False)
```

## Como funciona Pandas Concat
La función ```pandas.concat()``` se utiliza para combinar dos o mas objetos de o dataframes de Pandas. funciona principalmente por medio del uso de parámetros que le dan instrucciones a la función sobre como realizar la concatenación

## Parametros que se utilizan 
```pandas.concat()``` utiliza varios parametros que permiten personalizar como se realiza la concatenación de los objetos.

Estos son los parametros mas utilizados comunmente:
1. **objs**: Este parametro es obligatorio. Por medio de este parametro se indica la secuendia de objetos de Pandas (Series o DataFrames) que se desean concatenar

2. **axis**: Especifica el eje en el cual se realizará la concatenación. puede ser un 0 (valor por defecto) para filas, o 1 para columnas.

3. **join**: Determina la manera en la que se manejan los indices durante la concatenación. Puede tomar valores como ```inner```. Al utilizar ```inner``` el resultado solo contiene la información de los índices que intersecten en los objetos concatenados. ```outer``` (unión de índices), en este caso se incluyen todos los valores de los objetos concatenados. El valor por defecto es ```outer```.

4. **ignore_index**: Cuando es verdadero (```True```), el objeto concatenado resultante tendrá un nuevo índice numerico, ignorando los índices originales de los objetos concatenados. El valor por defecto es ```False```.

5. **keys**: Este es un parametro opcional que permite crear indices jerarquicos utilizando las claves proporcionadas. Esto es de mucha ayuda al momento de concatenar multiples objetos y es necesario distinguir entre ellos en el objeto resultante.

6. **levels**: Si se utiliza el parametro ```keys```, este parametro especifica los niveles de jerarquía para las claves.

7. **names**: Si se utiliza el parametro ```keys```, este parametro especifica los nombres para los niveles jerarquicos en los indices resultantes.

8. **sort**: Al configurarse como ```True```, el objeto resultante tendrá sus índices organizados. El valor por defecto es ```False```.

9. **copy**: Al configurarse como ```True```, se genera una copia de la data. El valor por defecto es ```True```.

10. **verify_integrity**: If True, the function will raise an exception if there are overlapping indexes during concatenation. El valor por defecto es ```False```.

11. **sort_duplicate**: Si se coloca ```True``` y los índices no son únicos, la función duplicará los índices. El valor por defecto es ```False```.

## Ejemplos

### Concatenación en columnas y en filas
En este ejemplo es posible ver el efecto de cambiar el valor del parametro de ```axis```.

```py
import pandas as pd

data1 = {'A': [1, 2, 3], 'B': [4, 5, 6]}
data2 = {'A': [7, 8, 9], 'B': [10, 11, 12]}

df1 = pd.DataFrame(data1)
df2 = pd.DataFrame(data2)

result_1 = pd.concat([df1, df2], axis=0)
print("Concatenacion con ignore_index False:")
print(result_1)

result_2 = pd.concat([df1, df2], axis=1)
print("\nConcatenacion con ignore_index True:")
print(result_2)

# Resultado
# Concatenacion en filas:
#    A   B
# 0  1   4
# 1  2   5
# 2  3   6
# 0  7  10
# 1  8  11
# 2  9  12

#Concatenacion en columnas:
#    A  B  A   B
# 0  1  4  7  10
# 1  2  5  8  11
# 2  3  6  9  12
```
### Outer e Inner join
En este ejemplo vamos a crear dos DataFrames y ver el comportamiento al combinar ambos DataFrames y utiliznado los dos diferentes tipos de ```join```.

```py
import pandas as pd

df1 = pd.DataFrame({'A': ['A0', 'A1', 'A2', 'A3'],
                    'B': ['B0', 'B1', 'B2', 'B3'],
                    'C': ['C0', 'C1', 'C2', 'C3'],
                    'D': ['D0', 'D1', 'D2', 'D3']})
 
df2 = pd.DataFrame({'E': ['E0', 'E1', 'E2', 'E3'],
                    'F': ['F0', 'F1', 'F2', 'F3'],
                    'G': ['G0', 'G1', 'G2', 'G3'],
                    'H': ['H0', 'H1', 'H2', 'H3']})

result_1 = pd.concat([df1, df2], axis=1, join='inner')
print("Concatenacion con inner join:")
print(result_1)

result_2 = pd.concat([df1, df2], axis=1, join='outer')
print("\nConcatenacion con outer join:")
print(result_2)

# Resultado
# Concatenacion con inner join:
# Empty DataFrame
# Columns: []
# Index: [0, 1, 2, 3, 0, 1, 2, 3]
# 
# Concatenacion con outer join:
#      A    B    C    D    E    F    G    H
# 0   A0   B0   C0   D0  NaN  NaN  NaN  NaN
# 1   A1   B1   C1   D1  NaN  NaN  NaN  NaN
# 2   A2   B2   C2   D2  NaN  NaN  NaN  NaN
# 3   A3   B3   C3   D3  NaN  NaN  NaN  NaN
# 0  NaN  NaN  NaN  NaN   E0   F0   G0   H0
# 1  NaN  NaN  NaN  NaN   E1   F1   G1   H1
# 2  NaN  NaN  NaN  NaN   E2   F2   G2   H2
# 3  NaN  NaN  NaN  NaN   E3   F3   G3   H3
```

En este ejemplo al usar el ```inner``` join la concatenación no cuenta con ningún valor debido a que las claves de cada uno de los objetos no comparten valores. En el caso del ```outer``` join se incluyen todos los valores, a pesar que estén vacíos con las claves del otro objeto

###

### Ejemplo de ignore_index
En este ejemplo se puede apreciar la diferencia en los índices de los valores al usar ambos valores para ```ignore_index```

```py
import pandas as pd

data1 = {'A': [1, 2, 3], 'B': [4, 5, 6]}
data2 = {'A': [7, 8, 9], 'B': [10, 11, 12]}

df1 = pd.DataFrame(data1)
df2 = pd.DataFrame(data2)

result_ignore_index = pd.concat([df1, df2], axis=0, ignore_index=False)
print("Concatenacion con ignore_index False:")
print(result_ignore_index)

result_ignore_index = pd.concat([df1, df2], axis=0, ignore_index=True)
print("\nConcatenacion con ignore_index True:")
print(result_ignore_index)

# Output esperado
# Concatenacion con ignore_index False:
#    A   B
# 0  1   4
# 1  2   5
# 2  3   6
# 0  7  10
# 1  8  11
# 2  9  12

# Concatenacion con ignore_index True:
#    A   B
# 0  1   4
# 1  2   5
# 2  3   6
# 3  7  10
# 4  8  11
# 5  9  12
```

En este ejemplo se puede apreciar como en el primer output se ve que los índices se mantienen como ```0, 1, 2```, sin embargo utilizando ```True``` para ```ignore_index``` hace que los índices incrementen en base al número de filas.

### Utilizando Keys, Levels y Names
En este ejemplo se muestra el resultado del uso de los parametros Keys, Levels y Names:

```py
df1 = pd.DataFrame({'A': ['A0', 'A1', 'A2', 'A3'],
                    'B': ['B0', 'B1', 'B2', 'B3'],
                    'C': ['C0', 'C1', 'C2', 'C3'],
                    'D': ['D0', 'D1', 'D2', 'D3']})
 
df2 = pd.DataFrame({'E': ['E0', 'E1', 'E2', 'E3'],
                    'F': ['F0', 'F1', 'F2', 'F3'],
                    'G': ['G0', 'G1', 'G2', 'G3'],
                    'H': ['H0', 'H1', 'H2', 'H3']})

result_1 = pd.concat([df1, df2], axis=0, keys=['Set1', 'Set2'], levels=[['Set1', 'Set2']], names=['Dataset'])
print(result_1)

# Output esperado
#              A    B    C    D    E    F    G    H
# Dataset                                          
# Set1    0   A0   B0   C0   D0  NaN  NaN  NaN  NaN
#         1   A1   B1   C1   D1  NaN  NaN  NaN  NaN
#         2   A2   B2   C2   D2  NaN  NaN  NaN  NaN
#         3   A3   B3   C3   D3  NaN  NaN  NaN  NaN
# Set2    0  NaN  NaN  NaN  NaN   E0   F0   G0   H0
#         1  NaN  NaN  NaN  NaN   E1   F1   G1   H1
#         2  NaN  NaN  NaN  NaN   E2   F2   G2   H2
#         3  NaN  NaN  NaN  NaN   E3   F3   G3   H3
```
En este ejemplo se puede apreciar como el uso de los parametros organiza la data y se hace mas sencillo ver los valores a los que pertenecia originalmente la data

## Conclusión
La función ```pandas.concat()``` es muy util para combinar datos dentro de un solo valor. Cuenta con parametros que son capaces de modificar el comportamiento de la función y configurar el resultado en base a las necesidades. Esto es de mucha ayuda al momento del manejo de datos con Pandas. Si quieres conocer mas relacionado al tema de manejo de datos con Pandas te recomendamos leer mas en este [tutorial](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning).
