import { FETCH_AUTHORS } from "../constant";

const initialState = {
  authors: []
};

export const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      return { ...state, authors: [...state.authors, action.payload] };
    default:
      return state;
  }
};
