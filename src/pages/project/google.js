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
    title={"Google Ads Automation"}
    paraOne={"Python pipeline that both creates, updates and removes millions of ads daily for over 40 000 products."} 
    paraTwo={"Python, Airflow, Docker"} 
    paraThree={"I acted as part of a team that designed and created the pipeline that automates FlixBus' paid search advertising. Creates over 1 million objects daily and creates ads on a multi-million dollar monthly budget."} 
    imgUrl={"https://images.unsplash.com/photo-1561451212-d7350aa8d04c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"}
    projectLink={`mailto:scott.martin5797@gmail.com`}
    urlText={"Contact for more info"}></About>
    <Footer></Footer>
  </Layout>
)

export default WorkPage
