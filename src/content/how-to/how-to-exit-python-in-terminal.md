---
title: "How to exit Python in terminal"
subtitle: "Exiting Python from the terminal can be achieved in 3 different ways. The exit and quit commands will exit Python and you can as well exit by using keyboard shortcuts such as ctrl+z and ctrl+d on Windows and Unix Based Systems respectively"
tags: ["python", "exit"]
date: "2023-02-06T16:36:30+00:00"
authors: ['Javier Seiglie']
status: "draft"

---

In Python, there are a few ways to exit the terminal. We are going to show you the **exit()** method because it doesn't prompt for confirmation and the method name is self-explanatory.

Type the following on your terminal:

```python
exit()
```

## Other ways to exit the python terminal

But there are other ways to achieve this:

### Exit()

The `exit()` command terminates Python in a safe way and stores your data correctly. It's important to write the `()` after the word, or Python could understand that you want to know what the `exit` statement means.

```python
Use exit() or Ctrl-Z plus Return to exit
```

This is the reason why we're emphasizing the presence of the `()` at the end.

The syntax is quite straight-forward:

```python
exit()
```

### Using quit()

The command `quit()` follows the same syntax as `exit()`. You'll need to add the `()` at the end or you'll receive the same message as before.

```python
Use quit() or Ctrl-Z plus Return to exit
```

### Using shortcuts

Keyboard shortcuts are common use among us developers because they save time and make you work faster. Here you have the shortcuts for Windows and Unix Systems (Linux and MacOS).

#### Using CTRL+z on Windows

Before pressing `ctrl+z` to exit Python just make sure your Python terminal is the selected windows, and then press `ctrl`, hold it down and press `z` and then `Return`. You will see a message:

```bash
>>>
[1]  + 54212 suspended  python
```

#### Using CTRL+d on MacOS and Linux

On Unix systems such as MacOS or Linux, `ctrl+z` will not exit Python on the terminal. 

The keyboard shortcut for exiting Python on these systems would be `ctrl + d` and on these systems you don't need to confirm with `return` because their terminal will receive and execute this command immediately.

We will do as we did with the Windows shortcut. Press and hold `ctrl` and then press `d` to exit Python from the terminal making sure the terminal is the selected window.

You can read more related topics at [4Geeks](https://4geeks.com/) like for example [how to update python in terminal](https://4geeks.com/how-to/how-to-update-python-in-terminal). Hope you enjoy the reading and keep on the Geek side!
