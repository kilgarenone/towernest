import { CALL_API, POST } from "../../../redux/api";

export const REGISTER_CLIENT = "towernest/scenes/SignUp/registerClient";
export const STORE_CLIENT = "towernest/scenes/SignUp/storeClient";
export const FAIL_REGISTER_CLIENT =
  "towernest/scenes/SignUp/failRegisterClient";

const initialState = {
  data: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CLIENT:
      return { ...state, data: action.data };
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
      body: payload
    },
    successCallBack: callBack,
    // pluckStateForBody: state => ({
    //   metadata: JSON.stringify(state.questionnaire.answers),
    // }),
    successType: STORE_CLIENT,
    failureType: FAIL_REGISTER_CLIENT
  };
}
