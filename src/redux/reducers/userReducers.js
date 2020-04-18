import { CHANGE_USER_INFO } from "../actions/userAction";

const initialState = {
  name: "jahed",
  age: 10,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_INFO:
      return {
        ...initialState,
        name: "hossain",
        age: 500,
      };

    default:
      return state;
  }
};
