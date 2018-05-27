import React, { Component } from "react";
import {
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  stop,
  linearGradient,
  defs,
  XAxis,
  YAxis
} from "recharts";
import { futureValue } from "../../utils/functions";
// const data = [
//   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
// ];

const currPorfolioValue = -10000;
const fundReturnRate = 0.06;
const annualContributeAmt = -5000;
const yearsToReture = 40;

class Home extends Component {
  state = { portfolioGrowthTrend: [] };
  componentWillMount() {
    const data = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1; i <= yearsToReture; i++) {
      const yearly = { name: currentYear + i, value: 0 };
      yearly.value = futureValue(
        fundReturnRate,
        i,
        annualContributeAmt,
        currPorfolioValue
      );
      data.push(yearly);
    }
    this.setState({ portfolioGrowthTrend: data });
  }
  render() {
    return (
      <AreaChart
        width={600}
        height={250}
        data={this.state.portfolioGrowthTrend}
        margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="8 8" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    );
  }
}

export default Home;
