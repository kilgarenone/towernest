import React from "react";
import PieChart from "react-minimal-pie-chart";

function AssetAllocation(props) {
  return (
    <div>
      <p onClick={() => props.history.push("/")}>soidahhdsa </p>
      <PieChart
        animation
        data={[
          { value: 10, key: 1, color: "#E38627" },
          { value: 15, key: 2, color: "#C13C37" },
          { value: 20, key: 3, color: "#6A2135" }
        ]}
      />
    </div>
  );
}

export default AssetAllocation;
