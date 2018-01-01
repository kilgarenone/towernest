import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import tickerLookupReducer, { getTickerByName } from "./tickerLookup";

export const rootEpic = combineEpics(getTickerByName);

export const rootReducer = combineReducers({
  tickerLookupReducer
});
