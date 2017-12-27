// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import {
  tagMapping,
  fontSize,
  fontWeight,
  lineHeight
} from "../styles/base/typography";
import { colors } from "./../styles/base/colors";

type Props = {
  children: React.Node,
  tag: any
};

function Heading(props: Props) {
  const { children, tag: Tag } = props;
  return <Tag className={css(styles[tagMapping[Tag]])}>{children}</Tag>;
}

export default Heading;

export const styles = StyleSheet.create({
  displayLarge: {
    fontSize: fontSize.displayLarge,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.displayLarge,
    color: colors.text
  },
  displayMedium: {
    fontSize: fontSize.displayMedium,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.displayLarge,
    color: colors.text
  },
  displaySmall: {
    fontSize: fontSize.displaySmall,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.displaySmall,
    color: colors.text
  },
  heading: {
    fontSize: fontSize.heading,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.heading,
    color: colors.text
  },
  subheading: {
    fontSize: fontSize.subheading,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.subheading,
    color: colors.text
  }
});
