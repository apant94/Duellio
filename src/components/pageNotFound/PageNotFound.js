import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './pageNotFound.css';

function PageNotFound () {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="not-found">
      <Link to='/' className={theme === 'day' ? 'not-found__link' : 'not-found__link not-found__link_dark'}>Перейти на главную</Link>
    </div>
  )
}

export default PageNotFound; 