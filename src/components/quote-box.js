import React, { Component } from "react";
import "./quote-box.css";
import Quote from "./quote";
import Button from "./button";

// Forismatic doesn't send the Access-Control-Allow-Origin response header, so make the request through a CORS proxy.
const url =
  "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        author: "",
        text: ""
      }
    };
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote() {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          quote: { author: data.quoteAuthor, text: data.quoteText }
        })
      )
      .catch(function(error) {
        console.error("There was a problem fetching a new quote: \n", error);
      });
  }

  render() {
    return (
      <div className="quote-box">
        <Quote author={this.state.quote.author} text={this.state.quote.text} />

        <hr />
        <div className="quote-box__footer">
          <Button classes="fas fa-sync" />
          <Button classes="fab fa-twitter" />
        </div>
      </div>
    );
  }
}
