import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import authReducer from './store/reducers/auth';
import ShopNavigator from './navigation/ShopNavigator';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ReduxThunk from 'redux-thunk';
import NavigationContainer from './navigation/NavigationContainer';
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
