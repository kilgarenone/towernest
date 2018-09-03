import { Field } from "formik";
import React, { Component } from "react";
import { css } from "react-emotion";
import * as Yup from "yup";
import Container from "../../components/Container";
import { List } from "../../components/List";
import ProgressBar from "../../components/ProgressBar";
import RadioButton from "../../components/RadioButton";
import Wizard from "../../components/WizardForm";
import spacing from "../../styles/base/spacing";
import { fontSize } from "../../styles/base/typography";

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
    <div style={{ paddingTop: spacing.space5 }}>
      <div
        style={{
          marginBottom: spacing.space1,
          fontSize: fontSize.textL,
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
  state = { width: 5 };

  handleSubmit = (values, actions) => {
    console.log("values", values);
    console.log("actions", actions);
    // sleep(300).then(() => {
    //  window.alert(JSON.stringify(values, null, 2));
    //  actions.setSubmitting(false);
    // });
  };

  setProgressBarWidth = stepNum => {
    this.setState({ width: stepNum });
  };

  render() {
    return (
      <div>
        <Container
          className={css`
            position: fixed;
            top: 0;
            width: 100%;
            height: 3em;
            background-color: #fff;
            padding: 0 ${spacing.space3};
          `}
          yAlign="center"
        >
          <a
            href="http://google.com"
            className={css`
              font-weight: 700;
              font-size: 27px;
              color: black;
            `}
          >
            duller
          </a>
          <ProgressBar
            className={css`
              margin-left: ${spacing.space1};
            `}
            width={this.state.width}
          />
        </Container>
        <div className={wizardWrapperCss}>
          <Wizard
            initialValues={{
              age: "",
              lastName: ""
            }}
            onSubmit={this.handleSubmit}
            setProgressBarWidth={this.setProgressBarWidth}
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
            <Wizard.Page>
              <div>World2</div>
            </Wizard.Page>
            <Wizard.Page>
              <div>World3</div>
            </Wizard.Page>
          </Wizard>
        </div>
      </div>
    );
  }
}

export default Questionnaire;
