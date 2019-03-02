module.exports = {
  siteMetadata: {
    title: "BreatheCode",
    titleTemplate: "%s - BreatheCode",
    description:
      "Accelerate the you learn and evolve your coding skills.",
    url: "https://www.breathco.de", // No trailing slash allowed!
    contentGithubURL: "https://github.com/breatheco-de/content/tree/master/src/content", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@breatehcode",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-574Z6C5",
        includeInDevelopment: false
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/Typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-reading-time',
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 200,
              linkImagesToOriginal: true,
              showCaptions: true,
              wrapperStyle: 'text-align:center;'
            },
          },
          {
            resolve:"gatsby-remark-component",
            options: { components: ["cover", "beforeafter", "spliter"] }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: '>',
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: { sh: "bash" },
              showLineNumbers: true
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: "gatsby-remark-emoji",
            options: {
              size: 64
            }
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                danger: {
                  classes: "alert alert-danger",
                },
                info: {
                  classes: "alert alert-primary",
                },
                warning: {
                  classes: "alert alert-warning",
                },
                demo: {
                  classes: "alert alert-primary alert-demo",
                },
              },
            },
          },
          {
              resolve: 'gatsby-plugin-react-svg',
              options: {
                  rule: {
                    include: /assets/
                  }
              }
          }
        ],
      },
    },
  ],
};