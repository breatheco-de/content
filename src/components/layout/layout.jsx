import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../seo';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import { StaticQuery, graphql } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.css';
import '@breathecode/ui-components/dist/main.css';
import './layout.css';
import '../../scss/index.scss';

import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

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
   render={data => {
    return (
      <div>
        <SEO {...seo }/>
        <Navbar
          siteTitle={(typeof data === 'undefined') ? '':data.site.siteMetadata.title}
          hidden={true}
        />
        <div style={{ position: "relative" }}>
            <div className="container">
            {children}
            </div>
        </div>
        <Footer/>
      </div>
   )}}
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

