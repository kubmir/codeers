/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import logo from "../svg/codeers-logo.svg"
import "./layout.css"
import "@fontsource/red-hat-display"

const LogoWrapper = styled.div`
  max-width: 400px;
  height: 60px;
  padding: 30px 48px;

  @media only screen and (max-width: 600px) {
    padding: 6px 24px;
  }
`
const Logo = styled.img`
  height: 60px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    height: 24px;
  }
`

const Layout = ({ children }) => {
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
    <body>
      <a href="https://codeers.cz" title="Codeers">
      <LogoWrapper>
        <Logo src={logo} />
      </LogoWrapper>
      </a>
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
