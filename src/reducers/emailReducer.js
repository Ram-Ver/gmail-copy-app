import {
  FETCH__EMAILS__REQUESTED,
  FETCH__EMAILS__FAILURE,
  FETCH__EMAILS__SUCCESS,
  SENT__EMAIL__REQUESTED,
  SENT__EMAIL__FAILURE,
  SENT__EMAIL__SUCCESS,
  PRIMARY__SELECTED,
  SOCIAL__SELECTED,
  PROMOTION__SELECTED,
  DELETE__EMAIL,
  SET__ID,
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
  primarySelected: false,
  socialSelected: false,
  promotionSelected: false,
  deleteEmail: "",
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
    case DELETE__EMAIL: {
      console.log(payload, "reducer payload");
      const updateSentEmails = state.sentEmailData.filter((email) => {
        return email.id !== payload;
      });
      return { ...state, sentEmailData: updateSentEmails };
    }

    case SET__ID:
      return {
        ...state,
        EmailRowID: payload,
      };
    case PRIMARY__SELECTED:
      return {
        ...state,
        primarySelected: payload.primary,
        socialSelected: payload.social,
        promotionSelected: payload.promotion,
      };

    case SOCIAL__SELECTED:
      return {
        ...state,
        primarySelected: payload.primary,
        socialSelected: payload.social,
        promotionSelected: payload.promotion,
      };
    case PROMOTION__SELECTED:
      return {
        ...state,
        primarySelected: payload.primary,
        socialSelected: payload.social,
        promotionSelected: payload.promotion,
      };
    default:
      return state;
  }
};

export default emailReducer;
