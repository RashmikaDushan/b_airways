import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems.js";

class Navbar extends Component {
  state;
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">B Airways</h1>
        <div className="menu-icons">
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className="nav-menu" key="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
