import {
  ADD_TO_CART,
  CLEAR_CART,
  DESREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from './homeActionTypes';

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
}

export function increaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload: payload,
  };
}
export function desreaseQuantity(payload) {
  return {
    type: DESREASE_QUANTITY,
    payload: payload,
  };
}

export function removeFromCart(payload) {
  return {
    type: REMOVE_FROM_CART,
    payload: payload,
  };
}
export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
