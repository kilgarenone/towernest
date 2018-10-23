// @flow
import React from "react";
import { css, cx } from "react-emotion";

type Props = {
  icon: string,
  size: number,
  color: string
};

const defaultSvgCss = css`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

function Icon({ icon, color, size = 24, className }: Props) {
  return (
    <svg
      className={cx("icon", defaultSvgCss, className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
    >
      <path className="icon-path" fill={color} d={icon} />
    </svg>
  );
}

export default Icon;
