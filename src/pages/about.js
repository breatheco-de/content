import React from 'react'

const About = ({data}) => {
    return(
    <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                {
                (node.frontmatter.title == 'about') ? 
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: node.html }} />
                  </div>
                : ''}
            </div>
        ))}
    </div>
  )}
  
  export default About

  export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
// export const query = graphql`
//   query MyQueryName{
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           html
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `