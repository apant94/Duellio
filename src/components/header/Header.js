import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './header.css';

const Header = () => {

  const theme = React.useContext(ThemeContext);

  return (
    <header className='header'>
      <h1 className={theme === 'day' ? 'header__title' : 'header__title header__title_dark'}>Duellio</h1>
      {/*<nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__link-item">
            <a href="#" class="header__link">Часы</a>
          </li>
          <li class="header__link-item">
            <a href="#" class="header__link">Правила</a>
          </li>
          <li class="header__link-item">
            <a href="#" class="header__link">База кейсов</a>
          </li>
          <li class="header__link-item">
            <a href="#" class="header__link">О нас</a>
          </li>
          <li class="header__link-item">
            <a href="#" class="header__link">Тема...</a>
          </li>
        </ul>
  </nav>*/}
    </header>
  )
}

export default Header;