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
        <p>Here is a subset of the things that I've worked on that I can remember. I enjoy working with people and I enjoy challenges. I will update it with screenshots of the projects when possible.</p>
        <h3>[WIP] Pet Reminder (open source <a href="https://www.github.com/imvm/PetReminder">iOS app</a> and landing page)</h3>
        <p>App being made to help people remember to give their pet's medicines and vaccines. Still in very early prototype version.</p>
        <p><b>Using</b>: SwiftUI, Combine, Elm.</p>
        <h3>NOS iOS App + Vapor dashboard</h3>
        <p>App made to help construction companies manage waste disposal.</p>
        <p>Hackathon group project with Yurajanay, Osman, Jorge and César.</p>
        <p><b>Using</b>: Swift, Vapor.</p>
        <h3>Preveasy</h3>
        <p>App made to help people have easier access to private retirement funds.</p>
        <p>GR1D Hackathon Recife 2019 group project with Victor, Guilherme, Camilla, and Terry.</p>
        <p><b>Using</b>: Swift, Vapor.</p>
        <p>Hackathon group project with Isabel, Nathalia, Augusto and Mateus.</p>
        <h3>Pedalável iOS App</h3>
        <p>App made to help cyclists choose safer routes based on historical information about the city's streets.</p>
        <p>Won first prize in Recife's CodeCup 2018 hackathon.</p>
        <p><b>Using</b>: Swift, MapBox, OpenStreetMaps.</p>
        <h3>Onderzees</h3>
        <p>Game made to highlight similarities between Brazil and the Netherland.</p>
        <p><b>Using</b>: Unity.</p>
        <p>Noord Game Jam 2019 group project with Dan, Lavínia, Laura and Deyvson.</p>
        <h3>Boi Voador</h3>
        <p>Co-op game made to tell one of the most famous stories of Recife in its brief time as a colony of the Netherlands.</p>
        <p><b>Using</b>: Unity.</p>
        <p>Noord Game Jam 2018 group project with Dan, Lavínia, Laura and Deyvson.</p>
        <h3>Dog Filters</h3>
        <p>App made to create instagram style filters for dogs by training a facial recognition model on dog face photos.</p>
        <p><b>Using</b>: Swift, Vision, CoreML, TuriCreate.</p>
        <h3>FUZZ iOS App</h3>
        <p>App made to help bands get together and play together to make more money.</p>
        <p><b>Using</b>: Swift, AWS Mobile Center.</p>
        <p>Apple Developer Academy - UFPE group project with Mariama, Elis, and Juliana.</p>
        <h3>VivaMercado iOS App</h3>
        <p>App made to help people find the things that are available on Recife's public markets.</p>
        <p><b>Using</b>: Swift.</p>
        <p>Apple Developer Academy - UFPE group project with Julia, Victor Leal, and Habacuque.</p>
        <h3>That's So You tvOS App</h3>
        <p>tvOS party game to get friends to share and remember fun stories and get to know each other better.</p>
        <p><b>Using</b>: Swift.</p>
        <p>Apple Developer Academy - UFPE group project with Isabel, Julia, César and Mariama.</p>
        <h3>Budhi iOS/watchOS App</h3>
        <p>App made to help people break bad habits by getting out and doing stuff.</p>
        <p><b>Using</b>: Swift, Google Location data, SpriteKit.</p>
        <p>Apple Developer Academy - UFPE group project with Fanny, Hilton, Aline and Beatriz.</p>
        <h3>Swift Atoms of Confusion Website</h3>
        <p>I am currently no longer participating in this project, but I prepared a <a href="https://swift-atoms-heroku.herokuapp.com/">website</a> for a study of Swift syntax and code understandability.</p>
        <p><b>Using</b>: Vapor, Bootstrap, PostgreSQL.</p>
        <h3>Scrapers</h3>
        <p>I enjoy scraping data from websites from time to time using Scrapy. One <a href="https://app.scrapinghub.com/datasets/XM6B9gCgI8q">example</a> is the bluetooth official vendors list from the bluetooth website.</p>
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
