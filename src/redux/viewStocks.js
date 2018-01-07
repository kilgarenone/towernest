// @flow
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
import { ajax } from "rxjs/observable/dom/ajax";

const GET_STOCK_DETAILS_BY_TICKER = "matisa/tickerLookup/getStockDetails";
const RECEIVED_STOCK_DETAILS_BY_TICKER =
  "matisa/tickerLookup/receivedStockDetails";

const ALPHA_VANTAGE_API_KEY = "1Q83SFIMSPGAD8ZZ";

const buildStockMonthlyTimeSeriesApi = ticker =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`;

const initialState = [];

function processThirdPartyStock(payload) {
  const stock = {};

  stock[payload["Meta Data"]["2. Symbol"]] =
    payload["Monthly Adjusted Time Series"];

  return stock;
}
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case RECEIVED_STOCK_DETAILS_BY_TICKER: {
      const stock = processThirdPartyStock(action.payload);
      return [...state, stock];
    }
    default:
      return state;
  }
}

export const getStockDetails = ticker => ({
  type: GET_STOCK_DETAILS_BY_TICKER,
  payload: ticker
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
