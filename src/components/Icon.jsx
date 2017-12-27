// @flow
import React from "react";

type Props = {
  icon: string,
  size: number,
  color: string
};

const Icon = (props: Props) => {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle"
    },
    path: {
      fill: props.color || "#fff"
    }
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path style={styles.path} d={props.icon} />
    </svg>
  );
};

export default Icon;
