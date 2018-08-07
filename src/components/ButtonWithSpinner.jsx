import React from "react";
import { css, cx } from "react-emotion";
import Spinner from "./Spinner";
import Button from "./Button";

const spinnerCls = css`
  position: absolute;
  top: 50%;
  right: 10%;
  opacity: 0;
  transition: opacity 0.4s;
`;

const showSpinner = css`
  opacity: 1;
`;

const btnCls = css`
  padding-right: 75px;
`;

const btnRelative = css`
  position: relative;
`;

const ButtonWithSpinner = ({
  children,
  isSubmitting,
  progressText = children,
  ...props
}) => (
  <Button {...props} className={cx({ [btnCls]: isSubmitting }, btnRelative)}>
    {isSubmitting ? progressText : children}
    <Spinner className={cx(spinnerCls, { [showSpinner]: isSubmitting })} />
  </Button>
);

export default ButtonWithSpinner;
