import './casesTag.css';
import iconCloseTag from '../../images/closeTag.svg';

const CasesTag = ({title}) => {
  return(
    <div className='casestag'> 
      <p className='casestag__text'>{title}</p>
      {/* <img alt="Убрать" src={iconCloseTag} className='casestag__icon' /> */}
    </div>
  )
}

export default CasesTag;