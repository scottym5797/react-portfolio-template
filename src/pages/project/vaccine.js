import React from "react"

import Layout from "../../components/layoutProjects"
import SEO from "../../components/seo"
// Components
import Header from "../../components/Header"
import About from "../../components/project"
import Footer from "../../components/Footer"

const WorkPage = () => (
  <Layout>
    <SEO title="Project" />
    <Header></Header>
    <About 
    title={"Vaccine Scraper"}
    paraOne={"In April/May 2021 Germany allowed all individuals to access AstraZeneca Vaccine. Due to the high demand appoitments were being booked and cancelled very often. As such there needed to be a way to programmatically check for availabilities and notify those who were interested."} 
    paraTwo={"Python, Selenium"} 
    paraThree={"In an afternoon I developed a script that checked the internet (every minute) at a number of sources for available vaccine appointments in Munich and notified via email when they were available. I successfully booked appointements for myself and roughly 12 other work colleagoues within the following days."} 
    imgUrl={"https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"}
    projectLink={`mailto:scott.martin5797@gmail.com`}
    urlText={"Contact for access"}></About>
    <Footer></Footer>
  </Layout>
)

export default WorkPage
