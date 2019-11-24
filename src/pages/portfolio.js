import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar";

class PortfolioPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <NavBar />
        <h1>Project Portfolio</h1>
        <h3>Pet Reminder (open source <a href="https://www.github.com/imvm/PetReminder">iOS app</a> and <a href="https://www.github.com/imvm">landing page</a>)</h3>
        <p>Application made to help people remember to give their pet's medicines and vaccines.</p>
        <p>Tools used: SwiftUI, Combine, Elm.</p>
      </Layout>
    )
  }
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
