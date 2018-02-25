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
import Header from "./Header";
import Heading from "./Heading";
import { getSelectedStocksDetails } from "../redux/viewStocks";

class App extends Component<any, any> {
  componentWillMount() {
    axios.get("testApi").then(res => console.log("res", res));
  }
  render() {
    return (
      // const App = ({ stocks = [] }) => (
      <div>
        <Header />
        <main>
          <Heading tag="h4">Apple</Heading>
        </main>
      </div>
    );
  }
}
export default connect(
  state => ({ stocks: getSelectedStocksDetails(state) }),
  null
)(App);
