import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import BookPage from './pages/home';
import Categories from './pages/category';

function App() {
  return (
    <main className="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookPage />} />
        <Route exact path="/category" element={<Categories />} />
      </Routes>
    </main>
  );
}

export default App;
