import "./quoteBox.css";

import React, { Component } from "react";

import Quote from "./quote";
import RefreshQuote from "./refreshQuote";
import Spinner from "./spinner";
import TweetQuote from "./tweetQuote";

const quoteUrl =
  // Forismatic doesn't send the Access-Control-Allow-Origin response header, so make the request through a CORS proxy.
  "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoad: true,
      quote: {
        author: "",
        text: ""
      }
    };
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    // The forismatic API tries to escape single quotes resulting
    // in invalid JSON. We must handle this to avoid the following error:
    // JSON.parse: bad escaped character
    fetch(quoteUrl, { cache: "no-store" })
      .then(response => response.text())
      .then(text => JSON.parse(text.replace(/\\/g, "")))
      .then(data =>
        this.setState({
          quote: {
            author: data.quoteAuthor || "anonymous",
            text: data.quoteText,
            isLoading: false
          },
          initialLoad: false
        })
      )
      .catch(error => {
        this.setState({
          initialLoad: false,
          quote: { ...this.state.quote, isLoading: false }
        });
        console.error("There was a problem fetching a new quote: \n", error);
      });
  };

  handleRefreshClick = () => {
    this.setState({ quote: { ...this.state.quote, isLoading: true } });
    this.getNewQuote();
  };

  render() {
    return (
      <div id="quote-box" className="quote-box">
        {this.state.initialLoad ? (
          <Spinner />
        ) : (
          <Quote
            author={this.state.quote.author}
            text={this.state.quote.text}
          />
        )}
        <hr />
        <div className="quote-box__footer">
          <RefreshQuote
            isLoading={this.state.quote.isLoading}
            onClick={this.handleRefreshClick}
          />
          <TweetQuote tweet={this.state.quote.text} />
        </div>
      </div>
    );
  }
}
