// SOURCE: https://github.com/emotion-js/emotion/blob/master/docs/media-queries.md

import { css } from "react-emotion";

const BREAKPOINTS = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200
  // String values will be used as is
  // tallPhone: "(max-width: 360px) and (min-height: 740px)"
};

const media = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  const prefix = typeof BREAKPOINTS[label] === "string" ? "" : "min-width:";
  const suffix = typeof BREAKPOINTS[label] === "string" ? "" : "px";
  accumulator[label] = cls =>
    css`
      @media (${prefix + BREAKPOINTS[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});

export default media;
