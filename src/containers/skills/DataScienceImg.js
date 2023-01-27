import React, { Component } from "react";
import frontend from "./final_frontend.svg";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={frontend} alt="frontend" />;
  }
}
