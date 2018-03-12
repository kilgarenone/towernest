// @flow
import React, { Component } from "react";
import Card from "../../components/Card";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import Container from "./../../components/Container";

function FirstQuestion() {
  return (
    <div>
      <div>
        <span>I plan to begin taking money from my investments in:</span>
      </div>
      <Container direction="column">
        <label htmlFor="timeHorizon">
          <Input
            name="timeHorizon"
            data-parse="haha"
            id="timeHorizon"
            value="5"
            type="radio"
            required
          />
          3 - 5 years
        </label>
        <label htmlFor="timeHorizon">
          <Input
            name="timeHorizon"
            data-parse="haha"
            id="timeHorizon"
            value="10"
            type="radio"
            required
          />
          more than 10 years
        </label>
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
