// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/ubuntu/workspace/content/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/ubuntu/workspace/content/src/templates/blog-post.js")),
  "component---src-templates-lesson-js": preferDefault(require("/home/ubuntu/workspace/content/src/templates/lesson.js")),
  "component---src-templates-tags-js": preferDefault(require("/home/ubuntu/workspace/content/src/templates/tags.js")),
  "component---src-pages-404-js": preferDefault(require("/home/ubuntu/workspace/content/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/ubuntu/workspace/content/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/ubuntu/workspace/content/src/pages/index.js")),
  "component---src-pages-lessons-js": preferDefault(require("/home/ubuntu/workspace/content/src/pages/lessons.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/ubuntu/workspace/content/src/pages/page-2.js")),
  "component---src-pages-tags-js": preferDefault(require("/home/ubuntu/workspace/content/src/pages/tags.js"))
}

exports.json = {
  "layout-index.json": require("/home/ubuntu/workspace/content/.cache/json/layout-index.json"),
  "error-hola-error.json": require("/home/ubuntu/workspace/content/.cache/json/error-hola-error.json"),
  "lesson-about-react-js.json": require("/home/ubuntu/workspace/content/.cache/json/lesson-about-react-js.json"),
  "how-to-how-to-assets.json": require("/home/ubuntu/workspace/content/.cache/json/how-to-how-to-assets.json"),
  "tags-fale.json": require("/home/ubuntu/workspace/content/.cache/json/tags-fale.json"),
  "tags-animals.json": require("/home/ubuntu/workspace/content/.cache/json/tags-animals.json"),
  "tags-alejandro.json": require("/home/ubuntu/workspace/content/.cache/json/tags-alejandro.json"),
  "404.json": require("/home/ubuntu/workspace/content/.cache/json/404.json"),
  "about.json": require("/home/ubuntu/workspace/content/.cache/json/about.json"),
  "index.json": require("/home/ubuntu/workspace/content/.cache/json/index.json"),
  "lessons.json": require("/home/ubuntu/workspace/content/.cache/json/lessons.json"),
  "page-2.json": require("/home/ubuntu/workspace/content/.cache/json/page-2.json"),
  "tags.json": require("/home/ubuntu/workspace/content/.cache/json/tags.json"),
  "404-html.json": require("/home/ubuntu/workspace/content/.cache/json/404-html.json")
}