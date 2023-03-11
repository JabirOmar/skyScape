

import './App.css';
import Book from './components/book/Book';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';
import Price from './components/price/Price';
import Payment from './components/payment/Payment';
import FlightBooking from './components/flightBooking/FlightBooking';

function App() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/flight-price' element={<Price />} />
        <Route path='/booking' element={<Book />} />
        <Route path='/payment' element={<Payment />} />
        {/* <Route path='/flight-booking' element={<FlightBooking />} /> */}
      </Routes>
    </div>
  );
}

export default App;
