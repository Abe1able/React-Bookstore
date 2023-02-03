import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import BookPage from './pages/home';
import Categories from './pages/category';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookPage />} />
        <Route exact path="/category" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
