import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import NavBar from "../components/navbar";
import { rhythm } from '../utils/typography'

class ArchiveIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/archive' : `/archive${currentPage - 1}`
    const nextPage = `/archive${currentPage + 1}`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `iOS`, `swift`, `AWS`, `Elm`]}
        />
        <NavBar />
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          All posts
        </h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/archive${i === 0 ? '' : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
        <Bio />
      </Layout>
    )
  }
}

export default ArchiveIndex

export const pageQuery = graphql`
  query archivePageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`