import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

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
            <b>Team</b>: 1 developer, 1 designer, 1 manager, 2 architects<br></br>
            <b>Technologies</b>: Swift, Vapor.
          </p>
        </div>
        <div>
          <h3>Preveasy</h3>
          <p>
            An app that helps people have easier access to private retirement funds.<br></br>
            Made for the GR1D Recife Hackathon.<br></br>
            <b>Category</b>: Hackathon<br></br>
            <b>Team</b>: 3 developers, 1 designer, 1 economist<br></br>
            <b>Technologies</b>: Swift
          </p>
        </div>
        <div>
          <h3>SwimCheck</h3>
          <p>
            An app that helps people check that the water they're going to swim in is actually safe by using water quality data and local weather data.<br></br>
            Made for the Monitoring Coastal Areas with Mapathons and Hackathons event.<br></br>
            <b>Category</b>: Hackathon<br></br>
            <b>Team</b>: 1 architect, 2 developers <br></br>
            <b>Technologies</b>: Swift, Vapor, GeoJSON data + ARCGIS, Dark Sky Weather API
          </p>
        </div>
        <div>
          <h3>Pedalável iOS App</h3>
          <p>
            App that helps cyclists choose safer routes based on historical information about the city's streets.<br></br>
            Won first prize in Recife's CodeCup 2018 hackathon.<br></br>
            <b>Category</b>: Hackathon<br></br>
            <b>Team</b>: 4 developers, 1 designer<br></br>
            <b>Technologies</b>: Swift, MapBox, OpenStreetMaps
          </p>
        </div>
        <div>
          <h3>Onderzees</h3>
          <p>
            Game made to highlight similarities between Brazil and the Netherland.<br></br>
            Made for Noord Game Jam 2019.<br></br>
            <b>Category</b>: Game Jam<br></br>
            <b>Team</b>: 3 developers, 2 designers<br></br>
            <b>Technologies</b>: Unity
          </p>
        </div>
        <div>
          <h3>Boi Voador</h3>
          <p>
            Co-op game made to tell one of the most famous stories of Recife in its brief time as a colony of the Netherlands.<br></br>
            Made for Noord Game Jam 2018.<br></br>
            <b>Category</b>: Game Jam<br></br>
            <b>Team</b>: 3 developers, 2 designers<br></br>
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
          <h3>
            <Image
              fixed={data.fuzzAppIcon.childImageSharp.fixed}
              alt="Palco Fuzz App Icon"
              style={{
                borderRadius: 10,
                marginRight: 10,
                boxShadow: `0px 0px 1px 0 #000000`
              }}
            />
            Palco FUZZ iOS App
          </h3>
          <p>
            App made to help bands get together and play together to make more money.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: 3 developers, 1 designer <br></br>
            <b>Technologies</b>: Swift, AWS Mobile Center
          </p>
          <Image
            fixed={data.fuzzContact.childImageSharp.fixed}
            alt="Fuzz Contact"
            style={{
              marginRight: 10,
              blurRadius: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.fuzzDiscover.childImageSharp.fixed}
            alt="Fuzz Discover"
            style={{
              marginRight: 10,
              blurRadius: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.fuzzOrganize.childImageSharp.fixed}
            alt="Fuzz Organize"
            style={{
              marginRight: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.fuzzPropose.childImageSharp.fixed}
            alt="Fuzz Propose"
            style={{
              marginRight: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.fuzzRegister.childImageSharp.fixed}
            alt="Fuzz Register"
            style={{
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
        </div>
        <div>
          <h3>
            <Image
              fixed={data.vivaMercadoAppIcon.childImageSharp.fixed}
              alt="Viva Mercado App Icon"
              style={{
                borderRadius: 10,
                marginRight: 10,
                boxShadow: `0px 0px 1px 0 #000000`
              }}
            />
            VivaMercado iOS App
          </h3>
          <p>
            App made to help people find the things that are available on Recife's public markets.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: 3 developers, 1 designer <br></br>
            <b>Technologies</b>: Swift
          </p>
          <Image
            fixed={data.vivaMercadoHome.childImageSharp.fixed}
            alt="Viva Mercado Home"
            style={{
              marginRight: 10,
              blurRadius: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.vivaMercadoDetail.childImageSharp.fixed}
            alt="Viva Mercado Detail"
            style={{
              marginRight: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.vivaMercadoShopsDetail.childImageSharp.fixed}
            alt="Viva Mercado Shop Detail"
            style={{
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
        </div>
        <div>
          <h3>
            <Image
              fixed={data.thatsSoYouAppIcon.childImageSharp.fixed}
              alt="That's So You App Icon"
              style={{
                borderRadius: 10,
                marginRight: 10,
                boxShadow: `0px 0px 1px 0 #000000`
              }}
            />
              That's So You tvOS App
          </h3>
          <p>
            tvOS party game to get friends to share and remember fun stories and get to know each other better.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: 4 developers, 1 designer <br></br>
            <b>Technologies</b>: Swift
          </p>
          <Image
            fixed={data.thatsSoYouAvatars.childImageSharp.fixed}
            alt="Fuzz Discover"
            style={{
              marginRight: 10,
              blurRadius: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.thatsSoYouPrompt.childImageSharp.fixed}
            alt="Fuzz Register"
            style={{
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
        </div>
        <div>
          <h3>
            <Image
              fixed={data.budhiAppIcon.childImageSharp.fixed}
              alt="Budhi App Icon"
              style={{
                borderRadius: 10,
                marginRight: 10,
                boxShadow: `0px 0px 1px 0 #000000`
              }}
            />
            Budhi iOS/watchOS App
          </h3>
          <p>
            App made to help people break bad habits by getting out and doing stuff.<br></br>
            <b>Category</b>: Apple Developer Academy - UFPE project<br></br>
            <b>Team</b>: 3 developers, 2 designers<br></br>
            <b>Technologies</b>: Objective-C, Google Location data, SpriteKit
          </p>
          <Image
            fixed={data.budhiMain.childImageSharp.fixed}
            alt="Budhi Main"
            style={{
              marginRight: 10,
              blurRadius: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.budhiPrompt.childImageSharp.fixed}
            alt="Budhi Prompt"
            style={{
              marginRight: 10,
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
          <Image
            fixed={data.budhiPlaces.childImageSharp.fixed}
            alt="Budhi Places"
            style={{
              boxShadow: `0px 0px 1px 0 #000000`
            }}
          />
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
            One <a href="https://app.scrapinghub.com/datasets/XM6B9gCgI8q">example</a> is the official Bluetooth vendors list from the Bluetooth website.<br></br>
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
    budhiAppIcon: file(absolutePath: { regex: "/Budhi/appicon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    budhiLoading: file(absolutePath: { regex: "/Budhi/loading.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    budhiMain: file(absolutePath: { regex: "/Budhi/main.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    budhiPlaces: file(absolutePath: { regex: "/Budhi/places.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    budhiPrompt: file(absolutePath: { regex: "/Budhi/prompt.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fuzzAppIcon: file(absolutePath: { regex: "/Palco Fuzz/appicon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fuzzContact: file(absolutePath: { regex: "/Palco Fuzz/contact.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fuzzDiscover: file(absolutePath: { regex: "/Palco Fuzz/discover.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fuzzOrganize: file(absolutePath: { regex: "/Palco Fuzz/organize.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fuzzPropose: file(absolutePath: { regex: "/Palco Fuzz/propose.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fuzzRegister: file(absolutePath: { regex: "/Palco Fuzz/register.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    thatsSoYouAppIcon: file(absolutePath: { regex: "/That's So You/logo.JPG/" }) {
      childImageSharp {
        fixed(width: 83, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    thatsSoYouAvatars: file(absolutePath: { regex: "/That's So You/avatars.png/" }) {
      childImageSharp {
        fixed(width: 480, height: 270) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    thatsSoYouChristmasPrompt: file(absolutePath: { regex: "/That's So You/christmas_prompt.png/" }) {
      childImageSharp {
        fixed(width: 480, height: 270) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    thatsSoYouChristmas: file(absolutePath: { regex: "/That's So You/christmas.png/" }) {
      childImageSharp {
        fixed(width: 480, height: 270) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    thatsSoYouPrompt: file(absolutePath: { regex: "/That's So You/prompt.png/" }) {
      childImageSharp {
        fixed(width: 480, height: 270) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vivaMercadoAppIcon: file(absolutePath: { regex: "/VivaMercado/appicon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vivaMercadoDetail: file(absolutePath: { regex: "/VivaMercado/detail.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vivaMercadoShops: file(absolutePath: { regex: "/VivaMercado/shops.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vivaMercadoShopsDetail: file(absolutePath: { regex: "/VivaMercado/shop_detail.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vivaMercadoHome: file(absolutePath: { regex: "/VivaMercado/home.png/" }) {
      childImageSharp {
        fixed(width: 155, height: 276) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`