import {
  ADD_TO_CART,
  CLEAR_CART,
  DESREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from './homeActionTypes';

const initialState = {
  cart: {},
  cartQuantity: {},
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {...action.payload, quantity: 1},
        },
      };
    case REMOVE_FROM_CART: {
      let curr = {...state.cart};
      delete curr[`${action.payload}`];
      return {...state, cart: curr};
    }
    case INCREASE_QUANTITY: {
      let payload = state?.cart[action.payload];
      payload.quantity = payload.quantity + 1;
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: payload,
        },
      };
    }
    case DESREASE_QUANTITY: {
      let payload = state?.cart[action.payload];
      payload.quantity = payload.quantity - 1;
      if (payload.quantity <= 0) {
        let curr = {...state.cart};
        delete curr[`${action.payload}`];
        return {...state, cart: curr};
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: payload,
        },
      };
    }
    case CLEAR_CART:
      return {...state, cart: {}};
    default:
      return {...state};
  }
}
