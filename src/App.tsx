import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {

  return (
  <div>
  <div className='header'>
    <nav className='header__menu'>
      <ul className='header__list'>
        <li><a href="#">Museam of Art</a></li>
        <li><a href="#">Favorites</a></li>
      </ul>
    </nav>
  </div>
    <Home/>
  
  </div>

  )
}

export default App;
