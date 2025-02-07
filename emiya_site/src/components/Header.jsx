import React, { Component } from "react";
import logo from "../assets/Archer_Logo.png";
import "./Components.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="Nav_Wrapper">
          <div className="Nav_Logo">
            <img src={logo} className="Nav_Image" />
            <h1 className="Nav_header">Emiya Site</h1>
          </div>
          <div className="Nav_Links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Details</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
