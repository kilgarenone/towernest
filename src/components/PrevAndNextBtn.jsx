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

function PrevAndNextBtn({
  displayBackBtn = true,
  handleBackBtnClick,
  backBtnText,
  continueBtnText,
  handleContinueBtnClick,
  isSubmitting,
  isLastPage
}: Props) {
  return (
    <Container className={cont}>
      <OptionallyDisplayed display={displayBackBtn}>
        <Button
          type="button"
          outline
          disabled={isSubmitting}
          secondary
          onClick={handleBackBtnClick}
        >
          {backBtnText}
        </Button>
      </OptionallyDisplayed>
      <ButtonWithSpinner type="submit" isSubmitting={isSubmitting}>
        {isLastPage ? "Submit" : continueBtnText}
      </ButtonWithSpinner>
    </Container>
  );
}

PrevAndNextBtn.defaultProps = {
  handleContinueBtnClick: null,
  backBtnText: "Back",
  continueBtnText: "Continue"
};

export default PrevAndNextBtn;
