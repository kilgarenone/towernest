// @flow
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
import { ajax } from "rxjs/observable/dom/ajax";
import { combineReducers } from "redux";

const GET_STOCK_DETAILS_BY_TICKER = "matisa/tickerLookup/getStockDetails";
const RECEIVED_STOCK_DETAILS_BY_TICKER =
  "matisa/tickerLookup/receivedStockDetails";

const ALPHA_VANTAGE_API_KEY = "1Q83SFIMSPGAD8ZZ";

const buildStockMonthlyTimeSeriesApi = ticker =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`;

const initialState = {};

function processThirdPartyStock(payload) {
  const stock = {};

  stock[payload["Meta Data"]["2. Symbol"]] =
    payload["Monthly Adjusted Time Series"];

  return stock;
}

const stockDetails = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVED_STOCK_DETAILS_BY_TICKER: {
      const stock = processThirdPartyStock(action.payload);
      return { ...state, stock };
    }
    default:
      return state;
  }
};

const selectedTickers = (state = [], action) => {
  switch (action.type) {
    case GET_STOCK_DETAILS_BY_TICKER:
      return [...state, action.ticker];
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
  state.viewStocks.stockDetails[state.viewStocks.selectedTickers[0]];

export const getStockDetails = ticker => ({
  type: GET_STOCK_DETAILS_BY_TICKER,
  ticker
});

export const getStockDetailsByTicker = action$ =>
  action$.pipe(
    ofType(GET_STOCK_DETAILS_BY_TICKER),
    switchMap(action =>
      ajax.getJSON(buildStockMonthlyTimeSeriesApi(action.payload))
    ),
    map(payload => ({
      type: RECEIVED_STOCK_DETAILS_BY_TICKER,
      payload
    }))
  );
