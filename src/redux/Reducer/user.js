import {USER_REGISTRATION} from '../types';
const INITIAL_STATE = {
  userData: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTRATION: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    default:
      return state;
  }
};
