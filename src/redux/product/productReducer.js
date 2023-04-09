import {ADD_PRODUCT, CLEAR_PRODUCT} from './productActionTypes';

const initialState = {
  title: null,
  description: null,
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: null,
  category: null,
  images: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return action.payload;
    case CLEAR_PRODUCT:
      return {
        title: null,
        description: null,
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: null,
        category: null,
        images: [],
      };
    default:
      return {...state};
  }
}
