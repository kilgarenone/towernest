import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import throttle from "lodash.throttle";
import { rootEpic, rootReducer } from "./reduxRoot";
import { loadState, saveState } from "./persistState";

const persistedStore = loadState();
const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const composeEnhancers =
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    persistedStore,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
