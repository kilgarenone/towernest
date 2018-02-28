// @flow
import React, { Component } from "react";
import Auth from "../modules/auth/container";

// import { connect } from "react-redux";

export default class App extends Component<any, any> {
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
      <Auth />
    );
  }
}

// export default connect(null, {
//   getAccessTokenAction
// })(App);
