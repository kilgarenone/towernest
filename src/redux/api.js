import { ajax } from "rxjs/ajax";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { ofType } from "redux-observable";
import { _throw } from "rxjs/observable/throw";

export const CALL_API = "CALL_API";
export const GET = "GET";
export const POST = "POST";

function callApi(endPoint, httpMethod, store, hasAuthentication) {
  const token = store.accessToken.data;
  let config = {};

  if (hasAuthentication) {
    if (token) {
      config = {
        headers: { Authorization: `Bearer ${token}` },
        url: endPoint,
        method: httpMethod
      };
    } else {
      return _throw(new Error("No token saved!"));
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

export default (action$, store) =>
  action$.pipe(
    ofType(CALL_API),
    switchMap(
      ({
        endPoint,
        httpMethod = GET,
        successType,
        failureType,
        hasAuthentication = true
      }) =>
        callApi(endPoint, httpMethod, store.getState(), hasAuthentication).pipe(
          tap(response =>
            console.log(
              "%c API RESPONSE ",
              "background: lightgreen; color: black",
              response
            )
          ),
          map(res => ({
            type: successType,
            data: res.response
          })),
          catchError(
            error => {
              console.log(
                "%c API ERROR ",
                "background: mediumvioletred; color: white",
                error
              );
              return of(apiError(failureType, error));
            }
            // startWith(isSaving()) // {type: 'IS_SAVING'}
          )
        )
    )
  );
