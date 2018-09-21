import React from "react";
import { css } from "react-emotion";
import Icon from "./Icon";
import Button from "./Button";

function ButtonWithIcon({ children, icon, ...props }) {
  return (
    <Button
      className={css`
        padding-left: 0.7em;
      `}
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
