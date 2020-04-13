const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
var md = require('markdown-it');
var fa = require('markdown-it-fontawesome');
const fs = require('fs');
md().use(fa);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const meta = getMetaFromPath(node);
    if(meta){
      createNodeField({ node, name: `lang`, value: meta.lang });
      createNodeField({
        node, name: `slug`,
        value: meta.slug,
      });
      createNodeField({
        node, name: `type`,
        value: meta.type,
      });
      createNodeField({
        node, name: `url`,
        value: meta.type + "/" + meta.slug,
      });
    }
  }
};


const buildTranslations = (nodes) => {
  let translations = {};
  nodes.forEach(({ node }) => {
    const meta = getMetaFromPath(node);
    if(typeof translations[meta.urlSlug] === 'undefined') translations[meta.urlSlug] = {};
    translations[meta.urlSlug][meta.lang] = !meta.customSlug ? meta.lang+"/" : "";
    translations[meta.urlSlug][meta.lang] += meta.type + "/" + meta.slug;
  });
  return translations;
};
// exports.onPostBuild = () => {
//   fs.copySync(
//     path.join(__dirname, "/src/locales"),
//     path.join(__dirname, "/public/locales")
//   );
// };

const getMetaFromPath = ({ fileAbsolutePath, frontmatter }) => {
  const regex = /\/([\w-]*)\/([\w-\]\[]*)\.?(\w{1,2})?\.md/gm;
  let m = regex.exec(fileAbsolutePath);
  if(!m) return false;

  const lang = m[3] || "en";
  const customSlug = (typeof frontmatter.slug === "string");
  const urlSlug = m[2];// + (lang == "es" ? "-es": "");
  const slug = (customSlug) ? frontmatter.slug : urlSlug;
  let meta = {
    lang, urlSlug, customSlug, slug,
    type: m[1],
    template: path.resolve(`./src/templates/default.js`),
  };
  if(meta.type == "lesson") meta.template = path.resolve(`./src/templates/lesson.js`);
  return meta;
};

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions;
  const tagTemplate = path.resolve("src/templates/tags.js");

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fileAbsolutePath
              fields {
                lang
                slug
                url
              }
              frontmatter{
                tags
                slug
              }
            }
          }
        }
      }
    `).then(result => {

      const translations = buildTranslations(result.data.allMarkdownRemark.edges);
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const meta = getMetaFromPath(node);
        if(meta){
          if(meta.lang === "en" || meta.customSlug){
            createPage({
              path: node.fields.url,
              component: meta.template,
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                url: node.fields.url,
                slug: node.fields.slug,
                lang: meta.lang,
                type: meta.type,
                urlSlug: meta.urlSlug,
                translations: translations[meta.urlSlug]
              },
            });
          }
          createPage({
            path: meta.lang+"/"+node.fields.url,
            component: meta.template,
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              url: meta.lang+"/"+node.fields.url,
              slug: node.fields.slug,
              lang: meta.lang,
              type: meta.type,
              urlSlug: meta.urlSlug,
              translations: translations[meta.urlSlug]
            },
          });
        }
      });

      const posts = result.data.allMarkdownRemark.edges;
      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });

      resolve();
    }).catch(err => console.error(err));
  });
};