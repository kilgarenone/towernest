// @flow
import React, { Component } from "react";
import Card from "../../components/Card";
import Input from "./../../components/Input";
import Button from "./../../components/Button";

function FirstQuestion() {
  return (
    <div>
      <div>
        <span>I plan to begin taking money from my investments in:</span>
      </div>
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
    console.log("formmm", event.currentTarget.elements.timeHorizon.dataset);
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
