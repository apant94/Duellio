import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './header.css';

const Header = () => {

  const theme = React.useContext(ThemeContext);

  const сlass = (theme) => {
    if (theme === 'day')
      return 'header__link';
    else
      return 'header__link header__link_dark';
  }

  const сlassActive = (theme) => {
    if (theme === 'day')
      return 'header__link_active';
    else
      return 'header__link_active_dark';
  }

  return (
    <header className='header'>
      <h1 className={theme === 'day' ? 'header__title' : 'header__title header__title_dark'}>Duellio</h1>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__link-item">
            <NavLink to="/"
              className={({ isActive }) => isActive ? `${сlass(theme)} ${сlassActive(theme)}` : `${сlass(theme)}`}
            >Часы</NavLink>
          </li>
          <li className="header__link-item">
            <NavLink to="/rules"
              className={({ isActive }) => isActive ? `${сlass(theme)} ${сlassActive(theme)}` : `${сlass(theme)}`}
            >Правила</NavLink>
          </li>
          <li className="header__link-item">
            <NavLink to="/cases"
              className={({ isActive }) => isActive ? `${сlass(theme)} ${сlassActive(theme)}` : `${сlass(theme)}`}
            >База кейсов</NavLink>
          </li>
          <li className="header__link-item">
            <NavLink to="/about"
              className={({ isActive }) => isActive ? `${сlass(theme)} ${сlassActive(theme)}` : `${сlass(theme)}`}
            >О нас</NavLink>
          </li>
          {/*<div class="header__theme">Тема...</div>*/}
        </ul>
      </nav>
    </header>
  )
}

export default Header;