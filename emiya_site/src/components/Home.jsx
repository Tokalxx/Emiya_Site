import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home_Wrapper">
          <div className="Home_Hero-Copy">
            <h1 className="Home_Hero-Header">Class: Archer</h1>
            <h2 className="Home_Hero-SubHeader">True Name: EMIYA</h2>
          </div>
          <div className="Home_Hero-Image">
            <img
              src="https://i.imgur.com/c0p66oX.jpg"
              alt="Emiya"
              className="Home_Hero-Image-Img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
