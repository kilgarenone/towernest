// @flow
import * as React from "react";
import { css, cx } from "react-emotion";
import {
  tagMapping,
  fontSize,
  fontWeight,
  lineHeight
} from "../styles/typography";
import { colors } from "../styles/colors";

type Props = {
  children: React.Node,
  tag: string
};

function Heading({ children, tag: Tag, className, ...props }) {
  return (
    <Tag className={cx(styles[tagMapping[Tag]], className)} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;

const styles = {
  displayLarge: css`
    font-size: ${fontSize.displayLarge};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.displayLarge};
    color: ${colors.headerColor};
  `,
  displayMedium: css`
    font-size: ${fontSize.displayMedium};
    font-weight: ${fontWeight.normal};
    line-height: ${lineHeight.displayLarge};
    color: ${colors.headerColor};
  `,
  displaySmall: css`
    font-size: ${fontSize.displaySmall};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.displaySmall};
    color: ${colors.headerColor};
  `,
  heading: css`
    font-size: ${fontSize.heading};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.heading};
    color: ${colors.headerColor};
  `,
  subheading: css`
    font-size: ${fontSize.subheading};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.subheading};
    color: ${colors.headerColor};
  `
};
