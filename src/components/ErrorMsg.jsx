import styled from "react-emotion";
import { fontSize } from "../styles/base/typography";
import spacing from "../styles/base/spacing";
import { colors } from "../styles/base/colors";

const ErrorMsg = styled("div")`
  color: ${colors.error};
  padding-top: ${spacing.space1};
  font-size: ${fontSize.subText};
`;

export default ErrorMsg;
