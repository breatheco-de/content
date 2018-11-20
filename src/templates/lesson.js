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
  return (
    <Layout>
      <div>
        <Cover 
          title={post.frontmatter.title} 
          background={post.frontmatter.cover} 
          textColor={post.frontmatter.textColor} 
          subtitle={post.frontmatter.subtitle}
          time={post.fields.readingTime.text}
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