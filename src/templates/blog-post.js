import React from "react"
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ShareToMedia from "../components/shareToMedia";
import { rhythm, scale } from "../utils/typography";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const postTitle = post.frontmatter.title;
  const postDescription = post.frontmatter.description;
  const { previous, next } = pageContext
  const postUrl = location.href;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={postTitle}
        description={ postDescription || post.excerpt}
      />
      <article>
        <header style={{
          marginBottom: "5%",
        }}>
          <h2
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {postTitle}
          </h2>
          <p
            style={{
              ...scale(-1 / 9),
              display: `block`,
              marginTop: "10px",
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      <ShareToMedia 
      url = {postUrl}
      title = {siteTitle}
      description = {postDescription || post.excerpt}
      />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
