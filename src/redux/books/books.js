import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBooks, removeBookItem, addBooksItem } from '../api/api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const fetchBooks = createAsyncThunk(
  GET_BOOK,
  async () => {
    const elem = await getBooks();
    return elem;
  },
);

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

export const addBook = createAsyncThunk(ADD_BOOK,
  async (elem) => {
    await addBooksItem(elem);
    return elem;
  },
);
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await removeBookItem(id);
  return elem;
});

export default reducer;
