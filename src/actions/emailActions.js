import { createAction } from "redux-actions";
import {
  FETCH__EMAILS,
  FETCH__EMAILS__REQUESTED,
  FETCH__EMAILS__FAILURE,
  FETCH__EMAILS__SUCCESS,
  SENT__EMAIL,
  SENT__EMAIL__REQUESTED,
  SENT__EMAIL__FAILURE,
  SENT__EMAIL__SUCCESS,
  DELETE__EMAIL,
  GET__ID,
  SET__ID,
} from "../Constants/emailConstants.js";

const fetchEmails = createAction(FETCH__EMAILS);
const fetchEmailsRequested = createAction(FETCH__EMAILS__REQUESTED);
const fetchEmailsFailure = createAction(FETCH__EMAILS__FAILURE);
const fetchEmailsSuccess = createAction(FETCH__EMAILS__SUCCESS);

const sentEmail = createAction(SENT__EMAIL);
const sentEmailRequested = createAction(SENT__EMAIL__REQUESTED);
const sentEmailFailure = createAction(SENT__EMAIL__FAILURE);
const sentEmailSucess = createAction(SENT__EMAIL__SUCCESS);

const deleteEmail = createAction(DELETE__EMAIL);
const setEmailRowId = createAction(SET__ID);
const getEmailRowId = createAction(GET__ID);

export {
  fetchEmails,
  fetchEmailsRequested,
  fetchEmailsFailure,
  fetchEmailsSuccess,
  sentEmail,
  sentEmailRequested,
  sentEmailFailure,
  sentEmailSucess,
  deleteEmail,
  getEmailRowId,
  setEmailRowId,
};
