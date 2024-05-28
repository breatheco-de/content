---
title: "What is pyenv and How to Install It?"
subtitle: "Discover what pyenv is and how to install this powerful tool to manage Python versions on your system. Facilitate project development."
tags: ["python", "pyenv", "windows", "linux", "macOS"]
authors: ["danielmoret"]

---

## What is pyenv?

`Pyenv` is a tool that allows us to manage different versions of [Python](https://4geeks.com/es/technology/python) on our computer, making it easy to switch between versions as needed for the environment we are developing in.

## What is pyenv used for?

`Pyenv` has multiple uses, providing developers with greater control over their projects, including:

- **Python Version Management:** Allows installing, uninstalling, and switching between different Python versions without interfering with the [system Python installation](https://4geeks.com/es/how-to/como-instalar-python).

- **Environment Isolation:** Enables developers to create specific Python environments for each project, ensuring that each project has its own dependencies and isolated packages.

- **Compatibility Testing:** Facilitates testing code in different Python versions, ensuring compatibility and identifying potential issues.

- **Package Management:** Developers can easily install and manage packages using `pyenv`, ensuring that specific version requirements for each project are met.

Now let's look at the installation process for different operating systems.

## Installing pyenv on Windows

**Step 1:** Install Git if you don't have it installed already. You can download it from the [official page](https://git-scm.com/downloads). If you are unsure how to install it, you can follow this [tutorial](https://www.youtube.com/watch?v=cYLapo1FFmA).

**Step 2:** Install pyenv-win. Open the Git Bash or PowerShell terminal and clone the `pyenv` repository from GitHub with the following command:

```PowerShell
git clone https://github.com/pyenv-win/pyenv-win.git $HOME/.pyenv
```

**Step 3:** Add PYENV, PYENV_HOME, and PYENV_ROOT to your environment variables with the following commands:

```PowerShell
[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")

[System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")

[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
```

**Step 4:** Add the following paths to your USER PATH variable to execute the pyenv command in the terminal:

```PowerShell
[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```

**Step 5:** Verify the installation. First, close the current terminal and open a new one, then run the following command to verify that `pyenv` is installed correctly:

```PowerShell
pyenv --version
```

You should see something like this:

```PowerShell
pyenv 3.1.1
```

If you want to learn more about `pyenv` on Windows, you can visit its [official page](https://github.com/pyenv-win/pyenv-win).

## Installing pyenv on Mac

**Step 1:** Install Xcode by opening the terminal and running the following command:

```bash
xcode-select --install
```

If it's already installed, you will see a message like this:

```bash
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

**Step 2:** Install Homebrew. First, check if it's installed by running the following command:

```bash
brew --version
```

If it's not installed, you will see a message like this:

```bash
-bash: brew: command not found
```

To install it, run the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Step 3:** To avoid errors during the installation of Python versions, install some libraries with the following command:

```bash
brew install openssl readline sqlite3 xz zlib
```

**Step 4:** Install `pyenv` with the following command:

```bash
brew install pyenv
```

**Step 5:** Verify the installation. First, close the current terminal and open a new one, then run the following command to verify that `pyenv` is installed correctly:

```bash
pyenv --version
```

You should see something like this in your terminal:

```bash
pyenv 2.3.23
```

If you want to learn more about `pyenv` on Mac, you can visit its [official page](https://github.com/pyenv/pyenv).

## Installing pyenv on Linux

**Step 1:** Before installing `pyenv`, install several necessary libraries and packages with the following command:

```bash
sudo apt install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl \
git
```

**Step 2:** Clone the `pyenv` repository from GitHub by running the following command in the terminal:

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

**Step 3:** Configure the environment variables according to the shell you are using (e.g., ~/.bashrc, ~/.zshrc):

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init --path)"' >> ~/.bashrc
```

```zsh
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
```

**Step 4:** Verify the installation. First, close the current terminal and open a new one, then run the following command to confirm that `pyenv` is installed correctly:

```bash
pyenv --version
```

You should see something like this in your terminal:

```bash
pyenv 3.1.1
```

If you want to learn more about `pyenv` on Linux, you can visit its [official page](https://github.com/pyenv/pyenv).

Tools like `pyenv` are very useful in the development world because they allow us to manage the Python versions installed on our computer. This enables us to work on different projects without worrying about the Python versions they require, thanks to the ease of installing and switching between versions. Incorporating this tool into your workflow will make you more productive, avoid compatibility errors, and make your development smoother. We invite you to read the [4Geeks Blog](https://4geeks.com/es/how-to) for more interesting content.
