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
        
        <h3>[Early WIP] Pet Reminder (open source <a href="https://www.github.com/imvm/PetReminder">iOS app</a> and landing page)</h3>
        <p>App being made to help people remember to give their pet's medicines and vaccines. Still in very early prototype version.</p>
        <p><b>Category</b>: Personal project</p>
        <p><b>Technologies</b>: SwiftUI, Combine, Bitrise, Danger, Elm.</p>

        <h3>NOS iOS App + Vapor dashboard</h3>
        <p>An app that helps construction companies manage waste disposal.</p>
        <p>Made for the Code A City Hackathon.</p>
        <p><b>Category</b>: Hackathon</p>
        <p><b>Team</b>: Yurajanay, Osman, Jorge and César</p>
        <p><b>Technologies</b>: Swift, Vapor.</p>

        <h3>Preveasy</h3>
        <p>An app that helps people have easier access to private retirement funds.</p>
        <p>Made for the GR1D Recife Hackathon.</p>
        <p><b>Category</b>: Hackathon</p>
        <p><b>Team</b>: Victor, Guilherme, Camilla, and Terry</p>
        <p><b>Technologies</b>: Swift</p>

        <h3>SwimCheck</h3>
        <p>An app that helps people check that the water they're going to swim in is actually safe by using water quality data and local weather data.</p>
        <p>Made for the Monitoring Coastal Areas with Mapathons and Hackathons event.</p>
        <p><b>Category</b>: Hackathon</p>
        <p><b>Team</b>: Ailton and Breno</p>
        <p><b>Technologies</b>: Swift, Vapor, GeoJSON data + ARCGIS, Dark Sky Weather API</p>

        <h3>Pedalável iOS App</h3>
        <p>App that helps cyclists choose safer routes based on historical information about the city's streets.</p>
        <p>Won first prize in Recife's CodeCup 2018 hackathon.</p>
        <p><b>Category</b>: Hackathon</p>
        <p><b>Team</b>: Isabel, Nathalia, Augusto and Mateus</p>
        <p><b>Technologies</b>: Swift, MapBox, OpenStreetMaps</p>
        
        <h3>Onderzees</h3>
        <p>Game made to highlight similarities between Brazil and the Netherland.</p>
        <p>Made for Noord Game Jam 2019.</p>
        <p><b>Category</b>: Game Jam</p>
        <p><b>Team</b>: Dan, Lavínia, Laura and Deyvson</p>
        <p><b>Technologies</b>: Unity</p>

        <h3>Boi Voador</h3>
        <p>Co-op game made to tell one of the most famous stories of Recife in its brief time as a colony of the Netherlands.</p>
        <p>Made for Noord Game Jam 2018.</p>
        <p><b>Category</b>: Game Jam</p>
        <p><b>Team</b>: Dan, Lavínia, Laura and Deyvson</p>
        <p><b>Technologies</b>: Unity</p>

        <h3>Dog Filters App</h3>
        <p>App made to create instagram style filters for dogs by training a facial recognition model on dog face photos.</p>
        <p><b>Category</b>: Academic project</p>
        <p><b>Technologies</b>: Swift, Vision, CoreML, TuriCreate, AWS EC2.</p>

        <h3>FUZZ iOS App</h3>
        <p>App made to help bands get together and play together to make more money.</p>
        <p><b>Category</b>: Apple Developer Academy - UFPE project</p>
        <p><b>Team</b>: Mariama, Elis, and Juliana</p>
        <p><b>Technologies</b>: Swift, AWS Mobile Center</p>

        <h3>VivaMercado iOS App</h3>
        <p>App made to help people find the things that are available on Recife's public markets.</p>
        <p><b>Category</b>: Apple Developer Academy - UFPE project</p>
        <p><b>Team</b>: Julia, Victor Leal, and Habacuque</p>
        <p><b>Technologies</b>: Swift</p>

        <h3>That's So You tvOS App</h3>
        <p>tvOS party game to get friends to share and remember fun stories and get to know each other better.</p>
        <p><b>Category</b>: Apple Developer Academy - UFPE project</p>
        <p><b>Team</b>: Isabel, Julia, César and Mariama</p>
        <p><b>Technologies</b>: Swift</p>

        <h3>Budhi iOS/watchOS App</h3>
        <p>App made to help people break bad habits by getting out and doing stuff.</p>
        <p><b>Category</b>: Apple Developer Academy - UFPE project</p>
        <p><b>Team</b>: Fanny, Hilton, Aline and Beatriz</p>
        <p><b>Technologies</b>: Objective-C, Google Location data, SpriteKit</p>

        <h3>Swift Atoms of Confusion Website</h3>
        <p>I am currently no longer participating in this project, but I prepared a <a href="https://swift-atoms-heroku.herokuapp.com/">website</a> for a study of Swift syntax and code understandability.</p>
        <p><b>Category</b>: Academic project</p>
        <p><b>Technologies</b>: Vapor, Bootstrap, PostgreSQL</p>

        <h3>Scrapers</h3>
        <p>Once in a while I write spiders and scripts to gather data from the web. One <a href="https://app.scrapinghub.com/datasets/XM6B9gCgI8q">example</a> is collecting the bluetooth official vendors list from the bluetooth website.</p>
        <p><b>Category</b>: Personal project</p>
        <p><b>Technologies</b>: Python, Scrapy, Scrapy Cloud, Bask, Awk</p>
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
