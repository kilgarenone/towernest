import React from "react";
import { css, cx } from "react-emotion";
import { fontSize } from "../css/typography";

const defaultCss = css`
  font-size: ${fontSize.subText};
  font-weight: 500;
  color: rgba(0, 0, 0, 0.44);
  cursor: pointer;

  &:focus,
  &:hover {
    color: rgba(0, 0, 0, 0.64);
    text-decoration: underline;
  }

  &.underline {
    text-decoration: underline;
  }
`;

function AssistText({ hasUnderline = false, children, className, ...props }) {
  return (
    <div
      {...props}
      className={cx(defaultCss, className, { underline: hasUnderline })}
    >
      {children}
    </div>
  );
}

export default AssistText;
