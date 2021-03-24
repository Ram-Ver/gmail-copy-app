import {
  SIDEBAR__TOGGLE,
  SHOW__SENTBOX,
  HIDE__SENTBOX,
} from "../Constants/otherConstants";

const iState = {
  isSidebarOpen: true,
  isSentBoxOpen: false,
};

const sidebarReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case SIDEBAR__TOGGLE:
      return { ...state, isSidebarOpen: payload };
    case SHOW__SENTBOX:
      return { ...state, isSentBoxOpen: true };
    case HIDE__SENTBOX:
      return { ...state, isSentBoxOpen: false };
    default:
      return state;
  }
};

export default sidebarReducer;
