import React from "react";
import { css } from "react-emotion";
import NavBar from "./Navbar";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import LookupTickerByName from "./LookupTickerByName";

function Header() {
  return (
    <NavBar>
      <Container yAlign="center">
        <span
          className={css`
            font-weight: 700;
            font-size: 27px;
            color: black;
          `}
        >
          Matisa
        </span>
        <Container marginLeft={spacing.space5}>
          <LookupTickerByName />
        </Container>
      </Container>
    </NavBar>
  );
}

export default Header;
