import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimpleHeader from "./../modules/SimpleHeader";
import AssetAllocation from "./../scenes/assetAllocation/view";
import App from "./App";
import EnsureLoggedInContainer from "./EnsureLoggedIn.container";
import SignIn from "../scenes/signIn/SignIn.container";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <SimpleHeader />
        <Route exact path="/login" component={SignIn} />
        <EnsureLoggedInContainer>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/allocation" component={AssetAllocation} />
          </Switch>
        </EnsureLoggedInContainer>
      </div>
    </Router>
  </Provider>
);

export default Root;
