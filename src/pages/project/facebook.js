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
    title={"Dynamic Video Creation"}
    paraOne={"A long running product developing both the system to create videos dynamically through connection to a product database and also upload and manage advertisements using these videos through Facebook Ads API."} 
    paraTwo={"Python, Postgres, OpenCV, Docker, Flask API"} 
    paraThree={"The product successfully runs dynamic ads in 100+ cities. As well as updates the dynamic prices and products daily."} 
    imgUrl={"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"}
    projectLink={`mailto:scott.martin5797@gmail.com`}
    urlText={"Contact for more info"}></About>
    <Footer></Footer>
  </Layout>
)

export default WorkPage
