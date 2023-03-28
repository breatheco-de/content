---
title: "The Command Line (a.k.a: The Terminal) "
subtitle: "Developers spend hours every day using the command line (a.k.a: The Terminal). Embrace reality and become more powerful than ever before."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["the command line","the terminal"]
status: "published"

---

> :point_up:  Windows users don't use the same terminal commands, but you should learn and practice them anyway because they are heavily used when publishing your apps on any web hosting, Gitpod, Codespaces, Cloud9, etc. You can use [Git SCM](https://git-scm.com/downloads) to create a similar terminal on your computer.

## Why do Developers love the Command Line?

At first, everybody hated the command line. After years of experience, it became an acquired taste.

But why do developers like it? Well, the list is infinite, but here are a few important reasons:

+ If you don’t master the command line you won’t be able to use any of these: GIT, MySQL, Webpack, Node.js, Grunt, Vagrant, Babel, React, Angular, Apache, etc.
+ As a developer, it’s the one thing you need to have available. Computers don’t come with Atom, Sublime Text (or any other fancy IDE). Sometimes, like production servers, you are not allowed to install anything and **the system does not even have a visual interface**, just the command line.
+ It is super powerful, you can do a lot more in a lot less time! For example, bulk delete, rename, find a file, edit a file, etc.
+ It forces you to use the keyboard. Since you cannot use the mouse, it makes you faster.  You make fewer mistakes and the environment is exactly the same on every computer.

## How does it work?

The console is really simple: it’s a black screen that’s always expecting a *command*.  After you type the desired command and press the `return` key, the computer executes it and shows some feedback with the resulting output on the screen. A simple Question <> Answer interface.

But, what is a *command*?

It is something like "print", "show", or "delete" but abbreviated. For example, if you want to tell the console to list all the files in a particular directory, you have to use the `ls` command like this:

```bash
ls -l /path/to/directory
```

All commands have three parts: the **utility**, the **flags**, and the **arguments**. The utility always comes first. The other two parts have different rules, and, depending on which command you are using, you may not have to use any flags or arguments at all.

In this particular case, we use the `-l` "flag" to specify that we want a "long" version of the list of files (with more details).

The last thing we have to add is the "argument." In this case, the "argument" will be the path of the directory from which we want to list the files.

## What can you do in the Terminal?

Your computer has files, directories, and applications. Your command line is able to deal with all three of them. Use commands to move within the files and directories (like the `cd` command).  Every application that you install comes with a set of commands that become available at the moment you install the app (like the GIT command).

## Here is how the File System looks in a Visual Interface vs the Terminal:

![the command line the terminal](https://github.com/breatheco-de/content/blob/master/src/assets/images/182ea93c-9d7d-4c8d-8153-9c1756d8cd1f.png?raw=true)

There are 4 important things to notice here:

+ You can use one dot `.` to refer to all the files and folders in the hierarchy.
+ You can also use two dots `..` to refer to the parent directory.
+ You can use the forward slash `/` to navigate further down in the hierarchy of directories.
+ Hidden files: Usually, a file has a name and an extension *(filename.extension)*.  If a file has no name but only an extension, it will by default be hidden in the visual interface.

## Commands to Work with the File System:

Here is a small selection of the most used commands by a software developer.

### The ls command

**The list command**

The ls command is used for listing all the files and directories that form the current position.

```bash
ls -l ./applications
#shows the files and folders inside "applications" 
#the -l is for asking more detailed output information on the files.
```

### The cd command

**The change directory command**

Travel between two different directories.

```bash
cd /path/to/directory
```

### The mv command

**The move command?**

Move a file to another folder or directory.  Just like dragging a file located on a PC desktop to a folder stored within the "Documents" folder.

```bash
mv /path/to/file.txt /path/to/destination/file.txt
```

### The rm command

**The remove command**

This deletes files (not directories).

```bash
rm file1.txt file2.txt file3.txt file4.txt
#removes these four files 

rm -r dbstore/
#deletes all the files and sub-directories recursively within the "dbstore" directory.
```

### The mkdir command

**The make directory command**

Makes a new directory.  Just like making a new directory within a PC or Mac desktop environment, the mkdir command makes new directories in a Linux environment.

```bash
mkdir newdirectoryname
#creates newdirectoryname in the current directory. 

mkdir path/of/new/newdirectoryname 
#creates newdirectoryname inside /path/of/new/
```

### The rmdir command

**The remove directory command**

It deletes a directory (not files).

```bash
rmdir mydirectory
#removes mydirectory if it's in the current directory. 

rmdir path/of/targetdirectory/mydirectory
#removes mydirectory from "targetdirectory" 
```

> :point_up: It will only remove empty directories, to empty all directory files use the rm -r command (-r flag forces the remove command to delete the directory and all the files within it). Pro-tip: you can use `rm *` to delete all of the files inside a directory simultaneously; use with caution.

### The cp command

**The Copy File command**

Don’t confuse this command with the clipboard copy functionality – it has nothing to do with it.

`cp` will copy an entire file and create a new one with whatever name you decide it should have.

```bash
cp path/to/file.ext path/to/new/file.txt
#copy file.txt and create a new file.txt with the same content.
```

### The find command

**The find command**

Finds a file in the given directory with the given specifications.

```bash
find / -name game
#finds all files containing the exact name "game" that is inside the root folder. 

find . -name *.mp3
#finds all files containing the extension "mp3" within the current directory and its parent.
```

## Tips & Tricks

These will help you save time and make fewer mistakes when typing:

+ To cancel a command that is being executed, press `ctrl`+`c`
+ To autocomplete a file or folder name, use the `tab` key.
+ To repeat any command you have used in the past, use the `up` arrow, and it will show you each command, one by one.
+ To go to the home user folder, use the `~` key like this: `cd ~`
+ Use the `clear` command to "clean" the current console (it is just a scroll, but a very useful one).

## Editing Files in the Terminal:

This is one of the things that you cannot avoid doing in the terminal.  As a developer, you will have to edit files in the terminal more often than you think. That’s why you’d better be prepared to use either the [VIM Application or the Nano Application.](https://askubuntu.com/questions/726669/difference-between-nano-and-vim)  We will talk about Nano and its commands (yes, here the text editor opens inside the command line and runs using commands).

### The nano command

**It’s not really a command, actually the name of "Nano" is a text editor application.**

When working with the command line, sometimes you will have to open a file to review it and even change it.  For that, we use the "nano" command.  Nano basically opens a text editor within the command line.

```bash
nano path/to/the/textfile.txt
#opens a text editor to start editing the content of textfile.txt 
#if textfile.txt does not exist, it will create it!
```
When nano opens, it will show a top bar with the current version of the nano application; the name of the file being edited; and, a status telling you if the files were modified or not.

At the bottom you will see the most often used commands in nano such as: exit, where is, get help, etc.

![the command line the terminal](https://github.com/breatheco-de/content/blob/master/src/assets/images/6128e9f7-b460-4b10-80e4-34057b7d4df9.png?raw=true)

> :point_up: This website has a ton of great mini-challenges to help you practice the command line: <br>https://cmdchallenge.com/
