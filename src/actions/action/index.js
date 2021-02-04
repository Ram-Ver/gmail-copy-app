import { createAction } from "redux-actions";
import { USER__LOGIN, USER__LOGOUT } from "../constants";

const login = createAction(USER__LOGIN);
const logout = createAction(USER__LOGOUT);

export { login, logout };
