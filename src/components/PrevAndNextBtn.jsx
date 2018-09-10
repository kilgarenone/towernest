// @flow
import React from "react";
import { css, cx } from "react-emotion";
import Button from "./Button";
import Container from "./Container";
import spacing from "../styles/base/spacing";
import OptionallyDisplayed from "./OptionallyDisplayed";
import ButtonWithSpinner from "./ButtonWithSpinner";

type Props = {
  showBackBtn: boolean,
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
  showBackBtn = true,
  className,
  handleBackBtnClick,
  backBtnText,
  continueBtnText,
  handleContinueBtnClick,
  isSubmitting,
  isLastPage
}: Props) {
  return (
    <Container xAlign="center" className={cx(cont, className)}>
      <OptionallyDisplayed display={showBackBtn}>
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
