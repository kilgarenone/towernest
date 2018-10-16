import { Field } from "formik";
import React, { Component } from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import CenteredContainer from "../../../components/CenteredContainer";
import FieldSet from "../../../components/FieldSet";
import Wizard from "../../../components/WizardForm";
import { setProgressStatus, hideAdditionalInfoBox } from "../SignUp.state";
import { getRecommendedPortfolio } from "./Questionnaire.state";
import ListRadioBtns from "./shared/ListRadioBtns";
import riskProfileQuestions from "./shared/riskProfileQuestions";

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
    console.log(this.props);
    // this.props.storeQuestionnaireAnswers(surveyResults);
    this.props.getRecommendedPortfolio(surveyResults, () => {
      this.props.hideAdditionalInfoBox();
      this.props.setProgressStatus(52);
      this.props.navigate("/signup/plan");
    });
  };

  setProgressBarWidth = childrenCount => {
    this.props.setProgressStatus(
      this.props.progressStatus + 27 / childrenCount
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
  { getRecommendedPortfolio, setProgressStatus, hideAdditionalInfoBox }
)(Questionnaire);
