// @flow
import React from "react";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines
} from "react-vis";
import { connect } from "react-redux";
import "../../node_modules/react-vis/dist/style.css";
import Header from "./Header";
import Heading from "./Heading";
import { getSelectedStocksDetails } from "../redux/viewStocks";

function App({ stocks = [] }) {
  return (
    <div>
      <Header />
      <main>
        <Heading tag="h4">Apple</Heading>
        <XYPlot xType="time" height={600} width={600} yPadding="5">
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={stocks} />
        </XYPlot>
      </main>
    </div>
  );
}
export default connect(
  state => ({ stocks: getSelectedStocksDetails(state) }),
  null
)(App);
