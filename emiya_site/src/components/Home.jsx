import React, { Component } from "react";
import profile from "../assets/Archer_Profile.webp";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home_Wrapper">
          <div className="Home_Hero-Copy">
            <h1 className="Home_Hero-Header">Class: Archer</h1>
            <h4 className="Home_Hero-SubHeader">True Name: EMIYA</h4>
            <p className="Home_Hero-Copy">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="Home_Hero-Image">
            <img src={profile} alt="Emiya" className="Home_Hero-Image-Img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
