import './caseCard.css';
import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import iconUnwrap from '../../images/unwrap.svg';

const CaseCard = ({title, text}) => {
  const theme = React.useContext(ThemeContext);

  return(
    <Link 
      to='/casepage' 
      className={`casecard ${theme === 'day' ? '' : 'casecard_theme_dark'}`}
    >
      <h2 className='casecard__title'>{title}</h2>
      <p className='casecard__text'>{text}</p>
      <div className='casecard__button'>
        <p className='casecard__button-text'>Подробнее</p>
        <img alt="Развернуть" src={iconUnwrap} className='casecard__button-icon' />
      </div>
    </Link>
  )
};

export default CaseCard;