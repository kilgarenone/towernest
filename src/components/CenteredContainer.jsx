import styled from "react-emotion";

const CenteredContainer = styled("div")`
  max-width: ${props => props.maxWidth && props.maxWidth};
  margin: 0 auto;
`;

export default CenteredContainer;
