import React, { Component } from "react";
import "./refreshQuote.css";

export default class refreshButton extends Component {
  render() {
    return (
      <i
        id="new-quote"
        className={`fas fa-sync${
          this.props.isLoading ? " fa-sync--is-loading" : ""
        }`}
        onClick={this.props.onClick}
      />
    );
  }
}
