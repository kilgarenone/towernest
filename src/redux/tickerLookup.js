import { ofType } from "redux-observable";
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import { delay, mapTo } from "rxjs/operators";

const INPUT_NAME_FOR_TICKER_CODE = "matisa/tickerLookup/searching";

const initialState = "";

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INPUT_NAME_FOR_TICKER_CODE:
      return action.payload;
    case "PONG":
      return "WTFFFF WOOHOOO";
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
    delay(2000),
    mapTo({ type: "PONG" })
  );
