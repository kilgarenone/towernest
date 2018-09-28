import styled from "react-emotion";
import { colors } from "../styles/colors";
import { fontSize } from "../styles/typography";

const ErrorMsg = styled("label")`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${colors.error};
  font-size: ${fontSize.subText};
`;

export default ErrorMsg;
