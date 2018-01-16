import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./root";

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return action => {
    console.group(action.type);
    console.log(
      "%c prev state ",
      "background: gray; color: white",
      store.getState()
    );
    console.log("%c action ", "background: blue; color: white", action);
    const returnValue = rawDispatch(action);
    console.log(
      "%c next state ",
      "background: green; color: white",
      store.getState()
    );
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const composeEnhancers =
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const epicMiddleware = createEpicMiddleware(rootEpic);

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }

  return store;
};

export default configureStore;
