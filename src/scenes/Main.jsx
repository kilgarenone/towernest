import React from "react";
import { Switch, Route } from "react-router-dom";
import AssetAllocation from "./assetAllocation/view";
import Questionnaire from "./Questionnaire/Questionnaire.container";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Questionnaire} />
    </Switch>
  );
}

export default Main;
