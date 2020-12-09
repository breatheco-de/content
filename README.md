# Content
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)

[![buddy pipeline](https://app.buddy.works/breathecode/content/pipelines/pipeline/149869/badge.svg?token=7fd65f24ee0daa2c60600820880d585a0bf52da8e65b5ef1f886615b58237012 "buddy pipeline")](https://app.buddy.works/breathecode/content/pipelines/pipeline/149869)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/breatheco-de/content.git)

CMS for the BreatheCode Platform

Here is an API of all  the lessons on the platform: https://content.breatheco.de/static/api/lessons.json

## Requirements

#### 1) Markdown based
All the content must be markdown based, to create new articles all you have to do is add a new .md file in markdown syntax.

#### 2) About the URLS

The CMS needs to be able to generate URLs with the following format:
```
https://content.breatheco.de/<type of content>/<article id>
```
For example:
```
  https://content.breatheco.de/lesson/html_explained
  https://content.breatheco.de/error/query_selector_missing_id
  https://content.breatheco.de/how-to/search_in_google
```

Note: more types of content can be added in the future.

### 3) Types of content:

This list of contents is just a draft, some can be deleted or more can be added.

  1. Lessons: Long articles explaining big concepts like: HTML, JS Events, CSS Selectors, etc.
  2. Error: Explanation of a particular error that typically occurs when coding, for example: "Cannot do .map of undefined"
  3. How To: Small articles/videos on different shot how to's, like: How to start a new react.js project.

### Tagging content

Contents can be tagged on the header of the markdown file, you can add as many tags as you want and later people will be able to search by tag.

There are two types of tags: Technology and Category.


### Command Line Interface

A small command-line tool has been developed to help manage the lessons

```
$ node ./src/utils/cli.js update_lesson --slug all --statusTo draft --statusFrom null
$ node ./src/utils/cli.js update_lesson --slug learn-html --statusTo draft --statusFrom null
$ node ./src/utils/cli.js download_images --slug python-syntax --type external_images
$ node ./src/utils/cli.js localize_images --slug python-syntax --type external_images
$ node ./src/utils/cli.js sanitize_lesson --slug all
```

#### Method: sanitize_lesson

Will try to clean and fix any possible issues on the lessons, for example: Date formats

#### Method: update_lesson

| PARAM         | DESCRIPTION |
| ---------     | ----------- |
| --slug        | Every lesson has a slug that identifies it, you can pass `all` if you want to update all at once |
| --statusTo    | change the status of one or all the lessons to a particular one |
| --statusFrom  | only apply changes to lessons with specified status |

#### Method: download_images

| PARAM         | DESCRIPTION |
| ---------     | ----------- |
| --slug        | Every lesson has a slug that identifies it, you can pass `all` if you want to update all at once |
| --type  | external_images or uploadcare |

#### Method: localize_images

Rename the remote image url's with local images (if available), this method is ideal to run after `download_images`

| PARAM         | DESCRIPTION |
| ---------     | ----------- |
| --slug        | Every lesson has a slug that identifies it, you can pass `all` if you want to update all at once |
| --statusTo    | change the status of one or all the lessons to a particular one |
| --statusFrom  | only apply changes to lessons with specified status |

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/10150439?v=4" width="100px;" alt="Madelene Campos"/><br /><sub><b>Madelene Campos</b></sub>](https://madelenecampos.com/)<br />[📖](https://github.com/breatheco-de/content/commits?author=Madelene "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/426452?v=4" width="100px;" alt="Alejandro Sanchez"/><br /><sub><b>Alejandro Sanchez</b></sub>](https://alesanchezr.com)<br />[💻](https://github.com/breatheco-de/content/commits?author=alesanchezr "Code") | [<img src="https://avatars1.githubusercontent.com/u/43814860?v=4" width="100px;" alt="Camilo Contreras "/><br /><sub><b>Camilo Contreras </b></sub>](https://github.com/Camilocoo)<br />[📖](https://github.com/breatheco-de/content/commits?author=camilocoo "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/1026077?v=4" width="100px;" alt="Ignacio Cordoba"/><br /><sub><b>Ignacio Cordoba</b></sub>](https://ve.linkedin.com/in/nachovz)<br />[📖](https://github.com/breatheco-de/content/commits?author=nachovz "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/23489808?v=4" width="100px;" alt="Frank"/><br /><sub><b>Frank</b></sub>](http://www.fdaviz.com)<br />[📖](https://github.com/breatheco-de/content/commits?author=kodi24fever "Documentation") |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

