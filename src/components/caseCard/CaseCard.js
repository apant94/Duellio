import './caseCard.css';
import iconUnwrap from '../../images/unwrap.svg';
import { Link } from 'react-router-dom';

const CaseCard = ({title, text}) => {
  return(
    <Link 
      to='/casepage' 
      className='casecard'
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