---
title: "How to use Gitpod"
subtitle: "Learn the basics of Gitpod and learn why using this cloud editor is the most convenient way to code today"
cover_local: "https://github.com/breatheco-de/content/blob/master/src/content/lesson/../../assets/images/gitpod.jpeg?raw=true"
textColor: "white"
status: "draft"
date: "2022-01-15T16:36:30+00:00"
tags: ["gitpod"]
canonical: ""
---

## What is Gitpod?

Gitpod is a service that provides online virtual computers for coding.

We use it to provide similar computers to all of our students; these computers come pre-installed with the tools needed to start learning, practicing, and working on projects.

Think about Gitpod as a **virtual machine** that runs on the internet; when you create a file on Gitpod, it does not get saved locally on your computer; it will get held online, and you will need the internet to retrieve it again tomorrow.

__Computers on demand, with VSCode already installed__

## Why Gitpod?

No need to install anything: The most frequent wall for learning how to code is the configuration: To complete this course, you would need to install: Git, node, nvm, python, MySQL, Postgress, c++, VSCode, Learnpack, Vercel, Heroku, etc.

No more compatibility problems: Have you tried installing python on your computer? There are 100 ways to do it. Depending on your operating system and other factors, you will encounter problems while installing it, because you will follow a procedure written by someone with a different computer.

Enhanced learning: At 4Geeks, we have deep integration with Gitpod; it helps us measure the student activity and progress, make our courses interactive, with automatic grading and many other features that we would not be able to run locally on your computer.

Github integration: It is essential to learn and use Github today; developers use it daily and their employers expect them to be fluent in Git and Github. Gitpod is built around Github, forcing you to learn it and start using it immediately. Helping you become good at it.

## What are Gitpod's disadvantages?

It's slower than local: Coding locally is faster because you don't have to wait a couple of minutes for the virtual computers to get created. 
You need reliable internet: Otherwise, you can get disconnected while coding (and you may have to wait until you get back online).

We recognize the tradeoffs, but our students and the academy get so much value from Gitpod that we are happy to bear the disadvantages.

## How does Gitpod work?

- After you sign up to Gitpod, you will find [your workspaces](https://gitpod.io/workspaces) empty.  
- Every workspace is a -virtual- computer.  
- The only way to create a new workspace is to specify a Github repository folder (if you don't know what Github is, think of it as an online hard drive of code, where every folder is a project you are coding).  
- Once the new workspace opens, it will create an empty computer for you, but it will also download to this new computer the files from the Github repository folder you specified (your code).  
- Finally, it will open a coding editor (probably VSCode, the most used coding IDE in the world) and a terminal to start coding as if the workspace was on your local computer in the first place.  
- If you go back to [your workspaces](https://gitpod.io/workspaces), you will find all the computers you have created and be able to `re-open them`. Changes you made to the files will stay forever, you will not lose any data as long as you RE-OPEN the same workspace you were working on in the first place.  

![How gitpod works](https://raw.githubusercontent.com/alesanchezr/content/master/src/assets/images/how-gitpod-works.jpeg)

#### What is a workspace?

It's a computer; all the updates you make to your code will stay on the same workspace forever. You can go back to your list of workspaces anytime and delete, rename, or pin each of the workspaces.

> When you open a Github repository using Gitpod, you will be "renting" a computer with access to the most popular coding editor in the world: VSCode.

### Running a project on Gitpod

We strongly recommend downloading the [Gitpod Chrome Extension](https://www.gitpod.io/docs/browser-extension/). It will make your workflow easier and faster.

Once you download and install the extension, you will find a green button called "Gitpod" on every GitHub repository.
![Gitpod button](https://raw.githubusercontent.com/breatheco-de/content/master/src/assets/images/github-gitpod.png)

Pressing on this button will open the repository files on a new workspace, and you will be able to start coding on VSCode.

Once you finish for the day, you can abandon your computer. However, if you want to keep working on the same code tomorrow, you will have to find the workspace on ["Your Workspaces"](https://gitpod.io/workspaces) and re-open it from there.


## The terminal

As a coder, you need to use the computer terminal sometimes; you can always find or open the terminal by clicking on the hamburger menu on the top left and selecting the "terminal" => "new terminal" option.

![Gitpod button](https://github.com/breatheco-de/content/blob/master/src/assets/images/terminal.png?raw=true)

### What is the terminal or command line?

Every computer has a terminal, and you can use it to do almost everything you want: open an application, create a file, folder, etc. However, in Gitpod, the terminal will only control the virtual computer.

You don't have to learn the terminal commands yet, but [we strongly recommend reading this lesson](https://content.breatheco.de/en/lesson/the-command-line-the-terminal) to get familiar with it and understand its functions and limitations.

![terminal command](https://github.com/breatheco-de/content/blob/master/src/assets/images/terminal-command.png?raw=true)

That is it! It's time to start using Gitpod!
