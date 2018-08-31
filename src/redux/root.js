// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import userAuth, { getAccessToken } from "../scenes/SignIn/SignIn.state";
import api from "./api";

export const rootEpic = combineEpics(api, getAccessToken);

export const rootReducer = combineReducers({
  userAuth
});
