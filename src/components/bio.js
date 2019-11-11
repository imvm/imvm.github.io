/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        marginBottom: rhythm(2.5),
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      alt={author}
      style={{
        marginBottom: 0,
        minWidth: 200,
        minHeight: 200,
      }}
    />
      <p>
        Written by <strong>{author}</strong>.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow me on twitter if you'd like
        </a>
      </p>
    </div>
  )
}

export default Bio
