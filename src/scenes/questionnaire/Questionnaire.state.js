import { CALL_API, POST } from "../../redux/api";
import { STORE_RECOMMENDED_PORTFOLIO } from "../PortfolioReview/PortfolioReview.state";

const STORE_QUESTIONNAIRE_ANSWERS =
  "matisa/scenes/questionnaire/storeQuestionnaireAnswers";
const FAILURE_STORE_QUESTIONNAIRE_ANSWERS =
  "matisa/scenes/questionnaire/failedStoreQuestionnaireAnswers";

const initialState = { answers: null, error: null };
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case STORE_QUESTIONNAIRE_ANSWERS:
      return {
        ...state,
        answers: action.data
      };
    case FAILURE_STORE_QUESTIONNAIRE_ANSWERS:
      return {
        ...state,
        error: action.data
      };
    default:
      return state;
  }
}

export function storeQuestionnaireAnswers(payload) {
  return {
    type: STORE_QUESTIONNAIRE_ANSWERS,
    data: payload
  };
}

export function getRecommendedPortfolio(payload, callback) {
  return {
    type: CALL_API,
    requestConfig: {
      method: POST,
      url: "/getRecommendedPortfolio",
      body: payload
    },
    successCallBack: callback,
    successType: STORE_RECOMMENDED_PORTFOLIO,
    failureType: FAILURE_STORE_QUESTIONNAIRE_ANSWERS
  };
}
