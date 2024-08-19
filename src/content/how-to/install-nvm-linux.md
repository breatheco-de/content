---
title: "How to Install NVM on Linux"
description: "Learn how to install NVM on Linux with our easy-to-follow guide. Covering popular distributions like Ubuntu and Fedora, this article includes troubleshooting tips and links to installation guides for macOS and Windows. Perfect for developers looking to manage multiple Node.js versions."
authors: ["alesanchezr"]
tags: ['node', 'javascript', 'nvm']

---

Node Version Manager (NVM) is essential for any developer working with Node.js. It allows you to manage multiple active Node.js versions on a single system. This guide provides step-by-step instructions on how to install NVM on Linux, catering to some of the most common distributions. Additionally, we’ll include troubleshooting tips for frequent issues encountered during installation.

> 💡 This guide is only for Linux systems. Here are some links if you a looking for a more general guide on [installing nvm on every operating system](https://4geeks.com/how-to/install-nvm-on-every-operating-system) or just [installing nvm on mac](https://4geeks.com/how-to/install-node-nvm-mac-osx) or [installing nvm on windows](https://4geeks.com/how-to/nvm-install-windows).

## Prerequisites

Before installing NVM on your Linux system, make sure you have:

- A standard Linux distribution such as Ubuntu, Debian, CentOS, or Fedora.
- Basic command-line utilities installed.
- Access to a terminal.
- Sudo privileges for installing packages.

## Installing nvm on Linux Ubuntu/Debian:

1. Open your terminal.
2. Install curl or wget for downloading NVM installation script:
   ```bash
   $ sudo apt-get install curl
   ```
3. Download and install NVM by running:
   ```bash
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
4. Source your profile to add NVM to your path:
   ```bash
   $ source ~/.profile
   ```

## Installing nvm on Linux CentOS/Fedora:

1. Open your terminal.
2. Install curl or wget:
   ```bash
   $ sudo yum install curl
   ```
3. Download and install NVM using curl:
   ```bash
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
4. Source your bash profile:
   ```bash
   $ source ~/.bash_profile
   ```

### Verify Installation

After installation, you can verify that NVM is installed correctly by typing:

```bash
$ nvm --version
```

You should see the version number of NVM displayed if the installation was successful.

![install nvm linux](https://github.com/breatheco-de/content/blob/master/src/assets/images/nvm-installation-success.png?raw=true)

## Common Troubleshooting Steps

Installing NVM (Node Version Manager) on Linux typically goes smoothly, but there are a few common issues that you might encounter. Here’s a list of these potential problems along with solutions:

### 1. **Command Not Found Error After Installation**

**Problem:** 😱 After installing NVM, when you try to use `nvm` commands, you might encounter a `command not found` error.
**Solution:** 😎 This problem generally occurs if the NVM script isn't sourced in your shell profile file. To resolve it, add the following lines to your `.bashrc`, `.zshrc`, or whatever shell profile file you use:
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   ```
   After adding these lines, reload your profile with `source ~/.bashrc` (or the respective file), or restart your terminal.

### 2. **Profile Script Not Executing on Terminal Launch**

**Problem:** 😱 NVM doesn't work automatically when you open a new terminal window, even after adding the necessary lines to your profile script.
**Solution:** 😎 Ensure that your terminal is configured to launch a login shell, as some systems or terminal emulators don't do this by default. If using GNOME Terminal or another emulator, find the profile preferences or settings and ensure "Run command as a login shell" is checked.

### 3. **Installation Errors Due to curl or wget**

**Problem:** 😱 The installation script fails to run due to issues with `curl` or `wget`.
**Solution:** 😎 Make sure `curl` and `wget` are installed and up to date on your system. You can install them via your package manager, for example:
   ```bash
   sudo apt install curl wget
   ```
   Then, retry the installation using the curl or wget command.

### 4. **Permission Issues During Installation**

**Problem:** 😱 The NVM installation script fails with permission denied errors.
**Solution:** This can happen if your user does not have proper write permissions to the install directory or if trying to install without sufficient privileges. Run the script without sudo, but make sure your user owns the directory where NVM is being installed, usually your home directory.

### 5. **Node Installation Fails After Installing NVM**

**Problem:** 😱 After installing NVM successfully, attempting to install Node versions results in errors.
**Solution:** 😎 This could be due to network issues, or you might be behind a proxy. If it’s a proxy issue, configure npm to use the proxy:
   ```bash
   npm config set proxy http://proxy-server-address:port
   npm config set https-proxy http://proxy-server-address:port
   ```
   Also, ensure there are no network connectivity issues on your end.

### 6. **NVM Slows Down Terminal Initialization**

**Problem:** 😱 After adding NVM to your profile script, the terminal starts up significantly slower.
**Solution:** 😎 NVM can slow down terminal start-up because it hooks into the shell startup script. To alleviate this, you can lazy load NVM or reduce the number of shell processes it initializes. There are community scripts and hacks that can help with lazy loading NVM, reducing its impact on shell startup time.

### 7. **Conflicts with Existing Node or NVM Installations**

**Problem:** 😱 Conflicts arise if there are remnants of previous Node.js or NVM installations.
**Solution:** 😎 Fully remove any existing Node.js installations (`sudo apt-get remove nodejs` and `sudo apt-get purge nodejs` for Debian-based systems) and NVM directories (`rm -rf ~/.nvm`). Then, try reinstalling NVM.

These troubleshooting steps should help you address the most common issues encountered when installing NVM on Linux systems, ensuring a smoother setup process for managing Node.js versions.

## Installing NVM on Other Operating Systems

While this guide focuses on Linux, it’s possible to install NVM on other operating systems as well:
- For macOS users, the installation steps are similar to those for Linux. More detailed instructions can be found in our [dedicated guide to installing NVM on macOS](/how-to/install-node-nvm-mac-osx).
- Windows users can use NVM-Windows, a different variant suited for Windows environments. Check out our [guide on installing NVM on Windows](/how-to/nvm-install-windows) for more information.

### What is NVM?

NVM stands for Node Version Manager. As its name implies, it helps you manage and switch between different Node versions with ease. It is particularly useful when managing multiple projects that require different Node.js versions, ensuring that compatibility issues are minimized.

### Why Install NVM on Linux?

Linux users benefit from NVM’s flexibility, especially when working in development environments that require running multiple versions of Node.js. By installing NVM on Linux, developers can ensure that they can easily switch between projects without compatibility issues.
