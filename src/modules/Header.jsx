import React, { Component } from "react";
import { css } from "react-emotion";
import { Link } from "@reach/router";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import ExactNavLink from "../components/ExactNavLink";

const linkCss = css`
  padding: 0 20px;
`;
class Header extends Component {
  state = {};

  render() {
    return (
      <Navbar>
        <Container yAlign="center">
          <Logo />
          <Container
            className={css`
              margin-left: auto;
            `}
          >
            <ExactNavLink className={linkCss} to="/">
              Home
            </ExactNavLink>
            <ExactNavLink className={linkCss} to="questionnaire">
              Withdrawal
            </ExactNavLink>
            <ExactNavLink className={linkCss} to="plan">
              Rebalance
            </ExactNavLink>
            <ExactNavLink className={linkCss} to="haha">
              Report
            </ExactNavLink>
          </Container>
          <Container style={{ marginLeft: "auto" }}>
            <div>My Account</div>
          </Container>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
