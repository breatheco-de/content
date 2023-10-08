---
title: "What Are Third-Party Libraries Used for in Python?"
subtitle: "Learn how third-party libraries in Python can enhance your projects. Discover how to incorporate advanced functions and accelerate your development."
tags: ["python"]
authors: ["DF27ARTS"]

---

## Third-Party Libraries

Third-party libraries are an essential tool in modern programming, and most programming languages have different libraries that simplify certain tasks for developers. A library, also known as a package or module, is a set of predefined code that has been developed by an external programmer and made available to the general public.

Below, we will see a small example with one of Python's most popular libraries, the Pandas library.

1. Install the Pandas library with the following command.

```py
pip install pandas
```
2. Import the Pandas library into your working module

```py
import pandas as pd
```

> The `as` keyword is used to give the library an alias to make it easier to use. It is optional.

3. Now you can use Pandas in your own code.

```py
data_frame = pd.DataFrame({
    "Nombre": ["Emma", "Liam", "Olivia"],
    "Apellido": ["Johnson", "Smith", "Williams"],
    "Edad": [34, 54, 23]
})

print(data_frame)
```
> output:
```bash
   Nombre  Apellido  Edad
0    Emma   Johnson    34
1    Liam     Smith    54
2  Olivia  Williams    23
```

In this example, we create a small DataFrame with the help of the `DataFrame()` function from the **Pandas** library. We then add information for three different users and display the user information in the console.

## What Are Third-Party Libraries in Python?

Third-party libraries are collections of code developed by external programmers. These libraries or packages encapsulate specific functionality that can be reused in different projects as needed. Instead of writing code over and over again whenever you need to perform a common or complex task, you can rely on third-party libraries that have already created and tested that code, saving you time and effort. To download a Python library, you can use the package management system called **pip** (Pip Install Packages).

- To install any library, use the following syntax:

```bash
pip install nombre_de_libreria
```

- Then, you can create a Python module or working file, e.g., `example.py`, and import the library using the following syntax:

```py
import nombre_de_librería as alias
```

> The alias is optional and it works for giving the library a shorter name for easier use.

Once imported, you can use this library in your code and take advantage of all its benefits. Remember that you can install and import as many libraries as you need. For example, you can use the **NumPy** library along with the [Pandas](https://4geeks.com/es/how-to/instalar-pandas-python) library for advanced mathematical calculations.

## Examples of Using Third-Party Libraries in Python

Below, we'll see some examples of how to install, import, and use different third-party libraries in your Python code.

### Requests

The [requests](https://docs.python-requests.org/en/v2.0.0/user/install) library allows you to make **HTTP** requests in Python. This library abstracts the complexity of making HTTP calls with the help of intuitive and easy-to-understand functions, allowing you to focus on getting the most out of the API you want to use.

To use the **Requests** library on your computer, follow these steps:

1. Install the **requests** library on your computer with the following command:

```bash
pip install requests
```

2. Once installed, import the library into your working module with the following syntax:

```py
import requests
```

3. Now you can start using the wonderful features of this library.

```py
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")

if response.status_code == 200:
    data = response.json()
    print("Data obtained from the API\n")
    print(data)

else:
    print("There was a problem, and the API responded with an error")
```
> output:

```bash
Datos Data obtained from the API

{
    'userId': 1, 
    'id': 1, 
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}
```

In this example, we use the `get()` method from the **Requests** library to retrieve information from a server. If the request is successful, we print the result to the console, but if the request fails, we display an error in the console. For this example, we use the [jsonplaceholder](https://jsonplaceholder.typicode.com) API, which allows you to make free **HTTP** requests to test your application.

### Numpy

The [NumPy](https://numpy.org/doc/stable) library is one of the most important packages to understand when starting to learn Python. This library allows developers to quickly perform a wide variety of numerical calculations. To install NumPy on your computer, follow these instructions:

1. Install NumPy on your computer.

```bash
pip install numpy
```
2. Import NumPy into your working module.

```py
import numpy as np
```
3. Start using the functionalities of NumPy in your code.

```py
array_numeros = np.arange(10)
print(array_numeros) # output: [0 1 2 3 4 5 6 7 8 9]

a = np.array([4, 16, 25])
b = np.sqrt(a) # Square root element-wise ([2. 4. 5.])
```

The **NumPy** library offers a wide variety of functions that allow you to perform advanced mathematical calculations, create arrays, matrices, and much more. Here are some of the most relevant functions:


| Function | Description |
|-----------|-----------|
|`np.array()` | Creates a NumPy array from a list or another iterable object. |
|`np.zeros()` | Creates an array of zeros with specific dimensions. |
|`np.linspace()` | Creates an array with a sequence of evenly spaced numbers in a specified range and number of elements.
|`np.random.rand()` | Creates an array with random values in the range [0, 1] with specified dimensions. |

### Pandas

[Pandas](https://pandas.pydata.org/docs/) is one of the most important libraries in [Python](https://4geeks.com/es/lesson/como-programar-en-python), especially in fields like data science or machine learning [(Machine Learning)](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer). Pandas offers a wide variety of functions for data manipulation and analysis. To download Pandas on your computer, follow these instructions:

1. Install Pandas on your computer.

```bash
pip install pandas
```
2. Import Pandas into your working module.

```py
import pandas as pd
```
3. Start enjoying the features of Pandas.

```py
serie = pd.Series([1, 4, 5, 7, 9])

data_frame = pd.DataFrame({
    "Nombre": ["MacOS", "Windows", "Linux"],
    "Color": ["Gris", "Negra", "Red"]
})

print(serie)
print(data_frame)
```
> output: 
```bash
// Serie output
0    1
1    4
2    5
3    7
4    9
dtype: int64

// Dataframe output
    Nombre  Color
0    MacOS   Gris
1  Windows  Negra
2    Linux    Red
```

If you want to start your career in data science or artificial intelligence, Pandas will be your ally for data cleaning and analysis. This library allows you to read **.csv files**, **Excel** files, **JSON** files, and more

### Matplotlib

![Example of data visualization in matplotlib](https://miro.medium.com/v2/resize:fit:1400/1*EsqDYFK-IzGEAm4FyZP0wQ.jpeg)

[Matplotlib](https://matplotlib.org/stable/index.html) is a Python library used to create high-quality visualizations and graphs. It provides an interface to produce a variety of charts, from simple to complex, that are essential for effective data communication.

To use Matplotlib in your own projects, follow these steps:

1. Install Matplotlib on your computer.

```bash
pip install matplotlib
```

2. Import Matplotlib into your working module.

```py
import  matplotlib.pyplot  as  plt
```

3. You can now start using all the features of Matplotlib.

```py
# Sample data: years and sales
years = [2015, 2016, 2017, 2018, 2019, 2020]
sales = [50000, 60000, 75000, 90000, 110000, 130000]

# Create a line chart
plt.plot(years, sales, marker='o')

# Add labels and title 
plt.xlabel('Años')
plt.ylabel('Ventas')
plt.title('Crecimiento de Ventas a lo largo de los Años')

# Show the chart
plt.grid(True)
plt.show()
```

In this example, we create a mock visualization of the number of sales over the years of a company. Using the `plot()` method, we create the presentation table. Then, with the label and title methods, we create `labels` and the `title` of our table. Finally, we use the `grid()` function to display the grid of our visualization.

## Conclusion

Third-party libraries are an essential tool for any programmer. They provide an efficient way to leverage tested and reliable functionality, speeding up development and improving project quality. Third-party libraries are especially useful in fields like data science or machine learning because they offer a wide range of features that will help you save time and effort when creating your projects. If you want to learn more about the topic, we recommend reading the article [Introduction to Pandas in Python](https://4geeks.com/lesson/intro-to-pandas) on the 4Geeks Blog.

