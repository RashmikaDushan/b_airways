import React from "react";
import "./Navbar.css";
import Icon from "../assets/Icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>B airways</h1>
        <img src={Icon} alt="B Airways Logo" />
      </div>
    </nav>
  );
}

export default Navbar;
