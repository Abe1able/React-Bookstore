import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUUGSyLKPFVh40o1XTap/books';
const URL2 = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qtOKYcCunaSKvD8warou/books';
export const addBooksItem = async (elements) => {
  const {id, title, author, category,} = elements;
    await axios.post(URL, {
      item_id: id, title, author, category,
    });
  return elements;
};

export const removeBookItem = async (id) => {
    await axios.delete(`URL/${id}`);
  return id;
};

const renderBooks = (response) => Object.entries(response.data).map((arr) => {
    const [id, [{ title, author, category }]] = arr;
    return {
      id, title, author, category,
    };
  });
  
  export const getBooks = async () => {
    const getbookItems = await axios.get(URL)
    return renderBooks(getbookItems)
  };
