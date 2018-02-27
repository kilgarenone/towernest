// @flow
import { ofType } from "redux-observable";
// Look here to optimize bundle size on rxjs operators
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import { switchMap, map } from "rxjs/operators";
import { ajax } from "rxjs/observable/dom/ajax";
import { CLIENT_ID, CLIENT_SECRET } from "./../../config";

const GET_ACCESS_TOKEN = "matisa/modules/auth/getAccessToken";
const SET_ACCESS_TOKEN = "matisa/modules/auth/setAccessToken";

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ACCESS_TOKEN: {
      console.log("res", action);
      return "haha";
    }
    default:
      return state;
  }
}

export function getAccessTokenAction() {
  return {
    type: GET_ACCESS_TOKEN
  };
}

export const getAccessToken = action$ => {
  const base64ClientId = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const payload = {
    headers: { Authorization: `Basic ${base64ClientId}` },
    url: "/auth/getAccessToken"
  };

  return action$.pipe(
    ofType(GET_ACCESS_TOKEN),
    switchMap(() => ajax(payload)),
    map(response => ({
      type: SET_ACCESS_TOKEN,
      response
    }))
  );
};
// export const getTickerByExchangeSelector = (state: State) => state.tickerLookup;
