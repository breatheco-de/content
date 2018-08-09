# Content
CMS for the BreatheCode Platform

## Requierments

#### 1) Markdown based
All the content must be markdown based, to create new articles all you have to do is add a new .md file in markdown syntax.

#### 2) About the URLS

The CMS needs to be able to generate URLs with the following format:
```
https://content.breatheco.de/<type of content>/<article id>
```
For exampe:
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
