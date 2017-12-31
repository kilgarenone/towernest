import * as React from "react";
import { css } from "react-emotion";

const Wrapper = ({ tag: Tag = "div", children, ...props }) => (
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
    "align-items": props.xAlign || "flex-start",
    "justify-contents": props.yAlign || "flex-start"
  };
}

export default Wrapper;
