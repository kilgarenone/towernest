import { CALL_API, POST } from "../../redux/api";

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

export function storeQuestionnaireResults(payload) {
  return {
    type: STORE_QUESTIONNAIRE_ANSWERS,
    data: payload
  };
}

export function getRecommendedPortfolio(payload) {
  console.log(payload);
  return {
    type: CALL_API,
    requestConfig: {
      method: POST,
      url: "/getRecommendedPortfolio",
      body: payload,
      withCredentials: true
    },
    successPayload: payload,
    successType: STORE_QUESTIONNAIRE_ANSWERS,
    failureType: FAILURE_STORE_QUESTIONNAIRE_ANSWERS
  };
}
