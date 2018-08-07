import React from "react";
import { Switch, Route } from "react-router-dom";
import AssetAllocation from "./assetAllocation/view";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={AssetAllocation} />
    </Switch>
  );
}

export default Main;
