// @flow
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { combineReducers } from "redux";
import subYears from "date-fns/sub_years";
import isAfter from "date-fns/is_after";
import getTime from "date-fns/get_time";
import { getChartBySymbolAndRangeApi } from "../config";

const GET_STOCK_DETAILS_BY_TICKER = "matisa/tickerLookup/getStockDetails";
const RECEIVED_STOCK_DETAILS_BY_TICKER =
  "matisa/tickerLookup/receivedStockDetails";

const initialState = {};

function processThirdPartyStock(payload, tickerName) {
  const stock = {};

  stock[tickerName] = payload;

  return stock;
}

const stockDetails = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVED_STOCK_DETAILS_BY_TICKER: {
      const stock = processThirdPartyStock(action.payload, action.ticker);
      return { ...state, ...stock };
    }
    default:
      return state;
  }
};

const selectedTickers = (state = "", action) => {
  switch (action.type) {
    case GET_STOCK_DETAILS_BY_TICKER:
      return action.ticker;
    default:
      return state;
  }
};

const viewStocks = combineReducers({
  stockDetails,
  selectedTickers
});

export default viewStocks;

export const getSelectedStocksDetails = state =>
  getYearsBoundData(
    state.viewStocks.stockDetails[state.viewStocks.selectedTickers]
  );

export const getStockDetails = ticker => ({
  type: GET_STOCK_DETAILS_BY_TICKER,
  ticker
});

export const getStockDetailsByTicker = (action$, state) =>
  action$.pipe(
    ofType(GET_STOCK_DETAILS_BY_TICKER),
    switchMap(action =>
      ajax.getJSON(getChartBySymbolAndRangeApi(action.ticker, "5y"))
    ),
    map(payload => ({
      type: RECEIVED_STOCK_DETAILS_BY_TICKER,
      ticker: state.getState().viewStocks.selectedTickers,
      payload
    }))
  );

function getYearsBoundData(data = []) {
  const dates = [];
  const someYearsAgo = subYears(Date.now(), 10);
  for (let i = data.length - 1; i >= 0; i--) {
    const date = new Date(data[i].date);
    if (isAfter(date, someYearsAgo)) {
      dates.push({
        x: getTime(date),
        y: data[i].close
      });
    } else {
      break;
    }
  }
  return dates.reverse();
}
