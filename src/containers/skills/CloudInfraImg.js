import React, { Component } from "react";
import devops from "./devOps.jpg";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={devops} alt="backend" />;
  }
}
