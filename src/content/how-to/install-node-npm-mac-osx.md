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
 
Installing NVM (Node Version Manager) on macOS can sometimes lead to various issues due to system configurations, permissions, or conflicts with existing software. Here's a list of common problems you might encounter and how to solve them:

### 1. **Command Not Found Error After Installation**

**Problem:** 😱  After installing NVM, you might try running `nvm` commands only to receive a message that says `nvm: command not found`.

**Solution:** 😎  This issue usually occurs because the NVM script isn't sourced in your shell profile file. You need to add the following line to your `.bash_profile`, `.zshrc`, `.profile`, or `.bashrc`:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

After adding this, restart your terminal or run `source ~/.bash_profile` (or the respective file you've modified).

### 2. **Installation Fails Due to curl or wget Errors**

**Problem:** 😱  During the installation of NVM, you might encounter errors related to `curl` or `wget` not working correctly.

**Solution:** 😎  Ensure that you have `curl` or `wget` installed on your Mac. If they are missing, you can install them using Homebrew by running:

```sh
brew install curl
brew install wget
```
Then attempt to reinstall NVM.

### 3. **Issues with .bash_profile and .bashrc**

**Problem:** 😱  NVM does not seem to function correctly even after adding the script to the profile.
**Solution:** 😎  macOS uses `.bash_profile` primarily, but if you use a different shell like Zsh, you should add the export scripts to `.zshrc`. Make sure you are editing the file for the correct shell. If unsure, add the script to both `.bash_profile` and `.bashrc`.

### 4. **Permission Denied During Installation**

**Problem:** 😱  You may see a `Permission denied` error when trying to install NVM.

**Solution:** 😎  This typically happens due to restricted permissions in the directory where NVM is trying to install. You can try to install NVM using a modified command with elevated permissions:

 ```sh
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
 ```

 If this doesn't work, check your user permissions for the `.nvm` directory and adjust them if necessary.

### 5. **Conflicts with Existing Node or NVM Installations**

**Problem:** 😱  If you have pre-existing Node or another version of NVM installed via a different method, conflicts may occur.

**Solution:** 😎  Remove any existing Node.js installations and the current NVM installation. You can uninstall Node.js by removing its directory and cleaning up any symlinks related to it. For NVM, you should remove the `.nvm` directory and any lines related to NVM in your shell profile files.

### 6. **Profile Script Not Executed Automatically**

**Problem:** 😱  The shell does not automatically execute the profile script on opening a new terminal window.

**Solution:** 😎  You may need to configure your terminal to run the script automatically. This setting can typically be adjusted in the terminal preferences under "Shells open with" or a similar section. Make sure it is set to run the command file as login.

Implementing these solutions should help you resolve most issues related to installing NVM on macOS, enhancing your development setup and workflow.
