import React from "react"

import Layout from "../../components/layoutProjects"
import SEO from "../../components/seo"
// Components
import Header from "../../components/Header"
import About from "../../components/project"
import Footer from "../../components/Footer"
import halisi from "../../images/halisi.png"

const WorkPage = () => (
  <Layout>
    <SEO title="Project" />
    <Header></Header>
    <About 
    title={"Hali Halisi"}
    paraOne={"Hali Halisi is a digital platform that connects the deaf community to interpreters, anytime, anywhere at an affordable rate upholding quality standards. Sign language interpreters charge, non-standardised and exorbitant fees. Most skilled interpreters work in urban centers, resulting in an undersupply in rural communities. This is particularly important during COVID where nationwide lockdowns prevented interpreters from travelling to rural clients. Leaving many stranded with no means to communicate to health professionals. Hali Halisi sets the standards for the Deaf community, providing an easily accessible online platform that can ensure both institutions and individuals looking for an interpreter can access them anytime as well as utilise them anywhere with tele-interpretations."} 
    paraTwo={"Javascript, React.js, Google Firebase, Google cloud, Flutter"} 
    paraThree={"I developed the MVP product using React that allowed a user flow and supplemented our pitch. Our innovation has won the GDI Hub's Innovate Now AT accelerator program and has received funding from the Standard Chartered WIT accelerator to impact the lives of the Deaf community."} 
    imgUrl={halisi}
    projectLink={"https://halisi.io"}
    urlText={"Learn more"}></About>
    <Footer></Footer>
  </Layout>
)

export default WorkPage
