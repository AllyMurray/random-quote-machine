import React, { Component } from "react";
import "./quote.css";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <p id="text">
          <i className="fas fa-quote-left" />
          {this.props.text}
        </p>
        <p id="author" className="author">
          {this.props.author ? `-${this.props.author}` : ""}
        </p>
      </div>
    );
  }
}
