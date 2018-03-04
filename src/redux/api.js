import { ajax } from "rxjs/observable/dom/ajax";
import { switchMap, map, tap, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { _throw } from "rxjs/observable/throw";
import { ofType } from "redux-observable";

export const CALL_API = "CALL_API";
export const GET = "GET";
export const POST = "POST";

function callApi(endPoint, httpMethod, store, authenticated) {
  const token = store.accessToken;
  let config = {};

  if (authenticated) {
    if (token) {
      config = {
        headers: { Authorization: `Bearer ${token}` },
        url: endPoint,
        method: httpMethod
      };
    } else {
      throw new Error("No token saved!");
    }
  } else {
    config = {
      url: endPoint,
      method: httpMethod
    };
  }
  return ajax(config);
}

function apiError(type, error) {
  return {
    type,
    error
  };
}

export default (action$, store) => {
  return action$.pipe(
    ofType(CALL_API),
    switchMap(action => {
      const {
        endPoint,
        httpMethod = GET,
        successType,
        failureType,
        authenticated = true
      } = action;

      return callApi(
        endPoint,
        httpMethod,
        store.getState(),
        authenticated
      ).pipe(
        map(response => [response, successType]),
        catchError(error => _throw(apiError(failureType, error)))
        // startWith(isSaving()) // {type: 'IS_SAVING'}
      );
    }),
    // tap(response => console.log("ressss", response)),
    map(nextAction => ({
      type: nextAction[1],
      data: nextAction[0].response
    })),
    catchError(errorAction => of(errorAction))
  );
};
