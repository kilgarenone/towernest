// @flow
import { ofType } from "redux-observable";
// Look here to optimize bundle size on rxjs operators
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import { switchMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { CLIENT_ID, CLIENT_SECRET } from "./../../config";
import { CALL_API } from "./../../redux/api";

const GET_ACCESS_TOKEN = "matisa/modules/auth/getAccessToken";
const SET_ACCESS_TOKEN = "matisa/modules/auth/setAccessToken";
const SUCCESS_HELLO_WORLD = "matisa/modules/auth/successHelloWorld";
const ERROR_HELLO_WORLD = "matisa/modules/auth/errorHelloWorld";

const initialState = "";

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ACCESS_TOKEN: {
      return action.accessToken;
    }
    case ERROR_HELLO_WORLD: {
      return action.error.status;
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

export function helloWorld() {
  return {
    type: CALL_API,
    endPoint: "/testApi",
    successType: SUCCESS_HELLO_WORLD,
    failureType: ERROR_HELLO_WORLD
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
    // tap(data => console.log(data)), // this is how u debug rxjs
    map(data => ({
      type: SET_ACCESS_TOKEN,
      accessToken: data.response.access_token
    }))
  );
};
