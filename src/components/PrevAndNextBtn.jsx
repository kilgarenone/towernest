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
      <Container>
        <OptionallyDisplayed display={showBackBtn}>
          <Button
            className={css`
              position: absolute;
              left: -7em;
              top: 0.25em;
            `}
            type="button"
            outline
            noBorder
            disabled={isSubmitting}
            kind="secondary"
            onClick={handleBackBtnClick}
          >
            {backBtnText}
          </Button>
        </OptionallyDisplayed>
        <ButtonWithSpinner
          scale="big"
          type="submit"
          isSubmitting={isSubmitting}
          progressText={isSubmitting && "Submitting..."}
        >
          {isLastPage ? "Submit" : continueBtnText}
        </ButtonWithSpinner>
      </Container>
    </Container>
  );
}

PrevAndNextBtn.defaultProps = {
  handleContinueBtnClick: null,
  backBtnText: "Go back",
  continueBtnText: "Continue"
};

export default PrevAndNextBtn;
