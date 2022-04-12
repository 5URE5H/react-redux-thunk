import { combineReducers } from "redux";
import { authorsReducer } from "./authors";
import { postReducer } from "./posts";

export default combineReducers({ authors: authorsReducer, posts: postReducer });
