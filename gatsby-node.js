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
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
  
};

const getTemplate = (pagePath) => {
  if(pagePath.indexOf('/content/lesson/') != -1){
    return path.resolve(`./src/templates/lesson.js`);
  }
  return path.resolve(`./src/templates/blog-post.js`);
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
        
        createPage({
          path: node.fields.slug,
          component: getTemplate(node.fileAbsolutePath),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          },
        });
      });
      resolve();
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
    });
  });
};