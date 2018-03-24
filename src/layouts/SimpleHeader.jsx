import React, { Component } from "react";
import { css } from "react-emotion";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

// eslint-disable-next-line
class SimpleHeader extends Component {
  render() {
    return (
      <Navbar>
        <Container yAlign="center">
          <span
            className={css`
              font-weight: 700;
              font-size: 27px;
              color: black;
            `}
          >
            duller
          </span>
        </Container>
      </Navbar>
    );
  }
}

export default SimpleHeader;
