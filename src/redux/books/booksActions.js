import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';

export const fetchBookSuccess = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBooks = () => (dispatch) => {
  axios
    .get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUUGSyLKPFVh40o1XTap/books')
    .then((response) => {
      const books = response.data;
      console.log(books);
      dispatch(fetchBookSuccess(books));
    });
};

export const addBook = (newBook) => (dispatch) => {
  axios
    .post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUUGSyLKPFVh40o1XTap/books', {
      item_id: newBook.item_id,
      title: newBook.title,
      category: newBook.category,
    })
    .then(() => {
      dispatch(fetchBooks());
    });
};

export const deleteBook = (deletBookID) => (dispatch) => {
  axios
    .delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUUGSyLKPFVh40o1XTap/books/${deletBookID}`)
    .then(() => {
      dispatch(fetchBooks());
    });
};
