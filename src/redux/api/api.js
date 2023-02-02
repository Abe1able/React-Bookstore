const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUUGSyLKPFVh40o1XTap/books';

export const getBooks = async () => {
  const getBookItems = await fetch(URL).then((res) => res.json());
  console.log(getBookItems);
  return getBookItems;
};

export const addBooksItem = async (elements) => {
  const postBooks = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(elements),
  }).then((response) => response.text());
  return postBooks;
};

export const removeBookItem = async (id) => {
  const removeBook = await fetch(`URL${id}`, {
    method: 'DELETE',
  }).then((response) => response.text());
  return removeBook;
};
