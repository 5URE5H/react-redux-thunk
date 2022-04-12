import { FETCH_POSTS } from "../constant";

export const getBlogPosts = () => {
  return async (dispatch) => {
    const results = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());
    dispatch({ type: FETCH_POSTS, payload: results });
  };
};
