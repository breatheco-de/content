# Content

## Types of content:

This list of contents is just a draft, some can be deleted or more can be added.

  1. Lessons: Long articles explaining big concepts like: HTML, JS Events, CSS Selectors, etc.
  2. Error: Explanation of a particular error that typically occurs when coding, for example: "Cannot do map of undefined".
  3. How To: Small articles/videos on different shot how to's, like: How to start a new react.js project.

##  Tagging contenido:

Contents can be tagged on the header of the markdown file; you can add as many tags as you want and later people will be able to search by tag.

There are two types of tags: Technology and Category.

## Command Line Interface:

A small command-line tool has been developed to help manage the lessons.

```
$ node ./src/utils/cli.js update_lesson --slug all --statusTo draft --statusFrom null
$ node ./src/utils/cli.js update_lesson --slug learn-html --statusTo draft --statusFrom null
$ node ./src/utils/cli.js download_images --slug python-syntax --type external_images
$ node ./src/utils/cli.js localize_images --slug python-syntax --type external_images
$ node ./src/utils/cli.js sanitize_lesson --slug all
```

### Method: sanitize_lesson

Will try to clean and fix any possible issues on the lessons, for example: Date formats.

### Method: update_lesson

| PARAM         | DESCRIPTION |
| ---------     | ----------- |
| --slug        | Every lesson has a slug that identifies it, you can pass `all` if you want to update all at once |
| --statusTo    | change the status of one or all the lessons to a particular one |
| --statusFrom  | only apply changes to lessons with specified status |

### Method: download_images

| PARAM         | DESCRIPTION |
| ---------     | ----------- |
| --slug        | Every lesson has a slug that identifies it, you can pass `all` if you want to update all at once |
| --type  | external_images or uploadcare |

### Method: localize_images

Rename the remote image url's with local images (if available), this method is ideal to run after `download_images`.

| PARAM         | DESCRIPTION |
| ---------     | ----------- |
| --slug        | Every lesson has a slug that identifies it, you can pass `all` if you want to update all at once |
| --statusTo    | change the status of one or all the lessons to a particular one |
| --statusFrom  | only apply changes to lessons with specified status |


## Some of the latest articles:

- https://4geeks.com/how-to/github-clone-repository
- https://4geeks.com/how-to/How-to-print-in-javascript
- https://4geeks.com/es/how-to/clonar-array-javascript
- https://4geeks.com/how-to/what-is-float-in-python
- https://4geeks.com/how-to/how-to-run-javascript
- https://4geeks.com/how-to/how-to-comment-out-multiple-lines-in-python
- https://4geeks.com/how-to/how-to-update-python-in-terminal
- https://4geeks.com/how-to/how-to-exit-python-in-terminal
- https://4geeks.com/es/how-to/como-instalar-javascript
- https://4geeks.com/es/how-to/metodo-foreach-javascript
- https://4geeks.com/es/how-to/metodo-reduce-javascript
- https://4geeks.com/how-to/what-does-double-equal-mean-in-python
- https://4geeks.com/es/how-to/ejemplos-expresiones-regulares
- https://4geeks.com/how-to/sqlalchemy-join
- https://4geeks.com/how-to/how-to-split-a-string-in-python
- https://4geeks.com/how-to/convert-list-to-string-in-python
- https://4geeks.com/how-to/how-to-check-python-version
- https://4geeks.com/how-to/how-to-update-python-version
- https://4geeks.com/how-to/how-to-square-a-number-in-python
- https://4geeks.com/how-to/python-list-extend-method
- https://4geeks.com/how-to/javascript-array-every
- https://4geeks.com/how-to/what-is-the-difference-between-java-and-javascript
- https://4geeks.com/es/how-to/como-habilitar-javascript
- https://4geeks.com/how-to/how-to-reverse-a-list-in-python
- https://4geeks.com/es/how-to/array-vacio-javascript
- https://4geeks.com/how-to/how-to-concatenate-strings-on-python
- https://4geeks.com/how-to/javascript-array-some-method
- https://4geeks.com/how-to/javascript-array-intersection
- https://4geeks.com/how-to/what-does-double-slash-mean-in-python-floor
- https://4geeks.com/how-to/how-to-call-a-function-in-javascript
- https://4geeks.com/es/how-to/como-clonar-un-repositorio-de-github
- https://4geeks.com/how-to/regex-for-whitespace
- https://4geeks.com/es/how-to/regex-para-no-match
- https://4geeks.com/how-to/how-to-disable-javascript-in-tor
- https://4geeks.com/how-to/how-to-multiply-in-Python
