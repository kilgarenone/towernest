// @flow
import * as React from "react";
import Fragment from "./Fragment";

function OptionallyDisplayed({
  display,
  children
}: {
  display: boolean,
  children: React.Node
}) {
  return display === true ? <Fragment>{children}</Fragment> : null;
}

export default OptionallyDisplayed;
