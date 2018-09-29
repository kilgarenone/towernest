import { ajax } from "rxjs/ajax";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { ofType } from "redux-observable";

export const CALL_API = "CALL_API";
export const GET = "GET";
export const POST = "POST";

function callApi(requestConfig, pluckState, state) {
  const { REACT_APP_PROXY_BASE_URL } = process.env;
  let additionalBodyData = {};

  if (pluckState) {
    additionalBodyData = pluckState(state);
  }

  requestConfig.url = REACT_APP_PROXY_BASE_URL + requestConfig.url;

  requestConfig.body = { ...requestConfig.body, ...additionalBodyData };

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

export default (action$, state$) =>
  action$.pipe(
    ofType(CALL_API),
    switchMap(
      ({
        requestConfig,
        pluckStateForBody,
        successType,
        failureType,
        successCallBack
      }) =>
        callApi(requestConfig, pluckStateForBody, state$.value).pipe(
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
