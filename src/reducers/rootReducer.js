import { combineReducers } from "redux";
import calendarReducers from "./calendarReducers";

export default combineReducers({
  calendar: calendarReducers
});
