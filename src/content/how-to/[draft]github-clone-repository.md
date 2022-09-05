---
title: "How to clone a github repository"
subtitle: "Cloning is the fastest way to download a project or code, in this lessons we will explain how to clone and the difference it has with forking"
tags: ["git","github"]
date: "2020-10-19T16:36:30+00:00"
authors: []
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "draft"

---

# GitHub Clone Repository

Cloning a repository creates a local copy of the desired project/repository on your computer, which syncs between the two locations (Remote-Local).

In other words, cloning a repository means downloading a complete copy of it to your computer. And what does a complete copy mean? Well, it means that after cloning a repository you will have the entire history of the repository on your computer.

So why cloning a repository you may ask? Cloning a project has many benefits as:

- Browse the history of the project, seeing how it has evolved
- See the changes that have occurred in the code
- Know who and when has modified the code
- Access the branches of the project and create your own
- Start modifying the code, save the changes and add your work to the existing one

And all this without the need to be connected to the internet. We will only need internet connection when we want to "share" our work with someone else or we want to upload our work to GitHub.


 ![Cloning Thing GIF](https://c.tenor.com/AQM9IEdO0K8AAAAd/clone.gif)


## Steps to Clone a GitHub Repository (Using the terminal)
For this example, we will clone one of 4Geeks popular repositories that is [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello). The steps to clone this repository are as follows:

 1. **Determine or locate where you want to clone the desired repository** |
 Locate the folder in your computer where you want to save the repository, or you can create a new one. Let’s say we want to save our repository in a folder called `my-first-cloned-repo` as shown below

![Locating Folder](https://i.imgur.com/lAV0nLj.jpg)
	 
 2. **Open the terminal** |
You can use the **Git Bash** terminal or any **IDE (Integrated Development Environment) or Code Editor** terminal.  With the terminal open, input `cd` and add/copy the directory/folder location/path. Since we want to save the repository in our folder `my-first-cloned-repo`, let's copy the folder's path `C:\Users\rafam\Programming Projects\my-first-cloned-repo` and paste it in the terminal, you can also drag and drop the folder in the terminal and press enter
```bash session
# Git Bash Terminal:

rafam@LAPTOP-LLV85FV6 MINGW64 ~
$ cd 'C:\Users\rafam\Programming Projects\my-first-cloned-repo' #Press Enter

rafam@LAPTOP-LLV85FV6 MINGW64 ~/Programming Projects/my-first-cloned-repo
```

 3. **Go to the [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello) repository in GitHub** |
 Once you are located in the [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello) repository in GitHub, we need to click the **Code** button to display the clone options and then click the **Copy** button which is highlighted (shown below) and next to the repo URL:
	 
![4Geeks Repo Example Pic 1](https://i.imgur.com/xu3Psl0.png)

![4Geeks Repo Example Pic 2](https://i.imgur.com/QPEPsZE.png)

 4. **Go to the terminal and use the git clone command typing `git clone` along with the copied URL**
```bash session
# Git Bash Terminal:

rafam@LAPTOP-LLV85FV6 MINGW64 ~
$ cd 'C:\Users\rafam\Programming Projects\my-first-cloned-repo'

rafam@LAPTOP-LLV85FV6 MINGW64 ~/Programming Projects/my-first-cloned-repo
$ git clone https://github.com/4GeeksAcademy/react-flask-hello.git 
```

 5. **Press Enter and the repository will be cloned**

```bash session
# Git Bash Terminal:

rafam@LAPTOP-LLV85FV6 MINGW64 ~
$ cd 'C:\Users\rafam\Programming Projects\my-first-cloned-repo' 

rafam@LAPTOP-LLV85FV6 MINGW64 ~/Programming Projects/my-first-cloned-repo
$ git clone https://github.com/4GeeksAcademy/react-flask-hello.git #Press Enter
Cloning into 'react-flask-hello'...
remote: Enumerating objects: 1024, done.
remote: Counting objects: 100% (33/33), done.
remote: Compressing objects: 100% (22/22), done.
Receiving objects:  99% (1014/1024), 6.82 MiB | 6.79 MiB/seused 991
Receiving objects: 100% (1024/1024), 8.86 MiB | 7.31 MiB/s, done.
Resolving deltas: 100% (521/521), done.
```

It is important to understand that you can clone any repository not only from GitHub, but from any other site if you have the git URL. Remember that you clone a repository with the `git clone <url>` command.

## Clone vs Fork

The difference between forking and cloning a project/repository really comes down to how much control a developer is allowed to have over a given repository.

By **Forking**, you can make your own copy of a repository somewhere else (for example, GitHub). Owning a copy of the repository means that you can make changes to it without affecting the original repository.

**Cloning** creates a local copy of a repository. Imagine doing that by downloading a repository to your computer's local storage. Clones have references to their original repositories, unlike forks.

 ![Clone vs Fork](https://i.imgur.com/eSN0n99.jpg)

## How to Fork a Repository

So you want to make your own copy of a repository, let's make a copy of the repository that we cloned in the example above [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello).

The steps to fork the repository are the following:

 1. Go to the GitHub repository [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello)
 2. Click the **Fork** button located in the top right corner of the page

![Fork Steps 2](https://i.imgur.com/0qzfYg0.png)

 3. Then, an owner must be selected for the forked repository clicking the **Select an owner** button, then choose the **Repository name**. You can also add a description (optional) to your fork if desired.

![Fork Steps 3](https://i.imgur.com/XeJ0BPJ.png)

 4. Below the description field, there is a checkbox (**Copy the `main` branch only**) that allows you to only copy the main branch, if you want to copy the whole repository with all of its branches, then this box should be unmarked. 
 
![Fork Steps 4](https://i.imgur.com/4C9aXVJ.png)

5. You can now click **Create Fork** and it'll be done

![Fork Steps 5](https://i.imgur.com/sm1x81i.png)

## How to clone using the GitHub app instead of the terminal

You can also use the GitHub Desktop App to clone a repository to your computer, once you have downloaded the **GitHub Desktop App** here https://desktop.github.com/, and being signed in the GitHub website and Desktop App, then you can follow these steps:
 
 1. Go to the desired GitHub repository, let's use the [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello) repo again. Click on the **Code** button to display the options and proceed to click the **Open with GitHub Desktop** button

![GitHub App Steps 1](https://i.imgur.com/KPFvgCO.png)

 2. The GitHub Desktop App will automatically open in your computer and a window called **Clone a repository** will be displayed. Here you can confirm the repository to be cloned and you can change the local path where the repository will be saved by clicking the **Choose...** button, or you can just copy the path and paste it in the corresponding field

![GitHub App Steps 2](https://i.imgur.com/mMS54sJ.png)

 3. You can now proceed to click the **Clone** button and the repository will be cloned in the desired path/directory

![GitHub App Steps 3](https://i.imgur.com/UVc92fA.png)

The following video describes the step by step of everything that has been explained in this **GitHub Clone Repository** article