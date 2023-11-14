---
title: "How to read a file in Python?"
subtitle: "Learn how to read files in Python and master data manipulation. Discover how to access and process information from different sources - get started today!"
tags: ["python", "object-oriented-programming"]
authors: ["DF27ARTS"]

---

Python offers a wide variety of structures that allow you to save information such as [Dictionaries](https://4geeks.com/lesson/what-are-python-dictionaries) or [Lists](https://4geeks.com/lesson/what-is-a-python-list), however, if the application is closed, that information is lost. To prevent this from happening, we can make use of files to save the information so that we can access it again. Next, we will see a short example of how to read the information from a `txt` file.

#### test.txt

```txt
Hello, this is an example file.
We are learning how to read files in Python.

It's exciting!
```

#### index.py

```py
with open("test.txt", "r") as file:


    print("Read all lines in a file:\n")
    print(file.read())
```

> code output:

```bash
Read all lines in a file:


Hi, this is a sample file.
We are learning to read files in Python.

¡It’s exciting!
```

In this example, we want to read the information stored in file `test.txt`, to do this, we can use the Python `open()` method, this method receives two parameters, the first one is the name of the file we want to open and the second one is the way we want to open it, in our example `"r"` (read). Then we use the method `read()` to print the information on the console.

## How to read the contents of a file?

As said before, to read the content of a file we need the [Python](https://4geeks.com/lesson/how-to-code-in-python) `open()` method, this method receives two parameters, the first one is the name of the file we want to open, and the second one is the way we want to open the file. The second parameter can receive different values; in the following table you can see the most relevant ones with a small description of each:


| Value | Description                                                                                                                                                     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `"r"` | Opens the file in read mode. You can read the contents of the file, but you cannot modify it or add content to it.                                    |
| `"r+"`| Opens the file in read/write mode. You can read and modify the contents of the file.                                                              |
| `"w"` | Opens the file in write mode. If the file already exists, its content will be deleted and new content can be written, and if the file does not exist, a new one will be created. |
| `"w+"`| Is similar to `"r+"` but unlike this one, it creates a new file if it does not exist and if the file already exists and has information, it removes all the information from the file and adds the new one. |
| `"a"` | Opens the file in attachment mode. If the file already exists, you will be able to add content to the end of the existing information. If it does not exist, a new one will be created. |
| `"a+"`| Opens the file in attach and read mode. You can read and add content at the end of the file.                                                    |
| `"x"` | Opens the file in create mode. Creates a new file for writing, but if the file already exists, it will throw an error.                                    |
| `"x+"`| Opens a file in create and read/write mode. Similar to `"w+"`, but throws an error if the file already exists.                                         |
| `"b"` | Binary file mode, used in conjunction with other modes such as `"rb"` (read binary) `"wb"` (write binary).                                             |

The following is an example of how to read a `txt` file and some of the most commonly used methods.

> Note, in these examples, we will use the syntax `with open(file_name, read_mode) variable_name` since this syntax takes care of closing the file automatically once we have finished working with it.

#### test.txt

```txt
This is a test text.
We will learn how to use the readline() method to read only one line of a file,

and we will also learn how to use the read() method to read all the lines of the file.
```

#### index.py

```py
with open("test.txt", "r", encoding="utf-8") as file:
    print("File in line 1: ", file.readline())
    print("File in line 2: ", file.readline())

    print("--------------------------------------")
    print("All the lines of the file:")
    file.seek(0)
    print(file.read())

    print("\n--------------------------------------")
    print("Extract all the lines of the file in a list:")
    file.seek(0)
    data = file.readlines()
    print(data)
```

> Code output:

```bash
File in line 1:  This is a test text.
File in line 2:  We will learn how to use the readline() method to read only one line of a file,

--------------------------------------
All the lines of the file:
This is a test text.
We will learn to use the readline() method to read only one line of a file,

and we will also learn how to use the read() method to read all the lines of the file.

--------------------------------------
Extract all lines of the file in a list:
[
    'This is a test text.\n',
    'We will learn how to use the readline() method to read only one line of a file,\n',
    '\n',
    'and we will also learn how to use the read() method to read all the lines of the file.'
]

```

The contents of a file can be read with several Python methods, in this example we see the three most relevant methods, the method `readline()` reads only one line of the file, if you call it three times in a row then you will have the first three lines of the file, you can also pass an integer as a parameter that tells it how many characters to read, for example if you pass **4** as parameter `readline(4)` will return the text "This" because those are the first 4 characters of the first line. The method `read()`shows all the lines of the file and the method `readlines()`returns a list with all the lines in the file.

## How to modify the content of a file?

To modify the contents of a file, the Python `open()` method offers several alternatives, here are some examples of how to modify the contents of a file `txt`.

Assuming the following text file, `test.txt`

```txt
Earth, our blue planet, is a haven of life in the vast cosmos. Oceans and continents intertwine in a dance of biodiversity. Mountains rise while valleys spread out, creating diverse landscapes.
```

We will see two of the most relevant examples of how you can modify this file. For the first example, we will use the `open()` method and we will pass as a second parameter the value of `"w"` (write) which allows you to modify the original file but removes the previous values. For the second example, we will use the value of `"a"` (append) which allows you to modify the file without the need to delete its previous content.

### Example with the value of "w" (write)

```py
with open("test.txt", "w", encoding="utf-8") as file:
    new_line = "\nThis is a new line of text added to the test.txt file"
    file.write(new_line)
```

With the execution of the above code, the file `test.txt` would look like this:

```txt
This is a new line of text added to the test.txt file
```

To modify the contents of a file we can use the method `write()` of Python, this method receives as parameter the text with which you want to modify the file, in this example, we make use of `open()` method and pass as a second parameter the value of `"w"`, this value allows you to modify the content of a file, but before adding the new content, it removes the one that the file previously had.

### Example with the value of "a" (append)

```py
with open("test.txt", "a", encoding="utf-8") as file:
    new_line = "\n \nThis is a new line of text added to the test.txt file."
    file.write(new_line)
```

When executing the above code, the `text.txt` would look like this:

```txt
Earth, our blue planet, is a haven of life in the vast cosmos. Oceans and continents intertwine in a dance of biodiversity. Mountains rise while valleys spread out, creating diverse landscapes.

This is a new line of text added to the test.txt file
```

In this example, we again make use of the Python `open()` method but this time we pass as a second parameter the value of `"a"` which allows you to modify the contents of a file, but unlike the `"w"` value, this adds the new content to the end of the existing content. These two values are very important and you can use them depending on the task you need to perform in the file, remember that adding the symbol `"+"` at the end of each of these values `"w+"`, `"a+"` you will be able to read and write to a file.

## How to use a txt file to store data?

`txt` files can be used to store information such as a list of dictionaries with any type of information. Here is an example of how to use a `txt` file to store the information of three test users.

### Add a list of dictionaries to a txt file

To be able to enter a list of dictionaries in a `txt` file first we need to convert it to a `json` (JavaScript Object Notation) datatype. For this we will use the `json` module (Check out this article to remember how to use the [modules in Python](https://4geeks.com/lesson/python-modules).

```py
import json

data = [
    {"name": "Thomas", "lastname": "Smith", "age": 35},
    {"name": "Jonathan", "lastname": "Smith", "age": 53},
    {"name": "Jane", "lastname": "Watson", "age": 29}
]

with open("test.txt", "w+", encoding="utf-8") as file:
    json.dump(data, file, indent=4)
```

When executing this code, the file `test.txt` should look as follows:

```txt
[
    {
        "name": "Thomas",
        "lastname": "Smith",
        "age": 35
    },
    {
        "name": "Jonathan",
        "lastname": "Smith",
        "age": 53
    },
    {
        "name": "Jane",
        "lastname": "Watson",
        "age": 29
    }
]
```

In this example, we use the `json` module and the `dump()` method to convert the dictionary list into a file of type `json` and save it to the `test.txt` file, the `dump()` method receives three parameters, the first parameter is the information that you want to save in the `txt` file, this parameter is mandatory. The second parameter is the variable `file` which tells the method where to save the information, this parameter is also mandatory. The third parameter is the variable `indent=4` which tells the method how to format the information inside the `txt` file, this parameter is optional.

### Read the file and convert it back to a list of dictionaries

To read the `txt` file and convert the information back into a list, we also need to use the `json` module, this module has a method called `load()` which converts information of type `json` back to a list of dictionaries, as shown in the following example:

```py
import json

data = [
    {"name": "Thomas", "lastname": "Smith", "age": 35},
    {"name": "Jonathan", "lastname": "Smith", "age": 53},
    {"name": "Jane", "lastname": "Watson", "age": 29}
]

with open("test.txt", "w+", encoding="utf-8") as file:
    # The dump() method enters the information into the txt file.
    json.dump(data, file, indent=4)

    # The load() method reads the information from the txt file and converts it back into a list of dictionaries.

    file.seek(0)
    recovered_data = json.load(file)

    print("Users information: ", recovered_data)
```

> Code output:

```bash
Users information:  [
    {'name': 'Thomas', 'lastname': 'Smith', 'age': 35},
    {'name': 'Jonathan', 'lastname': 'Smith', 'age': 53},
    {'name': 'Jane', 'lastname': 'Watson', 'age': 29}
]
```

The `load()` method receives as parameter the variable `file` that tells which file to read and convert back into Python code, this method returns the user information that is stored in the variable `recovered_data`, finally we simply print the results in the console.

## Conclusion

File manipulation is an essential skill in programming, in Python we can manipulate any type of file whether it is a `txt` file, a `json` type file, etc... In this article we have explored how to read and modify files with the help of the `open()` function of Python. We also saw how to add and modify more complex data structures such as a list of dictionaries.

I hope you found this article useful and that it has helped you to better understand how to manipulate files with the help of Python methods,

remember to practice as much as you can and create your own applications to reinforce the knowledge learned in this article.

¡Enjoy learning how to manipulate files with the help of Python! 😉👋
