import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar";

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const author = data.site.siteMetadata.author
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <NavBar />
        
        <h1>About me</h1>
        <div>
            <Image 
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                marginBottom: 0,
                borderRadius: 100,
                marginRight: 20,
                float: `left`,
                minWidth: 200,
                minHeight: 200,
                }}
            />
            <p>I am a Software Engineer in Recife, Brazil. Most of my work involves iOS development, but my interests also include FP, Web, Cloud, DevOps, AI or just about anything else related to cool new technologies. I also try to go to as many hackathons as possible.</p>
            <p>You can contact me at ianmanor.dev@gmail.com</p>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
