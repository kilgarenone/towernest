// @flow
import styled from "react-emotion";
import { colors } from "./../styles/base/colors";
import { fontSize } from "./../styles/base/typography";

// type Props = {
//   secondary?: boolean,
//   large?: boolean
// };
const scales = {
  small: `
    padding: 5px 10px;
    font-size: 14px;
  `,
  normal: `
    padding: 10px 20px;
    font-size: 16px;
  `,
  big: `
    padding: 20px 30px;
    font-size: 18px;
  `
};

function kind(outline) {
  return (bg, color) => {
    const boxShadowColor = outline ? bg : "transparent";
    const backgroundColor = outline ? "transparent" : bg;

    return `
    background: ${backgroundColor};
    box-shadow: inset 0 0 0 1px ${boxShadowColor};
    color: ${outline ? bg : color};
    transition: all .2s;

    &:hover {
      box-shadow: inset 0 0 0 1000px ${boxShadowColor};
      color: ${color};
    }
  `;
  };
}

function kinds(outline) {
  const get = kind(outline);

  return {
    primary: get("#1FB6FF", "white"),
    secondary: get("#5352ED", "white"),
    cancel: get("#FF4949", "white"),
    dark: get("#273444", "white"),
    gray: get("#8492A6", "white")
  };
}

function getScale({ scale = "normal" }) {
  return scales[scale];
}

function getKind({ kind = "primary", outline = false }) {
  return kinds(outline)[kind];
}

const Button = styled("button")`
  ${getKind};
  ${getScale};
  display: inline-block;
  border: none;
  border-radius: 3px;
  /* text-decoration: none; */
  font-weight: 700;
  /* line-height: 1.5em; */
  white-space: nowrap;
  cursor: pointer;
  width: 100%;
  /* text-align: center; */
  /* user-select: none; */
  /* transition: background 250ms ease-in-out, transform 150ms ease,
    padding 150ms ease; */

  /* &:hover,
  &:focus {
    background-color: ${props => (props.secondary ? "#fff" : "#0053ba")};
  } */

  /* &:focus {
    border-color: #0053ba;
  } */

  /* &:active {
    background-color: #6a1b9a;
  } */
`;

export default Button;
