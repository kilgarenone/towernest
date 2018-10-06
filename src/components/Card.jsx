// @flow
import styled from "react-emotion";
import spacing from "../styles/spacing";

const Card = styled("div")`
  position: relative;
  padding: ${spacing.space4};
  background-color: ${props => props.bgColor || "rgba(255, 255, 255, 1)"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
`;

export default Card;
