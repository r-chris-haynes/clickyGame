import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar">
    <h2>Clicky Game</h2>

    <span className="navbar-text">
      Click all of the images only once to win
    </span>
    <h4>
      {props.alert}
    </h4>
    <ul className="nav text-white nav-fills">
      <li className="nav-item">
        <span className="nav-link">  SCORE {props.score} | TOPSCORE {props.topScore}</span>
      </li>
    </ul>

  </nav>
)

export default Navbar;