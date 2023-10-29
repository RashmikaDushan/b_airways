import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import logo from "../assets/icon.png";

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  const [noBg, addBg] = useState("navBarMenu");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };

  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} alt="B Airways logo" className="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              Schedule
            </li>
            <li onClick={removeNavBar} className="listItem">
              Book
            </li>
            <li onClick={removeNavBar} className="listItem">
              About
            </li>
          </ul>
          <button onClick={removeNavBar} className="bttn flex btnOne">
            Contact
          </button>
          <button className="bttn flex btnTwo">Contact</button>
        </div>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
