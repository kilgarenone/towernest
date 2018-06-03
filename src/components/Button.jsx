// @flow
import styled from "react-emotion";
import { colors } from "./../styles/base/colors";
import { fontSize } from "./../styles/base/typography";

// type Props = {
//   secondary?: boolean,
//   large?: boolean
// };

const Button = styled("button")`
  display: inline-block;
  border: none;
  padding: ${props => (props.large ? "14px 32px 16px" : "6px 35px")};
  background-color: ${props =>
    props.secondary ? colors.secondary : colors.primary};
  color: #fff;
  font-size: ${props => (props.large ? fontSize.displaySmall : fontSize.text)};
  margin: 0;
  text-decoration: none;
  font-weight: 700;
  line-height: 1.5em;
  cursor: pointer;
  border-radius: 0.25em;
  text-align: center;
  user-select: none;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background-color: #0053ba;
  }

  /* &:focus {
    border-color: #0053ba;
  } */

  /* &:active {
    background-color: #6a1b9a;
  } */
`;

export default Button;
