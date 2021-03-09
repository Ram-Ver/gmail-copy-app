import { createAction } from "redux-actions";
import {
  SENT__EMAIL,
  DELETE__EMAIL,
  GET__ID,
  SET__ID,
} from "../Constants/emailConstants";

const sentEmail = createAction(SENT__EMAIL);
const deleteEmail = createAction(DELETE__EMAIL);
const setEmailRowId = createAction(SET__ID);
const getEmailRowId = createAction(GET__ID);

export { sentEmail, deleteEmail, getEmailRowId, setEmailRowId };
