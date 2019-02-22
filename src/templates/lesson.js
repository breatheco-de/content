import React from "react";
import { graphql } from 'gatsby';
import rehypeReact from "rehype-react";
import { Cover } from "../components/cover/cover.jsx";
import { Layout } from "../components/layout/layout.jsx";
import { BeforeAfter } from "../components/beforeafter/beforeafter.jsx";
import { EditOnGithub } from "../components/editongithub/EditOnGithub.jsx";
import { LanguageSwitcher } from "../components/languageswitcher/LanguageSwitcher.jsx";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "cover": Cover, "before-after": BeforeAfter }
}).Compiler;

const Lesson = (props) => {
  const { data, pageContext, t, i18n } = props;
  const post = data.markdownRemark;
  const { translations } = pageContext;
  const seo = {
    title: post.frontmatter.title,
    description: post.frontmatter.subtitle,
    url: post.frontmatter.original_url,
    image: post.frontmatter.thumb,
    canonical: (post.fields.lang === 'en') ? "/es/" : "/en/"
  };
  console.log(props);
  return (
    <Layout seo={seo}>
      <div>
        <Cover 
          title={post.frontmatter.title} 
          background={post.frontmatter.cover} 
          textColor={post.frontmatter.textColor} 
          subtitle={post.frontmatter.subtitle}
          author={post.frontmatter.author}
          time={post.fields.readingTime.text}
          status={post.frontmatter.status}
        />
        <EditOnGithub url={data.site.siteMetadata.contentGithubURL + encodeURI(post.fields.slug.substring(0, post.fields.slug.length - 1)) + '.md' } />
        <div className="post lesson">
          {renderAst(post.htmlAst)}
        </div>
          <LanguageSwitcher current={post.fields.lang} translations={translations} />
      </div>
    </Layout>
  );
};
export default Lesson;
//export default translate("lesson")(Lesson);

export const query = graphql`
  query LessonQuery($slug: String!, $lang: String!) {
    site {
      siteMetadata {
        contentGithubURL
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }, lang: { eq: $lang}}) {
      htmlAst
      frontmatter {
        title
        slug
        subtitle
        cover
        status
        author
        thumb
        textColor
      }
      fields {
        slug
        lang
        type
        readingTime {
          text
        }
      }
    }
  }
`;
