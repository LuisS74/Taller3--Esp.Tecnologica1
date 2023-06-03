import axios from 'axios';

const BASE_URL = 'http://ec2-54-163-208-73.compute-1.amazonaws.com:8080';

function listProducts({ limit, offset }) {
  return axios
    .get(`${BASE_URL}/products/`, {
      params: {
        limit,
        offset,
      },
    })
    .then((result) => {
      return result.data;
    });
}

function getDetailsProduct(_id) {
  return axios
    .get(`${BASE_URL}/products/${_id}/reviews`)
    .then((result) => {
      return result.data;
    });
}

function getDetailsUser(_id) {
    return axios
      .get(`${BASE_URL}/users/${_id}/reviews`, {
        params: {
          _id
        }
      })
      .then((result) => {
        return result.data;
      });
  }

export { listProducts, getDetailsProduct, getDetailsUser };