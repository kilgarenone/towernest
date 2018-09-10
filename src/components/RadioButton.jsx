// @flow
import * as React from "react";
import { css, cx } from "react-emotion";
import Input from "./Input";
import spacing from "../styles/base/spacing";
import { fontSize } from "../styles/base/typography";

type Props = {
  name: string,
  value: any,
  required?: boolean,
  children: any | React.Node,
  onChange: (value: any) => any | void,
  isChecked: boolean
};

const cssRadioButton = css`
  font-size: ${fontSize.text};
  display: flex;
  align-items: center;

  .input {
    display: none;
  }

  .text {
    margin-left: ${spacing.space0};
  }

  &:hover {
    .radioDot {
      opacity: 0.13;
    }
    .radioOutline {
      opacity: 0.7;
    }
  }
  .radioDot {
    opacity: 0.06;
  }

  .radioOutline {
    opacity: 0.55;
  }

  .input:checked + svg {
    .radioDot,
    .radioOutline {
      opacity: 1;
    }
  }
`;

function RadioButton({
  name,
  value,
  required,
  children,
  isChecked,
  handleChange,
  className,
  ...props
}: Props) {
  return (
    <label className={cx(cssRadioButton, className)} htmlFor={value}>
      <Input
        className="input"
        id={value}
        name={name}
        value={value}
        required={required}
        type="radio"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <svg
        className="svg"
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        height="30"
        width="30"
        viewBox="0 0 30 30"
      >
        <circle
          className="radioOutline"
          cx="15"
          cy="15"
          r="13"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <circle className="radioDot" cx="15" cy="15" r="6" fill="#000" />
      </svg>
      <span className="text">{children}</span>
    </label>
  );
}

RadioButton.defaultProps = {
  required: true
};

export default RadioButton;
