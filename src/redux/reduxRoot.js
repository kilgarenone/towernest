// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { getAccessToken } from "../scenes/SignIn/SignIn.state";
import questionnaire from "../scenes/SignUp/Questionnaire/Questionnaire.state";
import portfolioReview from "../scenes/SignUp/PortfolioReview/PortfolioReview.state";
import client from "../scenes/SignUp/Register/Register.state";
import signUp from "../scenes/SignUp/SignUp.state";
import api from "./api";

export const rootEpic = combineEpics(api, getAccessToken);

export const rootReducer = combineReducers({
  questionnaire,
  portfolioReview,
  signUp,
  client
});
