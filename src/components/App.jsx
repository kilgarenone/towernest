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
import subYears from "date-fns/sub_years";
import isAfter from "date-fns/is_after";
import getTime from "date-fns/get_time";
import "../../node_modules/react-vis/dist/style.css";
import Header from "./Header";
import Heading from "./Heading";
import { getSelectedStocksDetails } from "../redux/viewStocks";

// const data = [
//   { x: "1988-06-30", y: 8 },
//   { x: "1988-07-30", y: 5 },
//   { x: "1988-08-30", y: 4 },
//   { x: "1988-09-30", y: 9 },
//   { x: "1988-10-30", y: 1 },
//   { x: "1988-11-30", y: 7 },
//   { x: "2009-12-30", y: 6 },
//   { x: "2013-01-30", y: 3 },
//   { x: "2015-02-30", y: 2 },
//   { x: "2016-03-30", y: 0 }
// ];

function getYearsBoundData(data) {
  const dates = [];
  const someYearsAgo = subYears(Date.now(), 10);
  for (let i = data.length - 1; i >= 0; i--) {
    const date = new Date(data[i].x);
    if (isAfter(date, someYearsAgo)) {
      dates.push({ x: getTime(date), y: data[i].y });
    } else {
      break;
    }
  }
  return dates;
}

// console.log(getYearsBoundData());
const App = ({ stocks }) => (
  <div>
    <Header />
    <main>
      <Heading tag="h4">Apple</Heading>
      <XYPlot xType="time" height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={getYearsBoundData(stocks)} />
      </XYPlot>
    </main>
  </div>
);
export default connect(
  state => ({ stocks: getSelectedStocksDetails(state) }),
  null
)(App);
