// @flow
import React from "react";

type Props = {
  icon: string,
  size: number,
  color: string
};

function Icon(props: Props) {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle"
    },
    path: {
      fill: props.color
    }
  };

  const size = props.size || 30;

  return (
    <svg
      className="icon"
      style={styles.svg}
      width={size}
      height={size}
      viewBox="0 0  24 24"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
    >
      <path className="icon-path" style={styles.path} d={props.icon} />
    </svg>
  );
}

export default Icon;
