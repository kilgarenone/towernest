// @flow
import React from "react";

type Props = {
  icon: string,
  size?: number,
  color?: string
};

Icon.defaultProps = {
  size: 30,
  color: "rgba(0,0,0,.64)"
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

  return (
    <svg
      style={styles.svg}
      width={props.size}
      height={props.size}
      viewBox="0 0  25 25"
    >
      <path style={styles.path} d={props.icon} />
    </svg>
  );
}

export default Icon;
