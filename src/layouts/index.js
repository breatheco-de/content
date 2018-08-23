import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'

import './index.css'
import '../scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
require("./remarkdown.css");

const Layout = ({ children, data }) => (
  <div>
    <Helmet
        title={data.site.siteMetadata.title}
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="container 1">
        <div className="row 2">
            <div className="col-md-12 3">
              {children()}
            </div>
        </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
