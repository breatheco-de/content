---
title: "How to Install Pandas in Python?"
subtitle: "Learn how to easily and quickly install Pandas in Python. Follow our step-by-step guide to correctly set up Pandas."
tags: ["python","pandas", "machine-learning"]
authors: ["DF27ARTS"]

---

The [Pandas library in Python](https://4geeks.com/lesson/intro-to-pandas) is a very important resource for a developer when working with a large amount of data in Python. In this article, we will see how to install this library step by step on Windows, MacOS, and Ubuntu (Linux). If you are interested in a [👆🏽 Interactive tutorial on Pandas python](https://4geeks.com/interactive-exercise/pandas-exercises-tutorial).

## Command to install pandas:

```bash
pip install pandas
```

Once the installation is complete, verify that pandas was installed correctly by running the following code in an integrated development environment like [visual studio code](https://code.visualstudio.com/docs).

```py
import pandas as pd
print(pd.__version__) # Output: 1.5.2
```

> The version of pandas may vary, however, it will look similar to this format.

Alternatively, if you want to know more information, you can run the following command in the terminal which will show you more detailed information about this library.

```bash
$ pip show pandas
```

> (output) in the terminal:


```bash
Name: pandas
Version: 1.5.2
Summary: Powerful data structures for data analysis, time series, and statistics
Home-page: https://pandas.pydata.org
Author: The Pandas Development Team
Author-email: pandas-dev@python.org
License: BSD-3-Clause
Location: C:\Users\57320\AppData\Local\Programs\Python\Python311\Lib\site-packages
Requires: numpy, numpy, python-dateutil, pytz
```

This information may vary depending on the version of **Pandas** you have installed and in which folder you have installed it.

## More details on How to Install Pandas?

To install Pandas, you must first ensure that you have **Python** and the **pip** package manager installed on your computer. To do this, you must open a terminal, then execute the following commands:

```bash
$ python --version # checks if you have Python installed

$ pip --version # Checks if you have the pip package installed
```

If you do not yet have [Python](https://4geeks.com/lesson/intro-to-python) installed, go to the [install python](https://www.python.org/downloads/) page, choose the version of Python you want to install, and follow the instructions.

Normally, the **pip** package is already installed with Python, but if for some reason it is not installed or you want to update it, you can do so with the following commands: 

```bash
$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
$ python get-pip.py
```

Now that you have confirmed that you have **Python** and the **pip** package installed correctly, you can install the **Pandas** library on your computer by writing the following command in the terminal:

```bash
$ pip install pandas
```

Once the installation is finished, you can verify that it was installed correctly with the command:

```bash
$ pip show pandas
```

## What is Pandas in Python?

Pandas is a Python library that allows you to analyze and manipulate data. This library is widely used in Python development in areas such as data science, [Machine learning](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer), artificial intelligence, among many others.

One advantage of Pandas is that you can integrate it with other Python libraries like NumPy. The integration of Pandas with NumPy allows you to perform data analysis and advanced mathematical operations along with data visualization more efficiently.

## How to Update the Version of Pandas?

To update the Pandas library on your computer, you can do so with a very simple command, no matter if your operating system is **Windows**, **MacOS**, or **Ubuntu** (Linux). You can use the same command to update Pandas on any operating system.

To update **Pandas**, you must first open a terminal. Below is how to do it depending on your operating system.

```
> Windows
Press the [ windows + R ] keys and then type "cmd"

> MacOS
Press the [ command + space ] keys and then type "Terminal"

> Ubuntu (linux)
Press the [ Ctrl + Alt + T ] keys
```

Once you have opened the terminal, type the following commands:

```py
#

 Verify your current version of pandas, example: 1.5.2
pip show pandas

# Update pandas on your computer
pip install --upgrade pandas

# Verify your updated version of pandas, example: 2.0.2
pip show pandas
```

With the command `pip install --upgrade pandas`, you will update **Pandas** on your computer to the latest stable version available. Now you will be able to access the latest features available in this library.

## Conclusion

In conclusion, pandas is a very useful library when working with data in Python. This library allows you to analyze and manipulate complex data and you can integrate it with other Python libraries like NumPy for data analysis and visualization. It is a very useful tool in development areas such as Data Science, Machine Learning, and basically for any program that works with a large amount of data in Python.

If you are interested in learning more about how you can use the **Pandas** library in Machine Learning, I recommend visiting the tutorial on [pandas for machine learning](https://4geeks.com/interactive-exercise/pandas-exercises-tutorial), where you will find very useful resources and explanations with code examples and video tutorials that will help you better understand this library and learn to use all the most important features it offers.