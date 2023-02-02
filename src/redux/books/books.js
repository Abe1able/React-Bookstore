//import { v4 as uuidv4 } from 'uuid';

//const ADD_BOOK = 'bookstore/books/ADD_BOOK';
//const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
import {
  FETCH_BOOKS,
} from './booksActions';

const initialState = {
  books: [],
};

// export const addBook = (payload) => ({
//   type: ADD_BOOK,
//   payload,
// });
// export const removeBook = (payload) => ({
//   type: REMOVE_BOOK,
//   payload,
// });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
