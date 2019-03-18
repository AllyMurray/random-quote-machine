import React, { Component } from "react";
import "./button.css";

export default class Button extends Component {
  render() {
    return (
      <i className={`btn ${this.props.classes}`} onClick={this.props.onClick} />
    );
  }
}
