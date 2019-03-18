import React, { Component } from "react";
import "./tweetQuote.css";

const tweetUrl = "https://twitter.com/intent/tweet?hashtags=quote&url=/&text=";

export default class TweetButton extends Component {
  render() {
    return (
      <a
        id="tweet-quote"
        href={tweetUrl + this.props.tweet}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter" onClick={this.props.onClick} />
      </a>
    );
  }
}
