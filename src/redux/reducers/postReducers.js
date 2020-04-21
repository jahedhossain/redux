import { ALL_POST_SHOW } from "../actions/actionsType";

const initialState = {
  posts: [],
};
export const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POST_SHOW:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
