import * as React from "react";

function OptionallyDisplayed({ display, children }) {
  return display === true ? <React.Fragment>{children}</React.Fragment> : null;
}

export default OptionallyDisplayed;
