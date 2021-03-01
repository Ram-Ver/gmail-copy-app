import { USER__LOGIN, USER__PROFILE__UPDATE } from "../constants/userConstants";

const iState = {
  login: false,
  userProfile:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

const userReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case USER__LOGIN:
      return { ...state, login: true };
    case USER__PROFILE__UPDATE:
      return { ...state, userProfile: payload };
    default:
      return state;
  }
};

export default userReducer;
