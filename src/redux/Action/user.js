import {makeRequest} from '../../helper/apiCall';
import {BASE_URL} from '../../helper/apiConstant';
import {USER_REGISTRATION} from '../types';

export const userRegistration = () => {
  return dispatch => {
    return makeRequest(BASE_URL, 'post')
      .then(res => {
        console.log(res);
        dispatch({
          type: USER_REGISTRATION,
          payload: res,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
