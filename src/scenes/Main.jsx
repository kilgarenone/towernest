import React from "react";
import { Switch, Route } from "react-router-dom";
import AssetAllocation from "./assetAllocation/view";
import Questionnaire from "./questionnaire";
import SignIn from "./signIn/container"

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/allocation" component={AssetAllocation} />
    </Switch>
  );
}

export default Main;
