import {combineReducers} from "redux";
import IntroReducer from "./introReducer";
import {AppState} from "../index";

const AppReducers = combineReducers<AppState>({
  intro: IntroReducer
});

export default AppReducers;