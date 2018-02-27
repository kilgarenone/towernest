// @flow
import React, { Component } from "react";
// import {
//   XYPlot,
//   LineSeries,
//   XAxis,
//   YAxis,
//   HorizontalGridLines
// } from "react-vis";
import axios from "axios";
import { connect } from "react-redux";
import "../../node_modules/react-vis/dist/style.css";
// import Header from "./Header";
// import Heading from "./Heading";
import { getSelectedStocksDetails } from "../redux/viewStocks";
import { getAccessTokenAction } from "../modules/auth/state";
import Input from "./Input";

class App extends Component<any, any> {
  state = {
    userName: "",
    passWord: ""
  };

  componentWillMount() {
    axios.get("testApi").then(res => console.log("res", res));
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("A name was submitted: " + this.state.passWord);
    this.props.getAccessTokenAction();
  };

  render() {
    return (
      // const App = ({ stocks = [] }) => (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName">
          Name:
          <Input
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="passWord">
          Password:
          <Input
            type="password"
            name="passWord"
            value={this.state.passWord}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(state => ({ stocks: getSelectedStocksDetails(state) }), {
  getAccessTokenAction
})(App);
