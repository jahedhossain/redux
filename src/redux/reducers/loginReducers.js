import {
  SHOW_lOGIN_FORM,
  LOGIN_SUBMIT_FORM,
  USER_LOGOUT,
} from "../actions/actionsType";

const initialState = {
  loginForm: false,
  login: false,
  user: {},
};
export const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_lOGIN_FORM:
      return {
        ...state,
        loginForm: state.loginForm ? false : true,
      };
    case LOGIN_SUBMIT_FORM:
      return {
        ...state,
        user: action.payload,
        loginForm: false,
        login: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        login: false,
        user: {},
      };
    default:
      return state;
  }
};
