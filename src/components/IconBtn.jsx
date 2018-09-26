import React from "react";
import { css, cx } from "react-emotion";
import Icon from "./Icon";

const buttonCss = css`
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
`;

function IconBtn({ className, icon, ...props }) {
  return (
    <button type="button" className={cx(buttonCss, className)} {...props}>
      <Icon icon={icon} />
    </button>
  );
}

export default IconBtn;
