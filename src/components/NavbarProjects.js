import React from "react"
import {navigate} from 'gatsby';
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => navigate("/#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => navigate("/#work")}>Work</button>
            <button onClick={() => navigate("/#about")}>About</button>
            <button onClick={() => navigate("/#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
