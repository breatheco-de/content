---
title: "How to install NVM on a Mac OS (node.js and npm)"
subtitle: "Non-official guide to install NVM on Mac OS (tested) using brew"
tags: ["node","npm","osx", "nvm"]
authors: ["alesanchezr"]

---

There are several ways to install NVM on any Mac running MacOS, but our recommendation is to use Brew and NVM for several reasons:

1. You will find that sometimes you want to switch between several versions of node depending on the libraries that you use; you don't want to be stuck in just one version.
2. Brew is an amazing package manager for MacOS that contains very mature packages that are already bulletproof against any possible bugs.

> 💡 Here are some alternatives to [installing nvm on Windows computers](https://4geeks.com/how-to/nvm-install-windows) or [installing nvm on any other operating system](https://4geeks.com/how-to/install-nvm-on-every-operating-system).
  
## Steps to install NVM on MacOS:

This installation process has been tested on the MacOS Mojave version; there are other articles to [install NVM on Windows](https://4geeks.com/how-to/nvm-install-windows), [install nvm on Linux](https://4geeks.com/how-to/install-nvm-on-linux) or [install nvm on any operating system](https://4geeks.com/how-to/install-nvm-on-every-operating-system).

### 1) Install brew (if you don't have it already)

According to [the brew official website](https://brew.sh/) you only to paste one command on the console:

```sh
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2) Install NVM using brew

```sh
 $ brew install nvm
```

### 3) Make sure the NVM path is accessible from the terminal

The `.bash_profile` file exists on every unix-based system (including Linux and MacOS, and it's used to personalize the terminal for one particular userl; In this case we are using the bash_profile to load NVM every time your system user opens a new terminal.

```sh
$ mkdir -p ~/.nvm
$ echo $'export NVM_DIR="$HOME/.nvm"\n. "/usr/local/opt/nvm/nvm.sh"' >> ~/.bash_profile
```

> 💡 Make sure to read the terminal output, look for success or error messages and act accordingly.

### 4) Restart your current terminal (most people forget this step)

Updates to the bash_profile are not applied instantly; you have to start the terminal over. Go ahead a close your terminal window and open a new one on the same path.

### 5) Validate NVM is available on you MacOS Terminal

After re-starting the terminal, validate you have NVM available as a command by typing `$ nvm` on the terminal; you should see something like this:

![nvm macos success installation](https://github.com/breatheco-de/content/blob/master/src/assets/images/nvm-installation-success.png?raw=true)

## Installing your first Node version

Now that NVM has been successfully installed, you can go ahead an install any node version using the `$ nvm i <version>` command, for example, to install node version 12 you should type on your terminal:

```sh
$ nvm i 12
```
  
 ## If you had any errors (troubleshooting)
 
Please file an issue here, and we will do our best to help you. You can also contribute and PR any updates you think should be made to this guide by clicking on "Edit on github" at the top of this article.
 
