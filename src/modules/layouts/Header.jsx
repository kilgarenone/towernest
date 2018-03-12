import React from "react";
import { css } from "react-emotion";
import NavBar from "./../../components/Navbar";
import Container from "./../../components/Container";
import spacing from "./../../styles/base/spacing";

const Header = () => (
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
        <p>hahaha</p>
      </Container>
    </Container>
  </NavBar>
);

export default Header;
