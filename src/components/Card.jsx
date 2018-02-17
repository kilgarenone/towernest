// @flow
import styled from "react-emotion";
import spacing from "../styles/base/spacing";

function Card() {
  return styled("div")`
    padding: ${spacing.space4};
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 17px 2px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  `;
}

export default Card;
