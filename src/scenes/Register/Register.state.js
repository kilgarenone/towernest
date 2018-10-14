import { CALL_API, POST } from "../../redux/api";

export const REGISTER_CLIENT = "matisa/scenes/Register/registerClient";
export const STORE_CLIENT = "matisa/scenes/Register/storeClient";
export const FAIL_REGISTER_CLIENT = "matisa/scenes/Register/failRegisterClient";

export default (state = { clientData: null, error: null }, action) => {
  switch (action.type) {
    case STORE_CLIENT:
      return { ...state, clientData: action.data };
    case FAIL_REGISTER_CLIENT:
      return { ...state, error: action.data };
    default:
      return state;
  }
};
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
