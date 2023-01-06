import {GET_MENTION_TWEETS, GET_TWEETS, POST_TWEETS} from '../types';
import axios from 'axios';

export const getAllTweets = userID => {
  return async dispatch => {
    axios
      .get(`https://api.twitter.com/2/users/${userID}/tweets`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer ',
          Host: 'api.twitter.com',
        },
      })
      .then(response => {
        console.log('res in getTweets', response);
        dispatch({
          type: GET_TWEETS,
          payload: response,
        });
      })
      .catch(error => {
        console.log('error in getTweets', error);
      });
  };
};

export const getMentionTweets = userID => {
  return async dispatch => {
    axios
      .get(`https://api.twitter.com/2/users/${userID}/mentions`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer ',
          Host: 'api.twitter.com',
        },
      })
      .then(async response => {
        console.log('res in mention tweets', response);
        dispatch({
          type: GET_MENTION_TWEETS,
          payload: response,
        });
      })
      .catch(error => {
        console.log('error in mention tweets', error);
      });
  };
};

export const postTweets = payLoad => {
  return async dispatch => {
    axios
      .post('http://localhost:3000/postTweet', payLoad, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(async response => {
        console.log('res in post tweets', response);
        dispatch({
          type: POST_TWEETS,
          payload: response.data.text,
        });
      })
      .catch(error => {
        console.log('error in post tweets', error);
      });
  };
};
