/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <div>
            © b3atz{new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">
              <img src={'gatsby-icon.png'}  className="imgfooter" alt="gatsby logo"/>
            </a>
          </div>
          <div>
          <a href="https://github.com/b3atz">
            <img src={'icons8-github-48.png'}  className="imgfooterR" alt="github logo"/>
          </a>
          <a href="https://www.linkedin.com/in/collin-werth-15830a195/">
            <img src={'icons8-linkedin-50.png'}  className="imgfooterR" alt="Linkedin logo"/>
          </a>
          </div>
        </footer>
      </div>
    </>
  )
}
//
//<a target="_blank" href="https://icons8.com/icon/20675/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default Layout
