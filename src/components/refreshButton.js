import React, { Component } from "react";
import Button from "./button";
import "./refreshButton.css";

export default class refreshButton extends Component {
  render() {
    return (
      <Button
        id="new-quote"
        classes={`fas fa-sync${
          this.props.isLoading ? " fa-sync--is-loading" : ""
        }`}
        onClick={this.props.onClick}
      />
    );
  }
}
