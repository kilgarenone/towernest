// @flow
import React from "react";
import { css } from "react-emotion";
import Button from "./Button";
import Container from "./Container";
import spacing from "./../styles/base/spacing";
import SecondaryButton from "./SecondaryButton";
import OptionallyDisplayed from "./OptionallyDisplayed";

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
  handleContinueBtnClick
}: Props) {
  return (
    <Container className={cont}>
      <OptionallyDisplayed display={displayBackBtn}>
        <SecondaryButton onClick={handleBackBtnClick}>
          {backBtnText}
        </SecondaryButton>
      </OptionallyDisplayed>
      <Button onClick={handleContinueBtnClick}>{continueBtnText}</Button>
    </Container>
  );
}

ControlButtonsGroup.defaultProps = {
  handleContinueBtnClick: null,
  backBtnText: "Back",
  continueBtnText: "Continue"
};

export default ControlButtonsGroup;
