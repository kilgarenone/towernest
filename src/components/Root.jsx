import React from "react";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router-dom";
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;
