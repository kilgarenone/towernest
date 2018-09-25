import * as React from "react";
import { css, cx } from "react-emotion";

const Container = ({
  tag: Tag = "div",
  children,
  className = null,
  yAlign,
  xAlign,
  isColumn,
  ...props
}) => (
  <Tag
    className={cx(css(buildWrapperStyles(xAlign, yAlign, isColumn)), className)}
    {...props}
  >
    {children}
  </Tag>
);

function buildWrapperStyles(xAlign, yAlign, isColumn) {
  // Unified x and y axes intuitive alignment for flex's
  // row & column
  let alignItems = yAlign;
  let justifyContent = xAlign;
  let flexDirection = null;

  if (isColumn) {
    flexDirection = "column";
    alignItems = xAlign;
    justifyContent = yAlign;
  }

  return {
    position: "relative",
    display: "flex",
    "flex-direction": flexDirection, // default is 'row'
    "align-items": alignItems, // default is 'stretch'
    "justify-content": justifyContent // default is 'flex-start'
  };
}

export default Container;
