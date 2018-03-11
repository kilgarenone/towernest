// @flow
import React, { Component } from "react";
// import Auth from "../modules/auth/container";

// import { connect } from "react-redux";
import { helloWorld } from "./../modules/auth/state";
import { connect } from "react-redux";
import Questionnaire from "./../modules/questionnaire/view";

class App extends Component<any, any> {
  // state = {
  //   userName: "",
  //   passWord: ""
  // };

  componentWillMount() {
    // axios.get("testApi").then(res => console.log("res", res));
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getAccessTokenAction();
  };

  render() {
    return (
      // const App = ({ stocks = [] }) => (
      <div>
        <Questionnaire />
      </div>
    );
  }
}

export default connect(null, {
  helloWorld
})(App);
