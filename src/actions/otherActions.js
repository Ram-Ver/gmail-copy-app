import { createAction } from "redux-actions";
import {
  SIDEBAR__TOGGLE,
  SHOW__SENTBOX,
  HIDE__SENTBOX,
  CREATE__AN__ACCOUNT,
  CREATE__AN__ACCOUNT__REQUESTED,
  CREATE__AN__ACCOUNT__FAILURE,
  CREATE__AN__ACCOUNT__SUCCESS,
} from "../Constants/otherConstants";

const sidebartoggle = createAction(SIDEBAR__TOGGLE);
const showSentBox = createAction(SHOW__SENTBOX);
const hideSentBox = createAction(HIDE__SENTBOX);
const createAnAccount = createAction(CREATE__AN__ACCOUNT);
const createAnAccountRequested = createAction(CREATE__AN__ACCOUNT__REQUESTED);
const createAnAccountFailure = createAction(CREATE__AN__ACCOUNT__FAILURE);
const createAnAccountSuccess = createAction(CREATE__AN__ACCOUNT__SUCCESS);

export {
  sidebartoggle,
  showSentBox,
  hideSentBox,
  createAnAccount,
  createAnAccountRequested,
  createAnAccountFailure,
  createAnAccountSuccess,
};
