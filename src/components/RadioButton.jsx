// @flow
import * as React from "react";
import { css } from "react-emotion";
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
  margin-bottom: ${spacing.space2};

  input {
    display: none;
  }

  &:hover {
    .radioDot {
      opacity: 0.2;
    }
    .radioOutline {
      opacity: 0.3;
    }
  }

  .radioDot {
    opacity: 0.1;
  }

  .radioOutline {
    opacity: 0.2;
  }

  input:checked + svg {
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
  ...props
}: Props) {
  return (
    <label className={cssRadioButton} htmlFor={`${name}-${value}`}>
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
        height="34"
        width="34"
        viewBox="0 0 34 34"
      >
        <circle
          className="radioOutline"
          cx="17"
          cy="17"
          r="15"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
        <circle className="radioDot" cx="17" cy="17" r="8" fill="red" />
      </svg>
      {children}
    </label>
  );
}

RadioButton.defaultProps = {
  required: true
};

export default RadioButton;
