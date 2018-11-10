import { CALL_API, POST } from "../../redux/api";

export const PROGRESS_STATUS = "towernest/scenes/SignUp/progressStatus";
export const HIDE_INFO_BOX = "towernest/scenes/SignUp/hideInfoBox";

const initialState = {
  progressStatus: 1,
  displayInfoBox: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROGRESS_STATUS:
      return { ...state, progressStatus: action.data };
    case HIDE_INFO_BOX:
      return { ...state, displayInfoBox: action.data };
    default:
      return state;
  }
};

export function setProgressStatus(data) {
  return {
    type: PROGRESS_STATUS,
    data
  };
}

export function hideAdditionalInfoBox() {
  return {
    type: HIDE_INFO_BOX,
    data: false
  };
}
