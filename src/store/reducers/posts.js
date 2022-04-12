import { FETCH_POSTS } from "../constant";

const initialState = {
  posts: []
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
