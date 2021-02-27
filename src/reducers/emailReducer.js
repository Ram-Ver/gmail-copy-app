import { SENT__EMAIL } from "../actions/constants";

const iState = {
  sentEmailData: [],
};

const emailReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case SENT__EMAIL:
      console.log(state, "10");
      return { ...state, sentEmailData: [...state.sentEmailData, payload] };

    default:
      return state;
  }
};

export default emailReducer;
