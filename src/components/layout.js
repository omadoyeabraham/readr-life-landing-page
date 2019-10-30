import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
// import "../assets/styles/layout.css"

const Layout = ({ children }) => {
  // Get site data
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />

      <div>
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with &#x1F495; by
          {` `}
          <a href="https://www.gatsbyjs.org">Omadoye Abraham</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
