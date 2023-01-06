import {GET_MENTION_TWEETS, GET_TWEETS} from '../types';
const INITIAL_STATE = {
  getTweets: '',
  mentionTweets: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TWEETS: {
      return {
        ...state,
        getTweets: action.payload,
      };
    }
    case GET_MENTION_TWEETS: {
      return {
        ...state,
        mentionTweets: action.payload,
      };
    }
    default:
      return state;
  }
};
