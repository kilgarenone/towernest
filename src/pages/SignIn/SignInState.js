// @flow
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
// Look here to optimize bundle size on rxjs operators
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import { catchError, map, switchMap } from "rxjs/operators";

const GET_ACCESS_TOKEN = "matisa/scenes/signIn/getAccessToken";
const SET_ACCESS_TOKEN = "matisa/scenes/signIn/setAccessToken";

const initialState = { accessToken: "null", error: null };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.accessToken
      };
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
  const { REACT_APP_PROXY_BASE_URL } = process.env;

  const payload = {
    url: `${REACT_APP_PROXY_BASE_URL}/getAccessToken`,
    withCredentials: true // set this for Set-cookie to work
  };

  return action$.pipe(
    ofType(GET_ACCESS_TOKEN),
    switchMap(() => ajax(payload)),
    // tap(data => console.log(data)), // this is how u debug rxjs
    map(data => ({
      type: SET_ACCESS_TOKEN,
      accessToken: data.response.access_token
    })),
    catchError(error => console.log(error))
  );
};
