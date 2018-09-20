import React, { Component } from "react";
import { css, cx } from "react-emotion";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { fontSize } from "../../styles/typography";
import spacing from "../../styles/spacing";
import AssistText from "../../components/AssistText";

function buildBarCss(holding, index) {
  return css`
    position: absolute;
    top: 0;
    width: 100%;
    height: 0;
    opacity: 0;
    /* transform-origin: center top; */
    transition: height 0.3s ease-out ${index - (index - 0.5)}s,
      opacity 0.3s ease;
    background-color: ${BAR_COLORS[index]};

    &.animate {
      height: ${holding.weight * 2.5}%;
      opacity: 1;
    }
  `;
}

const BAR_COLORS = ["#711d45", "#78e0f0", "#f1cf89", "#ee995d"];
class PortfolioReview extends Component {
  state = { animateBar: false };

  componentDidMount() {
    setTimeout(() => this.setState({ animateBar: true }), 0);
  }

  render() {
    console.log("helo", this.props.location.state);
    const data = this.props.location.state;

    return (
      <div style={{ paddingTop: "50px" }}>
        {/* <Heading tag="h3">Your Portfolio</Heading> */}
        <Container
          isColumn
          xAlign="center"
          className={css`
            margin-bottom: ${spacing.space4};
          `}
        >
          <div style={{ maxWidth: "23em", paddingBottom: spacing.space1 }}>
            Based on your answers, we recommend the
          </div>
          <Container
            isColumn
            className={css`
              font-weight: 700;
              font-size: ${fontSize.subHeading};
              padding-bottom: ${spacing.space3};
            `}
          >
            <div>{data.portfolio.name}</div>
            <AssistText
              className={css`
                align-self: flex-end;
              `}
            >
              Learn more
            </AssistText>
          </Container>
          <Button
            className={css`
              margin-bottom: ${spacing.space1};
            `}
          >
            Open My Account
          </Button>
          <AssistText>Question? Chat with us</AssistText>
        </Container>
        <Container
          xAlign="space-around"
          className={css`
            min-height: 400px;
          `}
        >
          {data.holdings.map((holding, i) => (
            <Container
              isColumn
              xAlign="center"
              className={css`
                flex-basis: 20%;
              `}
            >
              <div style={{ fontWeight: 500 }}>{holding.assetClass}</div>
              <div>{`${holding.weight}%`}</div>
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <div
                  className={cx(
                    css`
                      ${buildBarCss(holding, i)};
                    `,
                    { animate: this.state.animateBar }
                  )}
                />
              </div>
            </Container>
          ))}
        </Container>
      </div>
    );
  }
}

export default PortfolioReview;
