/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/index"
import GlobalStyles from '../global'
import {FaInstagram, FaFacebookSquare, FaLinkedin}  from 'react-icons/fa'

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
    <>
      <GlobalStyles/>
      <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <footer>
            <div className="container">
              <div className="col">
                © {new Date().getFullYear()}, Elo
                {` `} desenvolvido por: 
                <a href="https://www.designhope.com.br"> designhope</a>
              </div>
              <div className="col">
                  <ul>
                    <li>
                      <a href=""><FaInstagram size={24} color="#fff"/> </a>
                    </li>
                    <li>
                      <a href=""><FaFacebookSquare size={24} color="#fff"/> </a>
                    </li>
                    <li>
                      <a href=""><FaLinkedin size={24} color="#fff"/> </a>
                    </li>
                  </ul>
              </div>
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
