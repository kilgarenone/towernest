/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Field } from "formik";
import { cx } from "react-emotion";
import ErrorMsg from "./ErrorMsg";
import Input from "./Input";
import { marginBottom2 } from "../styles/utilities";
import FormLabel from "./FormLabel";
import FormLabelBottom from "./FormLabelBottom";

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
        <div className={cx(marginBottom2, className)}>
          <FormLabel htmlFor={id || fieldName}>{label}</FormLabel>
          <div>
            <Input
              name={name}
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...props}
            />
            <FormLabelBottom htmlFor={id}>{bottomLabel}</FormLabelBottom>
          </div>
          {touched[name] && errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
        </div>
      )}
    />
  );
}

export default FieldInput;
