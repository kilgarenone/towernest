// @flow
import React from "react";
import { css } from "react-emotion";
import Button from "./Button";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import OptionallyDisplayed from "./OptionallyDisplayed";
import ButtonWithSpinner from "./ButtonWithSpinner";

type Props = {
  displayBackBtn: boolean,
  handleBackBtnClick: () => any,
  handleContinueBtnClick?: () => any,
  backBtnText?: string,
  continueBtnText?: string
};

const cont = css`
  button:not(:last-of-type) {
    margin-right: ${spacing.space0};
  }
`;

function ControlButtonsGroup({
  displayBackBtn = true,
  handleBackBtnClick,
  backBtnText,
  continueBtnText,
  handleContinueBtnClick,
  isSubmitting
}: Props) {
  return (
    <Container className={cont}>
      <OptionallyDisplayed display={displayBackBtn}>
        <Button secondary onClick={handleBackBtnClick}>
          {backBtnText}
        </Button>
      </OptionallyDisplayed>
      {/* <Button onClick={handleContinueBtnClick}>{continueBtnText}</Button> */}
      <ButtonWithSpinner isSubmitting={isSubmitting}>
        {continueBtnText}
      </ButtonWithSpinner>
    </Container>
  );
}

ControlButtonsGroup.defaultProps = {
  handleContinueBtnClick: null,
  backBtnText: "Back",
  continueBtnText: "Continue"
};

export default ControlButtonsGroup;
