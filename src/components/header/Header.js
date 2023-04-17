import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './header.css';

const Header = ({changeTheme}) => {

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

  const themeButtonChange = () => {
    if (theme === 'day') {
      changeTheme('night')
    }
    else {
      changeTheme('day')
    }
  }

  return (
    <header className='header'>
      <NavLink to='/' className='header__title-link'><h1 className={theme === 'day' ? 'header__title' : 'header__title header__title_dark'}>Duellio</h1></NavLink>
      <nav>
        <ul className='header__menu-list'>
          <li className='header__link-item'>
            <NavLink to='/'
              className={({ isActive }) => isActive ? `${сlass(theme)} ${сlassActive(theme)}` : `${сlass(theme)}`}
            >Часы</NavLink>
          </li>
          <li className='header__link-item'>
            <NavLink to='/rules'
              className={({ isActive }) => isActive ? `${сlass(theme)} ${сlassActive(theme)}` : `${сlass(theme)}`}
            >Правила</NavLink>
          </li>
          <li className='header__link-item'>
            <NavLink to='/cases'
              className={({ isActive }) => isActive ? `${сlass(theme)} ${сlassActive(theme)}` : `${сlass(theme)}`}
            >База кейсов</NavLink>
          </li>
          <li>
            <button className={`header__btn ${theme === 'day' ? 'header__btn header__btn_image_moon' : 'header__btn_image_sun'}`} onClick={themeButtonChange}></button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;