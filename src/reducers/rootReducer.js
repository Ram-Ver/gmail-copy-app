import { combineReducers } from "redux";
import userReducer from "./userReducer";
import emailReducer from "./emailReducer";
import sidebarReducer from "./sidebarReducer";
const rootReducer = combineReducers({
  user: userReducer,
  email: emailReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
