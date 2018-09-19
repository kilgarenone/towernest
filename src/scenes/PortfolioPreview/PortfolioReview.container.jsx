import React, { Component } from "react";
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
      <div>
        <Heading tag="h3">Your Portfolio</Heading>
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
      </div>
    );
  }
}

export default PortfolioReview;
