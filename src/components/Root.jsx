import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Router } from "@reach/router";
import PortfolioReview from "../scenes/PortfolioPreview/PortfolioReview.container";
import Questionnaire from "../scenes/Questionnaire/Questionnaire.container";
import { getAccessTokenAction } from "../scenes/SignIn/SignIn.state";

class Root extends Component {
  componentDidMount() {
    this.props.getAccessTokenAction();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          {/* <SimpleHeader /> */}
          <PortfolioReview path="/plan" />
          <Questionnaire path="/questionnaire" />
          {/* <Route exact path="/login" component={SignIn} /> */}
          {/* <Route exact path="/" component={App} /> */}
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
