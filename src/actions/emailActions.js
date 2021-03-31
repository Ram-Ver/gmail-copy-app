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
  GET__EMAIL__DETAIL,
  GET__EMAIL__DETAIL__REQUESTED,
  GET__EMAIL__DETAIL__FAILURE,
  GET__EMAIL__DETAIL__SUCCESS,
  DELETE__EMAIL,
  DELETE__EMAIL__REQUESTED,
  DELETE__EMAIL__FAILURE,
  DELETE__EMAIL__SUCCESS,
} from "../Constants/emailConstants.js";

const fetchEmails = createAction(FETCH__EMAILS);
const fetchEmailsRequested = createAction(FETCH__EMAILS__REQUESTED);
const fetchEmailsFailure = createAction(FETCH__EMAILS__FAILURE);
const fetchEmailsSuccess = createAction(FETCH__EMAILS__SUCCESS);

const sentEmail = createAction(SENT__EMAIL);
const sentEmailRequested = createAction(SENT__EMAIL__REQUESTED);
const sentEmailFailure = createAction(SENT__EMAIL__FAILURE);
const sentEmailSucess = createAction(SENT__EMAIL__SUCCESS);

const getEmailDetail = createAction(GET__EMAIL__DETAIL);
const getEmailDetailRequested = createAction(GET__EMAIL__DETAIL__REQUESTED);
const getEmailDetailFailure = createAction(GET__EMAIL__DETAIL__FAILURE);
const getEmailDetailSuccess = createAction(GET__EMAIL__DETAIL__SUCCESS);

const deleteEmail = createAction(DELETE__EMAIL);
const deleteEmailRequested = createAction(DELETE__EMAIL__REQUESTED);
const deleteEmailFailure = createAction(DELETE__EMAIL__FAILURE);
const deleteEmailSuccess = createAction(DELETE__EMAIL__SUCCESS);

export {
  fetchEmails,
  fetchEmailsRequested,
  fetchEmailsFailure,
  fetchEmailsSuccess,
  sentEmail,
  sentEmailRequested,
  sentEmailFailure,
  sentEmailSucess,
  getEmailDetail,
  getEmailDetailRequested,
  getEmailDetailFailure,
  getEmailDetailSuccess,
  deleteEmail,
  deleteEmailRequested,
  deleteEmailFailure,
  deleteEmailSuccess,
};
