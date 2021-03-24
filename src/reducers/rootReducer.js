import { combineReducers } from "redux";
import userReducer from "./userReducer";
import emailReducer from "./emailReducer";
import sidebarReducer from "./sidebarReducer";
import accountReducer from "./accountReducer";
const rootReducer = combineReducers({
  user: userReducer,
  emails: emailReducer,
  sidebar: sidebarReducer,
  createAnAccount: accountReducer,
});

export default rootReducer;
