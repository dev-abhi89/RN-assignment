import {ADD_PRODUCT} from './productActionTypes';

export function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload: payload,
  };
}
