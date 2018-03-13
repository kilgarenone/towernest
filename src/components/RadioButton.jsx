// @flow
import React from "react";
import Input from "./Input";

type Props = {
  name: string,
  value: any,
  required?: boolean,
  parseType?: string,
  children: any | React.Node
};

function RadioButton({ name, value, required, parseType, children }: Props) {
  return (
    <label htmlFor={`${name}-${value}`}>
      <Input
        id={`${name}-${value}`}
        name={name}
        value={value}
        required={required}
        type="radio"
        data-parse={parseType}
      />
      {children}
    </label>
  );
}

RadioButton.defaultProps = {
  required: true,
  parseType: null
};

export default RadioButton;
