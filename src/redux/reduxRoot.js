// @flow
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { getAccessToken } from "../pages/SignIn/SignInState";
import questionnaire from "../pages/SignUp/Questionnaire/QuestionnaireState";
import portfolioReview from "../pages/SignUp/PortfolioReview/PortfolioReviewState";
import client from "../pages/SignUp/Register/RegisterState";
import signUp from "../pages/SignUp/SignUpState";
import api from "./api";

export const rootEpic = combineEpics(api, getAccessToken);

export const rootReducer = combineReducers({
  questionnaire,
  portfolioReview,
  signUp,
  client
});
