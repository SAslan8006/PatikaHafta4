import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import { app, productReducer } from '~/redux/reducers';

const store = configureStore({
  reducer: combineReducers({ app, productReducer }),
  //Auth için app kullanılmaktadır . Product ise api için kullanılmaktadır.
  middleware: [thunk],
});

export default store;
