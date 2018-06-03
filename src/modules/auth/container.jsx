// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAccessTokenAction, helloWorld } from "./state";
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
    this.props.helloWorld();
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.getAccessTokenAction()}>
          dosjds
        </button>
        <form onSubmit={this.handleSubmit}>
          <SignIn
            userName={this.state.userName}
            passWord={this.state.passWord}
            handleChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    helloWorld,
    getAccessTokenAction
  }
)(Auth);
