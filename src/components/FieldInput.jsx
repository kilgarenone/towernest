/* eslint-disable react/jsx-no-bind */
import { ErrorMessage, Field } from "formik";
import React from "react";
import { cx } from "react-emotion";
import {
  positionRelative,
  marginBottom0,
  paddingBottom2
} from "../css/utilities";
import ErrorMsg from "./ErrorMsg";
import FormLabel from "./FormLabel";
import FormLabelBottom from "./FormLabelBottom";
import Input from "./Input";

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
      render={({
        field: { name, ...formikFieldProps },
        form: { errors, touched }
      }) => (
        <div
          className={cx(
            positionRelative,
            marginBottom0,
            paddingBottom2,
            className
          )}
        >
          {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
          <Input
            className={touched[name] && errors[name] && "invalid"}
            name={name}
            id={id}
            {...props}
            {...formikFieldProps}
          />
          {bottomLabel && (
            <FormLabelBottom htmlFor={id}>{bottomLabel}</FormLabelBottom>
          )}
          <ErrorMessage name={name} component={ErrorMsg} htmlFor={id} />
        </div>
      )}
    />
  );
}

export default FieldInput;
