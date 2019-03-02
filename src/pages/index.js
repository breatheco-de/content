import React from "react";
import Link from "gatsby-link";
import { graphql } from 'gatsby';
export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.type+"/"+node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <p>
              {node.frontmatter.title}
            </p>
          </Link>
        </div>
      )}
      <Link to="/tags">All tags</Link>
    </div>
  );
};

export const query = graphql`
  query IndexQueryy {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            type
          }
          excerpt
        }
      }
    }
  }
`;