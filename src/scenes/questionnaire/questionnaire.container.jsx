import { Field } from "formik";
import React, { Component } from "react";
import { css } from "react-emotion";
import { fromEvent } from "rxjs";
import Container from "../../components/Container";
import FieldSet from "../../components/FieldSet";
import ProgressBar from "../../components/ProgressBar";
import Wizard from "../../components/WizardForm";
import spacing from "../../styles/spacing";
import goFetch from "../../utils/fetch";
import riskProfileQuestions from "./riskProfileQuestions";
import ListRadioBtns from "./shared/ListRadioBtns";

const wizardWrapperCss = css`
  position: relative;
  z-index: 1;
  max-width: 25em;
  padding: 0 ${spacing.space2};
  margin: 0 auto;
`;

const validator = fieldName => values => {
  const errors = {};
  if (!values[fieldName]) {
    errors[fieldName] = "Please select one option";
  }
  return errors;
};

class Questionnaire extends Component {
  constructor() {
    super();
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

  handleSubmit = async surveyResults => {
    const totalRiskScore = Object.values(surveyResults).reduce(
      (accumulator, currentVal) => +accumulator + +currentVal,
      0
    );
    console.log(totalRiskScore);

    const data = await goFetch("/getRecommendedPortfolio", {
      method: "POST",
      body: JSON.stringify({ helloWorld: totalRiskScore })
    });
    console.log("damnson", data);
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
            padding: 0 ${spacing.space3};
            ${isScrolledCss};
            transition: box-shadow 0.4s;
          `}
          yAlign="center"
        >
          <a
            href="http://google.com"
            className={css`
              font-weight: 700;
              font-size: 27px;
              color: black;
            `}
          >
            duller
          </a>
          <ProgressBar
            className={css`
              margin-left: ${spacing.space1};
            `}
            width={this.state.width}
          />
        </Container>
        <div className={wizardWrapperCss}>
          <Wizard
            initialValues={{
              age: "",
              riskCapacity: "",
              netAsset: "",
              timeHorizon: "",
              riskWillingness: ""
            }}
            onSubmit={this.handleSubmit}
            setProgressBarWidth={this.setProgressBarWidth}
            idForFormEl="questionnaire-forms"
            prevAndNextBtnClassName={css`
              top: -60px;
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
                    style={{ minHeight: "20.5em" }}
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
        </div>
      </React.Fragment>
    );
  }
}

export default Questionnaire;
