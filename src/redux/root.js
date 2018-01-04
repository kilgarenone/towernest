// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import tickerLookup, { getTickerByName } from "./tickerLookup";

export type State = {
  tickerLookup: any
};

export const rootEpic = combineEpics(getTickerByName);

export const rootReducer = combineReducers({
  tickerLookup
});
