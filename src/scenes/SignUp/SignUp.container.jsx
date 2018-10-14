import React, { Component } from "react";
import { fromEvent } from "rxjs";
import { css } from "react-emotion";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import ProgressBar from "../../components/ProgressBar";
import spacing from "../../styles/spacing";
import { padding0 } from "../../styles/utilities";
import ProgressStatus from "./shared/ProgressStatus";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 5, scrolled: false };
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
          <ProgressStatus />
        </Container>
      </>
    );
  }
}

export default SignUp;
