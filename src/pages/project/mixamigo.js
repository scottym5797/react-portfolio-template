import React from "react"

import Layout from "../../components/layoutProjects"
import SEO from "../../components/seo"
// Components
import Header from "../../components/Header"
import About from "../../components/project"
import Footer from "../../components/Footer"
import mixamigo from "../../images/mixamigo-resized.png"

const WorkPage = () => (
  <Layout>
    <SEO title="Project" />
    <Header></Header>
    <About 
    title={"MixAmigo"}
    paraOne={"A tool for DJ's to get better with data. A website that gives data on songs and helps with matching songs harmonically. The front end was built using nextjs to enable multipage static website generation. The backend is built in Postgres with a Django API. "} 
    paraTwo={"React.js, Next.js, Postgresql, Django REST API"} 
    paraThree={"Website currently sees 2000+ monthly visits and work is still ongoing to add features in future."} 
    imgUrl={mixamigo}
    projectLink={"https://mixamigo.com"}
    urlText={"Visit Website"}></About>
    <Footer></Footer>
  </Layout>
)

export default WorkPage
