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
  storeQuestionnaireAnswers,
} from "./Questionnaire.state";

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

  render() {
    return (
      <React.Fragment>
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
              riskWillingness: "",
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
                <div style={{ marginTop: spacing.space4 }}>
                  {/* <p style={{ color: "#aaa", fontSize: fontSize.text }}>
                    You’re more likely to stick with an investment plan that
                    fits your investment personality
                  </p> */}
                  <FieldSet
                    style={{ minHeight: "27.5em" }}
                    legend={question.description}
                  >
                    <Field
                      name={question.name}
                      component={ListRadioBtns}
                      questions={question.answers}
                    />
                  </FieldSet>
                </div>
              </Wizard.Page>
            ))}
          </Wizard>
        </CenteredContainer>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { getRecommendedPortfolio, storeQuestionnaireAnswers }
)(Questionnaire);
