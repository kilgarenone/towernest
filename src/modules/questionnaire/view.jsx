import React, { Component } from "react";
import Card from "../../components/Card";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import Container from "./../../components/Container";
import RadioButton from "./../../components/RadioButton";
import ErrorMsg from "./../../components/ErrorMsg";
import { ruleRunner, run } from "./../../validation/ruleRunner";
import { required } from "./../../validation/rules";
import { minLength } from "./../../validation/errorMessages";

const firstQuestions = [
  { name: "timeHorizon", value: 5, text: "3 - 5 years" },
  { name: "timeHorizon", value: 10, text: "more than 10 years" }
];

function FirstQuestion({ onInputChange, errText }) {
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
        <input name="firstName" onChange={onInputChange} />
      </Container>
      <ErrorMsg text={errText} />
    </div>
  );
}

function SecondQuestion() {
  return <div>pppp</div>;
}

const fieldValidations = [
  ruleRunner("firstName", "First Name", required, minLength(6))
];

class Questionnaire extends Component<
  any,
  { step: number, timeHorizon: number }
> {
  state = {
    step: 1,
    showErrors: false,
    validationErrors: {},
    timeHorizon: "",
    firstName: ""
  };

  componentWillMount() {
    // Run validations on initial state
    this.setState({ validationErrors: run(this.state, fieldValidations) });
  }

  errorFor = field => {
    return this.state.validationErrors[field] || "";
  };

  handleInputChange = event => {
    const { target } = event;
    console.log("target", target);

    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      console.log(event.target.elements.timeHorizon.checkValidity());
      // form is invalid! so we do nothing
      return;
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
                return <FirstQuestion onInputChange={this.handleInputChange} />;
              case 2:
                return (
                  <SecondQuestion onInputChange={this.handleInputChange} />
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
