import { Router } from "@reach/router";
import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import { fromEvent } from "rxjs";
import CenteredContainer from "../../components/CenteredContainer";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import ProgressBar from "../../components/ProgressBar";
import spacing from "../../css/spacing";
import { padding0, padding3 } from "../../css/utilities";
import PortfolioReview from "./PortfolioReview/PortfolioReviewContainer";
import Questionnaire from "./Questionnaire/QuestionnaireContainer";
import Register from "./Register/RegisterContainer";
import { setProgressStatus } from "./SignUpState";

class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = { scrolled: false };

    this.scrollSubscription = fromEvent(window, "scroll").subscribe(e =>
      e.pageY > 0
        ? this.setState({ scrolled: true })
        : this.setState({ scrolled: false })
    );
  }

  componentWillUnmount() {
    this.scrollSubscription.unsubscribe();
  }

  handleRegistrationSuccess = () => {
    this.props.setProgressStatus(12);
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
          <ProgressBar
            className={css`
              margin-left: ${spacing.space1};
            `}
            width={this.props.progressStatus}
          />
          {/* <ProgressStatus progress={this.props.progressStatus} /> */}
        </Container>
        <CenteredContainer
          className={css`
            ${padding3};
            padding-top: ${spacing.space5};
          `}
          maxWidth="62em"
        >
          <Router>
            <Register
              path="/"
              handleRegistrationSuccess={this.handleRegistrationSuccess}
            />
            <Questionnaire path="questionnaire" />
            <PortfolioReview path="plan" />
          </Router>
        </CenteredContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  progressStatus: state.signUp.progressStatus,
  displayInfoBox: state.signUp.displayInfoBox
});

const mapDispatchToProps = {
  setProgressStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
