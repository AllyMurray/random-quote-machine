import React, { Component } from "react";
import "./App.css";
import QuoteBox from "./components/quoteBox.js";

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
