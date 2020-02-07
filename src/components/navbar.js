/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { Link } from "gatsby"

const NavBar = () => {
  return (
    <div style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        fontFamily: `Montserrat, sans-serif`,
      }}>
        <Link to="/" style={{marginLeft: 25, marginRight: 25, fontSize: 18, boxShadow: 'none'}} activeStyle={{ fontWeight: "bold" }}>Home</Link>
        <Link to="/portfolio" style={{marginLeft: 25, marginRight: 25, fontSize: 18, boxShadow: 'none'}} activeStyle={{ fontWeight: "bold" }}>Portfolio</Link>
        <Link to="/archive" style={{marginLeft: 25, marginRight: 25, fontSize: 18, boxShadow: 'none'}} activeStyle={{ fontWeight: "bold" }}>Archive</Link>
        <Link to="/talks" style={{marginLeft: 25, marginRight: 25, fontSize: 18, boxShadow: 'none'}} activeStyle={{ fontWeight: "bold" }}>Talks</Link>
        <Link to="/reading" style={{marginLeft: 25, marginRight: 25, fontSize: 18, boxShadow: 'none'}} activeStyle={{ fontWeight: "bold" }}>Reading List</Link>
        <Link to="/about" style={{marginLeft: 25, marginRight: 25, fontSize: 18, boxShadow: 'none'}} activeStyle={{ fontWeight: "bold" }}>About</Link>
    </div>
  )
}

export default NavBar
