// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "../scenes/Main";
import { getAccessTokenAction } from "../scenes/SignIn/SignIn.state";

class App extends Component<any, any> {
  handleSubmit = event => {
    event.preventDefault();
    this.props.getAccessTokenAction();
  };

  render() {
    return <Main />;
  }
}

export default connect(
  null,
  { getAccessTokenAction }
)(App);
