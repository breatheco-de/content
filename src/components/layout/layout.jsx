import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../seo';
import Header from '../header';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import '../../scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

export const Layout = ({ children, seo }) => (
 <StaticQuery
   query={graphql`
     query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
     }
   `}
   render={data => (
      <div>
        <SEO
            title={(typeof seo.title !== 'undefined') ? seo.title : (typeof data === 'undefined') ? '':data.site.siteMetadata.title}
            description={seo.description || null}
            image={seo.image || null}
            url={seo.url || null}
        />
        <Header 
          siteTitle={(typeof data === 'undefined') ? '':data.site.siteMetadata.title} 
          hidden={true} />
        <div className="container">
          {children}
        </div>
      </div>
   )}
 />
);

Layout.propTypes = {
  children: PropTypes.node,
  seo: PropTypes.object
};

Layout.defaultProps = {
  seo: null
};

export default Layout;

