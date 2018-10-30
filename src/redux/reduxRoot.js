// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { getAccessToken } from "../scenes/SignIn/SignInState";
import questionnaire from "../scenes/SignUp/Questionnaire/QuestionnaireState";
import portfolioReview from "../scenes/SignUp/PortfolioReview/PortfolioReviewState";
import client from "../scenes/SignUp/Register/RegisterState";
import signUp from "../scenes/SignUp/SignUpState";
import api from "./api";

export const rootEpic = combineEpics(api, getAccessToken);

export const rootReducer = combineReducers({
  questionnaire,
  portfolioReview,
  signUp,
  client
});
