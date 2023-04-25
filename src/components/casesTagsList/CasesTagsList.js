import './casesTagsList.css';
import React, { useState } from 'react'
import Select from 'react-select'
// import iconClock from '../../images/clockTag.svg';
import CasesTag from '../casesTag/CasesTag';

const CasesTagsList = () => {
  const options = [
    { value: 'classic', label: '4 min' },
    { value: 'express', label: '1 min' },
  ];
  const [chosenDuration, setChosenDuration] = useState('classic');

  const getValue = () => {
    return chosenDuration ? options.find(c => c.value === chosenDuration) : ''
  };

  const onChange = (newValue) => {
    setChosenDuration(newValue.value);
  }
  
  const tags = ['Трудоустройство', 'Менеджмент', 'Семья', 'Продажи', 'Отношения', 'IT']; //список тэгов временно до появления бэка

  return(
    <div className='casestags'>
        <Select 
          className="casestags-select__container"
          classNamePrefix='casestags-select'
          onChange={onChange} 
          value={getValue()} 
          options={options} 
        />
        {/* <select className='casestags__element'> 
          <img alt="Часы" src={iconClock} className='casestags__clock-icon' />
          <option className='casestags__text'>4 min</option>
          <option className='casestags__text'>1 min</option>
        </select> */}
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