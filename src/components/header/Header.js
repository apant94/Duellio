import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './header.css';

const Header = ({ changeTheme }) => {
  const theme = React.useContext(ThemeContext);
  const [isActive, setActive] = useState(false);

  const сlass = (theme) => {
    if (theme === 'day') return 'header__link';
    else return 'header__link header__link_dark';
  };

  const сlassActive = (theme) => {
    if (theme === 'day') return 'header__link_active';
    else return 'header__link_active_dark';
  };

  const themeButtonChange = () => {
    if (theme === 'day') {
      changeTheme('night');
    } else {
      changeTheme('day');
    }
  };

  const toggleHamburgerClass = () => {
    setActive(!isActive);
  };

  const closeHamburger = () => {
    setActive(false);
  };

  return (
    <header className="header">
      <NavLink to="/" className="header__title-link">
        <h1
          className={
            theme === 'day'
              ? 'header__title'
              : 'header__title header__title_dark'
          }
        >
          Duellio
        </h1>
      </NavLink>
      <nav className="header__navtab">
        <ul className="header__menu-list">
          <li className="header__link-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${сlass(theme)} ${сlassActive(theme)}`
                  : `${сlass(theme)}`
              }
            >
              Часы
            </NavLink>
          </li>
          <li className="header__link-item">
            <NavLink
              to="/rules"
              className={({ isActive }) =>
                isActive
                  ? `${сlass(theme)} ${сlassActive(theme)}`
                  : `${сlass(theme)}`
              }
            >
              Правила
            </NavLink>
          </li>
          <li className="header__link-item">
            <NavLink
              to="/cases"
              className={({ isActive }) =>
                isActive
                  ? `${сlass(theme)} ${сlassActive(theme)}`
                  : `${сlass(theme)}`
              }
            >
              База кейсов
            </NavLink>
          </li>
          <li>
            <button
              className={`header__btn ${
                theme === 'day'
                  ? 'header__btn header__btn_image_moon'
                  : 'header__btn_image_sun'
              }`}
              onClick={themeButtonChange}
            ></button>
          </li>
        </ul>
      </nav>

      <nav className="navtab__hamburger">
        <button
          className={`header__btn ${
            theme === 'day'
              ? 'header__btn header__btn_image_moon'
              : 'header__btn_image_sun'
          }`}
          onClick={themeButtonChange}
        ></button>
        <div
          className={`navtab__hamburger-btn ${
            isActive ? 'navtab__hamburger-btn_active' : ''
          }`}
          onClick={toggleHamburgerClass}
        >
          <span className="navtab__hamburger-bar"></span>
          <span className="navtab__hamburger-bar"></span>
          <span className="navtab__hamburger-bar"></span>
        </div>
        <div
          className={`navtab__hamburger-nav ${
            isActive ? 'navtab__hamburger-nav_active' : ''
          }`}
        ></div>
        <ul
          className={`navtab__hamburger-list ${
            isActive ? 'navtab__hamburger-list_active' : ''
          }`}
        >
          <NavLink
            to="/"
            className="navtab__hamburger-item"
            onClick={closeHamburger}
          >
            Часы
          </NavLink>
          <NavLink
            to="/rules"
            className="navtab__hamburger-item"
            onClick={closeHamburger}
          >
            Правила
          </NavLink>
          <NavLink
            to="/cases"
            className="navtab__hamburger-item"
            onClick={closeHamburger}
          >
            База кейсов
          </NavLink>
          <div className="navtab__hamburger-wrapper">
            <NavLink
              to="/profile"
              className="navtab__hamburger-item"
              onClick={closeHamburger}
            ></NavLink>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
