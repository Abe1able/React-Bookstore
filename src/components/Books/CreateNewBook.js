import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const CreateNewBook = (props) => {
  const { submitBookToStoreProps } = props;

  const [inputBook, setInputBook] = useState({ title: '' });

  const [inputBookCategory, setInputBookCategory] = useState('Category');

  const onChange = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputBook.title.trim()) {
      submitBookToStoreProps(inputBook.title, inputBookCategory);
      setInputBook({
        title: '',
      });
    }
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className="grid-item"
          name="title"
          value={inputBook.title}
          onChange={onChange}
          required
        />
        <select
          className="grid-item"
          value={inputBookCategory}
          onChange={(e) => {
            const bookCat = e.target.value;
            setInputBookCategory(bookCat);
          }}
        >
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          type="submit"
          className="grid-item"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

CreateNewBook.propTypes = {
  submitBookToStoreProps: PropTypes.func.isRequired,
};

export default CreateNewBook;
