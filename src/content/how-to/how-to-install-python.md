---
title: "How to install Python?"
subtitle: "Learn how to install Python on your computer easily. Discover the necessary steps to start programming with this popular programming language."
tags: ["python", "ubuntu", "linux", "MacOS"]
authors: ["DF27ARTS"]

---

## How to install Python?

Python is one of the most used programming languages in the world, this language allows you to create back-end applications with frameworks such as [django](https://docs.djangoproject.com/en/4.2/) or [FastAPI](https://fastapi.tiangolo.com/), create Machine learning algorithms with [Tensorflow](https://www.tensorflow.org/?hl=es-419) or even create user interfaces on the front-end with technologies such as [ReactPy](https://reactpy.dev/docs/index.html).

This language is undoubtedly one of the most used in the programming world because it is quite versatile and easy to learn. In this article, we will see how to install or update this language in different operating systems such as Windows, MacOS, and Linux.

## How to install Python on Windows?

There are two ways to install [Python](https://4geeks.com/lesson/how-to-code-in-python) on your Windows computer, the first is to install the **Ubuntu** operating system and then with the help of this install Python, the second way is to install Python in the traditional way from the official Python page.

### 1. Install Python with Ubuntu

To install Python with **Ubuntu** operating system first we need to activate **WSL** (Windows subsystem for Linux) on your computer, this subsystem allows you to run Linux operating system on your Windows computer.

#### Install WSL 2 for Windows 10

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/ilKQHAFeQR0" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Steps to start the installation

> If you watched the above video completely you can skip to the last step.

1. To activate **WSL** from the console, press the key combination `windows` + `x` and then select **Windows PowerShell** or **Terminal (administrator)** this will open the **Powershell** terminal then in this terminal run the following command to enable the Linux subsystem in Windows: 

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux  
```

2. Next, open the [microsoft](https://apps.microsoft.com/store/detail/ubuntu/9PDXGNCFSCZV?hl=us-mx&gl=mx) store (Microsoft Store) and download the latest version of **Ubuntu**, this may take a few minutes, once the installation is finished it will open the **Ubuntu** terminal and ask you to create a username and password, enter your details and save your password because you will need it later to install Python.

3. Once you have the **Ubuntu** operating system installed on your computer, open the **Ubuntu** terminal and run the following command to install or update Python.

```bash
sudo apt update && sudo apt install python3
```

> When executing this command you will be prompted for the password you entered when installing **Ubuntu**, so enter your password and press `Enter`. This will start the Python 3 download.

4. Now that you have installed Python, verify that you have the latest version of Python 3 installed by entering the following command:

```bash
python3 --version
```

### 2. Install Python from the official website

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/K0P7nDfXkzo" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Steps to start the installation

1. To install Python in the traditional way go to the [python official website](https://www.python.org/downloads/) and then go to the **Downloads** section, this page will detect your default operating system and will offer you the latest stable version of Python available for download. 

2. Then run the downloaded file and it is important that you select the two options:
   - [x] Install launcher for all users (recommended)
   - [x] Add Python 3.11 to path

> By adding Python 3.11 to the PATH variable, you will be able to run Python commands and scripts from any location on your operating system without having to provide the full path to the Python executable.

3. Once the installation is complete, verify which version of Python you have installed with the command:

```bash
python --version
```
> When you run this command you should see the latest version of Python available, for example: `Python 3.11.4` is the latest version available at the time of writing this article, 08/07/2023.

## How to install Python on MacOS?

The MacOS operating system usually already has a version of Python installed by default, if you open the console and check your installed Python version with the `python --version` command it should look something like this: `Python 2.7.1`. Even if you already have a version of Python installed I recommend that you install the latest version of Python available so you will have access to the latest features of this language.

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/m51cSDeeEeU" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Steps to start the installation

1. To install Python go to the official [python](https://www.python.org/downloads/) website and click on the (Download Python) button, this page will detect your operating system by default and will offer you the latest version of python available for your operating system.

2. Next, run the file you just downloaded, click the **Continue** button on all windows and then the **Install** button, it will probably ask you for your password, after typing your password press `enter` and it will start downloading Python to your computer.

3. Finally, verify that you downloaded the latest version of Python available for Mac, to verify the version of Python use the command:

```bash
python3 --version
```

## How to install Python on Linux?

Some Linux distributions like **Ubuntu** and **Fedora** may have a version of Python installed by default but not all Linux distributions have this feature, in any case if your Linux operating system already has Python installed it is likely to have an outdated version installed so I recommend that you download the latest version of Python available for linux so you will have access to the latest features of this language.

<iframe 
    width="650" 
    height="350" src="https://www.youtube.com/embed/3aUmRIZAbA8" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

#### Steps to start the installation

1. To install Python on Linux, open a terminal with the keyboard combination `Ctrl` + `Alt` + `T` and run the following command to check if you have a previously installed version of Python:

```bash
python3 --version
```

2. Then, use the following commands to install or upgrade Python on your computer:

* Ubuntu and Debian:
```bash
sudo apt update
sudo apt install python3
```

* Fedora:
```bash
sudo dnf install python3
```

* Arch Linux:
```bash
sudo pacman -Sy python
```

3. Finally check which version of Python you just installed with the command: 

```bash
python3 --version
```

Congratulations! You have Python installed on your operating system, now you can start running your first lines of Python code. I hope you find the examples and video tutorials in this article useful, have fun creating the applications of the future with the help of Python. If you want to learn more about this programming language I invite you to follow these [Python exercises for beginners](https://4geeks.com/interactive-exercise/python-beginner-exercises) on [4Geeks](https://4geeks.com).
