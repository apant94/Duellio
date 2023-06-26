import './casesTag.css';
import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import iconCloseTag from '../../images/closeTag.svg';

const CasesTag = ({title, clickTag, status}) => {
  const theme = React.useContext(ThemeContext);

  return(
    <div
      className={status === title ? 'casestag casestag_active' : 'casestag'} onClick={clickTag}> 
      <p className={`casestag__text ${theme === 'day' ? '' : 'casestag__text_theme_dark'}`}>{title}</p>
      {status === title && <img alt="Убрать" src={iconCloseTag} className='casestag__icon' />}
    </div>
  )
}

export default CasesTag;