// import { ALL_POST_SHOW } from "../actions/actionsType";

const initialState = {
  userName: ["jahed", "romjan"],
};

export const userNameReducers = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER_NAME":
      return { userName: [...state.userName, action.payload] };

    default:
      return state;
  }
};
