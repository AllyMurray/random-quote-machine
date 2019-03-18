import React, { Component } from "react";
import "./App.css";
import QuoteBox from "./components/quote-box.js";

class App extends Component {
  render() {
    return (
      <main className="App">
        <QuoteBox />
      </main>
    );
  }
}

export default App;
