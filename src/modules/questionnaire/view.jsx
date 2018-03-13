// @flow
import React, { Component } from "react";
import Card from "../../components/Card";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import Container from "./../../components/Container";
import RadioButton from "./../../components/RadioButton";

const firstQuestions = [
  { name: "timeHorizon", value: 5, text: "3 - 5 years" },
  { name: "timeHorizon", value: 10, text: "more than 10 years" }
];

function FirstQuestion() {
  return (
    <div>
      <div>
        <span>I plan to begin taking money from my investments in:</span>
      </div>
      <Container direction="column">
        {firstQuestions.map(q => (
          <RadioButton key={q.value} name={q.name} value={q.value}>
            {q.text}
          </RadioButton>
        ))}
      </Container>
    </div>
  );
}

class Questionnaire extends Component<any> {
  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      // form is invalid! so we do nothing
      return;
    }
    console.log("formmm", event.currentTarget.elements.timeHorizon.value);
  };
  render() {
    return (
      <Card>
        <form noValidate onSubmit={this.handleSubmit}>
          <FirstQuestion />
          <Button>Continue</Button>
        </form>
      </Card>
    );
  }
}

export default Questionnaire;
