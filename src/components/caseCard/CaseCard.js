import './caseCard.css';
import { useState } from 'react';
import iconUnwrap from '../../images/unwrap.svg';
import { Link } from 'react-router-dom';

const CaseCard = ({title, text}) => {
  const [hovered, setHovered] = useState(false); //стейт наведения мыши на кейс

  // const handleMouseOver = () => {
  //   setHovered(true);
  // }

  // const handleMouseOut = () => {
  //   setHovered(false);
  // }

  return(
    <Link 
      to='/casepage' 
      className='casecard'
    >
      <h3 className='casecard__title'>{title}</h3>
      <p className='casecard__text'>{text}</p>
      <div className='casecard__button'>
        <p className='casecard__button-text'>Подробнее</p>
        <img alt="Развернуть" src={iconUnwrap} className='casecard__button-icon' />
      </div>
    </Link>
  )
};

export default CaseCard;