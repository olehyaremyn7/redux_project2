import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./addReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
});