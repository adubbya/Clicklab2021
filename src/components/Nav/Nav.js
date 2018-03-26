import React from "react";
import "./Nav.css";

const Nav = props => 

<nav className="navbar nav sticky-top navbar-dark bg-dark">
<h1 className="title"> Clicklab 2021 </h1>
  <h2 className="message">{props.gameText}</h2>
  <h2 className="scores"> Current Score: {props.userScore} | Top Score: {props.topScore}</h2>
</nav>

export default Nav;
