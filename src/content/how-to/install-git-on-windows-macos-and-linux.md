---
title: "How to Install Git on Windows, macOS, and Linux: A Comprehensive Guide"
description: "Learn how to install Git on Windows, macOS, and Linux with this comprehensive guide. Step-by-step instructions to help you get started with Git."
tags: ["git", "windows", "macos", "linux", "github"]
authors: ["alesanchezr"]

---

# How to Install Git on Windows, macOS, and Linux: A Comprehensive Guide

Git is an essential tool for version control, widely used in the software development industry. Installing Git on your computer allows you to manage your code efficiently, collaborate with others, and maintain a history of your projects. 

> 💡 This article is about installing git, not using git, click here if you are looking for a [comprehensive guide on how to use git](https://4geeks.com/lesson/how-to-use-git-version-control-system) or [how to clone a github repository](https://4geeks.com/how-to/github-clone-repository).

This article provides a step-by-step guide to installing Git on Windows, macOS, and Linux.

## Installing Git on Windows

### Download the Installer

- Visit the official Git website: [Git for Windows](https://gitforwindows.org/).
- Click on the "Download" button to get the latest version.

### Run the Installer

- Locate the downloaded `.exe` file and double-click to run it.
- Follow the installation prompts. The default settings are generally suitable for most users.

### Configure Git

- Open Command Prompt or PowerShell.
- Set your username and email address:
  
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Installing Git on macOS

### Using Homebrew

- If you don't have Homebrew installed, open Terminal and install it:
  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Install Git using Homebrew:
  ```sh
  brew install git
  ```

### Manual Installation

- Download the latest Git installer for macOS from the official Git website: [Git for macOS](https://git-scm.com/download/mac).
- Open the downloaded `.dmg` file and follow the installation instructions.

### Configure Git

- Open Terminal.
- Set your username and email address:
  ```sh
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

## Installing Git on Linux (Debian/Ubuntu-Based Distributions)

### Update the Package List

- Open Terminal and run:
  ```sh
  sudo apt update
  ```

### Install Git

- Run the following command:
  ```sh
  sudo apt install git
  ```

## Installing Git on Linux (Fedora-Based Distributions)

### Install Git

- Open Terminal and run:
  ```sh
  sudo dnf install git
  ```

## Installing Git on Linux (CentOS/RHEL-Based Distributions)

#### Enable the EPEL Repository

- Open Terminal and run:
  ```sh
  sudo yum install epel-release
  ```

#### Install Git

- Run the following command:
  ```sh
  sudo yum install git
  ```

### Configure Git

- Open Terminal.
- Set your username and email address:
  ```sh
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

## Verifying the GIT Installation

After installing Git, verify that it is installed correctly by running the following command in your terminal or command prompt:

```sh
git --version
```

You should see the installed Git version number.

## Git vs Github

Git and GitHub are very different things: The first one is a free and open-source technology to track your project changes, and the second one is a for-profit company that uses Git (like many other companies like Gitlab and Bitbucket). Nevertheless, we strongly recommend you understand [what is Github](/lesson/welcome-to-github) and [how to build your coding reputation](/lesson/building-your-github-profile-and-reputation) on it because it will help you a lot throughout your career.

## Conclusion

By following these steps, you should have Git installed on your computer, regardless of the operating system. Configuring your Git user information ensures that your commits are attributed to you correctly. With Git set up, you can start managing your projects more efficiently and collaborate with others seamlessly.

- [Git for Windows](https://gitforwindows.org/)
- [Git for macOS](https://git-scm.com/download/mac)
