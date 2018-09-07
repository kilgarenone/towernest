import { Field } from "formik";
import React, { Component } from "react";
import { css } from "react-emotion";
import { fromEvent } from "rxjs";
import * as Yup from "yup";
import Container from "../../components/Container";
import ErrorMsgField from "../../components/ErrorMsgField";
import FieldSet from "../../components/FieldSet";
import { List } from "../../components/List";
import ProgressBar from "../../components/ProgressBar";
import RadioButton from "../../components/RadioButton";
import Wizard from "../../components/WizardForm";
import spacing from "../../styles/base/spacing";
import { fontSize } from "../../styles/base/typography";

const listContainerCss = css`
  & > li:not(:last-child) {
    border-bottom: 1px solid #e1e1e199;
  }
`;

const radioBtnCss = css`
  padding: ${spacing.space2};
  cursor: pointer;
`;

function QuestionWithRadioButtons({
  field: { name, value, onChange },
  questionText,
  questions,
  ...props
}) {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: spacing.space1,
        marginBottom: spacing.space2
      }}
    >
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
              {...props}
            >
              {q.text}
            </RadioButton>
          </li>
        ))}
      </List>
      <ErrorMsgField
        className={css`
          bottom: -3em;
        `}
        htmlFor="questionnaire-forms"
        name="age"
      />
    </div>
  );
}

const questions1 = [
  { text: "haha", value: "damn", name: "haha" },
  { text: "haha1", value: "damn2", name: "haha1" },
  { text: "haha2", value: "damn3", name: "haha2" }
];

const wizardWrapperCss = css`
  position: relative;
  z-index: 1;
  max-width: 25em;
  padding: 0 ${spacing.space2};
  margin: 0 auto;
`;

class Questionnaire extends Component {
  constructor() {
    super();

    this.state = { width: 5, scrolled: false };

    this.scrollSubscription = fromEvent(window, "scroll").subscribe(
      e =>
        e.pageY > 0
          ? this.setState({ scrolled: true })
          : this.setState({ scrolled: false })
    );
  }

  componentWillUnmount() {
    this.scrollSubscription.unsubscribe();
  }

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
            z-index: 2;
            top: 0;
            width: 100%;
            height: 3em;
            background-color: #fff;
            padding: 0 ${spacing.space3};
            ${this.state.scrolled &&
              "box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.06);"};
            transition: box-shadow 0.4s;
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
            validationSchema={Yup.object().shape({
              age: Yup.string().required("Please select one option")
            })}
            idForFormEl="questionnaire-forms"
          >
            <Wizard.Page>
              <div style={{ marginTop: "130px" }}>
                <p style={{ color: "#aaa", fontSize: fontSize.text }}>
                  You’re more likely to stick with an investment plan that fits
                  your investment personality
                </p>
                <FieldSet
                  legend="Are you a United States resident?"
                  style={{ marginTop: "40px" }}
                >
                  <Field
                    name="age"
                    component={QuestionWithRadioButtons}
                    questions={questions1}
                  />
                </FieldSet>
              </div>
            </Wizard.Page>
            {/* <Wizard.Page>
              <Field
                name="age"
                questionText="Are you a United States resident?"
                component={QuestionWithRadioButtons}
                questions={questions1}
              />
            </Wizard.Page>
            <Wizard.Page>
              <Field
                name="age"
                questionText="Are you a United States resident?"
                component={QuestionWithRadioButtons}
                questions={questions1}
              />
            </Wizard.Page>
            <Wizard.Page>
              <Field
                name="age"
                questionText="Are you a United States resident?"
                component={QuestionWithRadioButtons}
                questions={questions1}
              />
            </Wizard.Page> */}
          </Wizard>
        </div>
      </div>
    );
  }
}

export default Questionnaire;
