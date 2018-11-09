import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "../modules/Header";
import GreetFunding from "../scenes/Funding/GreetFunding";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />

        <Router style={{ padding: "40px" }}>
          <GreetFunding path="/" />
        </Router>
      </>
    );
  }
}

export default App;
