

import './App.css';
import Book from './components/book/Book';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
