import { Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { css, cx } from "react-emotion";
import * as Yup from "yup";
import Container from "../../components/Container";
import FieldInput from "../../components/FieldInput";
import Heading from "../../components/Heading";
import {
  padding1,
  paddingBottom1,
  marginRight1,
  padding4,
  marginBottom2,
  textAlignCenter,
  marginBottom1
} from "../../styles/utilities";
import media from "../../styles/mediaQueries";
import ICONS from "../../styles/icons";
import IconBtn from "../../components/IconBtn";
import { registerClient } from "./Register.state";
import SubText from "../../components/SubText";
import Anchor from "../../components/Anchor";
import ButtonWithSpinner from './../../components/ButtonWithSpinner';

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
    const body = { ...values, allocationId: this.props.allocationId };
    const callBack = this.props.handleRegistrationSuccess || null;
    
    this.props.registerClient(body, callBack );
  };

  render() {
    const { handleCloseModal } = this.props;

    return (
      <React.Fragment>
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
                    <Anchor href="#">Terms of Use</Anchor>{" "}
                    and processing of my personal data as stated in the{" "}
                    <Anchor href="#">Privacy Policy</Anchor>
                  </SubText>
                </Container>
              )}
            </Formik>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}


export default connect(
  null,
  { registerClient }
)(Register);
