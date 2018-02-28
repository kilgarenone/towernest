// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAccessTokenAction } from "./state";
import SignIn from "./view";

class Auth extends Component<any, any> {
  state = {
    userName: "",
    passWord: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getAccessTokenAction();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SignIn
          userName={this.state.userName}
          passWord={this.state.passWord}
          handleChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(null, {
  getAccessTokenAction
})(Auth);
