import styled from "react-emotion";

function Input() {
  return styled("input")`
    font-family: "Playfair Display", san-serif;
    background-color: #fff;
    flex: 1 1 100%;
    color: rgba(0, 0, 0, 0.76);
    text-decoration: none;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: normal;
    font-size: 19px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: none;
    padding: 1.15rem 1rem;
    display: inline-block;
  `;
  // @media screen and (min-width: 48rem) {
  //   max-width: 340px;
  // }
}

export default Input;
