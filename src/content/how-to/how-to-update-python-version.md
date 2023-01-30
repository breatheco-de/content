---
title: "How to update Python version?"
subtitle: "On this step-by-step guide you'll find how to update python version on all mayor Operating Systems (Windows, MacOS and Linux) making use of Chocolatey, Homebrew and Deadsnakes as well with the option to download and install from python.org"
tags: ["python"]
authors: ["javierseiglie"]
status: "draft"

---

```bash
#On windows Powershell
choco upgrade python -y

#MacOs homebrew with pipenv
pyenv install 3.9.2 

#linux
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.9
```

At this point you should know what is Python and what is its use, but if you want to learn more, you can read this [Introduction to Python](https://4geeks.com/lesson/intro-to-python) so you can refresh the content on your head and find some interesting info.

## Updating Python on Windows OS:

To update Python on a Windows Operating System to the latest, we can choose 2 ways, it's up to you which want you want to follow:

1. Downloading the Python installer of the version we want
2. Making use of Windows Chocolatey, a powerful package manager 

### Update by downloading the Python version

- The installer we'll find it on [python.org](https://www.python.org/downloads/windows/)
- Select `Latest Python 3 Release - Python 3.11.1` (if there's a new version when you read this article, it won't be Python 3.11.1)
- Scroll until you find a table with all the version available and select the one that suits you the best (in our case `Windows installer (64-bit)`)
- Once downloaded run the installer and follow instructions. If there's not a installed Python version already, it'll install this version. If there's a Python version already installed, it'll upgrade it. 
- You can verify your installation/upgrade by opening `CMD` or `PowerShell` terminal and typing `python -V`

```cmd
python -V
#Output: Python 3.11.0
```

For a more in-depth guide regarding this procedure, please head to our step-by-step guide on [how to update python on windows](https://4geeks.com/how-to/how-to-update-python-on-windows) where we cover with pictures of every step.

### Update Python version using Chocolatey Package Manager

Chocolatey Package Manager has become a favorite among Windows users when handling Python versions or adding other software to our System using PowerShell.

#### Installing Chocolatey

- Open the PowerShell as administrator. On your start menu type `powershell` and select `Run as Administrator`

- Install Chocolatey using the following command:
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

- Verify Chocolatey installation. On the `Powershell` terminal, type `choco`.

```powershell
choco
#Expected output: 
Chocolatey v1.2.0
Please run 'choco -?' or 'choco <command> -?' for help menu.
```

### Updating Python with Chocolatey

Having Chocolatey installed in our System, upgrading Python is now as simple as typing:
`choco upgrade python -y`

```powershell
 choco upgrade python -y
 #expected output:
Chocolatey v1.2.0
Upgrading the following packages:
python
By upgrading, you accept licenses for the packages.
python is not installed. Installing
Progress: Downloading python3 3.11.0... 90%
```

Let's verify that the install and upgrade was successful with the command we used earlier

```powershell
python -V
#Output: Python 3.11.0
```

## Updating Python on MacOS

Even if almost the entire Python community has moved to Python 3.X, MacOS still comes with version 2.9. To use the latest Python version you'll need to install it manually.

### Checking python version on MacOS:

Let´s first check if your System is indeed using the version 2.9 or a later one. 

- Open the terminal. You can find it on MacOs spotlight `(command + space)` and typing `terminal`
- type `python`

If you receive a message like this: 

```bash 
WARNING: Python 2.7 is not recommended. This version is included in macOS for compatibility with legacy software. Future versions of macOS will not include Python 2.7. Instead, it is recommended that you transition to using 'python3' from within Terminal.```

It means that you need to update your python version ASAP, so let´s get into it.

There are 2 options to update Python on MacOs:

1. Download and install the version from python

2. Use Homebrew to intall pyenv package manager and then install the Python version(s) you want

### Update by downloading

- Head to [python.org](https://www.python.org/downloads/macos)
- Select the latest version (`Latest Python 3 Release - Python 3.11.1` latest version when writing this article ) or scroll until you find the version you want.
- Once download finishes, run the installer
- Verify the installation opening the terminal and typing the following command `python -V`

### Getting ready to upgrade with Homebrew:

To handle our Python development enviorments and Python version we use `Homebrew`, a powerfull package manager for all Mac Operating Systems.

- Install homebrew with the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Most probably, you´ll be prompted for `sudo` (Super User-level access) and to grant it, you´ll need to write your password. Keep in mind, what you write, will not be displayed, not even with `*`.
- Confirm installation with `Return` (Enter) or cancel with any other key.

Now that we installed Homebrew on our System, we´ll install `pyenv` to manage our Python versions more efficiently.

### Installing pyenv

What `pyenv` will allow us to do, is to switch between different Python versions (remember, Python 4 will come out soon, yay!)

- Open a terminal as we did earlier
- `brew install pyenv`

It´s done! We now have pyenv installed and now we'll make a new Python installation or upgrade it.

### Installing/Updating Python on pyenv 

Thanks to pyenv we now can install Python with a simple one liner:

```bash
pyenv install 3.9.9
```

It´s not mandatory to use version 3.9.9, you can instead pass any version you wish to install.

### Installation errors

If you receive an error regarding `C compiler cannot create executables` most probably is XCode related and if you upgrade your MacOS to Big Sur, then probabilities goes higher.

Fixing this problem ain´t a big problem, but will take as much time as your internet speed will allow it. 

- Download the latest version of [Apple's Xcode here](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- Re-run the previous commands `pyenv install 3.9.9` and it should work just fine

### Set up your MacOS path for pyenv (Bash)

To use our pyenv we need to update our `.bash_profile` with the following commands:

#### With `/bin` directory
-  ```bash 
 echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
 ```
- ```bash 
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
 ```

#### Without `/bin` directory
If your System doesn't have a `/bin` directory in the `pyenv_root` folder most probably, you only have `/shims` directory. If it´s the case, you'll need this commands instead

- ```bash
`echo 'export PATH="$PYENV_ROOT/shims:$PATH"' >> ~/.bash_profile`
```
- ```bash
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bash_profile
```

#### Reseting the terminal to get the changes

We need to reset the terminal in order for all this changes to be accesible.

To reset the terminal, just type:

```bash
reset
```

## Update Python on Linux

We´ll be using deadsnakes ppa (Personal Package Archives) that'll allows us to have multiple python versions installed on our System at the same time.

- First we need to inlude deadsnakes to our repositories trusted list
```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update
```

- After installation finishes, we'll be able to install any Python version we want with the following command
```bash
sudo apt install python3.11.1
```

- To run python, use the following 
```bash
python3.11.1
```

If you want to grow as a developer you can check this [4Geeks](https://4geeks.com/) Lesson titled [Learn to Code with Python](https://4geeks.com/lesson/learning-to-code-with-python). Hope you enjoy the reading and keep on the Geek side!
