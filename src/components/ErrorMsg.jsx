import styled from "react-emotion";
import spacing from "../styles/spacing";
import { colors } from "../styles/colors";
import { fontSize } from "../styles/typography";

const ErrorMsg = styled("label")`
  position: absolute;
  bottom: -${spacing.space0};
  left: 0;
  color: ${colors.error};
  font-size: ${fontSize.subText};
`;

export default ErrorMsg;
