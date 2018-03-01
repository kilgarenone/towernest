import { ajax } from "rxjs/observable/dom/ajax";
import { switchMap, map, tap } from "rxjs/operators";
import { ofType } from "redux-observable";

function callApi(endPoint, httpMethod, store, authenticated) {
  console.log("storeeee,", store);
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
  // TODO: Handle API error here
  // .then(response => response.text().then(text => ({ text, response })))
  // .then(({ text, response }) => {
  //   if (!response.ok) {
  //     return Promise.reject(text);
  //   }

  //   return text;
  // })
  // .catch(err => console.log(err));
}

export const CALL_API = "CALL_API";
export const GET = "GET";
export const POST = "POST";

export default (action$, store) => {
  // const [requestType, successType, errorType] = types;

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return action$.pipe(
    ofType(CALL_API),
    switchMap(({ endPoint, httpMethod = GET, authenticated = true }) =>
      callApi(endPoint, httpMethod, store.getState(), authenticated)
    ),
    map(response => ({
      type: "matisa/modules/auth/setAccessToken",
      accessToken: "sadasdsa"
    }))
  );
  // )then(
  //   response =>
  //     next({
  //       response,
  //       authenticated,
  //       type: successType
  //     }),
  //   error =>
  //     next({
  //       error: error.message || "There was an error.",
  //       type: errorType
  //     })
  // );
};
