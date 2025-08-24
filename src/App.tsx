import React from 'react';
import './App.css';
import Home from './pages/Home';
import AppRoutes from './routes/routes';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {

  return (
  <div>
  <BrowserRouter>
  <div className='header'>
    <nav className='header__menu'>
      <ul className='header__list'>
        <li><Link to='/'>Museam of Art</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    </nav>
  </div>
    <AppRoutes/>
  </BrowserRouter>
  </div>

  )
}

export default App;
