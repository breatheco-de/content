import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, hidden }) => (hidden) ? (<span></span>):(
<div className="header color">
    <nav className="navbar navbar-expand-lg navbar-light">
        <h1 className="title-site" style={{ margin: 0 }}>
            <Link
                to="/"
                style={{
                    color: 'black',
                    textDecoration: 'none',
                }}
            >
            {siteTitle}
            </Link>
        </h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active mb-0">
                <Link to="/assets">
                    <p className="nav-link">Assets</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/courses">
                    <p className="nav-link">Courses</p>
                </Link>
            </li>
            </ul>
        </div>
    </nav>
</div>
);

export default Header
