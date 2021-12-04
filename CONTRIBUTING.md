# How to contribute to this project

This project was build in gatsby.js v2, you can contribute by **coding a feature**, **fixing a bug** or **writing an article**.

## If you want to contribute by `coding` or `fixing a bug`

First pick the issue that you would like to resolve from [this list](https://github.com/breatheco-de/content/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22). Please don't resolve anything that its not an issue, if you would like to propose new enhancements or report bugs you can create the issue first to discuss it with the project maintainers and other members of the community.



Fork this project and clone it to have it on your local environment.

> This project follows [the all-contributors specification](https://github.com/kentcdodds/all-contributors) and your contribution will be recognized in the main README.md of the project.

## If you would like to `write an article`

[Here you will find all the articles inside the repository](https://github.com/breatheco-de/content/tree/docs/src/content), some of them are:
- Published: already finished but you can still make small changes like fixing grammar errors.
- Draft: someone is already working on it but it's not finished yet.
- Unassigned: no one has picked that article or started working on it.
- Pending translation: there is already a version in another language and we need the translation for that particular language

### Writing a new article

Pick one of the `unasigned` or `pending_translation` articles from [this list](https://github.com/breatheco-de/content/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) and comment on the issue to start working on it.

Follow Github markdown syntax to write your article, we recommend using a text editor that supports markdown like stack edit.

We have also create some special icons and components that you can also use inside your article content:

#### Special Icons

[[info]]
|:link: for links of websites with information  


[[warning]]
| :point_up:
 to warn students about important details

[[demo]]
| :point_up: For live demos 

[[info]]
| :tv: for external videos

[[info]]
| :point_up: for Aditional info 

#### Before and after

Example:

```html
<before-after 
    before="https://ucarecdn.com/3681f907-21eb-4e0e-828e-f7e2690e8942/" after="https://ucarecdn.com/d6648701-2af4-4e2d-890c-17ed222bb66c/" />
```

#### Image

<img src="https://path/to/image.png">

#### Syntax Highlighting

***For inline syntax Highlighting***

Start your inline code with the language followed by the `>` character, for example:
```txt
python>print("hello")
```
Will look like this: `python>print("Hello")`

***Multiline syntax Highlighting***

Start your code with three tildes like this: `

![Syntax Highlighting Breathecode](https://ucarecdn.com/8e196eb9-9aaa-41b1-a0f9-a62c1375ccfa/Screenshot20191121at73857PM.png)

Will look like this:

```html
<strong>Hello</strong>
<p></p>
```

***Adding Line Numbers***

To add line numbers just add `{numberLines: true}` after your language declaration like this:

!(Adding line numbers to the code)[https://ucarecdn.com/20c9d797-9a40-4a0e-90a2-0ae0600f0fe0/Screenshot20191121at75439PM.png]


```html{numberLines: true}

<p>This is some very big code</p>

<p>With lots of lines of code</p>

```
