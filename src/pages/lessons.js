import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

export default ({ data }) => {
  console.log("PAGE DATA: ",data);
  
  const path = "lesson";
  const post = data.allMarkdownRemark.edges.map(({node}, key)=>{
    var result = node.fields.slug.split("/");
    if(result[1] === path){
      return (
        <div className="col-md-4" key={key}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}{" "}</h3>
          </Link>
            <p>{node.excerpt}</p>
        </div>
      );
    }
    return '';
  });

  return (
      <div>
        <h1>Publicaciones para Courses</h1>
        <div className="row">
          { post }
        </div>
      </div>
  );
};

export const query = graphql`
  query MyQueryLesson{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;