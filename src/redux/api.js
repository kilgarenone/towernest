import { ajax } from "rxjs/ajax";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { ofType } from "redux-observable";

export const CALL_API = "CALL_API";
export const GET = "GET";
export const POST = "POST";

function callApi(requestConfig) {
  const { REACT_APP_PROXY_BASE_URL } = process.env;
  requestConfig.url = REACT_APP_PROXY_BASE_URL + requestConfig.url;

  const config = {
    ...requestConfig,
    withCredentials: true,
    responseType: "json"
  };
  return ajax(config);
}

function apiError(type, error) {
  return {
    type,
    error
  };
}

export default action$ =>
  action$.pipe(
    ofType(CALL_API),
    switchMap(({ requestConfig, successType, failureType, successCallBack }) =>
      callApi(requestConfig).pipe(
        tap(response =>
          console.log(
            "%c API RESPONSE ",
            "background: lightgreen; color: black",
            response
          )
        ),
        map(res => {
          if (successCallBack) {
            successCallBack();
          }

          return {
            type: successType,
            data: res.response
          };
        }),
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
