import React, { Component } from "react";
import Container from "./../../components/Container";
import ErrorMessage from "./../../components/ErrorMessage";
import OptionallyDisplayed from "./../../components/OptionallyDisplayed";
import RadioButton from "./../../components/RadioButton";
import spacing from "./../../styles/base/spacing";
import { fontSize } from "./../../styles/base/typography";
import Wizard from "./../../components/WizardForm";
import { Field } from "formik";
import * as Yup from "yup";
import Observer from "react-intersection-observer";
import { css, cx } from "react-emotion";

const opacity = css`
  opacity: 0.2;
  transition: opacity 1200ms;
`;

const radioBtn = css`
  min-height: 250px;
  margin-top: ${spacing.space4};
`;

function QuestionWithRadioButtons({
  questionText,
  questions,
  inView,
  refRoot,
  field: { name, value, onChange }
}) {
  console.log("inView", inView);
  return (
    <div ref={refRoot} className={cx(radioBtn, { [opacity]: !inView })}>
      <div
        style={{
          marginBottom: spacing.space1,
          fontSize: fontSize.heading,
          fontWeight: 500
        }}
      >
        <span>{questionText}</span>
      </div>
      <Container direction="column">
        {questions.map(q => (
          <RadioButton
            key={`${name}_${q.value}`} // don't use array index as key! https://stackoverflow.com/a/43481841/73323
            handleChange={onChange}
            name={name}
            value={q.value}
            isChecked={q.value === value}
          >
            {q.text}
          </RadioButton>
        ))}
      </Container>
      {/* <OptionallyDisplayed display={showError}>
        <ErrorMessage>{errorFor(fieldName)}</ErrorMessage>
      </OptionallyDisplayed> */}
    </div>
  );
}

const questions1 = [
  { text: "haha", value: "damn", name: "haha" },
  { text: "haha1", value: "damn2", name: "haha1" },
  { text: "haha2", value: "damn3", name: "haha2" }
];

class Questionnaire extends Component {
  state = {};

  handleSubmit = (values, actions) => {
    console.log("values", values);
    console.log("actions", actions);
    // sleep(300).then(() => {
    //  window.alert(JSON.stringify(values, null, 2));
    //  actions.setSubmitting(false);
    // });
  };
  render() {
    return (
      <Wizard
        initialValues={{
          age: "",
          lastName: ""
        }}
        onSubmit={this.handleSubmit}
      >
        <Wizard.Page
          validationSchema={Yup.object().shape({
            age: Yup.string().required()
          })}
        >
          <Observer threshold={0.6}>
            {({ inView, ref }) => (
              <Field
                inView={inView}
                refRoot={ref}
                name="age"
                questionText="what;s up"
                component={QuestionWithRadioButtons}
                questions={questions1}
              />
            )}
          </Observer>
        </Wizard.Page>
        <Wizard.Page
          validationSchema={Yup.object().shape({
            age: Yup.string().required()
          })}
        >
          <Observer threshold={0.6}>
            {({ inView, ref }) => (
              <Field
                inView={inView}
                refRoot={ref}
                name="age1"
                questionText="what;s up"
                component={QuestionWithRadioButtons}
                questions={questions1}
              />
            )}
          </Observer>
        </Wizard.Page>
      </Wizard>
    );
  }
}

export default Questionnaire;
