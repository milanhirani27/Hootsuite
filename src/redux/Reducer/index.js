import {combineReducers} from 'redux';
import UserReducer from './user';
import GetTweets from './twitter';

const appReducer = combineReducers({
  user: UserReducer,
  getTweets: GetTweets,
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return finalState;
}
