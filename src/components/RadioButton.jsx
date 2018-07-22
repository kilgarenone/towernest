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
  font-size: ${fontSize.text};
  display: block;
  margin-bottom: ${spacing.space0};
  input {
    display: none;
  }
  i {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-right: 5px;
    vertical-align: middle;
    background-color: #fff;
    border: 2px solid #b4b4b4;
  }
  input:checked + i {
    background-color: #3197ee;
    box-shadow: inset 0 0 0 3px #f4f4f4;
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
      <i />
      {children}
    </label>
  );
}

RadioButton.defaultProps = {
  required: true,
  parseType: null
};

export default RadioButton;
