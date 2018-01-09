// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import tickerLookup, { getTickerByName } from "./tickerLookup";
import viewStocks, { getStockDetailsByTicker } from "./viewStocks";

export type State = {
  tickerLookup: any,
  selectedStocksToView: any
};

export const rootEpic = combineEpics(getTickerByName, getStockDetailsByTicker);

export const rootReducer = combineReducers({
  tickerLookup,
  viewStocks
});
