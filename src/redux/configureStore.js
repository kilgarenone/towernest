import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./root";

const configureStore = () => {
  const composeEnhancers =
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const epicMiddleware = createEpicMiddleware(rootEpic);

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  return store;
};

export default configureStore;
