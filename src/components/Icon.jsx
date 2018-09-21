// @flow
import React from "react";
import { cx } from "react-emotion";

type Props = {
  icon: string,
  size: number,
  color: string
};

function Icon({ icon, color, size, className }: Props) {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle"
    },
    path: {
      fill: color
    }
  };

  const svgSize = size || 30;

  return (
    <svg
      className={cx("icon", className)}
      style={styles.svg}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 24 24"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
    >
      <path className="icon-path" style={styles.path} d={icon} />
    </svg>
  );
}

export default Icon;
