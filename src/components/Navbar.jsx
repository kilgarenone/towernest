// @flow
import * as React from "react";
import styled from "react-emotion";
import spacing from "./../styles/base/spacing";
import { colors } from "./../styles/base/colors";

type Props = {
  children: React.Node
};

function HeaderWrapper() {
  return styled("header")`
    padding-top: ${spacing.space1};
    padding-bottom: ${spacing.space1};
    color: ${colors.textOnDarkBg};
  `;
}

function Header() {
  return styled("div")`
    display: flex;
    justify-content: space-between;
    padding-left: ${spacing.space1};
    padding-right: ${spacing.space1};
    max-width: 1012px;
    margin-right: auto;
    margin-left: auto;
  `;
}

function NavBar({ children }: Props) {
  return (
    <HeaderWrapper>
      <Header>{children}</Header>
    </HeaderWrapper>
  );
}

export default NavBar;
