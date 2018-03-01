// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import tickerLookup, { getTickerByName } from "./tickerLookup";
import viewStocks, { getStockDetailsByTicker } from "./viewStocks";
import accessToken, { getAccessToken } from "../modules/auth/state";
import api from "../redux/api";

export type State = {
  tickerLookup: any,
  selectedStocksToView: any
};

export const rootEpic = combineEpics(
  api,
  getAccessToken,
  getTickerByName,
  getStockDetailsByTicker
);

export const rootReducer = combineReducers({
  tickerLookup,
  viewStocks,
  accessToken
});
