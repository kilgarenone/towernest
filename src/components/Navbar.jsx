// @flow
import * as React from "react";
import styled from "react-emotion";
import spacing from "../styles/spacing";
import { colors } from "../styles/colors";

// type Props = {
//   children: React.Node
// };

const HeaderWrapper = styled("header")`
  padding-top: ${spacing.space1};
  padding-bottom: ${spacing.space1};
  padding-left: ${spacing.space1};
  padding-right: ${spacing.space1};
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.07);
`;

const Header = styled("div")`
  /* max-width: 1012px;
  margin-right: auto;
  margin-left: auto; */
`;

function NavBar({ children }) {
  return (
    <HeaderWrapper>
      {/* <Header>{children}</Header> */}
      {children}
    </HeaderWrapper>
  );
}

export default NavBar;
