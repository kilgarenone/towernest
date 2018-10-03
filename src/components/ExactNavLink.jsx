import React from "react";
import { Link } from "@reach/router";
import { cx, css } from "react-emotion";

const activeCss = css`
  font-weight: 700;
`;

const setUpClassName = className => ({ isCurrent }) => ({
  className: cx(className, { [activeCss]: isCurrent }),
});

function ExactNavLink({ className, ...props }) {
  return <Link getProps={setUpClassName(className)} {...props} />;
}

export default ExactNavLink;
