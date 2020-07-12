import {compose, createStore} from "redux";
import AppReducers from "./reducers";
import {loadState, saveState} from "./LocalStorage";

export type AppState = {
  isLogged: boolean;
};

/**
 * For debugging porpoise only
 * DELETE BEFORE PRODUCTION
 */
// BEGIN - debugging only
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  END - debugging only

/**
 * Load state from localStorage if exists
 */
const persistedState = loadState();

const store = createStore(
  AppReducers,
  persistedState,
  composeEnhancers() // DELETE BEFORE PRODUCTION
);

/**
 * Save state to localStorage on changes
 */
store.subscribe(() => {
  const state = store.getState();
  saveState({
    isLogged: state.isLogged
  });
});

export default store;