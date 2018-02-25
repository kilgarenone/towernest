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
    position: "relative",
    display: "flex",
    "flex-direction": props.direction, // default is 'row'
    flex: "1 1 100%",
    "align-items": props.xAlign, // default is 'stretch'
    "justify-content": props.yAlign, // default is 'flex-start'
    padding: props.padding,
    margin: props.margin,
    "padding-left": props.paddingLeft,
    "padding-bottom": props.paddingBottom,
    "margin-bottom": props.marginBottom,
    "margin-left": props.marginLeft
  };
}

export default Container;
