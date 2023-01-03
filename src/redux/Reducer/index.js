import {combineReducers} from 'redux';
import UserReducer from './user';

const appReducer = combineReducers({
  user: UserReducer,
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return finalState;
}
