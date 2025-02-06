import React, { Component } from "react";

export class DetailCards extends Component {
  render() {
    const { title, copy } = this.props;
    return (
      <div>
        <div className="DC_Wrapper">
          <div className="DC_Title">{title}</div>
          <div className="DC_Copy">|{copy}</div>
        </div>
      </div>
    );
  }
}

export default DetailCards;
