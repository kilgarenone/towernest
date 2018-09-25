import { Field, Formik } from "formik";
import React, { Component } from "react";
import { css } from "react-emotion";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import FieldInput from "../../components/FieldInput";
import Container from "../../components/Container";
import {
  marginRight1,
  padding3,
  textAlignCenter
} from "../../styles/utilities";

class SignUp extends Component {
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
              validate={this.validate}
              onSubmit={this.handleSubmit}
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

export default SignUp;
