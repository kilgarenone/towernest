// @flow
import * as React from "react";
import { css } from "react-emotion";
import Input from "./Input";
import spacing from "./../styles/base/spacing";
import { fontSize } from "./../styles/base/typography";

type Props = {
  name: string,
  value: any,
  required?: boolean,
  parseType?: string,
  children: any | React.Node,
  onChange: (value: any) => any | void,
  isChecked: boolean
};

const customRadioStyle = css`
  &:hover {
    .svg {
      opacity: 0.6;
    }
  }
  font-size: ${fontSize.text};
  display: block;
  margin-bottom: ${spacing.space0};
  input {
    display: none;
  }
  .svg {
    opacity: 0.2;
  }
  input:checked + svg {
    opacity: 1;
  }
`;
function RadioButton({
  name,
  value,
  required,
  children,
  isChecked,
  handleChange,
  ...props
}: Props) {
  return (
    <label className={customRadioStyle} htmlFor={`${name}-${value}`}>
      <Input
        id={`${name}-${value}`}
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
        height="34px"
        width="34px"
        viewBox="0 0 34 34"
      >
        <circle
          cx="17"
          cy="17"
          r="15"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
        <circle cx="17" cy="17" r="8" fill="red" />
      </svg>
      {children}
    </label>
  );
}

RadioButton.defaultProps = {
  required: true,
  parseType: null
};

export default RadioButton;
