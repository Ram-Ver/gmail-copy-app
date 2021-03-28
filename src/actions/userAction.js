import { createAction } from "redux-actions";
import {
  FETCH__USERS,
  FETCH__USERS__REQUESTED,
  FETCH__USERS__FAILURE,
  FETCH__USERS__SUCCESS,
  SET__USERS,
  USER__LOGIN,
  USER__LOGOUT,
  USER__PROFILE__UPDATE,
  USER__LOGIN__REQUESTED,
} from "../Constants/userConstants";

const login = createAction(USER__LOGIN);
const userLoginRequested = createAction(USER__LOGIN__REQUESTED);
const logout = createAction(USER__LOGOUT);
const userProfileUpdate = createAction(USER__PROFILE__UPDATE);

const fetchUsers = createAction(FETCH__USERS);
const fetchUserRequested = createAction(FETCH__USERS__REQUESTED);
const fetchUserFailure = createAction(FETCH__USERS__FAILURE);
const fetchUserSuccess = createAction(FETCH__USERS__SUCCESS);
const setUsers = createAction(SET__USERS);

export {
  fetchUsers,
  fetchUserRequested,
  fetchUserFailure,
  fetchUserSuccess,
  login,
  logout,
  userProfileUpdate,
  userLoginRequested,
  setUsers,
};
