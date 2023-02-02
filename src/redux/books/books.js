import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBooks, removeBookItem, addBooksItem } from '../api/api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const fetchBooks = createAsyncThunk(GET_BOOK, getBooks());

export const addBook = createAsyncThunk(ADD_BOOK, addBooksItem);

export const removeBook = createAsyncThunk(REMOVE_BOOK, removeBookItem);

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
