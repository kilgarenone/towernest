import { Formik } from "formik";
import React, { Component } from "react";
import { css } from "react-emotion";
import * as Yup from "yup";
import Button from "../../components/Button";
import Container from "../../components/Container";
import FieldInput from "../../components/FieldInput";
import Heading from "../../components/Heading";
import { marginRight1, padding3 } from "../../styles/utilities";

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .email("Invalid email")
    .required("Required")
});
class Register extends Component {
  state = {};

  handleSubmit = (values, bag) => {
    console.log("user info", values);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={css`
            background-color: #fff;
            ${padding3};
          `}
        >
          <Container isColumn xAlign="center">
            <Heading tag="h3">Create an account</Heading>
            <Formik
              initialValues={{ first_name: "", last_name: "", username: "" }}
              enableReinitialize={false}
              validationSchema={RegisterSchema}
              onSubmit={this.handleSubmit}
              validateOnBlur
            >
              {({ handleSubmit, isSubmitting }) => (
                <Container tag="form" isColumn onSubmit={handleSubmit}>
                  <Container yAlign="flex-end">
                    <FieldInput
                      name="first_name"
                      type="text"
                      label="Name"
                      bottomLabel="First"
                      className={marginRight1}
                    />
                    <FieldInput
                      name="last_name"
                      type="text"
                      bottomLabel="Last"
                    />
                  </Container>
                  <FieldInput name="username" type="email" label="Email" />
                  <Button
                    className={css`
                      align-self: center;
                    `}
                    type="submit"
                  >
                    Create an account
                  </Button>
                </Container>
              )}
            </Formik>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
