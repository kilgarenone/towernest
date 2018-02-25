// @flow
import styled from "react-emotion";
import { colors } from "./../styles/base/colors";

type Props = {
  primary: boolean
};

const Button = styled("button")`
    font-size: 17px;
    background: 0 0;
    background-color: ${(props: Props) =>
      props.primary ? colors.primary : colors.secondary};
    background-color: ${(props: Props) => (props.invert ? "#fff" : "")};
    border-radius: 4px;
    border: none;
    text-align: center;
    line-height: 1.5;
    cursor: pointer;
    letter-spacing: normal;
    color: ${(props: Props) => (props.invert ? "#fff" : "#000")};
    text-transform: uppercase;
    padding: 19px 40px 20px;
    display: block;
    flex-basis: auto;
    width: auto;
  `;


export default Button;
