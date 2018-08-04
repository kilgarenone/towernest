// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "../scenes/signIn/signIn.container";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import Main from "./../scenes/Main";
import { getAccessTokenAction } from "../scenes/signIn/signIn.state";

class App extends Component<any, any> {
  componentDidMount() {
    console.log("hello");
    this.props.getAccessTokenAction();
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.getAccessTokenAction();
  };

  render() {
    return (
      <div>
        <Container xAlign="center">
          <div
            style={{
              maxWidth: "600px",
              minWidth: "600px",
              paddingTop: spacing.space5
            }}
          >
            <Main />
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  { getAccessTokenAction }
)(App);
