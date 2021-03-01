import { createAction } from "redux-actions";
import {
  SENT__EMAIL,
  PRIMARY__SELECTED,
  SOCIAL__SELECTED,
  PROMOTION__SELECTED,
  DELETE__EMAIL,
} from "../constants/emailConstants";

const sentEmail = createAction(SENT__EMAIL);
const deleteEmail = createAction(DELETE__EMAIL);

const primarySelect = createAction(PRIMARY__SELECTED);
const socialSelect = createAction(SOCIAL__SELECTED);
const promotionSelect = createAction(PROMOTION__SELECTED);

export { sentEmail, primarySelect, socialSelect, promotionSelect, deleteEmail };
