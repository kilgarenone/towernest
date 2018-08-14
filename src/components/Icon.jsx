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
      fill: props.color || "rgba(0,0,0,.64)"
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
    >
      <path className="icon-path" style={styles.path} d={props.icon} />
    </svg>
  );
}

export default Icon;
