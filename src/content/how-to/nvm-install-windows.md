---
title: "How to install NVM on Windows"
subtitle: "This document will provide a guide on how installing nvm and node.js for Windows environment"
tags: ["windows", "nps"]
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-01-11"
author: ["kodi24fever"]

---
 

# How to install nvm and node.js on Windows

Sometimes we would like to write all some code in a local environment, and we will need node.js to install all of our dependencies and run certain scripts. Ex: ```npm run build```.
This document will provide a guide on how installing nvm and node.js for Windows environment.
  
## Steps to install with nvm:
***
1. ***Download nvm*** 
In order to install Node Version Manager tool in Windows environment we need to download a [zip file](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) that contains the installation wizard.
***
  2. **Install nvm**
  Go to your ***Downloads*** folder on Windows, and unzip ```nvm-setup.zip``` file and double click on ```nvm-setup```.
  ***
  
  3. **Installation Wizard**
 When the installation wizard opens, hit the ***next*** button a bunch of times, and at the end you will see an ***install*** button that you will hit too. After that, just wait for the progress bar to ***finish***. 
 
[[warning]] | ?? Remember not to touch any default configuration. Always keep hitting next!!!
***
  4. **Command Prompt**
Once it is installed, open Windows Command Prompt. If you have any issues finding the command line, just type ***CMD*** in Windows search bar at the bottom-left corner of your desktop. 
***

5. **Install node version 8 or whatever version you want**
In the command prompt type the command below. If you want to check what are the current node versions, you can go to [nodejs.org](https://nodejs.org/en/) and check all of them. I would recommend using the ***recommended for most users***.
```
nvm install 8.15.0
```
***
6. **Checking installed node versions**
Always check your installed node versions. Sometimes our applications do not run because we are using outdated versions. This command will show all the installed node versions you have in Windows.
```
nvm list
```
  ***
  
  7. **Changing between different node versions**
  You can always use different node versions and this command line let us jump between all our installed versions.
  ```
  nvm use 8.15.0
  ```
  ### or
  ```
  nvm use 10.15.1
  ```
 ## If you had any errors
 
 Please file an issue here and we will do our best to help you. You can also contribute and pull-request any updates you think should be made to this guide..
