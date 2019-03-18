import React, { Component } from "react";
import "./quoteBox.css";
import Quote from "./quote";
import TweetQuote from "./tweetQuote";
import RefreshButton from "./refreshButton";
import Spinner from "./spinner";

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
        text: "",
        isLoading: false
      }
    };
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote() {
    // New quote is loading
    fetch(quoteUrl)
      .then(response => response.json())
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
      .catch(function(error) {
        this.setState({ quote: { isLoading: false }, initialLoad: false });
        console.error("There was a problem fetching a new quote: \n", error);
      });
  }

  handleRefreshClick = () => {
    this.setState({ quote: { isLoading: true } });
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
          <RefreshButton
            isLoading={this.state.quote.isLoading}
            onClick={this.handleRefreshClick}
          />
          <TweetQuote tweet={this.state.quote.text} />
        </div>
      </div>
    );
  }
}
