import * as React from "react";
import { css, cx } from "react-emotion";

const Container = ({
  tag: Tag = "div",
  children,
  className = null,
  ...props
}) => (
  <Tag className={cx("container", css(buildWrapperStyles(props)), className)}>
    {children}
  </Tag>
);

function buildWrapperStyles(props) {
  // Unified x and y axes intuitive alignment for flex's
  // row & column
  let alignItems = props.yAlign;
  let justifyContent = props.xAlign;
  let flexDirection = "";

  if (props.isColumn) {
    flexDirection = "column";
    alignItems = props.xAlign;
    justifyContent = props.yAlign;
  }

  return {
    position: "relative",
    display: "flex",
    "flex-direction": flexDirection, // default is 'row'
    "align-items": alignItems, // default is 'stretch'
    "justify-content": justifyContent, // default is 'flex-start'
    padding: props.padding,
    margin: props.margin
  };
}

export default Container;
