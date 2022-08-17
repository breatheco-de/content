# How to contribute to this project

You can contribute by writing an article, fixing a bug, etc.

[Here you will find all the articles inside the repository](https://github.com/breatheco-de/content/tree/docs/src/content), some of them are:
- Published: already finished but you can still make small changes like fixing grammar errors.
- Draft: someone is already working on it but it's not finished yet.
- Unassigned: no one has picked that article or started working on it.
- Pending translation: there is already a version in another language and we need the translation for that particular language.

### Writing a new article

Pick one of the `unasigned` or `pending_translation` articles from [this list](https://github.com/breatheco-de/content/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) and comment on the issue to start working on it.

Follow Github markdown syntax to write your article, we recommend using a text editor that supports markdown like stack edit.

We have also create some special icons and components that you can also use inside your article content:

#### Before and after

Example:

```html
<before-after 
    before="https://ucarecdn.com/3681f907-21eb-4e0e-828e-f7e2690e8942/" after="https://ucarecdn.com/d6648701-2af4-4e2d-890c-17ed222bb66c/" />
```

#### Images

```
<img src="https://path/to/image.png">
```

#### Syntax Highlighting

```python
`print("hello")`
```
Will look like this: `print("Hello")`

#### Multiline syntax Highlighting

Start your code with three tildes like this: `

Will look like this:

```html
<strong>Hello</strong>
<p></p>
```