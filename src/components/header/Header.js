import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './header.css';

const Header = () => {

  const theme = React.useContext(ThemeContext);

  return (
    <header className='header'>
      <h1 className={theme === 'day' ? 'header__title' : 'header__title header__title_dark'}>Clock for negotiation club</h1>
    </header>
  )
}

export default Header;