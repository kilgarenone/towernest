import { ofType } from "redux-observable";
// Look here to optimize bundle size on rxjs operators
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import { debounceTime, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/observable/dom/ajax";
import "rxjs/add/operator/map";

const INPUT_NAME_FOR_TICKER_CODE = "matisa/tickerLookup/searching";
const buildTickerLookupApi = query =>
  `https://cors-anywhere.herokuapp.com/http://d.yimg.com/aq/autoc?query=${query}&region=US&lang=en-US`;

const initialState = "";

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INPUT_NAME_FOR_TICKER_CODE:
      return action.payload;
    case "PONG":
      return action.payload;
    default:
      return state;
  }
}

export const searchForTicker = searchString => ({
  type: INPUT_NAME_FOR_TICKER_CODE,
  payload: searchString
});

export const getTickerByName = action$ =>
  action$.pipe(
    ofType(INPUT_NAME_FOR_TICKER_CODE),
    debounceTime(500),
    switchMap(action =>
      ajax.getJSON(buildTickerLookupApi(action.payload)).map(payload => ({
        type: "PONG",
        payload
      }))
    )
  );
