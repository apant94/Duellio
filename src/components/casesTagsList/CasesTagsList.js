import './casesTagsList.css';
import iconClock from '../../images/clockTag.svg';
import moreClock from '../../images/moreTag.svg';
import CasesTag from '../casesTag/CasesTag';

const CasesTagsList = () => {
  const tags = ['Трудоустройство', 'Менеджмент', 'Семья', 'Продажи', 'Отношения', 'IT']; //список тэгов временно до появления бэка

  return(
    <div className='casestags'>
        <div className='casestags__element'> 
          <img alt="Часы" src={iconClock} className='casestags__clock-icon' />
          <p className='casestags__text'>4 min</p>
          <img alt="Убрать" src={moreClock} className='casestags__more-icon' />
        </div>
        <CasesTag title={tags[0]} />
        <CasesTag title={tags[1]} />
        <CasesTag title={tags[2]} />
        <CasesTag title={tags[3]} />
        <CasesTag title={tags[4]} />
        <CasesTag title={tags[5]} />
    </div>
  )
}

export default CasesTagsList;