// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import accessToken, { getAccessToken } from "../scenes/signIn/signIn.state";
import api from "../redux/api";

export const rootEpic = combineEpics(api, getAccessToken);

export const rootReducer = combineReducers({
  accessToken
});
