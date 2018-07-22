import React, { Component } from "react";
import Container from "./../../components/Container";
import ErrorMessage from "./../../components/ErrorMessage";
import OptionallyDisplayed from "./../../components/OptionallyDisplayed";
import RadioButton from "./../../components/RadioButton";
import spacing from "./../../styles/base/spacing";
import { fontSize } from "./../../styles/base/typography";
import Wizard from "./../../components/WizardForm";
import { Field } from "formik";

function QuestionWithRadioButtons({
  questionText,
  onInputChange,
  showError,
  errorFor,
  questions,
  fieldName,
  checkedValue
}) {
  return (
    <div style={{ minHeight: "250px", marginTop: spacing.space4 }}>
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
            key={`${q.name}_${q.value}`} // don't use array index as key! https://stackoverflow.com/a/43481841/73323
            onChange={onInputChange}
            name={q.name}
            value={q.value}
            isChecked={q.value === parseInt(checkedValue, 10)}
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
  { text: "haha", value: "damn" },
  { text: "haha1", value: "damn2" },
  { text: "haha2", value: "damn3" }
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
        <Wizard.Page>
          <Field
            name="age"
            questionText="what;s up"
            component={QuestionWithRadioButtons}
            questions={questions1}
          />
        </Wizard.Page>
        <Wizard.Page>
          <div>World</div>
        </Wizard.Page>
      </Wizard>
    );
  }
}

export default Questionnaire;
