import { Router } from "@reach/router";
import React, { Component } from "react";
import { css } from "react-emotion";
import { fromEvent } from "rxjs";
import { connect } from "react-redux";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { padding0 } from "../../styles/utilities";
import Questionnaire from "./Questionnaire/Questionnaire.container";
import Register from "./Register/Register.container";
import ProgressStatus from "./shared/ProgressStatus";
import { setProgressStatus } from "./SignUp.state";
import PortfolioReview from "./PortfolioReview/PortfolioReview.container";

class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = { scrolled: false };

    this.scrollSubscription = fromEvent(window, "scroll").subscribe(
      e =>
        e.pageY > 0
          ? this.setState({ scrolled: true })
          : this.setState({ scrolled: false })
    );
  }

  componentDidMount() {
    this.props.setProgressStatus(1);
  }

  componentWillUnmount() {
    this.scrollSubscription.unsubscribe();
  }

  handleRegistrationSuccess = () => {
    this.props.setProgressStatus(26);
    this.props.navigate(`${this.props.uri}/questionnaire`);
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
          <ProgressStatus progress={this.props.progressStatus} />
        </Container>
        <Container
          className={css`
            padding: 80px 40px;
          `}
        >
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
            <PortfolioReview path="plan" />
          </Router>
          <div
            className={css`
              flex-basis: 30%;
            `}
          >
            Additional info
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  progressStatus: state.signUp.progressStatus
});

const mapDispatchToProps = {
  setProgressStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
