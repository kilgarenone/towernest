// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../modules/auth/container";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import Main from "./../modules/Main";

class App extends Component<any, any> {
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

export default connect()(App);
