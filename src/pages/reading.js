import React from "react"
import { graphql } from "gatsby"
import JSONData from "../../content/books.json"

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
          {JSONData.sort(function(a, b) {
            return b.score - a.score;
          }).slice(0, 3).map((data) => {
            return <li>{data.title} by {data.authors.join(", ")}</li>
          })}
        </ul>
        <h3>Currently reading</h3>
        <ul>
          {JSONData.filter((data) => {
            return data.reading_status === "reading";
          }).map((data) => {
            return <li>{data.title} by {data.authors.join(", ")}</li>
          })}
        </ul>
        <h3>On my backlog</h3>
        <ul>
          {JSONData.filter((data) => {
            return data.reading_status === "unread";
          }).map((data) => {
            return <li>{data.title} by {data.authors.join(", ")}</li>
          })}
        </ul>
        <h3>Recently read</h3>
        <ul>
          {JSONData.filter((data) => {
            return data.reading_status === "finished"
             && data.recently_read === true;
          }).map((data) => {
            return <li>{data.title} by {data.authors.join(", ")}</li>
          })}
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
