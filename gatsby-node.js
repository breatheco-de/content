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
    const meta = getMetaFromPath(node.fileAbsolutePath);
    createNodeField({ node, name: `lang`, value: meta.lang });
    createNodeField({
      node, name: `slug`,
      value: meta.type+"/"+((typeof node.frontmatter.slug == 'string') ? node.frontmatter.slug : meta.urlSlug),
    });
  }
};

const getMetaFromPath = (pagePath) => {
  const regex = /\/([\w-]*)\/([\w-\]\[]*)\.?(\w{1,2})?\.md/gm;
  let m = regex.exec(pagePath);
  if(!m) return false;
  let meta = {
    template: path.resolve(`./src/templates/default.js`),
    urlSlug: m[2],
    lang: m[3] || "en",
    type: m[1]
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
              }
              frontmatter{
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if(node.fields.slug){
          const meta = getMetaFromPath(node.fileAbsolutePath);
          if(meta.lang == "en"){
            createPage({
              path: node.fields.slug,
              component: meta.template,
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug
              },
            });
          }
          createPage({
            path: meta.lang+"/"+node.fields.slug,
            component: meta.template,
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
              lang: meta.lang,
              translations: {
                es: "es/"+node.fields.slug,
                en: "en/"+node.fields.slug
              }
            },
          });
        }
      });
      
      // const posts = result.data.allMarkdownRemark.edges;
      // // Tag pages:
      // let tags = [];
      // // Iterate through each post, putting all found tags into `tags`
      // _.each(posts, edge => {
      //   if (_.get(edge, "node.frontmatter.tags")) {
      //     tags = tags.concat(edge.node.frontmatter.tags);
      //   }
      // });
      // // Eliminate duplicate tags
      // tags = _.uniq(tags);

      // // Make tag pages
      // tags.forEach(tag => {
      //   createPage({
      //     path: `/tags/${_.kebabCase(tag)}/`,
      //     component: tagTemplate,
      //     context: {
      //       tag,
      //     },
      //   });
      // });
      
      resolve();
    });
  });
};