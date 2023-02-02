import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(logger,thunk)),
);

export default store;
