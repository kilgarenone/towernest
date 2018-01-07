// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import tickerLookup, {
  getTickerByName,
  getStockDetailsByTicker
} from "./tickerLookup";

export type State = {
  tickerLookup: any
};

export const rootEpic = combineEpics(getTickerByName, getStockDetailsByTicker);

export const rootReducer = combineReducers({
  tickerLookup
});
