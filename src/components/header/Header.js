import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './header.css';

const Header = () => {

  const theme = React.useContext(ThemeContext);

  return (
    <header className='header'>
      <h1 className={theme === 'day' ? 'header__title' : 'header__title header__title_dark'}>Duellio</h1>
      <nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__link-item">
            <Link to="/" class="header__link">Часы</Link>
          </li>
          <li class="header__link-item">
            <Link to="/rules" class="header__link">Правила</Link>
          </li>
          <li class="header__link-item">
            <Link to="/cases" class="header__link">База кейсов</Link>
          </li>
          <li class="header__link-item">
            <Link to="/about" class="header__link">О нас</Link>
          </li>
          {/*<div class="header__theme">Тема...</div>*/}
        </ul>
      </nav>
    </header>
  )
}

export default Header;