import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
//import { addBook, removeBook } from '../../redux/books/books';
import BookList from './BookList';
import CreateNewBook from './CreateNewBook';
import { fetchBooks, addBook, deleteBook } from '../../redux/books/booksActions';

import styles from './Books.module.css';

const Books = (props) => {
  const { fetchBooks, bookData } = props;
  useEffect(() => {
    fetchBooks();
    console.log(fetchBooks());
  }, []);

  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(deleteBook(id));
  };

  const submitBookToStore = (title, category) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className={styles.main_page}>
      <BookList
        books={bookData}
        removeBookProps={removeBookFromStore}
      />
      <CreateNewBook submitBookToStoreProps={submitBookToStore} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookData: state.booksReducer.books,
});

const mapDispatch = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

Books.propTypes = {
  bookData: PropTypes.instanceOf(Object).isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Books);
