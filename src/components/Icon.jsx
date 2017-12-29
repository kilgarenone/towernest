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
      fill: props.color || "#000"
    }
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size || 20}px`}
      height={`${props.size || 20}px`}
      viewBox="0 0 1024 1024"
    >
      <path style={styles.path} d={props.icon} />
    </svg>
  );
};

export default Icon;
