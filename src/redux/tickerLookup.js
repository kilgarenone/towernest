// @flow
import { ofType } from "redux-observable";
// Look here to optimize bundle size on rxjs operators
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import { debounceTime, switchMap, map } from "rxjs/operators";
import { ajax } from "rxjs/observable/dom/ajax";

const GET_TICKER_CODE_BY_NAME = "matisa/tickerLookup/searching";
const RECEIVED_TICKER_CODE_BY_NAME = "matisa/tickerLookup/results";

const buildTickerLookupApi = query =>
  `http://d.yimg.com/aq/autoc?query=${query}&region=US&lang=en-US`;

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case RECEIVED_TICKER_CODE_BY_NAME:
      return action.payload.ResultSet.Result;
    default:
      return state;
  }
}

export const getTicker = searchString => ({
  type: GET_TICKER_CODE_BY_NAME,
  payload: searchString
});

export const getTickerByName = action$ =>
  action$.pipe(
    ofType(GET_TICKER_CODE_BY_NAME),
    debounceTime(500),
    switchMap(action => ajax.getJSON(buildTickerLookupApi(action.payload))),
    map(payload => ({
      type: RECEIVED_TICKER_CODE_BY_NAME,
      payload
    }))
  );

export const getTickerByExchangeSelector = (state: State) => state.tickerLookup;
