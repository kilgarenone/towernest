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
    const borderColor = outline ? bg : "transparent";
    const backgroundColor = outline ? "transparent" : bg;

    return `
    background: ${backgroundColor};
    border: 2px solid ${borderColor};
    color: ${outline ? bg : color};
    transition: padding .2s;
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
  border-radius: 0.23em;
  text-decoration: none;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  vertical-align: middle;
  touch-action: manipulation;
  background-image: none;
  user-select: none;
  /* transition: background 250ms ease-in-out, transform 150ms ease,
    padding 150ms ease; */

  /* &:hover,
  &:focus {
    background-color: ${props => (props.secondary ? "#fff" : "#0053ba")};
  } */

  /* &:focus {
    border-color: #0053ba;
  } */
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export default Button;
