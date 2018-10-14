import React, { Component } from "react";
import { fromEvent } from "rxjs";
import { css } from "react-emotion";
import { Router } from "@reach/router";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import ProgressBar from "../../components/ProgressBar";
import spacing from "../../styles/spacing";
import { padding0 } from "../../styles/utilities";
import ProgressStatus from "./shared/ProgressStatus";
import Register from "../Register/Register.container";
import Questionnaire from "../Questionnaire/Questionnaire.container";

class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { width: 1, scrolled: false };
    this.scrollSubscription = fromEvent(window, "scroll").subscribe(
      e =>
        e.pageY > 0
          ? this.setState({ scrolled: true })
          : this.setState({ scrolled: false })
    );
  }

  componentWillUnmount() {
    this.scrollSubscription.unsubscribe();
  }

  handleRegistrationSuccess = () => {
    this.setState({ width: 25 });
    this.props.navigate(`${this.props.path}/questionnaire`);
  };

  render() {
    const isScrolledCss =
      this.state.scrolled &&
      "box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.06);";

    return (
      <>
        <Container
          className={css`
            position: fixed;
            z-index: 2;
            top: 0;
            width: 100%;
            height: 3em;
            background-color: #fff;
            ${padding0};
            ${isScrolledCss};
            transition: box-shadow 0.4s;
          `}
          yAlign="center"
        >
          <Logo />
          <ProgressStatus progress={this.state.width} />
        </Container>
        <Container
          className={css`
            padding: 80px 40px;
          `}
        >
          <div
            className={css`
              flex-basis: 30%;
            `}
          >
            Additional info
          </div>
          <Router
            className={css`
              flex-basis: 70%;
            `}
          >
            <Register
              path="/"
              handleRegistrationSuccess={this.handleRegistrationSuccess}
            />
            <Questionnaire path="questionnaire" />
          </Router>
        </Container>
      </>
    );
  }
}

export default SignUp;
