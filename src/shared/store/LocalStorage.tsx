import {AppState} from "./index";

/**
 * Load state from localStorage
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/**
 * Save state to localStorage on changes
 */
export const saveState = (state: AppState) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch {
  }
};