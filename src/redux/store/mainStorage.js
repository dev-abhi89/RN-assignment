import {createStore, combineReducers} from 'redux';
import HomeReducer from '../Home/homeReducer';
import ProductReducer from '../product/productReducer';

const rootReducer = combineReducers({
  home: HomeReducer,
  product: ProductReducer,
});

export const store = createStore(rootReducer);
