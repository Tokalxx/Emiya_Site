import React, { Component } from "react";
import DetailCards from "./Details_Components/DetailCards";

export class Details extends Component {
  render() {
    return (
      <div>
        <div className="Details_Wrapper">
          <DetailCards title="Noble Phantasm" copy="UBW: " />
          <DetailCards title="" copy="" />
        </div>
      </div>
    );
  }
}

export default Details;
