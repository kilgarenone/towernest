/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Field } from "formik";
import ErrorMsg from "./ErrorMsg";
import Input from "./Input";

function FieldInput({
  name: fieldName,
  label,
  bottomLabel,
  className,
  id,
  ...props
}) {
  return (
    <Field
      name={fieldName}
      render={({
        field: { name, value, onChange, onBlur },
        form: { errors, touched }
      }) => (
        <div>
          <label htmlFor={id || fieldName}>{label}</label>
          <div>
            <Input
              name={name}
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={className}
              {...props}
            />
            <label htmlFor={id}>{bottomLabel}</label>
          </div>
          {touched[name] && errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
        </div>
      )}
    />
  );
}

export default FieldInput;
