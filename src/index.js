import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./redux/configureStore";
import Root from "./components/Root";

const store = configureStore();
// eslint-disable-next-line
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
