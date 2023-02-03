import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X8JnkuOPMOkJQ3tlKNbU/books';

const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/src/redux/books/GET_BOOK';

export const addBook = createAsyncThunk(ADD_BOOK, async (elements) => {
  const {
    id, title, author, category,
  } = elements;
  await axios.post(apiLink, {
    item_id: id, title, author, category,
  });
  return elements;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${apiLink}/${id}`);
  return id;
});

const renderBooks = (res) => Object.entries(res.data).map((arr) => {
  const [id, [{ title, author, category }]] = arr;
  return {
    id, title, author, category,
  };
});

export const fetchBooks = createAsyncThunk(GET_BOOK,
  async () => {
    const getbookItems = await axios.get(apiLink);
    return renderBooks(getbookItems);
  });

const deleteBook = (state, bookID) => state.filter((book) => book.id !== bookID.payload);
const bookReducerSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const items = state;
      items.status = 'success';
      items.books = action.payload;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const items = state;
      items.status = 'successful';
      items.books = deleteBook(items.books, action);
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      const items = state;
      items.status = 'successful';
      items.books = [
        ...state.books,
        action.payload,
      ];
    });
  },
});

export default bookReducerSlice.reducer;
