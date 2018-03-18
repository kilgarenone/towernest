import React from "react";
import styled from "react-emotion";

const Bar = styled("div")`
  width: 100%;
  margin: 0 0 20px 0;
  overflow: hidden;
  background-color: #f6f6f6;
`;
const Progress = styled("div")`
  background-color: #67c8ac;
  height: 5px;
  width: ${props => (props.width ? `${props.width}%` : 0)};
  transition: width, 0.5s;
`;

function ProgressBar({ width }) {
  return (
    <Bar>
      <Progress width={width} />
    </Bar>
  );
}

export default ProgressBar;
