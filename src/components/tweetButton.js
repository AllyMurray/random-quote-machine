import React, { Component } from "react";
import Button from "./button";
import "./tweetButton.css";

const tweetUrl = "https://twitter.com/share?hashtags=quotes&url=/&text=";

export default class TweetButton extends Component {
  handleTweetClick = () => window.open(tweetUrl + this.props.tweet);

  render() {
    return <Button classes="fab fa-twitter" onClick={this.handleTweetClick} />;
  }
}
