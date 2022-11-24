import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <section id="home">
      <h1>Welcome</h1>
      <p>Welcome to my site</p>
      <StaticImage src="../images/gatsby-icon.png" class="imgprof"/>
    </section>
    <section id="about">
      <h1>About me</h1>
      <p>Hello! My name is Collin Werth (He/Him) and welcome to my portfolio. I am a soon to be graduating Portland state student with a bachelors of science in Computer Science. Seeking internships or jobs in the coming summer or fall of 2023. In my free time I enjoy running, gaming, and coding.</p>
    </section>
    <section id="works">
      <h1>Works</h1>
    </section>
    <section id="projects">
      <h1>Projects</h1>
    </section>
    <section id="contact">
      <h1>Contact</h1>
    </section>
    <section id="resume">
      <h1>Resume</h1>
    </section>
   </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
