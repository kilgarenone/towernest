import React, { Component } from "react";
import { css } from "react-emotion";
import buildingLarge from "../../assets/buildingLarge.png";
import buildingSmall from "../../assets/buildingSmall.png";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { marginBottom2 } from "../../styles/utilities";
import Container from "../../components/Container";
import spacing from "../../styles/spacing";

class GreetFunding extends Component {
  state = {};

  render() {
    return (
      <Card
        className={css`
          max-width: 700px;
          height: 289px;
          margin: 0 auto;
          margin-top: ${spacing.space4};
        `}
        bgColor="#FCE7DD"
        disableBoxShadow
      >
        <div>
          <Heading
            className={css`
              max-width: 350px;
              line-height: 1.3;
              ${marginBottom2};
            `}
            tag="h3"
          >
            Fund your account to start investing
          </Heading>
          <Button>Get started</Button>
        </div>
        <div
          className={css`
            position: absolute;
            right: 0;
            bottom: 0;
            max-width: 235px;
            right: 39px;
          `}
        >
          <picture>
            <source
              srcSet={buildingLarge}
              type="image/jpeg"
              media="(min-width: 992px)"
            />
            <source
              srcSet={buildingSmall}
              type="image/jpeg"
              media="(min-width: 50px)"
            />
            <img src={buildingLarge} alt="art-deco" />
          </picture>
        </div>
      </Card>
    );
  }
}

export default GreetFunding;
