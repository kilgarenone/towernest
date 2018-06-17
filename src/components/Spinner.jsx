import styled, { css } from "react-emotion";

export const spinnerCssClass = css`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px;
    height: 25px;
    margin-top: -12px;
    margin-left: -12px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #333;
    animation: spinner 0.6s linear infinite;
  }
`;

const Spinner = styled("span")`
  position: relative;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #333;
    animation: spinner 0.6s linear infinite;
  }
`;

export default Spinner;
