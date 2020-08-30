import React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Portfollio = ({ location }) => {
  const portfolioQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          filter: {frontmatter: {postType: {eq: "project"}}},
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                postType
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 1140, maxHeight: 1140) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(portfolioQuery);
  const siteTitle = portfolioQuery.site.siteMetadata.title;
  const posts = portfolioQuery.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <div className="flex">
        {posts.map(({ node }) => {
          const slug = node.fields.slug
          const title = node.frontmatter.title || slug;
          return (
            <div className="card project-card" key={slug}>
              <Img className="headerImg" fluid={node.frontmatter.thumbnail.childImageSharp.fluid}/>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={slug}>
                    {title}
                  </Link>
                </h3>
                <small style={{
                  fontWeight: "900",
                }}>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Portfollio