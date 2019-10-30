import { combineReducers } from "redux";
import venues from "./venues";
import spinner from "./spinner";

export default combineReducers({
  venues,
  spinner
});
