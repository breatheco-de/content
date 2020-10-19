import React, { useState } from "react";
import Link from "gatsby-link";
import { POSSIBLE_STATUS } from "../utils/variables"
import { graphql } from 'gatsby';

const repo = "https://github.com/breatheco-de/content/blob/master/src/content";
export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lessons: props.data.allMarkdownRemark.edges,
            status: null
        };
      }
      componentDidMount(){
        this.setState({ lessons: this.props.data.allMarkdownRemark.edges || [] });
      }
      render(){
        const {data} = this.props;
        console.log(this.state.lessons)
        return (<div className="container mt-5">
            <img src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128" alt="BreatheCode Logo" />
            <h1>Lesson Index:</h1>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control"
                    onChange={e => this.setState({
                        lessons: data.allMarkdownRemark.edges.filter(l => l.node.frontmatter ? l.node.frontmatter.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 : true)
                    })}
                    placeholder="Search lesson"
                />
              </div>
              <div className="col">
                <select className="form-control"
                    onChange={e => this.setState({
                      status: e.target.value
                    })}
                >
                  <option value={null}>Pick a status</option>
                  {POSSIBLE_STATUS.map(o => <option value={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <table className="table table-striped">
            {this.state.lessons.filter(l => this.state.status === null || l.node.frontmatter.status === this.state.status).sort((a,b) => a.node.frontmatter.title > b.node.frontmatter.title ? 1 : -1).map(({ node }) => 
                <tr key={node.id}>
                  <td style={{ width: "20px" }}><img style={{ margin: "0" }} src={`https://www.countryflags.io/${node.fields.lang == "en" ? "us":node.fields.lang}/flat/16.png`} /></td>
                  <td>
                    <Link
                        to={"/"+node.fields.lang+"/"+node.fields.type+"/"+node.fields.slug}
                        style={{ textDecoration: `none`, color: `inherit` }}
                    >
                        {node.frontmatter.title}
                    </Link>
                  </td>
                  <td>{node.frontmatter.status || "published"}</td>
                  <td><a href={repo+"/"+node.fields.type+"/"+node.fields.slug+"."+node.fields.lang+".md"}>✎</a></td>
                </tr>
            )}
            <Link to="/tags">All tags</Link>
            </table>
        </div>);
    }
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
            status
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            type
            lang
          }
          excerpt
        }
      }
    }
  }
`;