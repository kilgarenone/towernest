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
  constructor(props) {
    // don't forget the 'props'!!! for connect()!!!
    super(props);
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

  handleSubmit = surveyResults => {
    this.props.storeQuestionnaireAnswers(surveyResults);
    this.props.getRecommendedPortfolio(surveyResults, () =>
      this.props.navigate("/plan")
    );
  };

  setProgressBarWidth = stepNum => {
    this.setState({ width: stepNum });
  };

  render() {
    const isScrolledCss =
      this.state.scrolled &&
      "box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.06);";

    return (
      <React.Fragment>
        <Container
          className={css`
            position: fixed;
            z-index: 2;
            top: 0;
            width: 100%;
            height: 3em;
            background-color: #fff;
            ${padding0};
            ${isScrolledCss};
            transition: box-shadow 0.4s;
          `}
          yAlign="center"
        >
          <Logo />
          <ProgressBar
            className={css`
              margin-left: ${spacing.space1};
            `}
            width={this.state.width}
          />
        </Container>
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
