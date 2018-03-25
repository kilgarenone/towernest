import React from "react";
import styled from "react-emotion";
import PieChart from "react-minimal-pie-chart";
import Container from "./../../components/Container";
import spacing from "./../../styles/base/spacing";

const allocationByRiskProfile = {
  2: [
    {
      value: 2,
      key: 1,
      color: "#E38627",
      text: "Total Stock Market Index Fund"
    },
    { value: 4, key: 2, color: "#C13C37", text: "Total Bond Market Index Fund" }
  ],
  6: [
    {
      value: 10,
      key: 1,
      color: "#E38627",
      text: "Total Stock Market Index Fund"
    },
    {
      value: 15,
      key: 2,
      color: "#C13C37",
      text: "Total Bond Market Index Fund"
    }
  ]
};
function AssetAllocation(props) {
  const { location: { state: { timeHorizon, riskTolerance } } } = props;
  const totalRiskScore =
    parseInt(timeHorizon, 10) + parseInt(riskTolerance, 10);
  console.log(totalRiskScore);
  const data = allocationByRiskProfile[totalRiskScore];
  return (
    <Container xAlign="center">
      <Container
        style={{
          maxWidth: "1000px",
          flex: "1",
          paddingTop: spacing.space5
        }}
      >
        <PieChart style={{ width: "50%" }} animate data={data} />
        <Container direction="column">
          <AssetAllocationLegends data={data} />
        </Container>
      </Container>
    </Container>
  );
}

const Legend = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 80px;
  background-color: ${props => props.backgroundColor};
`;

function AssetAllocationLegends({ data }) {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  return data.map(asset => (
    <Container yAlign="flex-start" style={{ marginBottom: spacing.space2 }}>
      <Legend backgroundColor={asset.color}>
        {Math.round(asset.value / total * 100)}%
      </Legend>
      <div>
        <p style={{ paddingLeft: spacing.space1 }}>{asset.text}</p>
      </div>
    </Container>
  ));
}

export default AssetAllocation;
