// @flow
import styled from "react-emotion";
import { colors } from "./../styles/base/colors";
import { fontSize } from "./../styles/base/typography";

// type Props = {
//   secondary?: boolean,
//   large?: boolean
// };

function getBgColor(props) {
  if (props.secondary) {
    return "#fff";
  } else if (props.secondaryColor) {
    return colors.secondary;
  }
  return colors.primary;
}

const Button = styled("button")`
  display: inline-block;
  border: ${props => (props.secondary ? "2px solid #ccc" : "none")};
  padding: ${props => (props.large ? "14px 32px 16px" : "15px 50px")};
  background-color: ${props => getBgColor(props)};
  color: ${props => (props.secondary ? "#ccc" : "#fff")};
  font-size: ${props => (props.large ? fontSize.displaySmall : fontSize.text)};
  text-decoration: none;
  font-weight: 700;
  line-height: 1.5em;
  white-space: nowrap;
  cursor: pointer;
  width: 100%;
  border-radius: 0.25em;
  text-align: center;
  user-select: none;
  transition: background 250ms ease-in-out, transform 150ms ease,
    padding 150ms ease;

  &:hover,
  &:focus {
    background-color: ${props => (props.secondary ? "#fff" : "#0053ba")};
  }

  /* &:focus {
    border-color: #0053ba;
  } */

  /* &:active {
    background-color: #6a1b9a;
  } */
`;

export default Button;
