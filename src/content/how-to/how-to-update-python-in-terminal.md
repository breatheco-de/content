---
title: "How to update Python in Terminal?"
subtitle: "In our step-by-step guide on how to update Python in terminal, we explore the most straight forward methods to successfully update Python version in Linux, MacOs and Windows systems"
tags: ["python","terminal"]
authors: ["javierseiglie"]
status: "published"

---

In order to update python verion on the terminal, you can use these commands depending on your operating system:

```bash
#Linux
sudo apt update 
sudo apt install python3.11

#MacOS
brew install python
```

Here is a detailed guide about [how to update python version](https://4geeks.com/how-to/how-to-update-python-version) in other operating systems. In this article, we are going to focus on how to install it on the terminal.

## Update Python on Windows

To [update Python on Windows](https://4geeks.com/how-to/how-to-update-python-on-windows) you should download the Python version you want to upgrade to from [python.org](https://www.python.org/ "python.org"). In case you already have installed different Python versions and want to update the version of a virtual environment, you can do it by using the following command:

```cmd
python -m venv --upgrade VIRTUAL-ENVIRONMENT-PATH-HERE
```

To select which Python version we want to use, it's as simple as as writing `py -version-you-want-to-use`, example:

```cmd
	py -3.8 #selects Python version 3.8
	py -3.11 # Selects Python version 3.11
```

## Updating Python on Linux

Before getting into upgrading Python, we need to know if it's already installed (no use to upgrade something that doesn't exist). To check if Python is installed type the following:

```bash
python3 -version
```
If there's an installed version of Python, the output should show you the installed version like this: 

```bash
Python 3.11.1
```

If your computer doesn't have Python installed, we need first to prepare our system to install Python, so we do the following:

```bash
sudo apt update 
sudo apt install software-properties-common
```

Once we have downloaded the necessary files to install Python latest version, we can install it using `apt-get` (recommended) or using the source code.

### Update with Apt-Get

There's no need to reinvent the wheel, `Apt-Get` it's a package manager built in Linux that will make our life easier while installing. 

As a first step, let's configure the `deadsnakes PPA` on the system by running the following command:
```bash
sudo add-apt-repository ppa:deadsnakes/ppa
```

Time to update the Apt cache and install the Python package:

```bash
sudo apt update 
sudo apt install python3.9
```

Python is now updated, but still is pointing to the previously installed version. We need now to update this:

```bash
 sudo update-alternatives --config python3
```

A list of options will be displayed  and prompt to pick the Python version you want to point to, select it by writing the number corresponding to the version you want to use.

To verify this selection, write:

```bash 
python -version
```

## Updating Python on MacOs

Updating Python on MacOs is more straight forward. In MacOs systems you can as well have different Python versions installed at the same time. This makes it simpler to update it by visiting  [python.org](https://www.python.org/downloads/mac-osx/ "python.org") MacOs download page, select the installer to download and run it.

If you are more of a `Homebrew` user, run the following commands:

```bash
brew install python
```

Once the installation finishes, you'll have the latest Python version installed which you can verify with the following code:

```bash
python3 --version
```

Hope you enjoy the reading and keep on the Geek side.