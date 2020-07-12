import {combineReducers} from "redux";
import LoggedReducer from "./LoggedReducer";
import {AppState} from "../index";

const AppReducers = combineReducers<AppState>({
  isLogged: LoggedReducer
});

export default AppReducers;