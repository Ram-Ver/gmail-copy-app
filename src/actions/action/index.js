import { createAction } from "redux-actions";
import {
  SENT__EMAIL,
  USER__LOGIN,
  USER__LOGOUT,
  USER__PROFILE__UPDATE,
} from "../constants";

const login = createAction(USER__LOGIN);
const logout = createAction(USER__LOGOUT);
const userProfileUpdate = createAction(USER__PROFILE__UPDATE);
const sentEmail = createAction(SENT__EMAIL);

export { login, logout, userProfileUpdate, sentEmail };
