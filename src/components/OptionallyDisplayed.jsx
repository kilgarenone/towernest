// @flow
import * as React from "react";

function OptionallyDisplayed({
  display,
  children
}: {
  display: boolean,
  children: React.Node
}) {
  return display === true ? <React.Fragment>{children}</React.Fragment> : null;
}

export default OptionallyDisplayed;
