import {
  CREATE__AN__ACCOUNT__FAILURE,
  CREATE__AN__ACCOUNT__REQUESTED,
  CREATE__AN__ACCOUNT__SUCCESS,
} from "../Constants/otherConstants";

const iState = {
  createAnAccountStatus: "",
};

const createAnAccount = (state = iState, { type, payload }) => {
  switch (type) {
    case CREATE__AN__ACCOUNT__REQUESTED:
      return {
        ...state,
        createAnAccountStatus: "requested",
      };
    case CREATE__AN__ACCOUNT__FAILURE:
      return {
        ...state,
        createAnAccountStatus: "failure",
      };
    case CREATE__AN__ACCOUNT__SUCCESS:
      return {
        ...state,
        createAnAccountStatus: "success",
      };
    default:
      return state;
  }
};

export default createAnAccount;
