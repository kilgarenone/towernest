import { Field } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "react-emotion";
import { fromEvent } from "rxjs";
import Container from "../../components/Container";
import FieldSet from "../../components/FieldSet";
import ProgressBar from "../../components/ProgressBar";
import Wizard from "../../components/WizardForm";
import spacing from "../../styles/spacing";
import riskProfileQuestions from "./shared/riskProfileQuestions";
import ListRadioBtns from "./shared/ListRadioBtns";
import Logo from "../../components/Logo";
import { padding0 } from "../../styles/utilities";
import CenteredContainer from "../../components/CenteredContainer";
import {
  getRecommendedPortfolio,
  storeQuestionnaireAnswers
} from "./Questionnaire.state";
import { setProgressStatus } from "../SignUp/SignUp.state";

const validator = fieldName => values => {
  const errors = {};
  if (!values[fieldName]) {
    errors[fieldName] = "Please select one option";
  }
  return errors;
};

class Questionnaire extends Component {
  state = {};

  handleSubmit = surveyResults => {
    this.props.storeQuestionnaireAnswers(surveyResults);
    this.props.getRecommendedPortfolio(surveyResults, () =>
      this.props.navigate("/plan")
    );
  };

  setProgressBarWidth = childrenCount => {
    this.props.setProgressStatus(
      this.props.progressStatus + 25 / childrenCount
    );
  };

  render() {
    return (
      <CenteredContainer
        className={css`
          position: relative;
          z-index: 1;
        `}
        maxWidth="25em"
      >
        <Wizard
          initialValues={{
            age: "",
            riskCapacity: "",
            timeHorizon: "",
            riskWillingness: ""
          }}
          onSubmit={this.handleSubmit}
          setProgressBarWidth={this.setProgressBarWidth}
          idForFormEl="questionnaire-forms"
          prevAndNextBtnClassName={css`
            top: -3.5em;
          `}
        >
          {riskProfileQuestions.map(question => (
            <Wizard.Page
              validate={validator(question.name)}
              key={question.name}
            >
              <FieldSet
                style={{ minHeight: "28em" }}
                legend={question.description}
              >
                <Field
                  name={question.name}
                  component={ListRadioBtns}
                  questions={question.answers}
                />
              </FieldSet>
            </Wizard.Page>
          ))}
        </Wizard>
      </CenteredContainer>
    );
  }
}

export default connect(
  state => ({ progressStatus: state.signUp.progressStatus }),
  { getRecommendedPortfolio, storeQuestionnaireAnswers, setProgressStatus }
)(Questionnaire);
