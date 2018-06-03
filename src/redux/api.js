import { ajax } from "rxjs/ajax";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
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

export default (action$, store) =>
  action$.pipe(
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
        // tap(response => console.log("ressss", response)),
        map(res => ({
          type: successType,
          data: JSON.stringify(res.response)
        })),
        catchError(error => of(apiError(failureType, error)))
        // startWith(isSaving()) // {type: 'IS_SAVING'}
      );
    })
  );
