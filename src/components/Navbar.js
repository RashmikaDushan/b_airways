import React from "react";
import "./Navbar.css";
import Icon from "../assets/Icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="color-changing-text">B airways</h1>
        <img src={Icon} alt="B airways Logo" height={100} width={100} />
      </div>
    </nav>
  );
}

export default Navbar;
