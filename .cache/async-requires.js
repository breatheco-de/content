// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/home/ubuntu/workspace/content/src/templates/blog-post.js"),
  "component---src-templates-lesson-js": require("gatsby-module-loader?name=component---src-templates-lesson-js!/home/ubuntu/workspace/content/src/templates/lesson.js"),
  "component---src-templates-tags-js": require("gatsby-module-loader?name=component---src-templates-tags-js!/home/ubuntu/workspace/content/src/templates/tags.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/ubuntu/workspace/content/src/pages/404.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/home/ubuntu/workspace/content/src/pages/about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/ubuntu/workspace/content/src/pages/index.js"),
  "component---src-pages-lessons-js": require("gatsby-module-loader?name=component---src-pages-lessons-js!/home/ubuntu/workspace/content/src/pages/lessons.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/home/ubuntu/workspace/content/src/pages/page-2.js"),
  "component---src-pages-tags-js": require("gatsby-module-loader?name=component---src-pages-tags-js!/home/ubuntu/workspace/content/src/pages/tags.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/ubuntu/workspace/content/.cache/json/layout-index.json"),
  "error-hola-error.json": require("gatsby-module-loader?name=path---error-hola-error!/home/ubuntu/workspace/content/.cache/json/error-hola-error.json"),
  "lesson-about-react-js.json": require("gatsby-module-loader?name=path---lesson-about-react-js!/home/ubuntu/workspace/content/.cache/json/lesson-about-react-js.json"),
  "how-to-how-to-assets.json": require("gatsby-module-loader?name=path---how-to-how-to-assets!/home/ubuntu/workspace/content/.cache/json/how-to-how-to-assets.json"),
  "tags-fale.json": require("gatsby-module-loader?name=path---tags-fale!/home/ubuntu/workspace/content/.cache/json/tags-fale.json"),
  "tags-animals.json": require("gatsby-module-loader?name=path---tags-animals!/home/ubuntu/workspace/content/.cache/json/tags-animals.json"),
  "tags-alejandro.json": require("gatsby-module-loader?name=path---tags-alejandro!/home/ubuntu/workspace/content/.cache/json/tags-alejandro.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/ubuntu/workspace/content/.cache/json/404.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/home/ubuntu/workspace/content/.cache/json/about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/ubuntu/workspace/content/.cache/json/index.json"),
  "lessons.json": require("gatsby-module-loader?name=path---lessons!/home/ubuntu/workspace/content/.cache/json/lessons.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/home/ubuntu/workspace/content/.cache/json/page-2.json"),
  "tags.json": require("gatsby-module-loader?name=path---tags!/home/ubuntu/workspace/content/.cache/json/tags.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/ubuntu/workspace/content/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/ubuntu/workspace/content/.cache/layouts/index.js")
}