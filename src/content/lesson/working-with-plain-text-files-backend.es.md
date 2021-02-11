---
title: "Trabajando con archivos de texto"
subtitle: "Almacenar y obtner informacin de archivos usando lenguajes de backend"
authors: ["alesanchezr"]
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["marketing","query-string"]
status: "published"
cover_local: "../../assets/images/storage_background.jpg"

---

## Los Archivos son la única forma para `guardar` en un computador

Todo el disco duro de tu computador está compuesto por archivos, esta es la forma más básica para almacenar información, tu computadora se ejecuta en un `sistema de archivos (file system)` o en un `directorio de archivos (file directory)` que muestra cómo se almacenan y obtienen los datos.

Usando un lenguaje de back-end puedes acceder a la mayoría de los archivos del computador, ¡y eso te da un poder casi infinito!

## Obteniendo datos de los archivos

Digamos que tienes los precios de bitcoin del último día en un archivo `bitcoin_precios.csv` con el siguiente formato:

<before-after width="400px"
    before="../../assets/images/97f74cd8-acdd-4ce9-aa26-bfd494e9b550bitcoin_price_csv.png" 
    after="../../assets/images/709ff7ce-f7f6-4b16-a172-521fe1787733bitcoing_prices_table.png" 
/>

[[info]]
| :tv: Video de 5 minutos en donde se explica [qué es un archivo CSV](https://www.youtube.com/watch?v=_blfh7uR05A)

Básicamente, cada línea en el archivo CSV representa un precio, por ejemplo:

```python
Currency,Date,Closing Price (USD),24h Open (USD),24h High (USD),24h Low (USD)
BTC,2019-10-29,9455.7246926058,9228.0745024715,9551.7787262272,9125.7784571584
```

Puedes Puede leer el archivo con cualquier lenguaje de programación de backend e interpretarlo en función de las posiciones de los valores:

```python{numberLines: true}
import csv, json

file = open("bitcoin_prices.csv", "r") 
csv_f = csv.reader(file)

prices = []
for row in csv_f:
  prices.append({
	  "ticker": row[0],
	  "price": row[2]
  })
```

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Read-bitcoin-prices-python-file?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


## Guardando datos en los archivos

Digamos que está ejecutando un script que tiene una variable llamada `todos` que contiene una lista de tareas pendientes:

```python
todos = ['make the bed', 'do the laundry', 'finish homework']
```

Esa variable se almacena en la memoria RAM hasta que decida guardarla en un archivo de texto o base de datos. La memoria RAM no es confiable porque su computadora podría perder energía en cualquier momento (apagarse).

Puede guardar esa variable en un archivo `todos.csv` con el siguiente código de Python:

```python{numberLines: true}
todos = ['make the bed', 'do the laundry', 'finish homework']

todos_as_csv = ','.join(todos) # convertir la lista en un string
file = open('todos.csv', 'w+') # abrir un archivo para escribir 'w', crearlo si no existe
file.write(todos_as_csv) # escribir contenido
file.close() # cerrar archivo
```

El código anterior creará o actualizará un `todos.csv` con contenido similar a este:

```csv
make the bed, do the laundry, finish homework
```

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Writing-into-files-with-python?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Diferentes formatos de archivo

| Formato        | Explicación |
| ------        | ----------- |
| CSV           | La Coma `,` separa valores, una linea por cada fila o entidad distinta. |
| JSON          | Muy similar a la sintaxis de Javascript, hecho especialmente para desarrolladores y el formato más utilizado al transmitir información a través de Internet (HTTP) |
| Yaml or YML   | El formato más fácil de entender, a los desarrolladores les encanta porque es rápido pero también es muy similar a un simple archivo de texto, permite comentarios y usa indentación (sangría) en lugar de comas o llaves para delimitar |
| XML           | Muy popular en los años 90 y todavía se usa en muchos programas por su legado |

### Conversión de texto CSV a objeto Python en la memoria

```python{numberLines: true}
import csv
file = open("bitcoin_prices.csv", "r") 
file_content = csv.reader(file)
for row in file_content:
    print("First element: " + row[0])
    print("Second element: " + row[1])
    # etc..
```

### Conversión de texto JSON a objeto Python en la memoria

```python{numberLines: true}
import json
filePointer = open("bitcoin_prices.json", "r") 
data = json.load(filePointer)
prices = []
for row in data:
    print("First element: " + row["ticker"])
    print("Second element: " + row["date"])
    # etc..
```

### Conversión de texto Yaml a objeto Python en la memoria

```python{numberLines: true}
import yml #you have to install pip package pyyaml

filePointer = open("bitcoin_prices.yml", "r") 
data = yaml.load(filePointer)
prices = []
for row in data:
    print("First element: " + row["ticker"])
    print("Second element: " + row["date"])
    # etc..
```

Aquí hay una demostración en vivo cargando los tres tipos de archivos.

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Read-bitcoin-prices-python-file?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
