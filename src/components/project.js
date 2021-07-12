import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = ({ title, paraOne, paraTwo, imgUrl, paraThree, projectLink, urlText }) => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>{title}</h1>
            </Fade>
            <p>
              <b>About:</b>
              <br></br> {paraOne}
              <br></br>
              <br></br>
              <b>Technology used:</b>
              <br></br> {paraTwo}
              <br></br>
              <br></br>
              <b>Outcome:</b>
              <br></br> {paraThree}
              <br></br>
              <br></br>
              <br></br>
              <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          className="primary-btn"
        >{urlText}</a>
            </p>
          </div>
          <div className="image-wrapper">
            <img className="image-dimensions" src={imgUrl} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
