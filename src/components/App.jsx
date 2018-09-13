// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "../scenes/Main";
import { getAccessTokenAction } from "../scenes/SignIn/SignIn.state";

class App extends Component<any, any> {
  componentDidMount() {
    // this.props.getAccessTokenAction();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.getAccessTokenAction();
  };

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default connect(
  null,
  { getAccessTokenAction }
)(App);
