import {
  SIDEBAR__TOGGLE,
  SHOW__SENTBOX,
  HIDE__SENTBOX,
} from "../constants/otherConstants";

const iState = {
  isSidebarOpen: true,
  isSentBoxOpen: false,
};

const sidebarReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case SIDEBAR__TOGGLE:
      return { ...state, isSidebarOpen: payload };
    case SHOW__SENTBOX:
      return { ...state, isSentBoxOpen: payload };
    case HIDE__SENTBOX:
      return { ...state, isSentBoxOpen: payload };
    default:
      return state;
  }
};

export default sidebarReducer;
