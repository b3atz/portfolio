import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <nav>
      <ul style={{
        listStyle: 'none',
        display: "inline",
        }}>
        <li style={{ display: "inline"}}><a href="#about">About</a></li>
        <li style={{ display: "inline"}}><a href="#works">Work</a></li>
        <li style={{ display: "inline"}}><a href="#projects">Projects</a></li>
        <li style={{ display: "inline"}}><a href="#contact">Contact</a></li>
        <li style={{ display: "inline"}}><a href="#resume">Resmue</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
