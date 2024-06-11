---
title: "Understanding Environments and Environment Variables in Programming"
tags: ["python", "node", "javascript"]
authors: ["alesanchezr"]

---

In software development, an "environment" refers to the setup or configuration under which specific applications or software run; this setup includes:

- The specific programming languages and versions are needed. For example: `python 3.10`
- Software dependencies required to develop, test, and run applications.
- Secrets and variables with private keys, path to the database, and other important values are unique per developer or deployment.
- The operating system (optional)
- Hardware specifications (optional)

Properly managing environments is crucial when working on multiple projects or collaborating with a team, as it ensures consistency and predictability in software behavior across different machines and setups.

> This article is not about virtual machines or Docker containers; we focus on environment creation that usually occurs inside the developer's personal computer, the virtual machine, or the Docker container.

## Installing programming languages for multiple environments

As a software developer, you may need to use Python 3.10 in one project and Python 3.11 on another one.

To solve this problem, we recommend the installation of version managers instead of the programming languagres themselves, for example:

- Install `nvm` instead of node
- [Install pyenv](https://4geeks.com/how-to/what-is-pyenv-and-how-to-install-pyenv) instead of python
- Install phpenv instead of PHP

## What Are Environment Variables?

Environment variables are key-value pairs stored on a computer that can be used to configure and affect the behavior of running processes on that system. They play a critical role in managing application settings that should not be hard-coded in source code, such as API keys, database connections, and other sensitive data.

### Why Use Environment Variables?

- **Security**: Keeping sensitive information out of source code.
- **Flexibility**: Allowing the same application code to be run in different environments with different configurations.
- **Scalability**: Simplifying the process of scaling applications across different servers and environments.

### Managing Python Environments with pyenv and pipenv

- **pyenv**: This tool allows developers to manage multiple Python versions on a single machine, enabling seamless switching between versions based on project requirements. It's particularly useful when projects require different or specific versions of Python that are not system-wide.

  - **Installation and Setup**: Explain how to install pyenv (e.g., using `curl` or `brew` on macOS) and set it up to manage Python versions.
  - **Usage**: Demonstrate how to install a specific Python version (`pyenv install 3.8.6`) and how to set a local version for a project (`pyenv local 3.8.6`).

- **pipenv**: This tool automatically creates and manages a virtual environment for your projects, as well as adding/removing packages from your `Pipfile` as you install/uninstall packages. It also generates the `Pipfile.lock`, which is used to produce deterministic builds.

  - **Creating and Managing Environments**: Show how to create a project using pipenv (`pipenv --python 3.8`) and how to activate and manage the resulting virtual environment.
  - **Advantages**: Emphasize the benefits of using pipenv, such as dependency management and project-specific environment management.

### Managing Node.js Environments with nvm and nodeenv

- **nvm (Node Version Manager)**: Similar to pyenv but for Node.js, nvm allows developers to install and switch between node versions. It is essential for projects that depend on a specific version of Node.js or when you need to test the application across different versions.

  - **Installation and Node Management**: Guide on installing nvm and using it to install multiple Node.js versions (`nvm install 14`, `nvm use 14`).

- **nodeenv**: This tool creates isolated environments for Node.js projects, much like virtualenv does for Python. It's useful for ensuring that dependencies are kept separate between projects.

  - **Creating an Isolated Environment**: Instructions on installing nodeenv and creating an environment for a project (`nodeenv env-name`), and activating it (`source env-name/bin/activate`).

### Best Practices

- **Documentation**: Always document which environment variables and node or Python versions are needed for each project.
- **.env Files**: Use `.env` files to keep environment variables consistent across development and production stages, but ensure these files are never checked into version control with sensitive information.
- **Consistency Across Team Members**: Utilize tools like Docker to ensure that all team members are working with the same configurations, minimizing the "works on my machine" problem.

### Conclusion

Understanding and utilizing environment variables and environment management tools like pyenv, pipenv, nvm, and nodeenv are essential skills for modern developers. They enhance security, allow for flexible development across different environments, and facilitate smoother collaboration across teams.

---

This outline should give you a robust framework to build your article, complete with explanations and practical examples to guide your readers through managing environments effectively.
