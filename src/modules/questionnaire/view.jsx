import React, { Component } from "react";
import Card from "../../components/Card";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import Container from "./../../components/Container";
import RadioButton from "./../../components/RadioButton";
import ErrorMsg from "./../../components/ErrorMsg";
import { ruleRunner, run } from "./../../validation/ruleRunner";
import { required, minLength } from "./../../validation/rules";
import update from "immutability-helper";
import { isEmptyObject } from "./../../utils/functions";
import OptionallyDisplayed from "./../../components/OptionallyDisplayed";

const firstQuestions = [
  { name: "timeHorizon", value: 5, text: "3 - 5 years" },
  { name: "timeHorizon", value: 10, text: "more than 10 years" }
];

function FirstQuestion({ onInputChange, showError, errorFor }) {
  return (
    <div>
      <div>
        <span>I plan to begin taking money from my investments in:</span>
      </div>
      <Container direction="column">
        {firstQuestions.map(q => (
          <RadioButton
            key={q.value}
            onChange={onInputChange}
            name={q.name}
            value={q.value}
          >
            {q.text}
          </RadioButton>
        ))}
      </Container>
      <OptionallyDisplayed display={showError}>
        <ErrorMsg text={errorFor("timeHorizon")} />
      </OptionallyDisplayed>
    </div>
  );
}

function SecondQuestion() {
  return <div>pppp</div>;
}

const fieldValidations = [ruleRunner("timeHorizon", "Time horizon", required)];

class Questionnaire extends Component<
  any,
  { step: number, timeHorizon: number }
> {
  state = {
    step: 1,
    showErrors: false,
    validationErrors: {},
    timeHorizon: ""
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

    if (this.state.step < 3) {
      this.setState({ step: this.state.step + 1 });
    } else {
      console.log("formmm", this.state);
    }
  };
  render() {
    return (
      <Card>
        <form noValidate onSubmit={this.handleSubmit}>
          {(() => {
            switch (this.state.step) {
              case 1:
                return (
                  <FirstQuestion
                    showError={this.state.showErrors}
                    onInputChange={this.handleFieldChanged}
                    errorFor={this.errorFor}
                  />
                );
              case 2:
                return (
                  <SecondQuestion
                    showError={this.state.showErrors}
                    onInputChange={this.handleFieldChanged}
                    errorFor={this.errorFor}
                  />
                );
              default:
                return null;
            }
          })()}
          <Button>Continue</Button>
        </form>
      </Card>
    );
  }
}

export default Questionnaire;
