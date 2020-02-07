import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar";

class TalksPage extends React.Component {
  render() {
    const { data } = this.props
    const author = data.site.siteMetadata.author
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Talks" />
        <NavBar />
        
        <h1>Talks</h1>
        <div>
            <p>Code Readability and Swift - 6th CocoaHeads Recife</p>
            <p>How to build a Web App in Elm - DevFest Recife</p>
        </div>
      </Layout>
    )
  }
}

export default TalksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
