import { createAction } from "redux-actions";
import { USER__LOGIN, USER__LOGOUT, USER__PROFILE__UPDATE } from "../constants";

const login = createAction(USER__LOGIN);
const logout = createAction(USER__LOGOUT);
const userProfileUpdate = createAction(USER__PROFILE__UPDATE);

export { login, logout, userProfileUpdate };
