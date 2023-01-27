import React, { Component } from "react";
import backend from "./backend_1.png";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={backend} alt="backend" />;
  }
}
