import { Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { css, cx } from "react-emotion";
import * as Yup from "yup";
import Button from "../../components/Button";
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
} from "../../styles/utilities";
import media from "../../styles/mediaQueries";
import ICONS from "../../styles/icons";
import IconBtn from "../../components/IconBtn";
import { registerClient } from "./Register.state";
import SubText from "../../components/SubText";
import { marginBottom1 } from "../../styles/utilities";
import Anchor from "../../components/Anchor";

const parentCss = css`
  background-color: #f1f1f1;
  ${padding4};
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.045);
  border-top: 7px solid;
  border-radius: 5px;
  animation: fade-in 0.3s forwards cubic-bezier(0.8, 0.02, 0.45, 0.91);
  transform-origin: bottom center;

  ${media.medium(
    css`
      width: 35em;
    `
  )};

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }

    50% {
      opacity: 1;
    }

    70%,
    100% {
      transform: scale(1);
    }
  }
`;

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
    console.log("user info", body);
    this.props.registerClient(body);
  };

  render() {
    const { handleCloseModal } = this.props;

    return (
      <React.Fragment>
        <div className={parentCss}>
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
                  <Button
                    className={css`
                      align-self: center;
                      ${marginBottom1};
                    `}
                    type="submit"
                  >
                    Create an account
                  </Button>
                  <SubText className={textAlignCenter}>
                    By signing up I agree to the{" "}
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

const mapStateToProps = state => ({
  allocationId: state.portfolioReview.portfolio.id,
});

export default connect(
  mapStateToProps,
  { registerClient }
)(Register);
