import React, { Component } from "react";
import { css } from "react-emotion";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { fontSize } from "../../styles/typography";
import spacing from "../../styles/spacing";

class PortfolioReview extends Component {
  state = {};

  render() {
    console.log("helo", this.props.location.state);
    const data = this.props.location.state;

    return (
      <div style={{ paddingTop: "50px" }}>
        {/* <Heading tag="h3">Your Portfolio</Heading> */}
        <Container isColumn xAlign="center">
          <div style={{ maxWidth: "23em", paddingBottom: spacing.space1 }}>
            Based on your answers, we recommend the
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: fontSize.subHeading,
              paddingBottom: spacing.space3
            }}
          >
            {data.portfolio.name}
          </div>
          <Button>Open My Account</Button>
        </Container>
        <Container
          xAlign="space-around"
          className={css`
            min-height: 400px;
          `}
        >
          {data.holdings.map(holding => (
            <div style={{ flexBasis: "20%" }}>
              <div>{holding.assetClass}</div>
              <div>{`${holding.weight}%`}</div>
              <div style={{ position: "relative", height: "100%" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: `${holding.weight * 2.5}%`,
                    backgroundColor: "red"
                  }}
                />
              </div>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default PortfolioReview;
