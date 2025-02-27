---
title: "How to install NVM on Windows"
subtitle: "Learn how to install NVM on Windows effortlessly! Switch between Node.js versions with ease. Master your development environment today!"
tags: ["windows","nvm", "node"]
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
authors: ["kodi24fever"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "published"

---

As a developer, you'll likely encounter the need to juggle multiple Node.js projects in your [local development environment](https://4geeks.com/lesson/what-is-an-environment-in-programming), each requiring different versions of Node.js. To manage these requirements efficiently, we strongly recommend installing Node Version Manager (NVM) instead of directly installing Node.js. NVM allows you to switch between Node versions seamlessly, ensuring that each project has the right environment to run effectively. For those interested in optimizing their development setup further, we have an article detailing the best local development practices to help you avoid common issues in the future.

> 📝 This guide is for Windows users only, follow these links if you want to [install NVM on MacOS](https://4geeks.com/how-to/install-node-nvm-mac-osx) or [install NVM on linux](https://4geeks.com/how-to/install-nvm-linux).

## 1) Download NVM for Windows.  

In order to **install Node Version Manager tool in Windows** environment can [download the latest nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.zip?raw=true) file from their github page.

> 🔥 Make sure to download the latest `nvm-setup.zip` file because it contains a very simple installation wizard.  

## 2) Install NVM on your Windows Computer

Go to your ***Downloads*** folder on Windows, and unzip ```nvm-setup.zip``` file and double click on ```nvm-setup```.

## 3) Follow the installation wizard

When the installation wizard opens, hit the ***next*** button a bunch of times, and at the end you will see an ***install*** button that you will hit too. After that, just wait for the progress bar to ***finish***.  

> :point_up: ?? Remember not to touch any default configuration. Always keep hitting next!!!

## 4) Find it on your command Prompt

Once it is installed, open Windows Command Prompt. If you have any issues finding the command line, just type ***CMD*** in Windows search bar at the bottom-left corner of your desktop. 

Type `nvm` and hit `enter` on your command prompt and you should see a message similar to this one:

![nvm windows installation success](https://github.com/breatheco-de/content/blob/master/src/assets/images/nvm-installation-success.png?raw=true)

## 5) Install Node version 22 or whatever version you want

If you want to check what are the current node versions available you can type: `nvm list available` or you can go to [nodejs.org](https://nodejs.org/en/about/previous-releases#looking-for-latest-release-of-a-version-branch) and check all of them. 

We would recommend using the latest stable version, for example Node v22 when writing this article. In the command prompt type the command below: 

```bash
nvm install 22
```

## 6) Checking installed node versions

Always check your installed node versions. Sometimes our applications do not run because we are using outdated versions. This command will show all the installed node versions you have in Windows.

```bash
$ nvm list
```
  
## 7) Changing between different node versions:  

You can always use different node versions and this command line let us jump between all our installed versions.  

```bash
# for node 8
nvm use 8.15.0
# for node 10
nvm use 10.15.1
```

## 8) VSCode PowerShell must be able to execute scripts

> 🔥 Only run these steps if you are using VSCode

Inside the VSCode code terminal, if you are trying to run `npm` from the command line, you are probably getting the following error "cannot run scripts because running scripts is disabled":

![Cannot run scripts because running scripts is disabled](https://github.com/breatheco-de/content/blob/master/src/assets/assets/assets/disabled-error-message.jpg?raw=true)

To fix this, follow these steps:

1. Open the command palette by typing `control` + `shift` + `p`
2. Type in the command palette `User settings json`.
3. Select that option and a JSON file will open for edition.
4. Add the following to your VSCode settings.json file:
   
```json
"terminal.integrated.profiles.windows": {
  "PowerShell": {
    "source": "PowerShell",
    "icon": "terminal-powershell",
    "args": ["-ExecutionPolicy", "Bypass"]
  }
},
"terminal.integrated.defaultProfile.windows": "PowerShell",
```

> ⚠️ Be careful with the JSON file; ensure no syntax errors.


## Possible errors and troubleshooting 
 
Here's a list of common problems you might encounter while **installing NVM (Node Version Manager) on Windows**, along with solutions for each:

### 1. **Command Not Found Error After Installation**

**Problem:** 😱 After successfully installing NVM, you might encounter an issue where running `nvm` commands results in a `command not found` error.
**Solution:** 😎 This usually occurs because the NVM path has not been correctly added to the system's environment variables. You can manually add the NVM directory to your PATH by:
   - Right-clicking on 'This PC' or 'My Computer'.
   - Selecting 'Properties'.
   - Clicking on 'Advanced system settings'.
   - In the 'System Properties' window, click on 'Environment Variables'.
   - In the 'System variables' section, find and select the 'Path' variable and click 'Edit'.
   - Add the path to your NVM installation, typically `C:\Users\<Your-Username>\AppData\Roaming\nvm`.
   - Click 'OK' to save your changes and close all remaining windows.

### 2. **Installer Fails to Set Environment Variables**

**Problem:** 😱 Sometimes, even if the installation completes successfully, NVM might not work because the installer fails to set the necessary environment variables.
**Solution:** 😎 Verify that the environment variables have been set correctly. If not, manually add `NVM_HOME` and `NVM_SYMLINK` to your system's environment variables:
   - `NVM_HOME` should point to the directory where NVM is installed.
   - `NVM_SYMLINK` should point to the directory where Node installations will be placed.
   - Make sure to also add these to the 'Path' variable as described above.

### 3. **Access Denied During Installation**

**Problem:** 😱 Installation fails with an 'Access Denied' error message.
**Solution:** 😎 This can occur if you do not have administrative privileges on your computer. Try running the installer as an administrator by right-clicking on the installer and selecting 'Run as administrator'.

### 4. **Issues with Installing Specific Node Versions**

**Problem:** 😱 After NVM is installed, attempting to install certain Node versions fails.
**Solution:** 😎 This can happen due to network issues or if the Node version specified is incorrect. Ensure you have a stable internet connection and verify the version number. Also, try installing another version to check if the problem is specific to one version. Sometimes, running the command prompt as an administrator helps.

### 5. **nvm is not recognized as an internal or external command**

**Problem:** 😱 This error typically appears if the command prompt was open during the installation and hasn’t been restarted, or the PATH hasn't been updated properly.
**Solution:** 😎 Close and reopen your command prompt or restart your computer to ensure all environmental changes take effect. Double-check the PATH settings as described in the solutions for 'Command Not Found Error After Installation'.

### 6. **Inability to Switch Node Versions**

**Problem:** 😱 NVM installs and lists Node versions correctly, but switching between them doesn’t seem to work.
**Solution:** 😎 Make sure that when you install Node versions via NVM, you’re running the command prompt as an administrator. Sometimes, permissions issues can prevent NVM from modifying the symlinks properly.

### 7. **Slow Performance on Windows**

**Problem:** 😱 NVM can sometimes be noticeably slower on Windows compared to Unix systems.
**Solution:** 😎 This is a known issue due to how environment variables and paths are managed on Windows. Minimizing the number of Node versions installed and rebooting the system after making significant changes can sometimes help.

These solutions address the most common issues faced when installing NVM on Windows, helping you ensure a smoother setup and management of different Node.js versions.
