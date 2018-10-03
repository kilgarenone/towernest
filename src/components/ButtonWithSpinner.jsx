import React from "react";
import { css, cx } from "react-emotion";
import Spinner from "./Spinner";
import Button from "./Button";
import { positionRelative } from "../styles/utilities";

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

const isSubmittingClass = css`
  padding-right: 2.7em;
`;

const ButtonWithSpinner = ({
  children,
  isSubmitting,
  progressText = children,
  className,
  ...props
}) => (
  <Button
    className={cx(
      { [isSubmittingClass]: isSubmitting },
      positionRelative,
      className
    )}
    {...props}
  >
    {isSubmitting ? progressText : children}
    <Spinner className={cx(spinnerCls, { [showSpinner]: isSubmitting })} />
  </Button>
);

export default ButtonWithSpinner;
