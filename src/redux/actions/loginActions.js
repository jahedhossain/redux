import { SHOW_lOGIN_FORM, LOGIN_SUBMIT_FORM, USER_LOGOUT } from "./actionsType";

export const showLoginForm = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: SHOW_lOGIN_FORM });
    }, 200);
  };
};

export const loginSubmit = (data) => {
  return {
    type: LOGIN_SUBMIT_FORM,
    payload: data,
  };
};

export const handleLogOut = () => {
  return {
    type: USER_LOGOUT,
  };
};
