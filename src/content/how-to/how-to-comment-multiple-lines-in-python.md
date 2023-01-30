---
title: "How to comment multiple lines in Python"
subtitle: "In Python, the # symbol is used for commenting a single line of code. It´s possible to use this character to comment multiple lines, but you'll need to put one by one. If we want to comment multiple lines in a more simple way, then we use the 'docstring' method."
tags: ["python"]

---

```python
'''
Multi line comment 
with docstring method
'''
```

## Commenting one line

The standard way to comment a line of code on python will be with the `#` char. 

```python
#print("I won't be seen")
print("But I will!")

#Output-> Bit I will!
```

## Commenting more than one line using `#`

As you may already be thinking, if by using the `#`char we comment one line, we can spawn them to comment more lines? and the answer is yes! You can do just that.

```python
#print("I won't be seen")
#print("If only I wouldn't have that numeral in front, I would be displayed")
print("But I will! I'm still the best")
#Output-> Bit I will! I'm still the best
```

## Commenting multiple lines with docstring method:

Docstring is the way to go if you want to comment a block of code on Python, since we are missing the `/**commented text**/` found on other languages as JavaScript, C#, etc.

```python
'''
print("I won't be seen")
print("If you use the docstring method, I wont be displayed!")
'''
print("But I will! I'm still the best")

#Output-> Bit I will! I'm still the best
```

### In `docstring` indentation is still important!

If you thought that you could scape indentation because you're commenting, you're wrong. Indentantion is still pretty much needed to prevent errors.

```python
def sumItGood(num1, num2):
"""
This function returns
the sum of 2 given numbers
"""
    return num1 + num2
print(addNumbers(2, 3))
```
This example will throw `IndentationError: expected an indented block` becase we're not following the indentantion rule.

If we apply the correct indentation to our code, then we'll receive the expected output of `5` and happily commented the code we wanted.

```python
def sumItGood(num1, num2):
	"""
	This function returns
	the sum of 2 given numbers
	"""
    return num1 + num2
print(addNumbers(2, 3))
#Output-> 5
```

## Commenting multiple lines on different IDEs:

IDE makes our life as developers much easier with keyboard shortcuts and there's one that helps us to comment multiple lines with a single command

- Visual Studio: Press `Ctrl+K` then `Ctrl+C`
- Spyder IDE: `Ctrl+1`
- IDLE: `Alt+4`
- Jupyter Notebook: `Ctrl+/`
- PyCharm: `Ctrl+⇧ Shift+/`

**Note:** These commands will place a `#` char on the beggining of all the lines selected to comment, will not insert a `docstring`.

Hope you enjoy the reading and keep on the Geek side!