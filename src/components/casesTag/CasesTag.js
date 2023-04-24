import './casesTag.css';
import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import iconCloseTag from '../../images/closeTag.svg';

const CasesTag = ({title}) => {
  const theme = React.useContext(ThemeContext);

  return(
    <div className='casestag'> 
      <p className={`casestag__text ${theme === 'day' ? '' : 'casestag__text_theme_dark'}`}>{title}</p>
      {/* <img alt="Убрать" src={iconCloseTag} className='casestag__icon' /> */}
    </div>
  )
}

export default CasesTag;