// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import tickerLookup, { getTickerByName } from "./tickerLookup";
import viewStocks, { getStockDetailsByTicker } from "./viewStocks";
import getAccessTokenReducer, { getAccessToken } from "../modules/auth/state";

export type State = {
  tickerLookup: any,
  selectedStocksToView: any
};

export const rootEpic = combineEpics(
  getAccessToken,
  getTickerByName,
  getStockDetailsByTicker
);

export const rootReducer = combineReducers({
  tickerLookup,
  viewStocks,
  getAccessTokenReducer
});
