import React, { Component } from "react";
import { Field } from "formik";
import * as Yup from "yup";
import { css } from "react-emotion";
import Container from "../../components/Container";
import ErrorMessage from "../../components/ErrorMessage";
import OptionallyDisplayed from "../../components/OptionallyDisplayed";
import RadioButton from "../../components/RadioButton";
import spacing from "../../styles/base/spacing";
import { fontSize } from "../../styles/base/typography";
import Wizard from "../../components/WizardForm";
import CheckBox from "../../components/CheckBox";
import { List } from "../../components/List";

const listContainerCss = css`
  & > li:not(:last-child) {
    border-bottom: 1px solid #e1e1e1;
  }
`;

const radioBtnCss = css`
  padding: ${spacing.space2};
  cursor: pointer;
`;

function QuestionWithRadioButtons({
  questionText,
  questions,
  field: { name, value, onChange }
}) {
  return (
    <div style={{ marginTop: spacing.space4 }}>
      <div
        style={{
          marginBottom: spacing.space1,
          fontSize: fontSize.heading,
          fontWeight: 500
        }}
      >
        <span>{questionText}</span>
      </div>
      <List className={listContainerCss}>
        {questions.map(q => (
          <li>
            <RadioButton
              className={radioBtnCss}
              key={`${name}_${q.value}`} // don't use array index as key! https://stackoverflow.com/a/43481841/73323
              handleChange={onChange}
              name={name}
              value={q.value}
              isChecked={q.value === value}
            >
              {q.text}
            </RadioButton>
          </li>
        ))}
      </List>
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

const wizardWrapperCss = css`
  max-width: 25em;
  padding: 0 ${spacing.space2};
  margin: 0 auto;
`;

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
      <div className={wizardWrapperCss}>
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
            <Field
              name="age"
              questionText="Are you a United States resident?"
              component={QuestionWithRadioButtons}
              questions={questions1}
            />
          </Wizard.Page>
          <Wizard.Page>
            <div>World</div>
          </Wizard.Page>
        </Wizard>
      </div>
    );
  }
}

export default Questionnaire;
