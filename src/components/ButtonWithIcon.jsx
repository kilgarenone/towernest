import React from "react";
import { css, cx } from "react-emotion";
import Icon from "./Icon";
import Button from "./Button";

function ButtonWithIcon({ children, className, icon, ...props }) {
  return (
    <Button
      className={cx(
        css`
          padding-left: 0.7em;
        `,
        className
      )}
      {...props}
    >
      <Icon
        className={css`
          margin-right: 0.45em;
        `}
        size="23"
        icon={icon}
      />
      {children}
    </Button>
  );
}

export default ButtonWithIcon;
