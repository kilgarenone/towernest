import React from "react";
import { css } from "react-emotion";
import Button from "./Button";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import SecondaryButton from "./SecondaryButton";

const cont = css`
  button:not(:last-of-type) {
    margin-right: ${spacing.space0};
  }
`;
function ControlButtonsGroup() {
  return (
    <Container className={cont}>
      <SecondaryButton>Back</SecondaryButton>
      <Button>Continue</Button>
    </Container>
  );
}

export default ControlButtonsGroup;
