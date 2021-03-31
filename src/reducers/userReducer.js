import {
  FETCH__USERS__REQUESTED,
  FETCH__USERS__FAILURE,
  FETCH__USERS__SUCCESS,
  SET__USERS,
  USER__LOGIN,
  USER__PROFILE__UPDATE,
  USER__LOGIN__REQUESTED,
  USER__LOGIN__FAILURE,
  USER__LOGIN__SUCCESS,
} from "../Constants/userConstants";

const iState = {
  fetchUserStatus: "",
  error: "",
  userloginStatus: "",
  login: false,
  userProfile:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  user: null,
};

const userReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case FETCH__USERS__REQUESTED:
      return {
        ...state,
        fetchUserStatus: "requested",
      };
    case FETCH__USERS__FAILURE:
      return {
        ...state,
        error: payload,
        fetchUserStatus: "failure",
      };
    case FETCH__USERS__SUCCESS:
      return {
        ...state,
        users: payload,
        fetchUserStatus: "success",
      };
    case SET__USERS:
      return {
        ...state,
        user: payload,
      };
    case USER__LOGIN:
      return { ...state, login: true };
    case USER__LOGIN__REQUESTED: {
      return { ...state, userloginStatus: "requested" };
    }
    case USER__LOGIN__FAILURE:
      return { ...state, userloginStatus: "failure", error: payload };
    case USER__LOGIN__SUCCESS:
      return { ...state, userloginStatus: "success", user: payload };

    case USER__PROFILE__UPDATE:
      return { ...state, userProfile: payload };

    default:
      return state;
  }
};

export default userReducer;
