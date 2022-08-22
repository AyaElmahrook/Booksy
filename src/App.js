import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books/Books'
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ViewBook from './components/Books/ViewBook';
import BooksContextProvider from './components/Context/Store';

function App() {
  return (
    <>
    <BooksContextProvider>
      <NavBar></NavBar>
      <Routes>       
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='books' element={<Books />} />
        <Route path='viewBook/:bookId' element={<ViewBook />} />
        <Route path='blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BooksContextProvider>
    </>
  );
}

export default App;
