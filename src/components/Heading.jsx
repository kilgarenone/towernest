import * as React from "react";
import { css, cx } from "react-emotion";
import {
  tagMapping,
  fontSize,
  fontWeight,
  lineHeight
} from "../css/typography";
import colors from "../css/colors";
import media from "../css/mediaQueries";

const serifFont = css`
  font-family: "Times New Roman", Times, serif;
`;

function fontWeightClass(weight) {
  return css`
    font-weight: ${weight};
  `;
}

function marginBottomClass(mb) {
  return css`
    margin-bottom: ${mb};
  `;
}

const styles = {
  headingXL: css`
    font-size: ${fontSize.headingL};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.headingXL};
    color: ${colors.headerColor};

    ${media.md(css`
      font-size: ${fontSize.headingXL};
    `)}
  `,
  headingL: css`
    font-size: ${fontSize.heading};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.headingL};
    color: ${colors.headerColor};

    ${media.md(css`
      font-size: ${fontSize.headingL};
    `)}
  `,
  heading: css`
    font-size: ${fontSize.headingS};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.heading};
    color: ${colors.headerColor};

    ${media.md(css`
      font-size: ${fontSize.heading};
    `)}
  `,
  headingS: css`
    font-size: ${fontSize.textL};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.headingS};
    color: ${colors.headerColor};

    ${media.md(css`
      font-size: ${fontSize.headingS};
    `)}
  `
};

function Heading({
  children,
  tag: Tag,
  className,
  isSerifFont = false,
  weight = null,
  marginBottom = null,
  ...props
}) {
  return (
    <Tag
      className={cx(
        styles[tagMapping[Tag]],
        className,
        fontWeightClass(weight),
        marginBottomClass(marginBottom),
        {
          [serifFont]: isSerifFont
        }
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;
