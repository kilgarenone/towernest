import styled from "react-emotion";
import { fontSize } from "../styles/typography";

const Input = styled("input")`
  font-family: "Inter UI", "Helvetica Neue", HelveticaNeue, Helvetica, Arial;
  height: 3em;
  width: 100%;
  color: rgba(0, 0, 0, 0.76);
  font-weight: 400;
  font-style: normal;
  font-size: ${fontSize.text};
  border: 2px solid #e0e0e0;
  border-radius: 0.2em;
  outline: 0;
  padding: 0.4em 0.7em;

  &:focus {
    border-color: #2962ff;
  }
`;
// @media screen and (min-width: 48rem) {
//   max-width: 340px;
// }

export default Input;
