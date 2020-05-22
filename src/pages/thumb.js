import React, { useEffect, useState } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import withLocation from "../components/withLocation";
import SEO from '../components/seo';

const Thumb = ({ data, search }) => {

    const [post,setPost] = useState(null);

    useEffect(() => {
        const slug = (typeof search.slug === 'string' || search.slug !== '');
        const post = data.allMarkdownRemark.edges.find(({node}, key)=>{
            if(node.fields.type === "lesson" && typeof(slug) !== 'undefined'){
                if(node.fields.slug === search.slug) return true;
            }

            return false;
        });
        if(post) setPost(post);
    }, []);

    if(!post) return <p>Loading</p>;
    return <div className="thumb">
            <SEO
                bodyClass="gradient"
            />
            <div>
                <h1>{post.node.frontmatter.title}{" "}</h1>
                { post.node.authors ? 
                    <div class="author"> By {post.node.authors.join(" & ")} </div> 
                    :
                    <div class="author"> By @alesanchezr </div> 
                }
            </div>
        </div>
  };

export const query = graphql`
  query MyQueryThumb{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            authors
          }
          fields {
            slug
            url
            type
          }
          excerpt
        }
      }
    }
  }
`;

export default withLocation(Thumb)