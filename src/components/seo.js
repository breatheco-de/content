import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const SEO = (props) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    titleTemplate,
                    defaultDescription,
                    siteUrl,
                    defaultImage,
                    twitterUsername,
                }
            }
        }) => {
            const seo = {
                ...props,
                title: props.title || defaultTitle,
                description: props.description || defaultDescription,
                image: `${props.image || (siteUrl + defaultImage)}`,
                url: `${siteUrl}/${props.url}`,
                canonical: Object.keys(props.translations)
            };
            console.log("seo: ",seo);
            return (
                <Helmet title={seo.title} titleTemplate={titleTemplate}>
                    <html lang={seo.lang} />
                    <meta name="description" content={seo.description} />
                    {seo.tags && <meta name="keywords" content={seo.tags} /> }
                    <link rel="canonical" href={seo.url} />
                    {seo.canonical.map(l => <link key={l} rel="alternate" hreflang={l} href={"/"+props.translations[l]} />)}
                    {seo.authors && <meta name="author" content={seo.authors} /> }
                    <meta name="image" content={seo.image} />
                    {seo.url && <meta property="og:url" content={seo.url} />}
                    {seo.article && <meta property="og:type" content="article" />}
                    {seo.title && <meta property="og:title" content={seo.title} />}
                    {seo.description && (
                    <meta property="og:description" content={seo.description} />
                    )}
                    {seo.image && <meta property="og:image" content={seo.image} />}
                    <meta name="twitter:card" content="summary_large_image" />
                    {twitterUsername && (
                    <meta name="twitter:creator" content={twitterUsername} />
                    )}
                    {seo.title && <meta name="twitter:title" content={seo.title} />}
                    {seo.description && (
                    <meta name="twitter:description" content={seo.description} />
                    )}
                    {seo.image && <meta name="twitter:image" content={seo.image} />}
                </Helmet>
            );
        }}
    />
);

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};