// SOURCE: https://github.com/emotion-js/emotion/blob/master/docs/media-queries.md

import { css } from "react-emotion";

const BREAKPOINTS = {
  // Numerical values will result in a min-width query
  md: 36,
  md2: 49,
  lg: 65
  // String values will be used as is
  // tallPhone: "(max-width: 360px) and (min-height: 740px)"
};

const media = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  const prefix = typeof BREAKPOINTS[label] === "string" ? "" : "min-width:";
  const suffix = typeof BREAKPOINTS[label] === "string" ? "" : "em";
  accumulator[label] = cls =>
    css`
      @media (${prefix + BREAKPOINTS[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});

export default media;
