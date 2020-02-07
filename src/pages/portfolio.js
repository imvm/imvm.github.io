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
        <div>
          <h3>[WIP] Pet Reminder (open source <a href="https://www.github.com/imvm/PetReminder">iOS app</a> and landing page)</h3>
          <p>
            App being made to help people remember to give their pet's medicines and vaccines. Still in very early prototype version.<br></br>
            <b>Category</b>: Personal project<br></br>
            <b>Technologies</b>: SwiftUI, Combine, Bitrise, Danger, Elm.
          </p>
        </div>
        <div>
          <h3>NOS iOS App + Vapor dashboard</h3>
          <p>
            An app that helps construction companies manage waste disposal. 
            Made for the Code A City Hackathon.<br></br>
            <b>Category</b>: Hackathon<br></br>
            <b>Team</b>: Yurajanay, Osman, Jorge and César<br></br>
            <b>Technologies</b>: Swift, Vapor.
          </p>
        </div>
        <div>
          <h3>Preveasy</h3>
          <p>
            An app that helps people have easier access to private retirement funds.<br></br>
            Made for the GR1D Recife Hackathon.<br></br>
            <b>Category</b>: Hackathon<br></br>
            <b>Team</b>: Victor, Guilherme, Camilla, and Terry<br></br>
            <b>Technologies</b>: Swift
          </p>
        </div>
        <div>
          <h3>SwimCheck</h3>
          <p>
            An app that helps people check that the water they're going to swim in is actually safe by using water quality data and local weather data.<br></br>
            Made for the Monitoring Coastal Areas with Mapathons and Hackathons event.<br></br>
            <b>Category</b>: Hackathon<br></br>
            <b>Team</b>: Ailton and Breno<br></br>
            <b>Technologies</b>: Swift, Vapor, GeoJSON data + ARCGIS, Dark Sky Weather API
          </p>
        </div>
        <div>
          <h3>Pedalável iOS App</h3>
          <p>
            App that helps cyclists choose safer routes based on historical information about the city's streets.<br></br>
            Won first prize in Recife's CodeCup 2018 hackathon.<br></br>
            <b>Category</b>: Hackathon<br></br>
            <b>Team</b>: Isabel, Nathalia, Augusto and Mateus<br></br>
            <b>Technologies</b>: Swift, MapBox, OpenStreetMaps
          </p>
        </div>
        <div>
          <h3>Onderzees</h3>
          <p>
            Game made to highlight similarities between Brazil and the Netherland.<br></br>
            Made for Noord Game Jam 2019.<br></br>
            <b>Category</b>: Game Jam<br></br>
            <b>Team</b>: Dan, Lavínia, Laura and Deyvson<br></br>
            <b>Technologies</b>: Unity
          </p>
        </div>
        <div>
          <h3>Boi Voador</h3>
          <p>
            Co-op game made to tell one of the most famous stories of Recife in its brief time as a colony of the Netherlands.<br></br>
            Made for Noord Game Jam 2018.<br></br>
            <b>Category</b>: Game Jam<br></br>
            <b>Team</b>: Dan, Lavínia, Laura and Deyvson<br></br>
            <b>Technologies</b>: Unity
          </p>
        </div>
        <div>
          <h3>Dog Filters App</h3>
          <p>
            App made to create instagram style filters for dogs by training a facial recognition model on dog face photos.<br></br>
            <b>Category</b>: Academic project<br></br>
            <b>Technologies</b>: Swift, Vision, CoreML, TuriCreate, AWS EC2.
          </p>
        </div>
        <div>
          <h3>FUZZ iOS App</h3>
          <p>
            App made to help bands get together and play together to make more money.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: Mariama, Elis, and Juliana<br></br>
            <b>Technologies</b>: Swift, AWS Mobile Center
          </p>
        </div>
        <div>
          <h3>VivaMercado iOS App</h3>
          <p>
            App made to help people find the things that are available on Recife's public markets.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: Julia, Victor Leal, and Habacuque<br></br>
            <b>Technologies</b>: Swift
          </p>
        </div>
        <div>
          <h3>That's So You tvOS App</h3>
          <p>
            tvOS party game to get friends to share and remember fun stories and get to know each other better.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: Isabel, Julia, César and Mariama<br></br>
            <b>Technologies</b>: Swift
          </p>
        </div>
        <div>
          <h3>Budhi iOS/watchOS App</h3>
          <p>
            App made to help people break bad habits by getting out and doing stuff.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: Fanny, Hilton, Aline and Beatriz<br></br>
            <b>Technologies</b>: Objective-C, Google Location data, SpriteKit
          </p>
        </div>
        <div>
          <h3>Swift Atoms of Confusion Website</h3>
          <p>
            I am currently no longer participating in this project, but I prepared a <a href="https://swift-atoms-heroku.herokuapp.com/">website</a> for a study of Swift syntax and code understandability.<br></br>
            <b>Category</b>: Academic project<br></br>
            <b>Technologies</b>: Vapor, Bootstrap, PostgreSQL
          </p>
        </div>
        <div>
          <h3>Scrapers</h3>
          <p>
            Once in a while I write spiders and scripts to gather data from the web.<br></br>
            One <a href="https://app.scrapinghub.com/datasets/XM6B9gCgI8q">example</a> is the official bluetooth vendors list from the bluetooth website.<br></br>
            <b>Category</b>: Personal project<br></br>
            <b>Technologies</b>: Python, Scrapy, Scrapy Cloud, Bask, Awk
          </p>
        </div>
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
