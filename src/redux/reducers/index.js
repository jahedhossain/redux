import { combineReducers } from "redux";
import { loginReducers } from "./loginReducers";
import { postReducers } from "./postReducers";

export default combineReducers({
  loginReducers,
  postReducers,
});
