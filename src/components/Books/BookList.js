import React from 'react';
import { PropTypes } from 'prop-types';

import BookComponent from './BookComponent';
import styles from './Books.module.css';

const BookList = (props) => {
  const { removeBookProps, books } = props;
  const booksKeys = Object.keys(books);

  return (
    <ul className={styles.book_section_container}>
      {booksKeys.map((book) => (
        <BookComponent
          id={book}
          key={book}
          book={books[book][0]}
          removeBookProps={removeBookProps}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  removeBookProps: PropTypes.func.isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
};

export default BookList;
