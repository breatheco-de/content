---
title: "How to Install NVM (Node Version Manager) on Every Operating System"
description: "Discover how to install NVM on Windows, macOS, and Linux with our comprehensive guide. Manage multiple Node.js environments easily and switch between versions seamlessly."
tags: ['command-line', 'nvm', 'node', 'javascript']
authors: ['alesanchezr']

---

Node Version Manager (NVM) is an essential tool for any JavaScript developer. It allows you to [manage multiple javascript projects and environments of Node.js](https://4geeks.com/lesson/what-is-an-environment-in-programming) and switch between them depending on the project needs. This flexibility helps developers manage dependencies, test new features, and ensure compatibility across different Node versions without disrupting the entire development environment. 

In this guide, we'll cover how to install NVM on [Windows](https://4geeks.com/how-to/nvm-install-windows), [install nvm on macOS](https://4geeks.com/how-to/install-node-nvm-mac-osx), and [install nvm on Linux](https://4geeks.com/how-to/nvm-install-linux), ensuring you can get started no matter your platform. Since NVM runs on [the command line](https://4geeks.com/technology/command-line), we will assume you have some fair knowledge about what is and how to use the command line.

## Steps for installing NVM on Windows

1. **Download the Installer** from the [nvm-windows GitHub repository](https://github.com/coreybutler/nvm-windows/releases) and download the latest release.

2. **Run the Installer**: Launch the downloaded installer. Follow the prompts to install NVM for Windows. Default settings are recommended for most users.

3. **Verify Installation**: Open your command prompt and type `nvm --version`. If NVM is installed correctly, the version number will be displayed.

> 🚨 IMPORTANT! Ensure that the NVM directory is added to your system's PATH. The installer usually handles this step.

Here is a more detailed explanation on [how to install NVM on windows](https://4geeks.com/how-to/nvm-install-windows).

## Steps for installing NVM on Installing NVM on macOS and Linux

The easiest and recommended is using the `curl` or `wget` command:

1. **Open Your Terminal**: Access your terminal through your macOS or Linux system.

2. **Install Script**: Run the following command in the terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Or, if you prefer using `wget`:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

3. **Update Your Profile**: Add the following to your shell profile file (.bash_profile, .zshrc, .profile, etc.):
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

4. **Restart Your Terminal**: To ensure the changes take effect, restart your terminal.

5. **Verify Installation**: In the terminal, type `nvm --version`. A successful installation will show the version number of NVM.

## Why Use NVM?

- **Multiple Node.js Versions**: Easily switch between Node versions per project.
- **Global Packages per Version**: Install global NPM packages specific to each Node version without conflicts.
- **Development Flexibility**: Easily test applications across different Node versions.

## Conclusion

With NVM installed, you can now install any version of Node.js by simply running `nvm install node_version`. For instance, `nvm install 14.17.0` will install Node.js version 14.17.0. You can switch between installed versions using `nvm use node_version`.

## Troubleshooting

If you encounter any issues during the installation, make sure that:
- Your internet connection is stable.
- You have proper write permissions in your system.
- You've closed and reopened your terminal window to refresh the environment variables.

For more detailed documentation, visit the [NVM GitHub Page](https://github.com/nvm-sh/nvm).
