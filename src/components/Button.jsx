import styled from "react-emotion";
import { fontSize } from "../css/typography";
import colors from "../css/colors";

// type Props = {
//   secondary?: boolean,
//   large?: boolean
// };
const scales = {
  small: `
    padding: 10px 15px;
    font-size: ${fontSize.subText};
  `,
  normal: `
    padding: 0.3em 1.5em;
    font-size: ${fontSize.text};
  `,
  big: `
    padding: 0.5em 2em;
    font-size: ${fontSize.text};
  `
};

function kind(outline, noBorder) {
  return (bg, color) => {
    const borderColor = outline ? bg : "transparent";
    const backgroundColor = outline ? "transparent" : bg;

    return `
      background-color: ${backgroundColor};
      border: ${noBorder ? "none" : `2px solid ${borderColor}`};
      color: ${outline ? bg : color};
      transition: padding .2s;

      &:hover {
        ${outline && !noBorder && `color: #fff; background-color: ${bg};`};
        ${noBorder && `color: #424242;`};
        ${!outline && "background-color: #424242"};
        border-color: #424242;
      }

      &:focus {
        box-shadow: 0 0 3pt 2pt #6e94ff;
      }

      &:active {
        transform: scale(0.98);
        box-shadow: none;
      }
      
      &:disabled {
        transform: scale(1);
        pointer-events: none;
        ${!noBorder &&
          `background-color: #e8e8e8 ; border-color: #e8e8e8 ; color: ${bg}`};
        ${noBorder && `color: #9E9E9E;`};
      }
    `;
  };
}

function kinds(outline, noBorder) {
  const setKind = kind(outline, noBorder);

  return {
    primary: setKind(colors.primary, "#fff"),
    secondary: setKind(colors.secondaryOutline, "#fff"),
    cancel: setKind("#FF4949", "#fff"),
    dark: setKind("#273444", "#fff"),
    gray: setKind("#8492A6", "#fff")
  };
}

function getScale({ scale = "normal" }) {
  return scales[scale];
}

function getKind({ kind = "primary", outline = false, noBorder = false }) {
  return kinds(outline, noBorder)[kind];
}

const Button = styled("button")`
  ${getKind};
  ${getScale};
  font-family: inherit;
  display: inline-block;
  border-radius: 99999rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  appearance: none;
  /* box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.075); */
`;

export default Button;
