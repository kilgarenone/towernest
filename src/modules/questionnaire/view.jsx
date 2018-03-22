import React, { Component } from "react";
import update from "immutability-helper";
import Card from "../../components/Card";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import Container from "./../../components/Container";
import RadioButton from "./../../components/RadioButton";
import ErrorMessage from "./../../components/ErrorMessage";
import { ruleRunner, run } from "./../../validation/ruleRunner";
import { required, minLength } from "./../../validation/rules";
import { isEmptyObject } from "./../../utils/functions";
import OptionallyDisplayed from "./../../components/OptionallyDisplayed";
import spacing from "./../../styles/base/spacing";
import ControlButtonsGroup from "./../../components/ControlButtonsGroup";
import ProgressBar from "./../../components/ProgressBar";
import { fontSize } from "./../../styles/base/typography";
import Heading from "./../../components/Heading";

const firstQuestionDesc =
  "I plan to begin taking money from my investments in:";
const secondQuestionDesc =
  "Imagine that in the past three months, the overall stock market lost 25% of its value. What would you do?";
const firstQuestions = [
  { name: "timeHorizon", value: 0, text: "3 - 5 years" },
  { name: "timeHorizon", value: 1, text: "more than 10 years" }
];
const secondQuestions = [
  { name: "riskTolerance", value: 0, text: "Sell all of my shares" },
  { name: "riskTolerance", value: 1, text: "Sell some of my shares" },
  { name: "riskTolerance", value: 2, text: "Do nothing" },
  { name: "riskTolerance", value: 3, text: "Buy more shares" }
];

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
          fontSize: fontSize.subHeading,
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
      <OptionallyDisplayed display={showError}>
        <ErrorMessage>{errorFor(fieldName)}</ErrorMessage>
      </OptionallyDisplayed>
    </div>
  );
}

const fieldValidations = [ruleRunner("timeHorizon", "Time horizon", required)];

class Questionnaire extends Component<
  any,
  { step: number, timeHorizon: number }
> {
  state = {
    step: 0,
    showErrors: false,
    validationErrors: {},
    timeHorizon: "",
    riskTolerance: ""
  };

  componentWillMount() {
    // Run validations on initial state
    this.setState({ validationErrors: run(this.state, fieldValidations) });
  }

  handleFieldChanged = event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    // update() is provided by React Immutability Helpers
    const newState = update(this.state, {
      [name]: { $set: value }
    });
    newState.validationErrors = run(newState, fieldValidations);
    this.setState(newState);
  };

  errorFor = field => this.state.validationErrors[field] || "";

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ showErrors: true });
    if (!isEmptyObject(this.state.validationErrors)) {
      return null;
    }

    if (this.state.step < 1) {
      this.setState({ step: this.state.step + 1 });
    } else {
      this.props.history.push("/allocation");
    }
  };

  handleBackBtnClick = () => {
    this.setState({ step: this.state.step - 1 });
  };
  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Heading tag="h3">Let's get to know you</Heading>
        <ProgressBar width={this.state.step * 50} />
        {(() => {
          switch (this.state.step) {
            case 0:
              return (
                <QuestionWithRadioButtons
                  questionText={firstQuestionDesc}
                  showError={this.state.showErrors}
                  onInputChange={this.handleFieldChanged}
                  errorFor={this.errorFor}
                  questions={firstQuestions}
                  fieldName="timeHorizon"
                  checkedValue={this.state.timeHorizon}
                />
              );
            case 1:
              return (
                <QuestionWithRadioButtons
                  questionText={secondQuestionDesc}
                  showError={this.state.showErrors}
                  onInputChange={this.handleFieldChanged}
                  errorFor={this.errorFor}
                  questions={secondQuestions}
                  fieldName="riskTolerance"
                  checkedValue={this.state.riskTolerance}
                />
              );
            default:
              return null;
          }
        })()}
        <ControlButtonsGroup
          displayBackBtn={this.state.step > 1}
          handleBackBtnClick={this.handleBackBtnClick}
        />
      </form>
    );
  }
}

export default Questionnaire;
