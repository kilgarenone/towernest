import { Field } from "formik";
import React, { Component } from "react";
import { css, cx } from "react-emotion";
import ScrollPercentage from "react-scroll-percentage";
import * as Yup from "yup";
import Container from "./../../components/Container";
import RadioButton from "./../../components/RadioButton";
import Wizard from "./../../components/WizardForm";
import spacing from "./../../styles/base/spacing";
import { fontSize } from "./../../styles/base/typography";

const opacity = css`
  opacity: 0.2;
  transition: opacity 200ms;
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
  percentage,
  field: { name, value, onChange }
}) {
  console.log("name", name);
  console.log("inView", percentage);
  return (
    <div
      ref={refRoot}
      className={cx(radioBtn, {
        [opacity]: percentage < 0.2 || percentage > 0.6
      })}
    >
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
  { text: "haha2", value: "damn3", name: "haha2" },
  { text: "haha", value: "damn4", name: "haha3" },
  { text: "haha1", value: "damn5", name: "haha4" },
  { text: "haha2", value: "damn6", name: "haha5" },
  { text: "haha", value: "damn7", name: "haha6" },
  { text: "haha1", value: "damn8", name: "haha7" },
  { text: "haha2", value: "damn9", name: "haha9" }
];

const questions2 = [
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
          <ScrollPercentage>
            {({ percentage, inView }) => (
              <Field
                inView={inView}
                percentage={percentage}
                name="age"
                questionText="what;s up"
                component={QuestionWithRadioButtons}
                questions={questions1}
              />
            )}
          </ScrollPercentage>
        </Wizard.Page>
        <Wizard.Page
          validationSchema={Yup.object().shape({
            age: Yup.string().required()
          })}
        >
          <ScrollPercentage>
            {({ percentage, inView }) => (
              <Field
                percentage={percentage}
                inView={inView}
                name="age2"
                questionText="what;s up"
                component={QuestionWithRadioButtons}
                questions={questions2}
              />
            )}
          </ScrollPercentage>
        </Wizard.Page>
        <Wizard.Page
          validationSchema={Yup.object().shape({
            age: Yup.string().required()
          })}
        >
          <ScrollPercentage>
            {({ percentage, inView }) => (
              <Field
                percentage={percentage}
                inView={inView}
                name="age1"
                questionText="what;s up"
                component={QuestionWithRadioButtons}
                questions={questions1}
              />
            )}
          </ScrollPercentage>
        </Wizard.Page>
      </Wizard>
    );
  }
}

export default Questionnaire;
