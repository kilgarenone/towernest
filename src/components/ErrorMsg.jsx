import styled from "react-emotion";
import { fontSize } from "../styles/base/typography";
import spacing from "../styles/base/spacing";
import { colors } from "../styles/base/colors";

const ErrorMsg = styled("label")`
  position: absolute;
  bottom: -${spacing.space0};
  left: 0;
  color: ${colors.error};
  font-size: ${fontSize.subText};
`;

export default ErrorMsg;
