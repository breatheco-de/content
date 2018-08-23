// import React from "react";

// export default ({ data }) => {
//   const post = data.markdownRemark;
//   return (
//     <div>
//       <div className="container">
//         <div className="row post-div-detail">
//           <div className="col-md-12">
//             <h3>{post.frontmatter.title}</h3>
//             <div dangerouslySetInnerHTML={{ __html: post.html }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const query = graphql`
//   query BlogPostQuery($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;