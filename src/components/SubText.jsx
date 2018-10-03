import React from "react";
import { css, cx } from "react-emotion";
import { fontSize } from "../styles/typography";

const defaultCss = css`
  font-size: ${fontSize.subText};
  color: rgba(0, 0, 0, 0.64);
`;

function SubText({ tag: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cx(defaultCss, className)} {...props}>
      {children}
    </Tag>
  );
}

export default SubText;
