import * as React from "react"
import Biobox from "../components/biobox"

import Layout from "../components/layout"
import Resbutton from "../components/resbutton"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <section id="home">
      <h1>Welcome</h1>
      <div className="collist">
        <p>Welcome to my site</p>
        <img src={'lounge-web-design-1.png'} className="imgprof" alt="some blue blocks"/>
      </div>
    </section>
    <section id="about">
      <h1>About me</h1>
      <Biobox child="Hello! My name is Collin Werth (He/Him) and welcome to my portfolio. I am a soon to be graduating Portland state student with a bachelors of science in Computer Science. Seeking internships or jobs in the coming summer or fall of 2023. In my free time I enjoy running, gaming, and coding." />
    </section>
    <section id="works">
      <h1>Works</h1>
      <h3>Computer Action Team PSU</h3>
      <p>October 2019 - December 2022 (volunteer)</p>
      <ul>
        <li>Worked as a member of the desk operations group, helping students and faculty with any tech problems that they might have in the school of MCECS</li>
        <li>Worked with the Web development team on creating and maintaining internal and external websites used by the department.</li>
        <li>Worked with full time and other volunteers as an organizer and planner of events, shifts, and training</li>
        <li>Worked as a mentor teaching technical and soft skills to new desk team members</li>
      </ul>
      <h3>Completed Courses</h3>
      <ul className="collist">
        <li>CS163 Data Structers</li>
        <li>CS201 Computer Systems Programming</li>
        <li>CS202 Programing Systems</li>
        <li>CS300 Software Engineer</li>
        <li>CS333 Operating Systems</li>
        <li>CS350 Algrothims</li>
        <li>CS494P Interworking Protocals</li>
      </ul>
    </section>
    <section id="projects">
      <h1>Projects</h1>
    </section>
    <section id="contact">
      <h1>Contact</h1>

      <Resbutton />
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
