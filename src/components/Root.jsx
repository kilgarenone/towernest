import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <div>
            {/* <SimpleHeader /> */}
            <Route exact path="/plan" component={PortfolioReview} />
            <Route exact path="/questionnaire" component={Questionnaire} />
            {/* <Route exact path="/login" component={SignIn} /> */}
            {/* <Route exact path="/" component={App} /> */}
            {/* <EnsureLoggedInContainer>
            <Switch>
              <Route exact path="/" component={App} />
            </Switch>
          </EnsureLoggedInContainer> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default connect(
  null,
  { getAccessTokenAction }
)(Root);
