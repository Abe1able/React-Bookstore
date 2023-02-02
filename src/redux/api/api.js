const URL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUUGSyLKPFVh40o1XTap/books";

const getBooks = async () => {
  const getBookItems = await fetch(URL).then((res) => res.json());
  console.log(getBookItems);
  return getBookItems;
};
