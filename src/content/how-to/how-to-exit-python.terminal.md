---
title: "How to exit Python in terminal"
subtitle: "Exiting Python from the terminal can be achieved in 3 different ways. The exit and quit commands will exit python and you can as well exit by using keyboard shortcuts as ctrl+z and ctrl+d on Windows and Unix Based Systems respectively"
tags: ["python", "exit"]
date: "2023-02-06T16:36:30+00:00"
authors: ['Javier Seiglie']
status: "draft"

---

```python
exit()
```

## Using Exit()

To exit Python on terminal, can be achieved in 3 ways:

### Exit()

The `exit()`command terminates Python in a safe way and stores your data correctly. It's important to write the `()` after the word, or Python could understand that you want to know what `exit` is and return that is a function and ask for you to confirm. 

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

Keyboard shortcuts are a common use among us developers because they save time and make you work faster. Here you have the shortcuts for Windows and Unix Systems (Linux and MacOs).

#### Using ctr+z on Windows

As stated before, on the message that you receive when passing `exit` without the `()`, `control + z` will exit Python from the terminal as well. 

Before pressing `ctr+z` to exit Python just make sure your Python terminal is the selected windows, and then press `ctr`, hold it down and press `z` and then `Return`.

#### Using ctr+d on MacOs and Linux

On Unix systems such as MacOs or Linux, `ctr+z` will not exit Python on the terminal. 

The keyboard shortcut for exiting Python on this systems would be `ctr + d` and on these systems you won't need to confirm with `return` because their terminal will receive and execute this command.

We will do as we did with the Windows shortcut. Press and hold `ctr` and then press `d` to exit Python from the terminal making sure the terminal is the selected window.

Hope you enjoy the reading and keep on the Geek side!
