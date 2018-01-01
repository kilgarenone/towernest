import * as React from "react";
import { css } from "react-emotion";

const Container = ({ tag: Tag = "div", children, ...props }) => (
  <Tag className={css(buildWrapperStyles(props))}>{children}</Tag>
);

function buildWrapperStyles(props) {
  // Unified x and y axes intuitive alignment for flex's
  // row & column
  const propsClone = { ...props };
  if (!propsClone.direction) {
    props.yAlign = propsClone.xAlign;
    props.xAlign = propsClone.yAlign;
  }
  return {
    display: "flex",
    "flex-direction": props.direction || "row",
    "flex-basis": props.width,
    "align-items": props.xAlign || "flex-start",
    "justify-content": props.yAlign || "flex-start",
    padding: props.padding,
    margin: props.margin,
    "padding-left": props.paddingLeft,
    "padding-bottom": props.paddingBottom,
    "margin-bottom": props.marginBottom,
    "margin-left": props.marginLeft
  };
}

export default Container;
