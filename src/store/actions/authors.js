import { FETCH_AUTHORS } from "../constant";
import _ from "lodash";

export const getAuthor = (userId) => {
  return (dispatch) => {
    _getAuthor(userId, dispatch);
  };
};

const _getAuthor = _.memoize(async (userId, dispatch) => {
  const results = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  ).then((res) => res.json());

  dispatch({ type: FETCH_AUTHORS, payload: results });
});
