import {
  SENT__EMAIL,
  PRIMARY__SELECTED,
  SOCIAL__SELECTED,
  PROMOTION__SELECTED,
  DELETE__EMAIL,
  SET__ID,
} from "../constants/emailConstants";

const iState = {
  EmailRowID:null,
  allEmails: [],
  inboxEmails: [],
  draftEmails: [],
  snoozeEmails: [],
  staredEmails: [],
  sentEmailData: [],
  primarySelected: false,
  socialSelected: false,
  promotionSelected: false,
  deleteEmail: "",
};

const emailReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case SENT__EMAIL:
      console.log(state.sentEmailData, "10");
      return { ...state, sentEmailData: [...state.sentEmailData, payload] };

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
       EmailRowID:payload
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
