import React from 'react';
import { PropTypes } from 'prop-types';

import BookComponent from './BookComponent';
import styles from './Books.module.css';
import { removeBook, getBooks } from '../../redux/books/books';
import { useDispatch } from 'react-redux';

const BookList = (props) => {
  //const { removeBookProps, books } = props;
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
    dispatch(getBooks(id));
  };

  return (
    // <ul className={styles.book_section_container}>
    //   {books.map((book) => (
    //     <BookComponent key={book.id} id={book.id} book={book} removeBookProps={removeBookProps} />
    //   ))}
    // </ul>
    <div className={styles.book_section_container}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => deleteBook(id)}>Delete</button>
    </div>
  );
};

// BookList.propTypes = {
//   removeBookProps: PropTypes.func.isRequired,
//   books: PropTypes.instanceOf(Array).isRequired,
// };
BookList.propTypes = ({
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}).isRequired;

export default BookList;
