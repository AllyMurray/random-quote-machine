import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <i className="fas fa-quote-left" />
        <p>{this.props.text}</p>
        <p>{this.props.author ? `-${this.props.author}` : ""}</p>
      </div>
    );
  }
}
