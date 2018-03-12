// @flow
import styled from "react-emotion";
import spacing from "../styles/base/spacing";

const Card = styled("div")`
  display: flex;
  padding: ${spacing.space4};
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
`;

export default Card;
