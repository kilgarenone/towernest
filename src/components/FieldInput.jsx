/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Field, ErrorMessage } from "formik";
import { cx, css } from "react-emotion";
import ErrorMsg from "./ErrorMsg";
import Input from "./Input";
import FormLabel from "./FormLabel";
import FormLabelBottom from "./FormLabelBottom";
import { marginBottom0, paddingBottom2 } from "../styles/utilities";

function FieldInput({
  name: fieldName,
  label,
  bottomLabel,
  className,
  id: fieldId,
  ...props
}) {
  const id = fieldId || fieldName;

  return (
    <Field
      name={fieldName}
      render={({ field: { name, value, onChange, onBlur } }) => (
        <div
          style={{ position: "relative" }}
          className={cx(marginBottom0, paddingBottom2, className)}
        >
          {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
          <Input
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
          />
          {bottomLabel && (
            <FormLabelBottom htmlFor={id}>{bottomLabel}</FormLabelBottom>
          )}
          <ErrorMessage
            // className={
            //   bottomLabel &&
            //   css`
            //     bottom: 0.8em;
            //   `
            // }
            name={name}
            component={ErrorMsg}
            htmlFor={id}
          />
        </div>
      )}
    />
  );
}

export default FieldInput;
