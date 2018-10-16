import React from "react";
import { css, cx } from "react-emotion";
import { fontSize } from "../styles/typography";

const defaultCss = css`
  font-size: ${fontSize.subText};
  color: rgba(0, 0, 0, 0.5);
`;

const normalText = css`
  font-size: ${fontSize.text};
`;

function SubText({
  tag: Tag = "div",
  className,
  isNormalText,
  children,
  ...props
}) {
  return (
    <Tag
      className={cx(defaultCss, className, { [normalText]: isNormalText })}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default SubText;
