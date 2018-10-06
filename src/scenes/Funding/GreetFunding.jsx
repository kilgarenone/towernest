import React, { Component } from "react";
import { css } from "react-emotion";
import flowerLarge from "../../assets/flowerLarge.png";
import flowerSmall from "../../assets/flowerSmall.png";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { marginBottom2 } from "../../styles/utilities";
import Container from "../../components/Container";

class GreetFunding extends Component {
  state = {};

  render() {
    return (
      <Card
        className={css`
          max-width: 900px;
          margin: 0 auto;
        `}
        bgColor="#F0F0EE"
      >
        <Container>
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
          <div>
            <picture>
              <source
                srcSet={flowerLarge}
                type="image/jpeg"
                media="(min-width: 992px)"
              />
              <source
                srcSet={flowerSmall}
                type="image/jpeg"
                media="(min-width: 50px)"
              />
              <img style={{}} src={flowerLarge} alt="art-deco" />
            </picture>
          </div>
        </Container>
      </Card>
    );
  }
}

export default GreetFunding;
