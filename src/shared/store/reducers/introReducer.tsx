import {Actions} from "../actions";

export const TOGGLE = 'TOGGLE';

const IntroReducer = (state = false, action: Actions) => {
  switch (action.type) {
    case TOGGLE:
      return !state;
    default:
      return false;
  }
}

export default IntroReducer;