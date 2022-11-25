import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <section id="home">
      <h1>Welcome</h1>
      <p>Welcome to my site</p>
      <img src={'blueblocks.png'} alt="some blue blocks"/>
    </section>
    <section id="about">
      <h1>About me</h1>
      <p>Hello! My name is Collin Werth (He/Him) and welcome to my portfolio. I am a soon to be graduating Portland state student with a bachelors of science in Computer Science. Seeking internships or jobs in the coming summer or fall of 2023. In my free time I enjoy running, gaming, and coding.</p>
      <img src={'IMG_3513.jpeg'} class="imgprof" alt="Me by the river"/>
    </section>
    <section id="works">
      <h1>Works</h1>
      <h3>Computer Action Team PSU</h3>
      <p>October 2019- December 2022 (volunteer)</p>
      <ul>
        <li>Worked as a member of the desk operations group, helping students and faculty with any tech problems that they might have in the school of MCECS</li>
        <li>Worked with the Web development team on creating and maintaining internal and external websites used by the department.</li>
        <li>Worked with full time and other volunteers as an organizer and planner of events, shifts, and training</li>
        <li>Worked as a mentor teaching technical and soft skills to new desk team members</li>
      </ul>
      <h3>Completed Courses</h3>
      <ul>
        <li>CS163 Data Structers</li>
      </ul>
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
