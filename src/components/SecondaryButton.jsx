// @flow
import styled, { css } from "react-emotion";
import { colors } from "./../styles/base/colors";
import { fontSize } from "./../styles/base/typography";

type Props = {
  primary: boolean,
  large?: boolean
};

// function setBgColor(props) {
//   if (props.invert) {
//     return "#fff";
//   }
//   if (props.primary) {
//     return colors.primary;
//   }
//   return colors.secondary;
// }

const SecondaryButton = styled("button")((props: Props) => ({
  fontSize: props.large ? fontSize.displaySmall : fontSize.text,
  fontWeight: "700",
  backgroundColor: "#fff",
  color: "#ccc",
  padding: props.large ? "14px 32px 16px" : "6px 14px 6px",
  borderRadius: ".25rem",
  border: "2px solid #ccc",
  userSelect: "none",
  textDecoration: "none",
  cursor: "pointer",
  textAlign: "center",
  lineHeight: "1.5rem",
  letterSpacing: "normal",
  display: "inline-block"
}));

export default SecondaryButton;
