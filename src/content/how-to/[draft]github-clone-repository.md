---
title: "How to clone a github repository"
subtitle: "Cloning is the fastes way to download a project or code, in this lessons we will explain how to clone and the difference it has with forking"
tags: ["git","github"]
date: "2020-10-19T16:36:30+00:00"
authors: []
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "draft"

---

# Github Clone Repository

Cloning a repository creates a local copy of the desired project/repository on your computer, which syncs between the two locations (Remote-Local).

In other words, cloning a repository means downloading a complete copy of it to your computer. And what does a complete copy mean? Well, it means that after cloning a repository you will have the entire history of the repository on your computer.

So why cloning a repository you may ask? Cloning a project has many benefits as:

- Browse the history of the project, seeing how it has evolved
- See the changes that have occurred in the code
- Know who and when has modified the code
- Access the branches of the project and create your own
- Start modifying the code, save the changes and add your work to the existing one

And all this without the need to be connected to the internet. We will only need internet connection when we want to "share" our work with someone else or we want to upload our work to Github.

<p align="center">
  <img src="https://c.tenor.com/AQM9IEdO0K8AAAAd/clone.gif" width='400px'/>
</p>

## Steps to Clone a Github Repository (Using the terminal)
To clone a Github repository, we do as follows:

 1. **Open the terminal (Git Bash can be used)**
	 It is extremely simple if Git is not already installed. Simply navigate to the [Git Download Folder](https://git-scm.com/downloads) and follow the on-screen instructions.
	 
 2. **Go to the directory/folder where you wish to add the cloned repository**
	Input `cd` and add the directory/folder location in the terminal. Let's say we want to clone the desired repository in the following folder `C:\Users\rafam\Programming Projects\my-first-cloned-repo`, you can also drag and drop the folder in the terminal and press enter:
<p align="center">
  <img src="https://i.imgur.com/lAV0nLj.jpg" width='400px'/>
</p>
<p align="center">
  <img src="https://i.imgur.com/gAkO6AJ.jpg" width='500px'/>
</p>

 3. **Visit the repository page that you want to clone**
	 For example, let's say we want to clone the following Github repository [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello)
<p align="center">
   <img src="https://i.imgur.com/xu3Psl0.png" width='750px' />
</p>

 4. **Click on Code and copy the URL clicking on the highlighted button**
<p align="center">
  <img src="https://i.imgur.com/QPEPsZE.png" width='750px'/>
</p>

 5. **Use the git clone command typing `git clone` along with the earlier copied URL**
 `$ git clone https://github.com/4GeeksAcademy/react-flask-hello.git`
<p align="center">
   <img src="https://i.imgur.com/XjiWFFG.jpg" width='500px'/>
</p>

 6. **Press enter and the repository will be cloned**
 <p align="center">
  <img src="https://i.imgur.com/Y0z75C3.jpg" width='500px' />
</p>

It is important to understand that you can clone any repository not only from github, but from any other site if you have the git URL. Remember that you clone a repository with the `git clone <url>` command.

## Clone vs Fork

How much control and independence you desire over the codebase once you've copied it determines how Git clone and fork difference from each other. You can fork or clone any publicly accessible Git repository.

The quick answer is, by **forking**, you can make your own copy of a repository somewhere else (for example, GitHub). Owning a copy of the repository means that you can make changes to it without affecting the original repository.

**Cloning** creates a local, as opposed to a personal, copy of a repository. Imagine doing that by downloading a repository to your computer's local storage. Clones have references to their original repositories, unlike forks.

 <p align="center">
  <img src="https://i.imgur.com/eSN0n99.jpg" width='700px' />
</p>