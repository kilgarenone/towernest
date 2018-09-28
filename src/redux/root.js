// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { getAccessToken } from "../scenes/SignIn/SignIn.state";
import questionnaire from "../scenes/Questionnaire/Questionnaire.state";
import portfolioReview from "../scenes/PortfolioReview/PortfolioReview.state";
import api from "./api";

export const rootEpic = combineEpics(api, getAccessToken);

export const rootReducer = combineReducers({
  questionnaire,
  portfolioReview
  // userAuth
});
