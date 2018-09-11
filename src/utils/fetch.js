/* eslint-disable import/prefer-default-export */
export function goFetch(endPoint, options = {}) {
  const { REACT_APP_PROXY_BASE_URL } = process.env;

  return fetch(REACT_APP_PROXY_BASE_URL + endPoint, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      console.log("%c Request failed ", "background: red; color: white", error);
    });
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}
