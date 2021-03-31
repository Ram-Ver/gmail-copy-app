import {
  FETCH__EMAILS__REQUESTED,
  FETCH__EMAILS__FAILURE,
  FETCH__EMAILS__SUCCESS,
  SENT__EMAIL__REQUESTED,
  SENT__EMAIL__FAILURE,
  SENT__EMAIL__SUCCESS,
  GET__EMAIL__DETAIL__REQUESTED,
  GET__EMAIL__DETAIL__FAILURE,
  GET__EMAIL__DETAIL__SUCCESS,
  DELETE__EMAIL__REQUESTED,
  DELETE__EMAIL__FAILURE,
  DELETE__EMAIL__SUCCESS,
} from "../Constants/emailConstants.js";

const iState = {
  fetchEmailsStatus: "",
  sentEmailStatus: "",
  EmailRowID: null,
  allEmails: [],
  inbox: [],
  sent: [],
  stared: [],
  sheduled: [],
  important: [],
  spam: [],
  snoozed: [],
  draft: [],
  promotion: [],
  primary: [],
  social: [],
  mailDetail: null,
  mailDetailStatus: "",
  deleteEmailStatus: "",
  checkAllEmails: false,
};

const emailReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case FETCH__EMAILS__REQUESTED:
      return {
        ...state,
        fetchEmailsStatus: "requested",
      };
    case FETCH__EMAILS__FAILURE:
      return {
        ...state,
        fetchEmailsStatus: "failure",
      };
    case FETCH__EMAILS__SUCCESS:
      return {
        ...state,
        fetchEmailsStatus: "success",
        allEmails: payload,
        inbox: payload.filter((inbox) => inbox.label === "inbox"),
        sent: payload.filter((sent) => sent.label === "sent"),
        stared: payload.filter((stared) => stared.label === "stared"),
        sheduled: payload.filter((stared) => stared.label === "sheduled"),
        important: payload.filter((stared) => stared.label === "important"),
        spam: payload.filter((stared) => stared.label === "spam"),
        snoozed: payload.filter((stared) => stared.label === "snoozed"),
        draft: payload.filter((stared) => stared.label === "draft"),
        promotion: payload.filter((stared) => stared.label === "promotion"),
        primary: payload.filter((stared) => stared.label === "primary"),
        social: payload.filter((stared) => stared.label === "social"),
      };
    case SENT__EMAIL__REQUESTED:
      return {
        ...state,
        sentEmailStatus: "requested",
      };

    case SENT__EMAIL__FAILURE:
      return {
        ...state,
        sentEmailStatus: "failure",
      };
    case SENT__EMAIL__SUCCESS:
      return {
        ...state,
        sentEmailStatus: "success",
      };

    case GET__EMAIL__DETAIL__REQUESTED:
      return {
        ...state,
        mailDetailStatus: "requested",
      };
    case GET__EMAIL__DETAIL__FAILURE:
      return {
        ...state,
        mailDetailStatus: "failure",
      };
    case GET__EMAIL__DETAIL__SUCCESS:
      return {
        ...state,
        mailDetail: payload,
        mailDetailStatus: "success",
      };

    case DELETE__EMAIL__REQUESTED:
      return {
        ...state,
        deleteEmailStatus: "requested",
      };
    case DELETE__EMAIL__FAILURE:
      return {
        ...state,
        deleteEmailStatus: "failure",
      };
    case DELETE__EMAIL__SUCCESS:
      return {
        ...state,
        deleteEmailStatus: "success",
      };

    default:
      return state;
  }
};

export default emailReducer;
