import './casesTagsList.css';
import React, { useState } from 'react'
import Select from 'react-select'
import CasesTag from '../casesTag/CasesTag';

const CasesTagsList = () => {
  const options = [
    { value: 'classic', label: '4 min' },
    { value: 'express', label: '1 min' },
  ]; // стейт со значениями опций тега селект 
  const [chosenDuration, setChosenDuration] = useState('classic'); // стейт изначального значения тега селект

  // Функционал подтягивания значения инпута из тега селект с установкой его первичного состояния
  const getValue = () => {
    return chosenDuration ? options.find(c => c.value === chosenDuration) : ''
  };

  const onChange = (newValue) => {
    setChosenDuration(newValue.value);
  }

  // Список тэгов временно до появления бэка
  const tags = ['Трудоустройство', 'Менеджмент', 'Семья', 'Продажи', 'Отношения', 'IT']; 

  return(
    <div className='casestags'>
        <Select 
          className="casestags-select__container"
          classNamePrefix='casestags-select'
          onChange={onChange} 
          value={getValue()} 
          options={options} 
        />
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