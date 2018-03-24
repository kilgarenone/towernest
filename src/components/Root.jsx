import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SimpleHeader from "./../layouts/SimpleHeader";
import Questionnaire from "./../modules/questionnaire/view";
import AssetAllocation from "./../modules/assetAllocation/view";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <SimpleHeader />
        <Switch>
          <Route exact path="/" component={Questionnaire} />
          <Route exact path="/allocation" component={AssetAllocation} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;
