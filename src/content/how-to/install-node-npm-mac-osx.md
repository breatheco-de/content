---
title: "How to install node and npm on a Mac (mojave)"
subtitle: "Non official guide to install node.js and npm on a mac (tested with osx mojave version)"
date: "2017-10-22"
tags: ["node", "npm", "osx"]
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
---

# How to install node and npm on a Mac (mojave)

There are several ways to install node on any mac, but my recomendation will be to unstal it using brew and nvm.  
I think that is the best approach for several reasons:

  1. You will find that some times you want to switch between several versions of node depending on the libraries that you use, you dont want to be stuck in just one version.
  2. Brew is an amazing package manager for mac that contains very mature packages already bullet prove on any possible bugs.
  
## Steps to install:

  1. **Install brew (if you don't have it already)**  
  According to [the brew official website](https://brew.sh/) you only to paste need one command on the console:
  
  ```sh
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
  
  2. Install NVM using brew
  
  ```sh
   $ brew install nvm
  ```
  
  3. Load it in the terminal
  
  ```sh
  $ mkdir -p ~/.nvm
  $ echo $'export NVM_DIR="$HOME/.nvm"\n. "/usr/local/opt/nvm/nvm.sh"' >> ~/.bash_profile
  ```
  4. Restart your current terminal
  ```sh
  $ source ~/.bash_profile
  ```
  
  5. Install node version 8 or whatever version you want
  ```sh
  $ nvm i 8
  ```
  
 ## If you had any errors
 
 Please file an issue here and we will do our best to help you. You can also contribute and PR any updates you think should be made to this guide..
 
