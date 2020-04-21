import { ALL_POST_SHOW } from "./actionsType";

const allPostShow = (data) => {
  return {
    type: ALL_POST_SHOW,
    payload: data,
  };
};

export const fetchAllPost = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dispatch(allPostShow(data)))
      .catch((error) => console.log(error));
  };
};
