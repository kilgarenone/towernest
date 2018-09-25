/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Field } from "formik";
import ErrorMsg from "./ErrorMsg";

function FieldErrorMsg({ name, ...props }) {
  return (
    <Field
      name={name}
      render={({ form: { touched, errors } }) =>
        touched[name] && errors[name] ? (
          <ErrorMsg {...props}>{errors[name]}</ErrorMsg>
        ) : null
      }
    />
  );
}

export default FieldErrorMsg;
