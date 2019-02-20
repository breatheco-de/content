import React from "react";
import { graphql } from 'gatsby';
import rehypeReact from "rehype-react";
import { Cover } from "../components/cover/cover.jsx";
import { BeforeAfter } from "../components/beforeafter/beforeafter.jsx";
import { Layout } from "../components/layout/layout.jsx";
import { EditOnGithub } from "../components/editongithub/EditOnGithub.jsx";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "cover": Cover, "before-after": BeforeAfter }
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  const seo = {
    title: post.frontmatter.title,
    description: post.frontmatter.subtitle,
    url: post.frontmatter.original_url,
    image: post.frontmatter.thumb
  };
  return (
    <Layout seo={seo}>
      <div>
        <Cover 
          title={post.frontmatter.title} 
          background={post.frontmatter.cover} 
          textColor={post.frontmatter.textColor} 
          subtitle={post.frontmatter.subtitle}
          author={post.frontmatter.author}
          time={post.fields.readingTime.text}
          status={post.frontmatter.status}
        />
        <EditOnGithub url={data.site.siteMetadata.contentGithubURL + encodeURI(post.fields.slug.substring(0, post.fields.slug.length - 1)) + '.md' } />
        <div className="post lesson">
          {renderAst(post.htmlAst)}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HowToQuery($slug: String!) {
    site {
      siteMetadata {
        contentGithubURL
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        subtitle
        cover
        status
        author
        thumb
        textColor
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`;