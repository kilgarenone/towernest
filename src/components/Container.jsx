import * as React from "react";
import { css, cx } from "react-emotion";

const Container = ({
  tag: Tag = "div",
  children,
  className = null,
  ...props
}) => (
  <Tag className={cx(css(buildWrapperStyles(props)), className)}>
    {children}
  </Tag>
);

function buildWrapperStyles({ style, ...props }) {
  // Unified x and y axes intuitive alignment for flex's
  // row & column
  const propsClone = { ...props };
  if (!propsClone.direction) {
    props.yAlign = propsClone.xAlign;
    props.xAlign = propsClone.yAlign;
  }
  return {
    position: "relative",
    display: "flex",
    "flex-direction": props.direction, // default is 'row'
    "align-items": props.xAlign, // default is 'stretch'
    "justify-content": props.yAlign, // default is 'flex-start'
    padding: props.padding,
    margin: props.margin,
    ...style
  };
}

export default Container;
