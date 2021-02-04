import { USER__LOGIN, USER__LOGOUT } from "../actions/constants";

const iState = { login: false, logout: false };

const userReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case USER__LOGIN: {
      return { ...state, login: payload };
    }

    case USER__LOGOUT:
      return { ...state, logout: payload };
    default:
      return {
        state,
      };
  }
};

export default userReducer;
