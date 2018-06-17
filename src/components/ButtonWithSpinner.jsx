import React from "react";
import { css, cx } from "react-emotion";
import Spinner from "./Spinner";
import Button from "./Button";

const spinnerCls = css`
  visibility: hidden;
`;

const btnCls = css`
  padding-left: 10px;
`;

const ButtonWithSpinner = ({ children, isSubmitting }) => (
  <Button className={cx({ [btnCls]: isSubmitting })}>
    <span>{isSubmitting ? "Submitting..." : children}</span>
    <Spinner />
  </Button>
);

export default ButtonWithSpinner;
