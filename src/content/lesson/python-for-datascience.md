---
title: "Python for Data Science"
subtitle: "Python is a multipurpose language, in this lesson you will understand how it's used in the datascience world"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "draft"
date: "2022-01-15T16:36:30+00:00"
tags: ["data-science", "python", "pandas", "numpy"]
canonical: ""
---

This lesson is a roadmap on how to learn Python for data science. If you already know Python and have -at least some- experience with the data science libraries Pandas, Numpy, etc. You can skip ahead to the next lesson.

Python is a very diverse language used to build robots, networks, websites, APIs, games, artificial intelligence, and more. Depending on what you are making, the syntax can vary so much that you hardly recognize similarities between codebases.

Don't get me wrong, no matter what you are building, you will be looping, using conditions, logical expressions, filtering, using functions and classes, but you will be doing those things in ways that feel differently. Let me give you an example: 

Many ways to filter colors
If you want to filter a list of numbers with only odd numbers, you can do it like this:

```python
# this is our common list of numbers
numbers = [23,34,5,6,45,34,23,5,45,5,324,23,354,65,564,45,342]

# Filtering with basic python 3
odds = [n for n in numbers if n % 2 != 0]
print(odds)

# Filtering with basic python 3
odds = list(filter(lambda n: n % 2 != 0,numbers))
print(odds)

# Filtering with numpy
import numpy as np
odds = np.array(numbers)
print(odds[odds % 2 != 0])
```

In the example above, the three ways will filter and output the same list of odds numbers, but in the background (at the lowest machine level), things are executing in a very different way.

For this and many other reasons, it is convenient to start learning the Datascience syntax from the beginning.

## Learning Python for DataScience

In the data science world of Python, there is a family of libraries that are on the top of the food chain: Numpy, Pandas, Seaborn, Matplotlib, Scikit, etc. We will be learning each of them during the next couple of weeks while building real-life projects.

### Help function

We will be using A LOT of 3rd party code and functions (from other people); it's better to learn about a python feature called `help()` that will tell you how to use almost anything.

### The commonalities

If you don't know how to code, it's better to forget about data science for a second and start learning Python from scratch: 
What are variables: integer, float, string, null (or None), boolean.

- **Listing**: list, tuple, sequence, matrix, and how to loop or iterate the structures.
- **Conditions**: if-else statement with logical operations for comparisons.
- **Functions**: normal and lambda functions to encapsulate, organize and re-use code.
- **Classes**: Creating custom data structures helps encapsulate, organize, and re-use even more than using classes.

### The approach

Since we are focused on using Python for data science, we will be working with massive amounts of data; I strongly recommend starting your training focusing on exercises and projects about the following:

- Looping an extensive list of data.  
- Filtering a big list of data, removing null values.  
- Mapping lists of values from one format to another.  
- Dealing with matrixes. 
- Ploting data to charts. 

### The libraries

- **Start with Numpy**: because it's the bare bones, all the other libraries either work on top of Numpy or are compatible with it. In addition, Numpy comes with The Array and a series of functions to save you lots of time and processing power for the typical operations when dealing with big chunks of data.

- **Continue with Pandas and Seaborn**: built on top of Numpy, the panda's library incorporates "The DataFrame" object; Simplifying the import, export, and transformation of multidimensional datasets.

- Chart your DataFrame with **Matplotlib**: This library is responsible for the majority of the data visualizations you see in the world of data science: From a simple bar chart to histograms, it allows to use of arrays, data frames, and algebra to create data visualizations. 

- Use statistic functions with **stats**: This library includes the most common statistics functions like mean, std, variance, correlation, etc.

- Create models with **scikit learn**: Simple and efficient tools for predictive data analysis. Built on NumPy, SciPy, and matplotlib.
  

### Performance

When creating algorithms for websites, API's, networks, robots or other applications; You don't necessarily about performace because you can always upgrade your server or your CPU. Obviusly performance it's still an important variable, but you can have a slow website or you can pay a lot more to "speed it up".

On the other hand, when building AI's, performance is a big concern. You could say that "processing power" is the biggest limitation this field has right now. There is so much data and models need so much training that current technology cannot keep up. 

That is why you should know a little about `Big O` and optimizing algorithms for space and time.

### Jupyter vs Python files

Most -if not all- of the python courses about machine learning heavily use Jupyter Notebooks to build and clean your data and run the models. At 4Geeks we don't like this approach much, we prefer to stay working on `.py` files and work on coding editos like VSCode, Pycharm, etc. like software engineers do in all the other fields were python is used.

We like using Jupyter as a communication tool, mainly to tell stories to management, show the strategy and some brainstorming.

### Package Manager and setup environs

If we are not going to be using Jupyter notebooks as much as other datascientis, we need to become very good at setting up Python environments, downloading python packages, using the PIP package manager, etc.

- Pyenv for Python Versions: There are multiple versions of python and you need to get used to switch between versions because some times you are trying to use newer features or maybe old deprecated ones.
- Pip: This is the "package manager" for Python, it allows you to download and use Numpy, Pandas and many other awesome libraries.
- Virtual environment: every project could have a different python version, that is why you need to create virtual enviroments to isolate your projects from each other.
- Pipenv: Is an awsome tool that simplifies the user of PIP and Virtual Env.


### Typical data-science project structure

We will be using a template for our projects called [Cookie Cutter Datascience](https://drivendata.github.io/cookiecutter-data-science/). Using a template is always a good idea to organize your peroject files and workflow. You can read the documentation and watch [this video on how it works](https://www.youtube.com/watch?v=nExL0SgKsDY).
