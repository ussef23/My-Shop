import {createStore, combineReducers} from 'redux'

import productsReducer from './reducers/products'
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export { store as default}