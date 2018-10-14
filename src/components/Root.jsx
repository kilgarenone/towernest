import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Router } from "@reach/router";
import PortfolioReview from "../scenes/PortfolioReview/PortfolioReview.container";
import Questionnaire from "../scenes/Questionnaire/Questionnaire.container";
import { getAccessTokenAction } from "../scenes/SignIn/SignIn.state";
import App from "./App";
import SignUp from "../scenes/SignUp/SignUp.container";

class Root extends Component {
  componentDidMount() {
    this.props.getAccessTokenAction();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <PortfolioReview path="/plan" />
          <Questionnaire path="/questionnaire" />
          <SignUp path="/" />
          {/* <Route exact path="/login" component={SignIn} /> */}
          {/* <App path="/" /> */}
          {/* <EnsureLoggedInContainer>
            <Switch>
              <Route exact path="/" component={App} />
            </Switch>
          </EnsureLoggedInContainer> */}
        </Router>
      </Provider>
    );
  }
}

export default connect(
  null,
  { getAccessTokenAction }
)(Root);
