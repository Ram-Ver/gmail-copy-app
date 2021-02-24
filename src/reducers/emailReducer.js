import { SENT__EMAIL } from "../actions/constants";

const iState = {};

const emailReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case SENT__EMAIL:
      return [...state, payload];

    default:
      return state;
  }
};

export default emailReducer;
