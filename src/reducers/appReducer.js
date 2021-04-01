import { SHOW__LOADER, HIDE__LOADER } from "../Constants/appConstants";

const iState = {
  visible: false,
};

const appReducer = (state = iState, { payload, type }) => {
  switch (type) {
    case SHOW__LOADER:
      return { ...state, visible: true };
    case HIDE__LOADER:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default appReducer;
