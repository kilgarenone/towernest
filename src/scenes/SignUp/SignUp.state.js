import { CALL_API, POST } from "../../redux/api";

export const REGISTER_CLIENT = "towernest/scenes/SignUp/registerClient";
export const STORE_CLIENT = "towernest/scenes/SignUp/storeClient";
export const FAIL_REGISTER_CLIENT =
  "towernest/scenes/SignUp/failRegisterClient";
export const PROGRESS_STATUS = "towernest/scenes/SignUp/progressStatus";

const initialState = {
  clientData: null,
  error: null,
  progressStatus: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CLIENT:
      return { ...state, clientData: action.data };
    case FAIL_REGISTER_CLIENT:
      return { ...state, error: action.data };
    case PROGRESS_STATUS:
      return { ...state, progressStatus: action.data };
    default:
      return state;
  }
};

export function setProgressStatus(data) {
  return {
    type: PROGRESS_STATUS,
    data,
  };
}
export function registerClient(payload, callBack) {
  return {
    type: CALL_API,
    requestConfig: {
      url: "/registerClient",
      method: POST,
      body: payload,
    },
    successCallBack: callBack,
    // pluckStateForBody: state => ({
    //   metadata: JSON.stringify(state.questionnaire.answers),
    // }),
    successType: STORE_CLIENT,
    failureType: FAIL_REGISTER_CLIENT,
  };
}
