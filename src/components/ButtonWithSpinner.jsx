import React from "react";
import { css, cx } from "react-emotion";
import Spinner from "./Spinner";
import Button from "./Button";
import ICONS from "../css/icons";
import Icon from "./Icon";

const isSubmittingClass = css`
  padding-right: 2.7em;
`;

const defaultBtnCss = css`
  position: relative;

  .icon {
    transition: transform 0.2s, opacity 0.2s;
    opacity: 0.6;
  }

  &:hover .icon {
    opacity: 1;
    transform: translateX(2px);
  }
`;

const ButtonWithSpinner = ({
  children,
  isSubmitting,
  progressText = children,
  className,
  ...props
}) => (
  <Button
    className={cx(defaultBtnCss, className, {
      [isSubmittingClass]: isSubmitting
    })}
    {...props}
  >
    {isSubmitting ? progressText : children}
    {isSubmitting ? (
      <Spinner
        className={css`
          position: absolute;
          top: 50%;
          right: 10%;
        `}
      />
    ) : (
      <Icon
        size="30"
        className={css`
          right: -8px;
        `}
        icon={ICONS.ARROW_RIGHT}
      />
    )}
  </Button>
);

export default ButtonWithSpinner;
