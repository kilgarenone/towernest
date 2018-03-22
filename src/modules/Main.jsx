import React from "react";
import { Switch, Route } from "react-router-dom";
import AssetAllocation from "./assetAllocation/view";
import Questionnaire from "./questionnaire/view";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Questionnaire} />
      <Route exact path="/allocation" component={AssetAllocation} />
    </Switch>
  );
}

export default Main;
