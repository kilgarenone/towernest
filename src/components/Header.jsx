import React from "react";
import { css } from "react-emotion";
import NavBar from "./Navbar";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import LookupTickerByName from "./LookupTickerByName";

const Header = () => (
  <NavBar>
    <Container yAlign="center" width="60%">
      <span
        className={css`
          font-weight: 700;
          font-size: 27px;
          color: black;
        `}
      >
        Matisa
      </span>
      <Container direction="column" marginLeft={spacing.space5} width="100%">
        <LookupTickerByName />
      </Container>
    </Container>
    <Container>
      {/* <Button secondary onClick={() => console.log("hahahah")}>
            Hellow wold!!!
          </Button> */}
    </Container>
  </NavBar>
);

export default Header;
