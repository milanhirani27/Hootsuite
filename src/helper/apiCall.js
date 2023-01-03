import axios from 'axios';

export function makeRequest(url, type = 'get', data = {}, header = {}) {
  if (type === 'get') {
    return axios
      .get(url)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  } else if (type === 'post') {
    return axios
      .post(url, data)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  } else if (type === 'delete') {
    return axios
      .delete(url)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  } else if (type === 'patch') {
    return axios
      .patch(url, data)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
}
