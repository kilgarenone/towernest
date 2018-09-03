import React from "react";
import styled from "react-emotion";

const Bar = styled("div")`
  width: 100%;
  overflow: hidden;
  background-color: #f6f6f6;
`;
const Progress = styled("div")`
  background-color: #67c8ac;
  height: 8px;
  width: ${props => (props.width ? `${props.width}%` : 0)};
  min-width: 40px;
  transition: width, 0.5s;
  border-radius: 8px;
`;

function ProgressBar({ width, className }) {
  return (
    <Bar className={className}>
      <Progress width={width} />
    </Bar>
  );
}

export default ProgressBar;
