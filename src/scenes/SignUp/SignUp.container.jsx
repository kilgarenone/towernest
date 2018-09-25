import { Field, Formik } from "formik";
import React, { Component } from "react";
import { css } from "react-emotion";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import FieldInput from "../../components/FieldInput";
import Container from "../../components/Container";

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
            width: 37em;
          `}
        >
          <Heading tag="h3">Create an account</Heading>
          <Formik
            initialValues={{ first_name: "", last_name: "", username: "" }}
            enableReinitialize={false}
            validate={this.validate}
            onSubmit={this.handleSubmit}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Container yAlign="flex-end">
                  <FieldInput
                    name="first_name"
                    type="text"
                    label="Name"
                    bottomLabel="First"
                  />
                  <FieldInput name="last_name" type="text" bottomLabel="Last" />
                </Container>
                <FieldInput name="username" type="email" label="Email" />
                <Button type="submit">Create an account</Button>
              </form>
            )}
          </Formik>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
