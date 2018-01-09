// @flow
import React from "react";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines
} from "react-vis";
import { connect } from "react-redux";
import "../../node_modules/react-vis/dist/style.css";
import Header from "./Header";
import Heading from "./Heading";
import { getSelectedStocksDetails } from "../redux/viewStocks";

const App = ({ stocks = [] }) => (
  <div>
    <Header />
    <main>
      <Heading tag="h4">Apple</Heading>
      <XYPlot xType="time" height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={stocks} />
      </XYPlot>
    </main>
  </div>
);
export default connect(
  state => ({ stocks: getSelectedStocksDetails(state) }),
  null
)(App);
