import { combineReducers } from "redux";
import problems from "./problem_reducer";
import announcements from "./announcement_reducer";
import notifications from "./notification_reducer";

const appReducers = combineReducers({
  problems,
  announcements,
  notifications,
});

export default appReducers;
