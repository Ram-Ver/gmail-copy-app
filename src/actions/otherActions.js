import { createAction } from "redux-actions";
import {
  SIDEBAR__TOGGLE,
  SHOW__SENTBOX,
  HIDE__SENTBOX,
} from "../constants/otherConstants";

const sidebartoggle = createAction(SIDEBAR__TOGGLE);
const showSentBox = createAction(SHOW__SENTBOX);
const hideSentBox = createAction(HIDE__SENTBOX);

export { sidebartoggle, showSentBox, hideSentBox };
