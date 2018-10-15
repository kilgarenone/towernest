import React, { Component } from "react";
import { css } from "react-emotion";
import { fontSize } from "../styles/typography";

const defaultCss = css`
  font-family: "Inter UI", "Helvetica Neue", HelveticaNeue, Helvetica, Arial,
    sans-serif;
  height: 2.7em;
  width: 100%;
  color: rgba(0, 0, 0, 0.76);
  font-weight: 400;
  font-style: normal;
  font-size: ${fontSize.text};
  border: 2px solid #e0e0e0;
  border-radius: 0.2em;
  outline: 0;
  padding: 0.4em 0.7em;

  &:focus {
    border-color: #2962ff;
  }
`;
class Input extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.input.current.focus();
    }
  }

  render() {
    return <input ref={this.input} className={defaultCss} {...this.props} />;
  }
}

export default Input;
