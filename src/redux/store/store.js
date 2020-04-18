import { createStore } from "redux";
import { userReducers } from "../reducers/userReducers";

export const store = createStore(userReducers);
