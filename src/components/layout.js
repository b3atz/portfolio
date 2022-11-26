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
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">
            <img src={'gatsby-icon.png'}  className="imgfooter" alt="gatsby logo"/>
          </a>
          <div style={{ float: 'right'}}>
            <p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a>. Illustrations by <a href="https://icons8.com/illustrations/author/627444">Julia G</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
          </div>
        </footer>
      </div>
    </>
  )
}
//
//<a target="_blank" href="https://icons8.com/icon/20675/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default Layout
