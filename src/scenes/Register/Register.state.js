import { CALL_API, POST } from "../../redux/api";

export const REGISTER_CLIENT = "matisa/scenes/Register/registerClient";
export const STORE_CLIENT = "matisa/scenes/Register/storeClient";
export const FAIL_REGISTER_CLIENT = "matisa/scenes/Register/failRegisterClient";

export function registerClient(payload) {
  return {
    type: CALL_API,
    requestConfig: {
      url: "/client",
      method: POST,
      body: payload
    },
    pluckStateForBody: state => ({ metadata: state.questionnaire.answers }),
    successType: STORE_CLIENT,
    failureType: FAIL_REGISTER_CLIENT
  };
}
