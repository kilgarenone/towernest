import React, { Component } from "react";
import { css } from "react-emotion";
import buildingLarge from "../../assets/buildingLarge.png";
import buildingSmall from "../../assets/buildingSmall.png";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import spacing from "../../styles/spacing";
import { marginBottom2 } from "../../styles/utilities";

class GreetFunding extends Component {
  state = {};

  render() {
    return (
      <Card
        className={css`
          max-width: 40em;
          height: 19.2em;
          margin: 0 auto;
          margin-top: ${spacing.space4};
        `}
        bgColor="#FCE7DD"
        disableBoxShadow
      >
        <div
          className={css`
            margin-top: ${spacing.space2};
          `}
        >
          <Heading
            className={css`
              max-width: 10em;
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
            max-width: 15.2em;
            right: 2.4em;
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
            <img src={buildingLarge} alt="artwork for fund now to investing" />
          </picture>
        </div>
      </Card>
    );
  }
}

export default GreetFunding;
