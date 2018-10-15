import { Formik } from "formik";
import React, { Component } from "react";
import { css, cx } from "react-emotion";
import { connect } from "react-redux";
import * as Yup from "yup";
import Anchor from "../../../components/Anchor";
import Container from "../../../components/Container";
import FieldInput from "../../../components/FieldInput";
import Heading from "../../../components/Heading";
import IconBtn from "../../../components/IconBtn";
import SubText from "../../../components/SubText";
import ICONS from "../../../styles/icons";
import {
  marginBottom1,
  marginBottom2,
  marginRight1,
  padding1,
  paddingBottom1,
  textAlignCenter,
} from "../../../styles/utilities";
import ButtonWithSpinner from "../../../components/ButtonWithSpinner";
import { registerClient } from "../SignUp.state";

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
});
class Register extends Component {
  state = {};

  handleSubmit = (values, bag) => {
    const callBack = this.props.handleRegistrationSuccess || null;

    this.props.registerClient(values, callBack);
  };

  render() {
    const { handleCloseModal } = this.props;

    return (
      <div>
        <IconBtn
          className={css`
            position: absolute;
            top: 0;
            right: 0;
            ${padding1};
          `}
          onClick={handleCloseModal}
          icon={ICONS.CLOSE}
        />
        <Container isColumn xAlign="center">
          <Heading tag="h3" className={paddingBottom1}>
            Create an account
          </Heading>
          <Formik
            initialValues={{ first_name: "", last_name: "", email: "" }}
            validationSchema={RegisterSchema}
            onSubmit={this.handleSubmit}
            validateOnBlur
          >
            {({ handleSubmit, isSubmitting }) => (
              <Container
                tag="form"
                className={css`
                  max-width: 23em;
                `}
                isColumn
                onSubmit={handleSubmit}
              >
                <Container
                  yAlign="flex-end"
                  className={css`
                    flex-wrap: wrap;
                  `}
                >
                  <FieldInput
                    autoFocus
                    name="first_name"
                    type="text"
                    label="Name"
                    bottomLabel="First"
                    className={cx(
                      marginRight1,
                      css`
                        flex: 1 1 150px;
                      `
                    )}
                  />
                  <FieldInput
                    name="last_name"
                    type="text"
                    bottomLabel="Last"
                    className={cx(
                      css`
                        flex: 1 1 150px;
                      `
                    )}
                  />
                </Container>
                <FieldInput
                  className={marginBottom2}
                  name="email"
                  type="email"
                  label="Email"
                />
                <ButtonWithSpinner
                  className={css`
                    align-self: center;
                    ${marginBottom1};
                  `}
                  scale="big"
                  isSubmitting={isSubmitting}
                  disabled={isSubmitting}
                  progressText={isSubmitting && "Creating..."}
                  type="submit"
                >
                  Continue
                </ButtonWithSpinner>
                <SubText className={textAlignCenter}>
                  By continuing I agree to the{" "}
                  <Anchor href="#">Terms of Use</Anchor> and processing of my
                  personal data as stated in the{" "}
                  <Anchor href="#">Privacy Policy</Anchor>
                </SubText>
              </Container>
            )}
          </Formik>
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  { registerClient }
)(Register);
