import * as React from "react";
import { css, cx } from "react-emotion";
import {
  tagMapping,
  fontSize,
  fontWeight,
  lineHeight
} from "../css/typography";
import { colors } from "../css/colors";

// type Props = {
//   children: React.Node,
//   tag: string
// };

function Heading({
  children,
  tag: Tag,
  className,
  isSerifFont = false,
  ...props
}) {
  return (
    <Tag
      className={cx(styles[tagMapping[Tag]], className, {
        [serifFont]: isSerifFont
      })}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;

const serifFont = css`
  font-family: "Times New Roman", Times, serif;
`;

const styles = {
  headingXL: css`
    font-size: ${fontSize.headingXL};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.headingXL};
    color: ${colors.headerColor};
  `,
  headingL: css`
    font-size: ${fontSize.headingL};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.headingL};
    color: ${colors.headerColor};
  `,
  // displaySmall: css`
  //   font-size: ${fontSize.displaySmall};
  //   font-weight: ${fontWeight.bold};
  //   line-height: ${lineHeight.displaySmall};
  //   color: ${colors.headerColor};
  // `,
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
