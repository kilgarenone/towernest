import styled from "react-emotion";
import spacing from "../css/spacing";

const Card = styled("div")`
  position: relative;
  padding: ${spacing.space3};
  background-color: ${props => props.bgColor || "rgba(255, 255, 255, 1)"};
  ${props =>
    !props.disableBoxShadow && "box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.075)"};
  border-radius: 2px;
`;

export default Card;
