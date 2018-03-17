// @flow
import * as React from "react";
import { css } from "react-emotion";
import {
  tagMapping,
  fontSize,
  fontWeight,
  lineHeight
} from "../styles/base/typography";
import { colors } from "./../styles/base/colors";

type Props = {
  children: React.Node,
  tag: string
};

function Heading(props: Props) {
  const { children, tag: Tag } = props;
  return <Tag className={styles[tagMapping[Tag]]}>{children}</Tag>;
}

export default Heading;

const styles = {
  displayLarge: css`
    font-size: ${fontSize.displayLarge};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.displayLarge};
    color: ${colors.textOnLightBg};
  `,
  displayMedium: css`
    font-size: ${fontSize.displayMedium};
    font-weight: ${fontWeight.normal};
    line-height: ${lineHeight.displayLarge};
    color: ${colors.textOnLightBg};
  `,
  displaySmall: css`
    font-size: ${fontSize.displaySmall};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.displaySmall};
    color: ${colors.textOnLightBg};
  `,
  heading: css`
    font-size: ${fontSize.heading};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.heading};
    color: ${colors.textOnLightBg};
  `,
  subheading: css`
    font-size: ${fontSize.subheading};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.subheading};
    color: ${colors.textOnLightBg};
  `
};
