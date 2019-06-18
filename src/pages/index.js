import React from "react";
import Link from "gatsby-link";
import { graphql } from 'gatsby';
export default ({ data }) => {
  return (<div className="container mt-5">
    <img src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128" alt="BreatheCode Logo" />
    <h1>Lesson Index:</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => console.log(node.fields.type+"/"+node.fields.slug) ||
        <li key={node.id}>
          <Link
            to={node.fields.type+"/"+node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
              {node.frontmatter.title}
          </Link>
        </li>
      )}
      <Link to="/tags">All tags</Link>
    </ul>
  </div>);
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