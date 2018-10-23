import React from "react";
import { css, cx } from "react-emotion";
import { colors } from "../styles/colors";
import { fontSize } from "../styles/typography";
import ICONS from "../styles/icons";
import Icon from "./Icon";

const defaultCss = css`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${colors.error};
  font-size: ${fontSize.subText};
`;

function ErrorMsg({ className, children, htmlFor, ...props }) {
  return (
    <label htmlFor={htmlFor} className={cx(defaultCss, className)} {...props}>
      <Icon
        className={css`
          background-color: #fbe9e7;
          border-radius: 9999rem;
          padding: 0.25em;
          margin-right: 0.4em;
        `}
        icon={ICONS.CLOSE}
      />
      <span>{children}</span>
    </label>
  );
}
export default ErrorMsg;
