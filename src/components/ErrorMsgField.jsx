/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Field } from "formik";
import ErrorMsg from "./ErrorMsg";

function ErrorMsgField({ name }) {
  return (
    <Field
      name={name}
      render={({ form: { touched, errors } }) =>
        touched[name] && errors[name] ? (
          <ErrorMsg>{errors[name]}</ErrorMsg>
        ) : null
      }
    />
  );
}

export default ErrorMsgField;
