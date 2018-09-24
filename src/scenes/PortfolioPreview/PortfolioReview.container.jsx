import React, { Component } from "react";
import { css, cx } from "react-emotion";
import AssistText from "../../components/AssistText";
import Button from "../../components/Button";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Logo from "../../components/Logo";
import ICONS from "../../styles/icons";
import spacing from "../../styles/spacing";
import { fontSize } from "../../styles/typography";
import {
  padding1,
  fontWeight400,
  marginBottom2,
  marginBottom3,
  paddingBottom3,
  paddingBottom1,
  paddingY3,
  relativeHeightWidth100,
  textAlignCenter
} from "../../styles/utilities";

function buildBarCss(holding, index) {
  return `
    position: absolute;
    top: 0;
    width: 100%;
    overflow-y: hidden;
    opacity: 0;
    height: ${holding.weight * 1.5}%;
    transform: translateY(-50%);
    transition: transform 0.4s ease-out ${0.1 * index}s,
    opacity 0.6s ease-out;
    background-color: ${BAR_COLORS[index]};
    
    &.animate {
      transform: translateY(0);
      opacity: 1;
    }
  `;
}

const BAR_COLORS = ["#711d45", "#78e0f0", "#f1cf89", "#ee995d"];
class PortfolioReview extends Component {
  state = { animateBar: false };

  componentDidMount() {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => this.setState({ animateBar: true }))
    );
  }

  render() {
    console.log(this.props.location.state);
    const data = this.props.location.state;

    return (
      <div>
        <div
          className={css`
            background-color: #f5f5f5;
            ${padding1};
          `}
        >
          <Logo />
        </div>
        <div
          className={css`
            background-color: #f5f5f5;
            ${textAlignCenter};
            ${paddingY3};
            ${marginBottom2};
            padding-top: 0;
          `}
        >
          <div className={paddingBottom1}>
            Based on your answers, we recommend the
          </div>
          <div
            className={css`
              font-weight: 700;
              font-size: ${fontSize.subHeading};
              ${paddingBottom3};
            `}
          >
            {data.portfolio.name}
          </div>
          <Button
            className={css`
              margin-bottom: ${spacing.space1};
            `}
          >
            Open My Account
          </Button>
          <AssistText>Question? Chat with us</AssistText>
        </div>
        <div
          className={css`
            position: relative;
            margin-left: ${spacing.space4};
            ${marginBottom3};

            &::before {
              content: "";
              position: absolute;
              top: -190px;
              bottom: 0;
              left: -15px;
              border-left: 1px solid rgba(0, 0, 0, 0.5);
            }
          `}
        >
          <Heading tag="h4">Allocation</Heading>
        </div>
        <Container
          xAlign="space-around"
          className={css`
            min-height: 17em;
            max-height: 17em;
          `}
        >
          {data.holdings.map((holding, i) => (
            <div
              className={css`
                flex-basis: 20%;
              `}
              key={holding.ticker}
            >
              <div className={textAlignCenter}>
                <div className={fontWeight400}>{holding.assetClass}</div>
                <div>{`${holding.weight}%`}</div>
              </div>
              <div className={relativeHeightWidth100}>
                <div
                  className={cx(
                    css`
                      ${buildBarCss(holding, i)};
                    `,
                    this.state.animateBar && "animate"
                  )}
                />
              </div>
            </div>
          ))}
        </Container>
        <ButtonWithIcon
          className={css`
            position: relative;
            float: right;
            top: -${spacing.space3};
            margin-right: ${spacing.space2};
          `}
          icon={ICONS.HELP}
          outline
        >
          Learn more
        </ButtonWithIcon>
      </div>
    );
  }
}

export default PortfolioReview;
