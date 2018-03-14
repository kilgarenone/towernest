// @flow
import React from "react";
import Input from "./Input";

type Props = {
  name: string,
  value: any,
  required?: boolean,
  parseType?: string,
  children: any | React.Node,
  onChange: (value: any) => any | void
};

function RadioButton({
  name,
  value,
  required,
  parseType,
  onChange,
  children
}: Props) {
  return (
    <label htmlFor={`${name}-${value}`}>
      <Input
        id={`${name}-${value}`}
        name={name}
        value={value}
        required={required}
        type="radio"
        data-parse={parseType}
        onChange={onChange}
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
