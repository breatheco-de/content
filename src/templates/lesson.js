import React from "react";

import rehypeReact from "rehype-react"
import { Cover } from "../components/cover/cover.jsx";

const renderAst = new rehypeReact({
  createElement: React.createElement,
//  components: { "cover": Cover }
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Cover 
        title={post.frontmatter.title} 
        subtitle={post.frontmatter.subtitle}
      />
      <div className="post">{renderAst(post.htmlAst)}</div>
    </div>
  );
};

export const query = graphql`
  query LessonQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        subtitle
      }
    }
  }
`;