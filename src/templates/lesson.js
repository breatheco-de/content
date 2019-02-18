import React from "react";
import { graphql } from 'gatsby';
import rehypeReact from "rehype-react";
import { Cover } from "../components/cover/cover.jsx";
import { Layout } from "../components/layout/layout.jsx";
import { BeforeAfter } from "../components/beforeafter/beforeafter.jsx";

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
          time={post.fields.readingTime.text}
          status={post.frontmatter.status}
        />
        <div className="post lesson">
          {renderAst(post.htmlAst)}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query LessonQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        subtitle
        cover
        status
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
