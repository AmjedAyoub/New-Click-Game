import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";
import posed from "react-pose";
import "./style.css";

const ShakePose = posed.div({
  visible: {    
    opacity: 1,
    transition: {
      type: 'physics',
      delay: 400
    }
  }
});
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <Link className="navbar-brand" to="/">
        <h1>Clicky Game</h1>
      </Link>
      <div className="center">    
          <ShakePose pose={["shake"]} poseKey={props.score}>
          <Fade in>
            <h3>{props.title}</h3>
          </Fade>      
          </ShakePose>
      </div>
      <div className="right">
        <h4>Score: {props.score}</h4>
        <h4>TopScore: {props.topScore}</h4>        
      </div>
    </nav>
  );
}

export default Navbar;