import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data);
  
  const path = "assets";
  const post = data.allMarkdownRemark.edges.map(({node}, key)=>{
    var result = node.fields.slug.split("/");
    if(result[1] == path){
      return (
        <div className="col-md-4" key={key}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}{" "}</h3>
          </Link>
            <p>{node.excerpt}</p>
        </div>
      )
      console.log(node.fields.slug);
    }
  });

  return (
      <div>
        <h1>Publicaciones para Assets</h1>
        <div className="row">
          { post }
        </div>
      </div>
  )
}

export const query = graphql`
  query MyQueryAssets{
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
`

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import Link from 'gatsby-link'

// export default ({ data }) => {
//   console.log(data);
  
//   const category = "assets";
//   const post = data.allMarkdownRemark.edges.map(({node}, key)=>{
//     if(node.frontmatter.category == category){
//       return (
//         <div className="col-md-4" key={key}>
//           <Link to={node.frontmatter.path} >
//               <h3>{node.frontmatter.title}</h3>
//           </Link>
//           <p>{node.excerpt}</p>
//         </div>
//       )
//     }

//   });

//   return (
//       <div className="pt-5">
//         <h3>Publicaciones para Assets</h3>
//         <div className="row">
//           { post }
//         </div>
//       </div>
//   )
// }

// export const query = graphql`
//   query MyQueryAssets{
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             category
//             path
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `