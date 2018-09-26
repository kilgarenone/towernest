import { Formik } from "formik";
import React, { Component } from "react";
import { css, cx } from "react-emotion";
import * as Yup from "yup";
import Button from "../../components/Button";
import Container from "../../components/Container";
import FieldInput from "../../components/FieldInput";
import Heading from "../../components/Heading";
import { paddingBottom1, marginRight1, padding4 } from "../../styles/utilities";
import media from "../../styles/mediaQueries";
import ICONS from "../../styles/icons";
import IconBtn from "../../components/IconBtn";
import spacing from "../../styles/spacing";

const parentCss = css`
  background-color: #e0f2f1;
  ${padding4};
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-top: 7px solid #009688;
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
      transform: scale(0.8);
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
    const { handleCloseModal } = this.props;

    return (
      <React.Fragment>
        <div className={parentCss}>
          <IconBtn
            className={css`
              position: absolute;
              top: 0;
              right: 0;
              padding: ${spacing.space1};
            `}
            onClick={handleCloseModal}
            icon={ICONS.CLOSE}
          />
          <Container isColumn xAlign="center">
            <Heading tag="h3" className={paddingBottom1}>
              Create an account
            </Heading>
            <Formik
              initialValues={{ first_name: "", last_name: "", username: "" }}
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
