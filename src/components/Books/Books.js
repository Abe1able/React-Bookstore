import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { removeBook, getBooks } from '../../redux/books/books';
// import BookList from './BookList';
// import CreateNewBook from './CreateNewBook';
// import styles from './Books.module.css';

const Books = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
    dispatch(getBooks(id));
  };

  // const submitBookToStore = (title) => {
  //   const newBook = {
  //     id: uuidv4(),
  //     bookName: title,
  //   };
  //   dispatch(addBook(newBook));
  // };

  return (
    <div className="book-item">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => deleteBook(id)}>Delete</button>
    </div>
  );
};

Books.propTypes = ({
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}).isRequired;

export default Books;
