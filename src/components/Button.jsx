// @flow
import styled, { css } from "react-emotion";
import { colors } from "./../styles/base/colors";
import { fontSize } from "./../styles/base/typography";

type Props = {
  primary: boolean,
  large?: boolean
};

function setBgColor(props) {
  if (props.invert) {
    return "#fff";
  }
  if (props.primary) {
    return colors.primary;
  }
  return colors.secondary;
}

const Button = styled("button")((props: Props) => ({
  fontSize: props.large ? fontSize.displaySmall : fontSize.text,
  fontWeight: "700",
  backgroundColor: setBgColor(props),
  color: props.invert ? "#000" : "#fff",
  padding: props.large ? "14px 32px 16px" : "8px 14px 9px",
  borderRadius: ".25rem",
  border: "none",
  userSelect: "none",
  textDecoration: "none",
  cursor: "pointer",
  textShadow: "0 1px 1px rgba(0,0,0,.1)",
  textAlign: "center",
  lineHeight: "1.5rem",
  letterSpacing: "normal",
  display: "inline-block"
}));

export default Button;
