import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import { graphql } from 'gatsby';

import './layout.css';
import '../../scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
require("prismjs/themes/prism-okaidia.css");

export const Layout = ({ children }) => (
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
        <Helmet
            title={(typeof data == 'undefined') ? '':data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <Header 
          siteTitle={(typeof data == 'undefined') ? '':data.site.siteMetadata.title} 
          hidden={true} />
        <div className="container">
          {children}
        </div>
      </div>
   )}
 />
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

