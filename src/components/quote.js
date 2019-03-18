import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <i className="fas fa-quote-left" />
        <p id="text">{this.props.text}</p>
        <p id="author">{this.props.author ? `-${this.props.author}` : ""}</p>
      </div>
    );
  }
}
