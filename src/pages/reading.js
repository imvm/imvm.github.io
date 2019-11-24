import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar";

class ReadingPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Reading List" />
        <NavBar />
        <h1>Reading List</h1>
        <p>Reading is one of my favorite hobbies, but sometimes I don't make 
            enough time for it. As an incentive to read more, I plan on keeping 
            this list as a record of my reading activity.</p>
        <h3>Top 3</h3>
        <ul>
            <li>Johnny Got His Gun by Dalton Trumbo.</li>
            <li>Sirens of Titan by Kurt Vonnegut</li>
            <li>The Silmarillion by J.R.R Tolkien</li>
        </ul>
        <h3>Currently reading</h3>
        <ul>
            <li>A carta: Para entender a constituição brasileira by Naercio Menezes Filho and André Portela Souza.</li>
            <li>The Rise and Fall of the Dinosaurs: A New History of a Lost World by Steve Brussate</li>
            <li>Push Notifications by Tutorials by the Scott Grosch and the raywenderlich Tutorial Team.</li>
        </ul>
        <h3>On my backlog</h3>
        <ul>
            <li>The Castle by Franz Kafka</li>
            <li>Bad Blood by John Carreyou.</li>
            <li>Catch and Kill by Ronan Farrow.</li>
        </ul>
        <h3>Recently read</h3>
        <ul>
            <li>Weapons of Math Destruction by Cathy O'Neil</li>
            <li>Microcopy: The Complete Guide by Kinneret Yifrah.</li>
        </ul>
      </Layout>
    )
  }
}

export default ReadingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
