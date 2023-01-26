import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const CreateNewBook = (props) => {
  const { submitBookToStoreProps } = props;

  const [inputBookTitle, setInputBookTitle] = useState('');
  const [inputBookAuthor, setInputBookAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputBookTitle.trim()) {
      submitBookToStoreProps(inputBookTitle, inputBookAuthor);
      setInputBookTitle('');
      setInputBookAuthor('');
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
          value={inputBookTitle}
          onChange={(e) => setInputBookTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="grid-item"
          name="author"
          value={inputBookAuthor}
          onChange={(e) => setInputBookAuthor(e.target.value)}
          required
        />
        <select className="grid-item">
          <option value="category">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" className="grid-item">
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
